import React from 'react';
import * as S from './ManageTel.styled';
import backImg from '../../assets/images/back.svg';
import { useNavigate } from 'react-router-dom';


const ManageTel = () => {
  const Navigate = useNavigate();
  return (
    <div className="all">
      <S.BackImgArea>
        <img className="backImg" src={backImg} onClick={() => Navigate(`/main`)} />
      </S.BackImgArea>
      </div>
  )
}
export default ManageTel;