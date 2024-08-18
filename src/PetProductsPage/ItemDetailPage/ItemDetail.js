import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";



function ItemDetailPage() {
  const { imageId } = useParams();
  const [product, setProduct] = useState(null);


  useEffect(() => {
    const fetchData = async()=>{
      try{
        const response = await axios.get(`http://localhost:5000/product/${imageId}`)
        console.log("response:", response)
        setProduct(response.data[0])
        //console.log("product:", product.prodname)
      }catch(error){
        console.error("Error fetching product:", error);
      }
    }
    fetchData();
  }, [imageId]);

  if (!product) {
    return <div>삼품이 없습니다</div>;
  }

  const { prodImageURL, prodname, funding, personnel, prodprice } = product;
  const imgURL_full = `http://localhost:5000/${prodImageURL}`;

  return (
    <div>
      <div className="detail-info">
        <img src={imgURL_full} alt={prodname} />
        <div className="detail-text">
          <p className="detail-title">{prodname}</p>
          <p className="detail-funding">펀딩 진행중:{funding}</p>
          <p className="detail-personnel">펀딩 인원:{personnel}</p>
          <p>가격: {prodprice}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemDetailPage;