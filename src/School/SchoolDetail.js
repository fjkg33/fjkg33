import React, { useState, useEffect } from "react";
import './SchoolDetail.css';
import { useNavigate } from 'react-router-dom';
import { Routes, Route, Link } from 'react-router-dom';
import schoolMockup from "./SchoolMockup.js";
import { useParams } from "react-router-dom";
import axios from "axios";


function SchoolDetail(){
    const navigate = useNavigate();
    const GotoMainpage = () =>{navigate('/')};
    const {schoolnum} = useParams();
    console.log("schoolnum:", schoolnum)
    const [content, setContent] =useState(null);
    useEffect(() => {
        //const result = schoolMockup.find((data)=>data.id == schoolnum)
        console.log("DetailPageStart")
        const myRun = async ()=>{
            try{
                const response = await axios.get(`http://localhost:5000/school/${schoolnum}`)
                console.log("response:", response)
                setContent(response.data[0])
                //console.log("content:", content.writer)
              }catch(error){
                console.error("Error fetching school:", error);
              }
        }
        myRun();
        //setContent(result) 
    },[schoolnum]);

    if (!content) {
        return <div>개설된 스쿨이 없습니다</div>;
      }

    const { schoolname, writer, schoolPrice, 
        schoolImageURL, schoolSub1ImageURL,schoolSub2ImageURL,schoolSub3ImageURL,
        schoolInfo,personnelStatus,personnelMinStatus, personnelMaxStatus,
        moneyState, startDate, endDate} = content;
    const imgURL_schoolImageURL = `http://localhost:5000/${schoolImageURL}`;
    const imgURL_schoolSub1ImageURL = `http://localhost:5000/${schoolSub1ImageURL}`;
    const imgURL_schoolSub2ImageURL = `http://localhost:5000/${schoolSub2ImageURL}`;
    const imgURL_schoolSub3ImageURL = `http://localhost:5000/${schoolSub3ImageURL}`;
    console.log("imgURL_schoolImageURL:",imgURL_schoolImageURL)

    return(
        <div>
            <header className="scm-title" onClick={GotoMainpage}>MEONG-GORITHM</header>
            <div className="local-search-container">
                <input type="search" className="local-search" placeholder="지역 검색하기.." />
                <img src={imgURL_schoolImageURL} alt="돋보기아이콘" className="scm-searchbtn"></img>
            </div>
            <hr/>

            <div className="school_funding_page">
            <h1>{schoolname}</h1>
            <div className="school_config">
                <div className="school_funding">
                    <img className="left_photo" src = {imgURL_schoolImageURL} alt={imgURL_schoolImageURL}></img>
                    <img className="school_img" src = {imgURL_schoolSub1ImageURL} alt="홍보팜플렛1"></img>
                    <img className="school_img" src = {imgURL_schoolSub2ImageURL} alt="홍보팜플렛2"></img>
                    <img className="school_img" src = {imgURL_schoolSub3ImageURL} alt="홍보팜플렛3"></img>
                </div>
                <div className="order_container">
                    <p className="p_right">{startDate} ~ {endDate}</p>
                    <p className="p_left">펀딩인원</p>
                    <p className="p_right">{personnelStatus}</p>
                    <p className="p_left">목표인원</p>
                    <p className="p_right">{personnelMinStatus} ~ {personnelMaxStatus}</p>
                    <p className="p_left">상품 상태</p>
                    <p className="p_right">{moneyState}</p>
                    <p className="like_buy">
                        <button className="school_like"><p>❤️</p><p>{content.like}</p></button>
                        <span className="school_btn_size"><button className="school_btn">예약 구매하기</button></span>
                    </p>
                    <p className="school_company">회사명: {writer}</p>
                </div>
            </div>
        </div>
            {/* 
            


            <footer className="footer">
                <div className="footer-text first">
                    <p>환불규정</p>
                    <p><br/>이 상품에 대한 환불은 어쩌구저쩌구 처리해서 이렇게 저렇게 할 거고 
                        <br/>그 다음엔 요로케 저러케  할 예정입니다</p>
                </div>
                <div className="footer-text second">
                    <p>서비스 이용약관<br/>
                        마이데이터 서비스 이용약관<br/>
                        개인정보 처리방침<br/>
                        가맹점 고지사항<br/>
                        위치기반서비스 이용약관</p>
                </div>
                <div className="footer-text">
                    <h3>Follow us</h3>
                    <img src={process.env.PUBLIC_URL + './insta.png'} className="sns" alt="인스타"></img>
                    <img src={process.env.PUBLIC_URL + './facebook.png'} className="sns" alt="페이스북"></img>
                </div>
            </footer>      */}
        </div>
        
    )
};






export default SchoolDetail;