import React from "react";
import "./CallTexi1.css";
import backImg from '../../../assets/images/back.svg'
import underImg from '../../../assets/images/under.svg';

const CallTexi1 = () => {
  return (
    <div className="all">
      <div className="backImgArea">
        <img className="backImg" src={backImg} />
      </div>
      <div className="aroundTexts">
        <div className="pageTitle">택시 호출</div>
        <div className="smallComment">
          시니어를 위해 간편하게 택시를 호출해줘요.
        </div>
        <div className="person">
          <img src={underImg} /> 권순옥 님
        </div>
        <div className="aroundBtn">
        <div className="placeBtn">
            어디로 갈까요?
        </div>
        </div>
      </div>
    </div>
  );
};

export default CallTexi1;
