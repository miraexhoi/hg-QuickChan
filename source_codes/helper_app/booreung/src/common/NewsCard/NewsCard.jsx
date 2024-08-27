// import React from "react";
// import "./NewsCard.css";
// import axios from "axios";
// import CONFIG from "../../config/config.json";
// import { useNavigate } from "react-router-dom";

// const NewsCard = ({ title, image, source }) => {
//   const navigate = useNavigate();
//   const news = async () => {
//     const response = await axios.get(`${CONFIG.serverUrl}/news`, {
//       title,
//       body,
//       url,
//     });
//     return response;
//   };
//   return (
//     <div onClick={navigate(url)} className="background">
//       <div className="texts">
//         <div className="title">{response.title}</div>
//         <div className="body">{response.body}</div>
//         <div className="source">출처 : {source}</div>
//       </div>
//       <img className="newsImg" src={image} alt={title} />
//     </div>
//   );
// };

// export default NewsCard;
