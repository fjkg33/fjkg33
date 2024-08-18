import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../Header/PetHeader"
import ScmFooter from '../../School/ScmFooter';
import "../ItemDetailPage/Detail.css"
import { useNavigate } from 'react-router-dom';


function ItemDetailPage() {
  const { imageId } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate()

  const paymentButton =()=>{
    navigate(`/PayMentPage/${imageId}`);
  }

  useEffect(() => {
    const fetchData = async()=>{
      try{
        const response = await axios.get(`http://localhost:5000/product/${imageId}`)
        console.log("response:", response)
        setProduct(response.data[0])
      }catch(error){
        console.error("Error fetching product:", error);
      }
    }
    fetchData();
  }, [imageId]);

  if (!product) {
    return <div>삼품이 없습니다</div>;
  }

  const { prodImageURL, prodname, funding, personnel, prodprice,  detailimgURL, detailimgURL2, detailimgURL3, detailimgURL4, detailimgURL5} = product;
  const imgURL_full = `http://localhost:5000/${prodImageURL}`;
  const detail_full=`http://localhost:5000/${detailimgURL}`;
  const detail_full2=`http://localhost:5000/${detailimgURL2}`;
  const detail_full3=`http://localhost:5000/${detailimgURL3}`;
  const detail_full4=`http://localhost:5000/${detailimgURL4}`;
  const detail_full5=`http://localhost:5000/${detailimgURL5}`;
  console.log("detailimgURL, detailimgURL2, detailimgURL3, detailimgURL4, detailimgURL5", detailimgURL, detailimgURL2, detailimgURL3, detailimgURL4, detailimgURL5)
  console.log("product",product);

  return (
    <div className='Detail-wrapper'>
      <Header />
      <div className="detail-info">
        <img src={imgURL_full} alt={prodname} />
        <div className="detail-text">
          <p className="detail-title">{prodname}</p>
          <p className="detail-funding"><span>펀딩 진행중:</span>{funding}</p>
          <p className="detail-personnel"><span>펀딩 인원:</span>{personnel}명</p>
          <p className='detail-price'><span>가격: </span>{prodprice}원</p>
          <p className='pay-button' onClick={paymentButton}>결제하기</p>
        </div>
        </div>
        <div className='detail'>
            <img src={detail_full} alt={prodname}/>
            <img src={detail_full2} />
            <img src={detail_full3} />
            <img src={detail_full4} />
            <img src={detail_full5} />
        </div>
      <ScmFooter/>
    </div>
  );
}

export default ItemDetailPage;