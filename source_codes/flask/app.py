import os
import sqlite3
from flask import Flask, request, jsonify, send_from_directory
import crawling
import random

app = Flask(__name__, static_folder='web')



# 뉴스기사 URL
ac_url = 'https://search.naver.com/search.naver?where=news&query=%EC%9D%98%EC%84%B1&sm=tab_opt&sort=1&photo=0&field=0&pd=0&ds=&de=&docid=&related=0&mynews=0&office_type=0&office_section_code=0&news_office_checked=&nso=so%3Add%2Cp%3Aall&is_sug_officeid=0&office_category=0&service_area=0'
ht_url = 'https://search.naver.com/search.naver?where=news&query=%EA%B1%B4%EA%B0%95&sm=tab_opt&sort=1&photo=0&field=0&pd=0&ds=&de=&docid=&related=0&mynews=0&office_type=0&office_section_code=0&news_office_checked=&nso=so%3Add%2Cp%3Aall&is_sug_officeid=0&office_category=0&service_area=0'


# 택시 정보
texi_num = ['054-833-8000', '054-833-7876', '054-832-2687', '054-833-1577', '054-833-7003', '054-834-9090', '054-861-0807', '054-862-9090', '010-3538-4302', '054-833-1313']

def initialize_db():
    conn = sqlite3.connect('booreung_database.db')
    cursor = conn.cursor()

    cursor.execute('''
    CREATE TABLE IF NOT EXISTS "시니어 정보" (
        "유저 고유번호" TEXT PRIMARY KEY,
        "유저 이름" TEXT,
        "혈액형" TEXT,
        "개인 질환" TEXT,
        "위치 정보" TEXT
    )
    ''')

    cursor.execute('''
    CREATE TABLE IF NOT EXISTS "보호자 정보" (
        "보호자 ID" INTEGER PRIMARY KEY AUTOINCREMENT,
        "이름" TEXT NOT NULL,
        "이메일" TEXT NOT NULL UNIQUE,
        "비밀번호" TEXT NOT NULL,
        "전화번호" TEXT NOT NULL,
        "관리중인 시니어" TEXT,
        FOREIGN KEY("관리중인 시니어") REFERENCES "시니어 정보"("유저 고유번호")
    )
    ''')

    cursor.execute('''
    CREATE TABLE IF NOT EXISTS "시니어 연락처 정보" (
        "연락처 ID" INTEGER PRIMARY KEY AUTOINCREMENT,
        "유저 고유번호" TEXT NOT NULL,
        "이름" TEXT NOT NULL,
        "전화번호" TEXT NOT NULL,
        FOREIGN KEY("유저 고유번호") REFERENCES "시니어 정보"("유저 고유번호")
    );
    ''')

    conn.commit()
    conn.close()

# SQLite 데이터베이스 연결 함수
def connect_db():
    conn = sqlite3.connect('booreung_database.db')
    conn.row_factory = sqlite3.Row
    return conn

# 연결 확인용
@app.route('/')
def render_page():
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/web/')
def render_page_web():
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/num')
def num():
    return '10'

@app.route('/news')
def news():
    global ac_url
    return jsonify(crawling.ac_parser(ac_url))

@app.route('/health')
def health():
    global ht_url
    return jsonify(crawling.ac_parser(ht_url))

@app.route('/call/texi')
def texi():
    r = random.randint(0, 9)
    return texi_num[r]

# SQLite에서 데이터를 가져오는 API 예시
@app.route('/get_data')
def get_data():
    conn = connect_db()
    cursor = conn.cursor()

    # 테이블에서 데이터를 가져오는 쿼리 예시
    cursor.execute('SELECT * FROM "보호자 정보"')
    rows = cursor.fetchall()

    # 데이터를 파이썬 자료형으로 변환
    result = []
    for row in rows:
        result.append(dict(row))  # Row 객체를 딕셔너리로 변환

    conn.close()
    return jsonify(result)

# 고유 번호를 저장하는 API
@app.route('/senior/save/signitureNum', methods=['POST'])
def save_user():
    data = request.json
    user_id = data.get('유저 고유번호')

    # 필수 정보가 누락되었는지 확인
    if not user_id:
        return jsonify({"error": "유저 고유번호는 필수입니다."}), 400

    # 선택적 필드들 (입력되지 않으면 기본값은 None)
    user_name = data.get('유저 이름', None)
    blood_type = data.get('혈액형', None)
    disease = data.get('개인 질환', None)
    location = data.get('위치 정보', None)

    try:
        conn = connect_db()
        cursor = conn.cursor()

        # '시니어 정보' 테이블에 데이터 삽입
        cursor.execute('''
                    INSERT INTO "시니어 정보" ("유저 고유번호", "유저 이름", "혈액형", "개인 질환", "위치 정보")
                    VALUES (?, ?, ?, ?, ?)
                ''', (user_id, user_name, blood_type, disease, location))

        conn.commit()
        conn.close()

        return jsonify({"message": "유저 정보가 성공적으로 저장되었습니다."}), 201

    except sqlite3.IntegrityError:
        return jsonify({"error": "해당 유저 고유번호가 이미 존재합니다."}), 409

    except Exception as e:
        return jsonify({"error": str(e)}), 500

# 연락처 정보를 저장하는 API
@app.route('/senior/save/contacts', methods=['POST'])
def save_contact():
    data = request.json
    user_id = data.get('유저 고유번호')  # 시니어 고유번호
    name = data.get('이름')  # 자주 연락할 사람 이름
    phone_number = data.get('전화번호')  # 자주 연락할 사람 전화번호

    # 필수 정보가 누락되었는지 확인
    if not user_id or not name or not phone_number:
        return jsonify({"error": "유저 고유번호, 이름, 전화번호는 필수입니다."}), 400

    try:
        conn = connect_db()
        cursor = conn.cursor()

        # '시니어 연락처 정보' 테이블에 데이터 삽입
        cursor.execute('''
            INSERT INTO "시니어 연락처 정보" ("유저 고유번호", "이름", "전화번호")
            VALUES (?, ?, ?)
        ''', (user_id, name, phone_number))

        conn.commit()
        conn.close()

        return jsonify({"message": "연락처 정보가 성공적으로 저장되었습니다."}), 201

    except Exception as e:
        return jsonify({"error": str(e)}), 500

# 특정 시니어의 모든 연락처 정보를 가져오는 API
@app.route('/senior/contactAll/<user_id>', methods=['GET'])
def get_contacts(user_id):
    try:
        conn = connect_db()
        cursor = conn.cursor()

        # 특정 시니어의 연락처 정보를 가져오는 쿼리
        cursor.execute('''
            SELECT * FROM "시니어 연락처 정보" WHERE "유저 고유번호" = ?
        ''', (user_id,))

        rows = cursor.fetchall()

        # 데이터를 파이썬 자료형으로 변환
        result = []
        for row in rows:
            result.append(dict(row))  # Row 객체를 딕셔너리로 변환

        conn.close()

        return jsonify(result), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.route('/user/location/<location>')
def user_location(location):
    return 'Location: ' + location

@app.route('/user/location/arrive/<location>')
def user_arrive_location(location):
    lat, don = crawling.loc_to_latdon(location)
    return '1'

@app.route('/user/map/<lat>/<don>')
def bus(num):
    lat, don = crawling.loc_to_latdon(location)
    return '15'

@app.route('/<path:path>')
def serve_static_files(path):
    return send_from_directory(app.static_folder, path)


if __name__ == '__main__':
    initialize_db()
    port = int(os.environ.get('PORT', 80))  # 기본 포트를 80으로 설정
    app.run(host='0.0.0.0', port=port, debug=True)
