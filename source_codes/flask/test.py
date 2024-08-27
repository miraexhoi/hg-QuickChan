from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from webdriver_manager.chrome import ChromeDriverManager
import time

def fetch_page_content():
    chrome_options = Options()
    #chrome_options.add_argument('--headless')  # 헤드리스 모드
    chrome_options.add_argument('--no-sandbox')
    chrome_options.add_argument('--disable-dev-shm-usage')

    # ChromeDriverManager를 사용하여 ChromeDriver의 경로를 자동으로 설정
    service = Service(ChromeDriverManager().install())
    driver = webdriver.Chrome(service=service, options=chrome_options)

    try:
        # 네이버 지도 웹사이트 열기
        driver.get("https://map.naver.com/p/directions/14326794.475744,4349286.6350886,%EA%B2%BD%EB%B6%81%20%EC%9D%98%EC%84%B1%EA%B5%B0%20%EC%9D%98%EC%84%B1%EC%9D%8D%20%EA%B5%B0%EC%B2%AD%EA%B8%B8%2057,,ADDRESS_POI/14326092.9821496,4349420.3806474,%EA%B2%BD%EB%B6%81%20%EC%9D%98%EC%84%B1%EA%B5%B0%20%EB%AC%B8%EC%86%8C3%EA%B8%B8%2089,,SIMPLE_POI/-/transit?c=15.00,0,0,0,dh")

        # 페이지 로딩 대기 (적절한 시간 조정 필요)
        WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.ID, "search-input"))
        )

        # 검색창에 출발지 입력
        search_box = driver.find_element(By.ID, "search-input")
        search_box.send_keys("출발지")
        search_box.send_keys("\n")

        # 검색 결과가 로드될 때까지 대기
        WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.CLASS_NAME, "search_result"))
        )

        # 목적지 입력
        search_box.clear()
        search_box.send_keys("목적지")
        search_box.send_keys("\n")

        # 검색 결과가 로드될 때까지 대기
        WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.CLASS_NAME, "search_result"))
        )

        # 길찾기 버튼 클릭 (버튼의 정확한 XPATH 또는 선택자 확인 필요)
        # 이 부분은 웹 페이지의 현재 구조에 맞게 조정 필요
        route_button = driver.find_element(By.XPATH, '//*[@id="app-root"]/div/div[2]/div[3]/div[1]/div[1]/button')
        route_button.click()

        # 길찾기 결과가 로드될 때까지 대기
        time.sleep(10)  # 페이지에 따라 적절한 대기 시간 조정

        # 페이지 내용 가져오기
        page_source = driver.page_source
        print(page_source)  # 또는 BeautifulSoup을 사용하여 파싱할 수 있음
        # soup = BeautifulSoup(page_source, 'html.parser')
        # print(soup.prettify())

    finally:
        driver.quit()

# 함수 호출
fetch_page_content()