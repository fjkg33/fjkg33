import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ItemsPage from "./PetProductsPage/PetItemsPage/ItemsPage";
import ItemDetail from "./PetProductsPage/ItemDetailPage/ItemDetail";
import { BrowserRouter as Router, Route, Link, Routes, BrowserRouter } from 'react-router-dom';
import Main from './MainPage/Main';
import Login from './Login/Login.js';
import Register from './register/Register.js';
import SchoolMain from './School/SchoolMain.js';
import SchoolDetail from './School/SchoolDetail.js';
import SchoolPost from './School/SchoolPost.js';
import EditInfo from './Mypage/EditInfo.js';
import Mypage from './Mypage/Mypage.js';
import MypageHeader from './Mypage/Header/Header.js';
import FuneralContainer from './FuneralService/FuneralContainer';
import ReservationContainer from './FReservationService/ReservationContainer';
import OrderItem from './PetProductsPage/PayMentPage/OrderItem/OrderItem.js';
import Funding_payment_details from './Funding_payment_details/Funding_payment_details.js';
import Funding_payment_detailsHeader from './Funding_payment_details/Header/Header.js';
import Wishlist from './Wishlist/Wishlist.js';
import Withdraw from './Withdraw/Withdraw.js';

function App() {

  const [token, setToken] = useState(localStorage.getItem('token') || '');

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    if (token) {
      setAuthToken(token);
      window.history.replaceState({}, document.title, window.location.pathname); // remove token from URL
    }
  }, []);

  const setAuthToken = (token) => {
    if (token) {
      localStorage.setItem('token', token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
      localStorage.removeItem('token');
      delete axios.defaults.headers.common['Authorization'];
    }
    setToken(token);
  };

  const handleLogout = () => {
    setAuthToken('');
  };

  const userAuthID = 1;
  return (
    <BrowserRouter>
    <div className="App">
      <div className='loginText'>
        <nav>
         
            {!token && <button className='loginBtn'><Link to="/login">로그인</Link></button>}
            {!token && <button className='registerBtn'><Link to="/register">회원가입</Link></button>}
            {token && <button className='mypageBtn'><Link to="/mypage">마이페이지</Link></button>}
            {token && <button onClick={handleLogout} className='logoutBtn'><Link to="/">로그아웃</Link></button>}
        
        </nav>
      </div>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login setToken={setAuthToken} /> }/>
          <Route path="/register" element={<Register/>} />
          <Route path="/ItemsPage" element={<ItemsPage />} />
          <Route path="/product/:imageId" element={<ItemDetail />} />
          {/* <Route path="/ItemsPage/:imageId" element={<ItemDetail />} /> */}
          <Route path='/school' element={<SchoolMain/>}></Route>
          <Route path='/school/:schoolnum' element={<SchoolDetail />}></Route>
          <Route path='/school/postSchoolFunding' element={<SchoolPost/>}/>
          <Route path="/Mypage/editMyInfo" element={<EditInfo userAuthID={userAuthID} />} />
          <Route path='/Mypage' element={<Mypage />} />
          <Route path='/Mypage/Header' element={<MypageHeader />} />
          <Route path='/Mypage/Wishlist'  element={<Wishlist/>} />
          <Route path='/Mypage/Withdraw'  element={<Withdraw/>} />
          <Route  path="/Funeral" element={<FuneralContainer/>}></Route>
          <Route  path="/FReservation" element={<ReservationContainer userAuthID={userAuthID}/>}></Route>
          <Route path='/PayMentPage/:userid'  element={<OrderItem/>} />
          <Route path='/Funding_payment_details'  element={<Funding_payment_details/>} />
          <Route path='/Funding_payment_detailsHeader'  element={<Funding_payment_detailsHeader/>} />
          <Route path='/Wishlist'  element={<Wishlist/>} />
          <Route path='/Witdraw'  element={<Withdraw/>} />
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;