import React from 'react'
import './News.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import backImg from '../../assets/img/back.svg'
import newsData from './newsData.json';

const News = () => {
  const [newsData, setNewsData] = useState([]);  // 뉴스 데이터를 저장하는 상태
  const [page, setPage] = useState(1);  // 현재 페이지를 추적하는 상태
  const [loading, setLoading] = useState(false);  // 로딩 상태를 관리하는 상태
  const [hasMore, setHasMore] = useState(true);  // 추가 데이터를 불러올 수 있는지 추적

  useEffect(() => {
    fetchMoreNews();  // 컴포넌트가 처음 렌더링될 때 데이터를 가져옴
    window.addEventListener('scroll', handleScroll);  // 스크롤 이벤트 리스너 추가

    return () => window.removeEventListener('scroll', handleScroll);  // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
  }, []);

  const fetchMoreNews = async () => {
    if (loading || !hasMore) return;  // 이미 로딩 중이거나 더 이상 불러올 데이터가 없으면 종료

    setLoading(true);
    try {
      const response = await axios.get(`https://api.example.com/news?page=${page}`);
      const newNewsData = response.data;

      setNewsData(prevNewsData => [...prevNewsData, ...newNewsData]);
      setPage(prevPage => prevPage + 1);

      if (newNewsData.length === 0) {  // 추가 데이터가 없으면 hasMore를 false로 설정
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error fetching news data:", error);
    }
    setLoading(false);
  };

  const handleScroll = () => {
    // 스크롤 위치와 창 높이, 문서 전체 높이를 비교하여 하단에 도달했는지 확인
    if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
      fetchMoreNews();
    }
  };

  return (
    <div>
      <div>
        <img className='backImg' src={backImg} />
      </div>
      <div>
        <div>오늘의 소식</div>
        <div>의성군의 정책 및 소식을 확인해 보아요.</div>
      </div>
      <div>
        <div>추천</div>
        <div>생활</div>
        <div>날씨</div>
        <div>부동산</div>
        <div>농사</div>
      </div>
      <div>
        <div key={item.id}>
          <h2>{item.title}</h2>
          <img src={item.image} alt={item.title} />
          <p>{item.source}</p>
        </div>
      </div>
      {loading && <p>Loading...</p>}  {/* 데이터 로딩 중일 때 표시 */}
      {!hasMore && <p>No more news to load</p>}  {/* 더 이상 불러올 데이터가 없을 때 표시 */}
    </div>
  )
}

export default News;