import React from "react";
import "./CallTexiL.css";
import backImg from "../../../assets/images/back.svg";
import carImg from "../../../assets/images/car.svg";

const CallTexiL = () => {
  return (
    <div className="all">
      <div className="backImgArea">
        <img className="backImg" src={backImg} />
      </div>
      <div className="form">
        <div className="contents">
          <img src={carImg} className="carImg" />
          <div className="imfo">
            <span className="point">택시 호출</span>이 성공적으로
          </div>
          <div className="imfo">
            <span className="point">완료</span>되었습니다!
          </div>
          <div className="more">시니어 위치 보러가기</div>
        </div>
      </div>
    </div>
  );
};
export default CallTexiL;
