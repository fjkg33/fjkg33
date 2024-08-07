import React, { createElement, useState } from 'react';
import './Wishlist.css';
import { useNavigate } from 'react-router-dom';


const Wishlist = () => {
  const navigate = useNavigate();
  return (
    <div className="wishlist">
      <h1>찜 목록</h1>
      <div className="wishlist-items">
        <div className="wishlist-item" onClick={()=>{navigate('/Mypage/like/kindergarten')}}>
          <img src="/Wishlist_img/Pet kindergarten.png" alt='유치원 찜 목록' />
          <p>유치원 찜 목록</p>
        </div>
        <div className="wishlist-item" onClick={()=>{navigate('/Mypage/like/product')}}>
        <img src="/Wishlist_img/Supplies.png" alt='용품 찜 목록' />
          <p>용품 찜 목록</p>
        </div>
      </div>
    </div>
  );
};

// const WishlistItem = ({ image, title }) => (
//   <div className="wishlist-item">
//     <img src={image} alt={title} />
//     <p>{title}</p>
//   </div>
// );
// const Wishlist = () => {
//   const items = [
//     {image:"/Wishlist_img/Pet kindergarten.png", title:'유치원 찜 목록'},
//     {image:"/Wishlist_img/Supplies.png", title:'용품 찜 목록'}
//   ];

//   return (
//     <div className="wishlist">
//       <h1>찜 목록</h1>
//       <div className="wishlist-items">
//         {items.map((item, index) => (
//           <WishlistItem key={index} image={item.image} title={item.title} />
//         ))}
//       </div>
//     </div>
//   );
// };

export default Wishlist;