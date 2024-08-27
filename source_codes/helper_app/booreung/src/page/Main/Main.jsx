import React from "react";
import * as S from "./Main.styled.js";
import logoImg from "../../assets/images/logo2.svg";
import userImg from "../../assets/images/user.svg";
import mappingImg from "../../assets/images/mapping.svg";
import underImg from "../../assets/images/under2.svg";
import whereImg from "../../assets/images/whereMap.svg";
import rightImg from "../../assets/images/right2.svg";
import backgroundImage1 from "../../assets/images/weather.svg";
import backgroundImage2 from "../../assets/images/texiCall.svg";
import userInfoImg from "../../assets/images/Userinfsvg.svg";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const Navigate = useNavigate()
  return (
    <S.All>
      <S.Contents>
        <S.Header>
          <S.Logo src={logoImg} />
          <S.User src={userImg} onClick={()=>{Navigate(`/mypage`)}} />
        </S.Header>
        <S.UserPlace>
          <img src={mappingImg} style={{ width: "1.3vw" }} />
          <S.UserPlaceTexts>
            <S.UserBtn className="userBtn">
              권옥자
              <img src={underImg} style={{ width: "0.7vw" }} />
            </S.UserBtn>
            님의 현재 위치예요!
          </S.UserPlaceTexts>
        </S.UserPlace>
        <img src={whereImg} style={{ width: "21vw" }} />
        <S.TodaysNews onClick={() => Navigate(`/news`)}>
          <div style={{ fontWeight: "600" }}>
            <S.NewsPoint>의성군의</S.NewsPoint>{" "}
            <S.NewsPoint style={{ textDecoration: "underline" }}>
              오늘의 소식
            </S.NewsPoint>{" "}
            확인하러 가기
          </div>
          <img src={rightImg} style={{ width: "0.6vw" }} />
        </S.TodaysNews>
        <S.TwoCompo>
          <S.InOne src={backgroundImage1} />
          <S.InOne src={backgroundImage2} onClick={() => Navigate(`/calltexi1`)} />
        </S.TwoCompo>
        <S.ManageForm>
          <S.Manage>현재 관리중인 시니어</S.Manage>
          <S.UserInfo>
            <img
              src={userInfoImg}
              style={{ marginLeft: "1.5vw", marginTop: "1.5vh", width: "5vw" }}
            />
            <div>
              <S.InfoPoint>건강정보</S.InfoPoint>
              <br />
              <div style={{marginLeft:'1.5vw'}}>155cm, 55kg, A형, 천식</div>
            </div>
            <div>
              <S.InfoPoint>자주 가는 장소</S.InfoPoint>
              <br />
              <div style={{marginLeft:'1.5vw'}}>경로당, 우리집, 옥순이네</div>
            </div>
          </S.UserInfo>
        </S.ManageForm>
      </S.Contents>
    </S.All>
  );
};

export default Main;
