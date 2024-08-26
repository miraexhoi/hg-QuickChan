import requests
from bs4 import BeautifulSoup

ac_url = 'https://search.naver.com/search.naver?where=news&ie=utf8&sm=nws_hty&query=%EC%9D%98%EC%84%B1'
def ac_parser(link):
    headers = {'User-Agent' : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36'}
    data = requests.get(link + 'list#none', headers=headers)
    soup = BeautifulSoup(data.text, 'html.parser')
    get_list = list()

    for i in range(1, 10):
        title = soup.select_one(f'#sp_nws{i} > div.news_wrap.api_ani_send > div > div.news_contents > a.news_tit')
        get_list.append(title.get_text())

    return get_list