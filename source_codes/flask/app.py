from flask import Flask, jsonify
import crawling
import random
from flask import render_template

app = Flask(__name__, static_folder='static')


#뉴스기사 URL
ac_url = 'https://search.naver.com/search.naver?where=news&query=%EC%9D%98%EC%84%B1&sm=tab_opt&sort=1&photo=0&field=0&pd=0&ds=&de=&docid=&related=0&mynews=0&office_type=0&office_section_code=0&news_office_checked=&nso=so%3Add%2Cp%3Aall&is_sug_officeid=0&office_category=0&service_area=0'
ht_url = 'https://search.naver.com/search.naver?where=news&query=%EA%B1%B4%EA%B0%95&sm=tab_opt&sort=1&photo=0&field=0&pd=0&ds=&de=&docid=&related=0&mynews=0&office_type=0&office_section_code=0&news_office_checked=&nso=so%3Add%2Cp%3Aall&is_sug_officeid=0&office_category=0&service_area=0'

#택시 정보
texi_num = ['054-833-8000', '054-833-7876', '054-832-2687', '054-833-1577', '054-833-7003', '054-834-9090', '054-861-0807', '054-862-9090', '010-3538-4302', '054-833-1313']

#연결 확인용
@app.route('/')
def render_page():
    return render_template('telPage.html')

@app.route('/web/')
def render_page_web():
    return render_template('telPage.html')

#호출할 공지 갯수 설정
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

@app.route('/user/location/<location>')
def user_location(location):
    return 'fuck'

if __name__ == '__main__':
    app.run()