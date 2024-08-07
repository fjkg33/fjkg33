import React from 'react';
import './Mypage.css'; 
import { useNavigate } from 'react-router-dom';

const MyPage = () => {
const navigate = useNavigate();
const GotoMainpage = () =>{navigate('/')};
const GotoEditMyInfo = ()=>{navigate('/Mypage/editMyInfo')};
const GotoEditWishlist = ()=>{navigate('/Mypage/Wishlist')};
const GotoEditWithdraw = ()=>{navigate('/Mypage/Withdraw')};
const GotoEditFunding_payment_details = ()=>{navigate('/Mypage/Funding_payment_details')};
  return (
      <main className="main-content">
        <h1 onClick={GotoMainpage}>MEONG-GORITHM</h1>
        <h2>MY PAGE</h2>
        <div className="options">
          <div className="option">
            <img src="/Mypage_img/funding.png" />
            <p onClick={GotoEditFunding_payment_details}>펀딩 내역</p>
          </div>
          <div className="option">
          <img src="/Mypage_img/good.png" />
            <p onClick={GotoEditWishlist}>내 찜 목록</p>
          </div>
          <div className="option">
          <img src="/Mypage_img/myimg.png" />
            <p onClick={GotoEditMyInfo}>회원 정보 수정</p>
          </div>
        </div>
        <div className="actions">
          <button className="logout-btn">로그아웃</button>
          <button className="quit-btn"
          onClick={GotoEditWithdraw}>탈퇴하기</button>
        </div>
      </main>
  );
};

export default MyPage;