import React from "react";
import "../OrderItem/OrderItem.css";
import TotalPay from "../TotalPay/TotalPay";
import PayMockup from "../PayMockup";
import Payment_Method from "../PaymentMethod/Payment_Method";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Delivery from "../Delivery/Delivery";

export default function OrderItem() {
  const item = PayMockup;
  const [product, setProduct] = useState(null);
  const { userid } = useParams();
  console.log("userid!!", userid);
  console.log("id!!", item.order.products[0].id);

  let orderItem = null;
  useEffect(() => {
    orderItem = item.order.products.find((product) => product.id == userid);
    console.log("orderItem", orderItem);
    setProduct(orderItem);
  }, [userid]);
  if (!product) {
    return <div>상품을 찾을 수 없습니다</div>;
  }
  console.log("product.imageURL", item.order.products.imageURL);
  return (
    <div className="OrderItem-wrapper">
      <h3 className="order-title">결제하기</h3>
      <div className="order-item" key={product.id}>
        <img src={product.imeageURL} alt={product.name} />
        <div className="title">
        <p className="order-prod">상품 상세정보</p>
          <p className="order-name">{product.name}</p>
          <p className="quantity">{product.quantity}개</p>
          <p className="orderprice">{product.price}원</p>
        </div>
      </div>
      <div className="order-info">
        <div className="information">
        <p className="order">주문자 정보</p>
          <p className="info-name">{item.order.name}</p>
          <p className="info-phone">{item.order.phone}</p>
          <p className="info-address">{item.order.shippingAddress}</p>
          <p className="info-email">{item.order.email}</p>
        </div>
        <button>수정</button>
      </div>
      <Delivery />
      <TotalPay />
      <Payment_Method />
      <div className="payment-button">결제하기</div>
    </div>
  );
}
