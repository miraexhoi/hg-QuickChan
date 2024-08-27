import styled from "styled-components";

export const All = styled.div`
      display: flex;
  flex-direction: column;
`;

export const BackImgArea = styled.div`
    width: 20vw;
    margin-top: 7vh;
`
export const BackImg = styled.img`
    width: 0.8vw;
`
export const myinfoArea = styled.div`
width: 20vw;
height: 10vh;
margin-top: 4vh;
`

export const myinfo = styled.img`
height: 8vh;
`
export const text = styled.div`
color: #8E98A8;
font-size: 14px;
margin-top: 2vh;
`
export const profileForm = styled.div`
width: 27vw;
height: 16vh;
border-radius: 20px;
box-shadow: 0 1px 10px rgba(0, 0, 0, 0.1);
display: flex;
align-items: center;
margin-top: 2vh;
`

export const closerForm = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 6vw;
height: 12vh;
border-radius: 15px;
margin-left: 1vw;
&:hover{
    cursor: pointer;
}
&:focus{
    background-color: #BED2FF;
}
`
export const line = styled.div`
display: flex;
margin-top: 1vh;
`
export const add = styled.div`
width: 27vw;
font-weight: bold;
    font-size: 20px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 6vh;
    background-color:#5589FE;
    border-radius: 16px;
    margin-top: 2vh;
    &:hover{
        cursor: pointer;
    }
`
export const name = styled.span`
font-size: 15px;
font-weight: bold;
`