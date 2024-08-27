import React from "react";
import "./CallTexi3.css";
import backImg from "../../../assets/images/back.svg";
import blueDot from "../../../assets/images/bluDot.svg";
import goImg from "../../../assets/images/go.svg";
import barImg from "../../../assets/images/bar.svg";
import underImg from "../../../assets/images/under2.svg";
import { useNavigate } from "react-router-dom";

const CallTexi3 = () => {
  const Navigate = useNavigate();
  return (
    <div className="all">
      <div className="backImgArea">
        <img
          className="backImg"
          src={backImg}
          onClick={() => Navigate(`/calltexi2`)}
        />
      </div>
      <div className="Texts">
        <div className="pageTitle">택시 호출</div>
        <div className="smallComment">
          시니어를 위해 간편하게 택시를 호출해줘요.
        </div>
      </div>
      <div className="mapBackground">
        <img src={barImg} className="barImg" />
        <div className="formOnPopup">
          <div className="toFrom">
            <img src={blueDot} />
            <div>빙계얼음수영장</div>
            <img src={goImg} className="goImg" />
            <div>의성 군청</div>
          </div>
          <div className="textsArea">
            <div className="contentsArea">
              <div>
                <div className="rideUser">
                  <button className="userBtn">
                    권옥자
                    <img src={underImg} />
                  </button>
                  <span style={{ fontWeight: "bold", marginLeft: "0.5vw" }}>
                    님 탑승
                  </span>
                </div>
                <div className="priceTexts">
                  결제 방법:<span className="pricePoint"> 만나서 결제</span>
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <div style={{ fontWeight: "600", marginTop: "1vh" }}>
                  예상 요금{" "}
                  <span style={{ fontWeight: "700", fontSize: "24px" }}>
                    27,900원
                  </span>
                </div>
              </div>
              <div
                className="call"
                onClick={() => Navigate(`/calltexisuccess`)}
              >
                호출
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallTexi3;
