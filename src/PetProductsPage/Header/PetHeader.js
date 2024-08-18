import React, { useState } from 'react';
import '../Header/PetHeader.css';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { SvgIcon } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close'; 
import SearchIcon from '@mui/icons-material/Search';

export default function PetHeader() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    
    <div className='header'>
      <Link to="/"><h1 className='petheader'>MEONG-GORITHM</h1></Link>
      <div className={`menu ${open ? 'open' : ''}`} onClick={toggleMenu}>
        {open ? (
          <SvgIcon component={CloseIcon} inheritViewBox className='icon' /> 
        ) : (
          <SvgIcon component={MenuIcon} inheritViewBox className='icon' />
        )}
      </div>
      <div className='pet-search'>
        <input type='text' placeholder='용품검색' />
        <SvgIcon component={SearchIcon}  inheritViewBox  className='Pet-Search'/>
      </div>

      <div className={`slide-out-menu ${open ? 'open' : ''}`}>
        <ul>
          <li>
            <Link to="/">홈</Link> 
          </li>
          <li>
            <Link to="/school">유치원 펀딩</Link> 
          </li>
          <li>
            <Link to="/Funeral">장묘예약</Link> 
          </li>
          <li>
            <Link to="/mypage">마이페이지</Link> 
          </li>
          
        </ul>
      </div>
    </div>
  );
}