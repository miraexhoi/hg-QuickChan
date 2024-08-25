import React from "react";
import newsData from "./newsData.json";

const NewsCard = ({ title, image, source }) => {
  return (
    <div>
      <h2>{title}</h2>
      <img src={image} alt={title} />
      <p>출처 : {source}</p>
    </div>
  );
};

export default NewsCard;
