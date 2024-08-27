import React from 'react'
import * as S from "./Mypage.styled"
import backImg from '../../assets/images/back.svg'
import { useNavigate } from 'react-router-dom'
import myinfoImg from "../../assets/images/myInfo.svg"
import userProfileImg from "../../assets/images/userprofile.svg"

const Mypage = () => {
    const Navigate = useNavigate()
  return (
    <div className="all">
      <S.BackImgArea>
        <img className="backImg" src={backImg} onClick={() => Navigate(`/main`)} />
      </S.BackImgArea>
      <S.myinfoArea>
        <S.myinfo src={myinfoImg} />
      </S.myinfoArea>
      <div>
        <S.text>현재 관리중인 시니어 현황</S.text>
        <S.profileForm>
            <S.closerForm tabindex="0">
                <img src={userProfileImg} style={{width:'3.5vw'}}/>
                <S.line><S.name>권옥자</S.name>님</S.line>
            </S.closerForm>
        </S.profileForm>
      </div>
      <S.add>
        관리할 시니어 추가하기
      </S.add>
      <S.add onClick={()=>{Navigate(`/manage`)}}>
      선택한 시니어 정보 수정하기
      </S.add>
    </div>
  )
}
export default Mypage;