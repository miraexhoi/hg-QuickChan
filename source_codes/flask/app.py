import sqlite3
from flask import Flask, jsonify
import crawling
import random

app = Flask(__name__)

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

    conn.commit()
    conn.close()

if __name__ == '__main__':
    initialize_db()


# SQLite 데이터베이스 연결 함수
def connect_db():
    conn = sqlite3.connect('booreung_database.db')
    conn.row_factory = sqlite3.Row
    return conn

# 연결 확인용
@app.route('/')
def render_page():
    return 'render_template('

@app.route('/web/')
def render_page_web():
    return 'render_template('

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

@app.route('/user/location/<location>')
def user_location(location):
    return 'Location: ' + location

if __name__ == '__main__':
     app.run(debug=True)
