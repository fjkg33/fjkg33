import React from 'react';
import './Mypage.css'; 
import { useNavigate } from 'react-router-dom';

const MyPage = () => {
const navigate = useNavigate();
const GotoEditMyInfo = ()=>{navigate('/Mypage/editMyInfo')};
  return (
      <main className="main-content">
        <h1>MEONG-GORITHM</h1>
        <h2>MY PAGE</h2>
        <div className="options">
          <div className="option">
            <img src="/Mypage_img/funding.png" />
            <p>펀딩 내역</p>
          </div>
          <div className="option">
          <img src="/Mypage_img/good.png" />
            <p>내 찜 목록</p>
          </div>
          <div className="option">
          <img src="/Mypage_img/myimg.png" />
            <p onClick={GotoEditMyInfo}>회원 정보 수정</p>
          </div>
        </div>
        <div className="actions">
          <button className="logout-btn">로그아웃</button>
          <button className="quit-btn">탈퇴하기</button>
        </div>
      </main>
  );
};

export default MyPage;