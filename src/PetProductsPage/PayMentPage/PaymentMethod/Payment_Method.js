import React, { useState } from 'react';
import "../PaymentMethod/Payment_Method.css";
import PayMockup from '../PayMockup';

export default function Payment_Method() {
  const [selectedMethod, setSelectedMethod] = useState(null);

  const handleRadioChange = (method) => {
    setSelectedMethod(method);
  };

  return (
    <>
      <div className='paymethod'>
      <p className='method'>결제방법</p>
        <div className='payment'>
          <label className='card-payment'>
            <input 
              type='radio' 
              value="card" 
              checked={selectedMethod === 'card'} 
              onChange={() => handleRadioChange('card')} 
              className='pay-input'
            />
            <span className='card-text'>신용카드</span>
          </label>
          <label className='virtual-account'>
            <input 
              type='radio' 
              value="virtual" 
              checked={selectedMethod === 'virtual'} 
              onChange={() => handleRadioChange('virtual')}
              className='virtual' 
            />
            <span>가상계좌</span>
          </label>
          <label className='Deposit_without_bankbook'>
            <input 
              type='radio' 
              value="deposit" 
              checked={selectedMethod === 'deposit'} 
              onChange={() => handleRadioChange('deposit')} 
            />
            <span>무통장입금</span>
          </label>
          <label className="Kakao_Pay">
            <input 
              type='radio' 
              value="kakao" 
              checked={selectedMethod === 'kakao'} 
              onChange={() => handleRadioChange('kakao')} 
            />
            <span>카카오페이</span>
          </label>
        </div>
        <div className='bank'>
          <select>
            <option>NH은행: {PayMockup.order.bank} 예금주명</option>
          </select>
          {selectedMethod === 'deposit' && (
            <input type='text' placeholder='예금주명 입력'  className='bank-input'/>
          )}
        </div>
      </div>
    </>
  );
}
