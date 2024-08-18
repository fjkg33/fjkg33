import React from 'react';
import './Funding_payment_details.css';

const Funding_payment_details = () => {
  return (
    <div className="Funding_payment_detai">
      <div className="content">
        <div className="order">
          <div className="icon">🛒</div>
          <div className="details">
            <p>결제 완료 : 건</p>
            <p>취소 진행중 : 건</p>
            <p>취소 완료 : 건</p>
          </div>
        </div>
        <div className="Cancellation">
          <div className="icon">🔄</div>
          <div className="details">
            <p>취소요청 : 건</p>
            <p>반품요청 : 건</p>
            <p>반품수거중 : 건</p>
            <p>반품수거완료 : 건</p>
          </div>
        </div>
        <div className="Service">
          <div className="icon">🔧</div>
          <div className="details">
            <p>반품완료 : 건</p>
            <p>유지보수 : 건</p>
            <p>정비 : 건</p>
          </div>
        </div>
        <div className="Other_inquiries">
          <div className="icon">📦</div>
          <div className="details">
            <p>미처리 완료 : 건</p>
            <p>처리 : 건</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Funding_payment_details;
