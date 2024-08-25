import React from "react";
import "./NewsCard.css";

const NewsCard = ({ title, image, source }) => {
  return (
    <div className="background">
      <div className="texts">
        <div className="title">{title}</div>
        <div className="source">출처 : {source}</div>
      </div>
      <img className="newsImg" src={image} alt={title} />
    </div>
  );
};

export default NewsCard;
