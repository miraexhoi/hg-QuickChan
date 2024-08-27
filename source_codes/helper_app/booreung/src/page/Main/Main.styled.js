import styled from "styled-components";

export const All = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #F9FAFC;
  height: 100%;
`;

export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20vw;
`;

export const Header = styled.div`
  /* background-color: red; */
  width: 20vw;
  height: 13vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.img`
  width: 3vw;
`;

export const User = styled.img`
  width: 2.5vw;
`;

export const UserBtn = styled.button`
  width: 5.5vw;
  height: 3.5vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  background-color: #5589fe;
  font-size: 14.5px;
  font-weight: bold;
  border-radius: 15px;
  border: none;
  margin-top: 0;
  padding: 1vw;
`
export const UserPlace = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 19vw;
`;

export const UserPlaceTexts = styled.div`
display: flex;
align-items: center;
width: 14vw;
justify-content: space-around;
font-size :15px;
font-weight: 600;
margin-left: 0.5vw;
`

export const WhereMap = styled.img`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 19vw;
`;

export const TodaysNews = styled.div`
width: 100%;
height: 6vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: white;
  border-radius: 12px;
  margin-top: 1.3vh;
  &:hover{
    cursor: pointer;
  }
`;

export const NewsPoint = styled.span`
  color: #5589FE;
  font-weight: 800;
`;

export const TwoCompo = styled.div`
width: 100%;
height: 17vh;
margin-top: 1.3vh;
display: flex;
justify-content:space-between;
`;

export const InOne = styled.img`
height: 100%;
border-radius: 24px;
&:hover{
    cursor: pointer;
}
`;

export const UserInfo = styled.div`
width: 100%;
height: 26vh;
box-shadow: 0 1px 10px rgba(0, 0, 0, 0.1);
border-radius: 20px;
margin-top: 1.3vh;
`;

export const Manage = styled.div`
font-weight: bold;
font-size: 14px;
color: #8E98A8;
`;
export const ManageForm = styled.div`
width: 100%;
margin-top: 1.3vh;
`;
export const InfoPoint = styled.span`
color: #5488FD;
font-size: 16px;
font-weight: 600;
margin-left:1.5vw
`;