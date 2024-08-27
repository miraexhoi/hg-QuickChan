import requests
import asyncio
from pyppeteer import launch
from bs4 import BeautifulSoup
ac_url = 'https://search.naver.com/search.naver?where=news&ie=utf8&sm=nws_hty&query=%EC%9D%98%EC%84%B1'
loc = '경북 의성군 가음면 빙계계곡길 51'


departure = '출발지'
departure_lat = '128.750551510'
departure_don = '36.227984170'

arrive = '도착지'
arrive_lat = '128.585173'
arrive_don = '36.302859'


n_map = f'https://map.naver.com/p/directions/{departure_lat},{departure_don},{departure},,ADDRESS_POI/{arrive_lat},{arrive_don},{arrive},,ADDRESS_POI/-/transit/0?c=5.00,0,0,0,dh'


def ac_parser(link):
    headers = {'User-Agent' : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36'}
    data = requests.get(link + 'list#none', headers=headers)
    soup = BeautifulSoup(data.text, 'html.parser')
    get_list = list()

    for i in range(1, 10):
        title = soup.select_one(f'#sp_nws{i} > div.news_wrap.api_ani_send > div > div.news_contents > a.news_tit')
        get_list.append(title.get_text())

    return get_list

def loc_to_latdon(loc_ti):
    apiurl = "https://api.vworld.kr/req/address?"
    params = {
        "service": "address",
        "request": "getcoord",
        "crs": "epsg:4326",
        "address": loc_ti,
        "format": "json",
        "type": "road",
        "key": "4B7E415B-F6FA-337F-9975-36EC5A643DBF"  # API 키를 환경 변수로 관리하는 것이 좋습니다.
    }
    response = requests.get(apiurl, params=params)
    if response.status_code == 200:
        result = response.json().get('response', {}).get('result', {})
        if result:
            point = result.get('point', {})
            if point:
                # x와 y 좌표를 따로 변수로 추출
                x_coord = point.get('x')
                y_coord = point.get('y')
                print(f"Latitude (y): {y_coord}, Longitude (x): {x_coord}")
                return x_coord, y_coord
            else:
                print("Point information not found.")
        else:
            print("No result found in the response.")
    else:
        print(f"API request failed with status code: {response.status_code}")


def fetch_page_content(url):
    # Session 객체 생성
    with requests.Session() as session:
        # 기본 설정을 공유할 수 있음 (예: 헤더, 쿠키)
        session.headers.update({'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36'})

        # URL로 HTTP GET 요청을 보냄
        response = session.get(url)

        # 응답이 성공적이지 않으면 예외를 발생시킴
        response.raise_for_status()

        # 페이지의 HTML 콘텐츠를 가져옴
        html_content = response.text

        # BeautifulSoup으로 HTML 파싱
        soup = BeautifulSoup(html_content, 'html.parser')

        # 예시 CSS 선택자 사용
        elements = soup.select('#tab_pubtrans_directions > ul:nth-child(2) > li.sc-1tj2a62.EeMOl.is_selected > div > ol.list_pubtrans_directions_step.city')
        print(elements)

        # 결과 출력
        for element in elements:
            print(element.text)

#loc_to_latdon(loc)