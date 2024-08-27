// import React, { useState, useEffect, useCallback } from "react";
// import './News.css';
// // import axios from 'axios';
// import backImg from "../../assets/images/back.svg";
// import NewsCard from "../../common/NewsCard/NewsCard";
// import CONFIG from '../../config/config.json'
// import { useNavigate } from "react-router-dom";


// const News = () => {
//   const Navigate = useNavigate()

//   return (
//     <div className="all">
//       <div className="backImgArea">
//         <img className="backImg" src={backImg} onClick={() => Navigate(`/main`)} />
//       </div>
//       <div className="Texts">
//         <div className="todayNews">오늘의 소식</div>
//         <div className="newsContent">
//           의성군의 정책 및 소식을 확인해 보아요.
//         </div>
//       </div>
//       <div className="category">
//         <div className="cateBtn" tabindex="0">
//           추천
//         </div>
//         <div className="cateBtn" tabindex="0">
//           생활
//         </div>
//         <div className="cateBtn" tabindex="0">
//           날씨
//         </div>
//         <div className="cateBtn" tabindex="0">
//           부동산
//         </div>
//         <div className="cateBtn" tabindex="0">
//           농사
//         </div>
//       </div>
//       <div className="newsArea">
//         {newsDataState.map((item) => (
//           <NewsCard
//             key={item.id}
//             title={item.title}
//             image={item.image}
//             source={item.source}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default News;
