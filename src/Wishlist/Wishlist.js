import React from 'react';
import './Wishlist.css';
import { useNavigate } from 'react-router-dom';

const WishlistItem = ({ image, title }) => (
  <div className="wishlist-item">
    <img src={image} alt={title} />
    <p>{title}</p>
  </div>
);

const Wishlist = () => {
  const navigate = useNavigate();
  const GotoEditWishlist = ()=>{navigate('/Mypage/Wishlist')};
  const items = [
    <img src="/Pet kindergarten.png" />, {title: '유치원 찜 목록'},
    <img src="/Supplies.png" />, {title: '용품 찜 목록' },
    <img src="/Funding.png" />, {title: '펀딩 찜 목록' },
  ];

  return (
    <div className="wishlist">
      <h1 onClick={GotoEditWishlist}>찜 목록</h1>
      <div className="wishlist-items">
        {items.map((item, index) => (
          <WishlistItem key={index} image={item.image} title={item.title} />
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
