import React from "react";
import "./CallTexi2.css";
import backImg from "../../../assets/images/back.svg";
import barImg from "../../../assets/images/bar.svg";
import blackDot from "../../../assets/images/blackDot.svg";
import blueDot from "../../../assets/images/bluDot.svg";

const CallTexi2 = () => {
  return (
    <div className="all">
      <div className="backImgArea">
        <img className="backImg" src={backImg} />
      </div>
      <div className="Texts">
        <div className="pageTitle">택시 호출</div>
        <div className="smallComment">
          시니어를 위해 간편하게 택시를 호출해줘요.
        </div>
      </div>
      <div className="popupBackground">
        <img src={barImg} className="barImg" />
        <div className="popupArea">

        <div className="inPopup">
          <div className="oneLine">
            <img src={blackDot} style={{marginRight:'0.6vw'}}/>현위치: 의성 빙계얼음수영장
          </div>
          <div className="search">
            <img src={blueDot} />
            <input placeholder="도착지 검색" className="inInput"></input>
          </div>
        </div>
          <div className="next">
            다음
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallTexi2;
