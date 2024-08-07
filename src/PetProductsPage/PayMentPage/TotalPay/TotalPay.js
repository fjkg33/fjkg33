import React, { useEffect, useState } from "react";
import "../TotalPay/TotalPay.css";
import PayMockup from "../PayMockup";
import { useParams } from "react-router-dom";

export default function TotalPayMent() {
  const total = PayMockup;
  const [product, setProduct] = useState(null);
  const { userid } = useParams();
  console.log("userid", userid);

  console.log("totalpay", total.order.products[0].price);

  useEffect(() => {
    const totalpay = total.order.products.find(
      (product) => product.id == userid
    );
    console.log("totalpay", totalpay);
    setProduct(totalpay);
  }, [userid]);

  return (
    <>
        <div className="total-payment">
      {product && (
        <div className="totalpay" key={product.id}>
            <p className="total-title">최종 결제금액</p>
          <div className="price">
            <p className="price-title">상품가격</p>
            <p className="product-price">{product.price}원</p>
          </div>
          <div className="coupon">
            <p className="coupone-name">쿠폰할인</p>
            <p className="product-coupone">{total.order.coupon}원</p>
          </div>
          <div className='point'>
          <p className="point-name">포인트 할인</p>
          <p className="product-point">{total.order.pointsele}원</p>
          </div>
          <div className='delivery'>
          <p className="delivery-name">배송비</p>
          <p className="delivery-peice">{total.order.Delivery}원</p>
          </div>
          <div className="total">
            <p className="totalpay-name">총 결제금액</p>
            <p className="total-pay">{product.totalprice}원</p>
          </div>
        </div>
      )}
    </div>
    </>
  );
}
