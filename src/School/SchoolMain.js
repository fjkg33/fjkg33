import React, { useState,useEffect } from "react";
import './SchoolMain.css';
import { Routes, Route, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import SchoolPost from "./SchoolPost.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as heartIcon } from '@fortawesome/free-solid-svg-icons';
import { faHeart as emptyheartIcon } from '@fortawesome/free-regular-svg-icons';
import { useParams } from "react-router-dom";
import schoolMockup from "./SchoolMockup.js";
import axios from "axios";

const saveHeartsToLocalStorage = (hearts) => {
    localStorage.setItem('hearts', JSON.stringify(hearts));
};

const loadHeartsFromLocalStorage = () => {
    const hearts = localStorage.getItem('hearts');
    return hearts ? JSON.parse(hearts) : null;
};

function SchoolMain(){

    // const[title,setTitle] = useState([
    //     '김포 사랑유치원','홍대 스타유치원','부평 코코유치원','잠실 야옹유치원']);
    // const [fundingstate,setState] = useState(true);
    // const [people,setpeople] = useState([0, 0, 0, 0]);
    // const [month,setMonth] = useState([7,8,9,9]);
    // const [date,setDate] = useState([22,6,16,13]);
    const [schools,setSchools] = useState([]);
    const [likes,setLikes] = useState([10,60,45,5]);
    const [hearts, setHearts] = useState(() => loadHeartsFromLocalStorage() || [false, false, false, false]);

    const navigate = useNavigate();
    const GotoPostpage = ()=>{navigate('/school/postSchoolFunding')};
    const GotoMainpage = () =>{navigate('/')};

    useEffect(() => {
        saveHeartsToLocalStorage(hearts);

        axios.get("http://localhost:5000/schools")
        .then((response) => {
            console.log("response.data:", response.data)
            setSchools(response.data);
            console.log("schools:", schools)
        })
        .catch((error) => {
            console.log(error);
        });
    }, [hearts]);

    const handleHeartClick = (index) => {
        const newHearts = [...hearts];
        newHearts[index] = !newHearts[index];
        setHearts(newHearts);

        const newLikes = [...likes];
        newLikes[index] = newHearts[index] ? likes[index] + 1 : likes[index] - 1;
        setLikes(newLikes);
    };

    const goDetail =(id)=>{navigate(`/school/${id}`);}
    



    return(
        <div className="schoolmain">
            <header className="scm-title" onClick={GotoMainpage}>MEONG-GORITHM</header>
            <div className="local-search-container">
                <input type="search" className="local-search" placeholder="지역 검색하기.." />
                <img src={process.env.PUBLIC_URL + './ion_search.png'} alt="돋보기아이콘" className="scm-searchbtn"></img>
            </div>
            <div className="scm-postbtn-container">
                <button id="scm-postbtn" onClick={GotoPostpage}>펀딩 등록하기</button>
            </div>
            <hr/>
            <main className="scm-container">
            {schools.map((school, index) => {
                console.log("school:", school)
                return(
                    <div key={school.schoolprodid}>
                         <section className="left" >
                            <img className="leftphotos" src ={`Mschoolphoto${school.schoolprodid}.jpg`}></img>
                            <div className="scm-text-container">
                            <h4 id="scm-funding-status">펀딩 진행중</h4>
                            <h2 onClick={()=>goDetail(school.schoolprodid)}>{school.schoolname}</h2>
                            <p id="scm-funding-people-status">펀딩인원<span className="scm-fund scm-People">{school.personnelStatus}</span></p>
                            <p id="scm-funding-date-status">펀딩기간<span className="scm-fund scm-Date">{school.startDate}부터 {school.endDate}까지</span></p>
                            <p id="scm-heart">💛 현재 {likes[index]}명이 찜했어요!</p>
                            <div className="scm-user-heart">
                                <span
                                        id="empty-heart"
                                        onClick={() => handleHeartClick(index)}>
                                    
                                        <FontAwesomeIcon icon={hearts[index] ? heartIcon : emptyheartIcon} color={hearts[index] ? "red" : "black"}  />
                                </span>
                                <span id="nado-text"> 나도 찜하기</span>
                            </div>
                        </div>
                        </section>
                        <hr/>
                    </div>
                )
                
 } )}
            {/* {schools.map((data,i)=>{
                    return(
                    <div key={data.id}>
                         <section className="left" >
                            <img className="leftphotos" src ={`Mschoolphoto${data.id}.jpg`}></img>
                            <div className="scm-text-container">
                            <h4 id="scm-funding-status">펀딩 진행중</h4>
                            <h2 onClick={()=>goDetail(data.id)}>{data.name}</h2>
                            <p id="scm-funding-people-status">펀딩인원<span className="scm-fund scm-People">{data.funding}</span></p>
                            <p id="scm-funding-date-status">펀딩기간<span className="scm-fund scm-Date">{data.FundingPeriod}</span></p>
                            <p id="scm-heart">💛 현재 {likes[i]}명이 찜했어요!</p>
                            <div className="scm-user-heart">
                                <span
                                        id="empty-heart"
                                        onClick={() => handleHeartClick(i)}>
                                    
                                        <FontAwesomeIcon icon={hearts[i] ? heartIcon : emptyheartIcon} color={hearts[i] ? "red" : "black"}  />
                                </span>
                                <span id="nado-text"> 나도 찜하기</span>
                            </div>
                        </div>
                        </section>
                        <hr/>
                    </div>
                    )
                })} */}
            </main>
            <footer className="scm-footer">
                <ScmFooter/>
            </footer>     
        </div>
        
    )
};

function ScmFooter(){
    return(
        <>
            <div className="footer-text-first">
                    <p>환불규정</p>
                    <p><br/>이 상품에 대한 환불은 어쩌구저쩌구 처리해서 이렇게 저렇게 할 거고 
                        <br/>그 다음엔 요로케 저러케  할 예정입니다</p>
            </div>
            <div className="footer-text-second">
                    <p>서비스 이용약관<br/>
                        마이데이터 서비스 이용약관<br/>
                        개인정보 처리방침<br/>
                        가맹점 고지사항<br/>
                        위치기반서비스 이용약관</p>
            </div>
            <div className="footer-text-third">
                    <h3>Follow us</h3>
                    <img src={process.env.PUBLIC_URL + './insta.png'} className="scm-sns"></img>
                    <img src={process.env.PUBLIC_URL + './facebook.png'} className="scm-sns"></img>
            </div>
        </>
    )
};




export default SchoolMain;