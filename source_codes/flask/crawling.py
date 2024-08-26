import requests
from bs4 import BeautifulSoup

ac_url = 'https://search.naver.com/search.naver?where=news&ie=utf8&sm=nws_hty&query=%EC%9D%98%EC%84%B1'
loc = '경북 의성군 가음면 빙계계곡길 51'
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


#loc_to_latdon(loc)