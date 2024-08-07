import React from 'react';
import "../Delivery/Delivery.css"
import PayMockup from '../PayMockup';

export default function Delivery(){
    return(
        <>
          <div className='delivery-wrapper'>
            <div className='delivery-info'>
            <p className='delivery'>배송정보</p>
                <p className='delivery-name'>{PayMockup.order.name}</p>
                <p className='delivery-phone'>{PayMockup.order.phone}</p>
                <p className='delivery-address'>{PayMockup.order.shippingAddress}</p>
                <div className='memo'>
                    <p className='memo-title'>배송메모</p>
                    <select>
                        <option>배송메모를 선택해주세요</option>
                        <option>경비실 놔두어 주세요</option>
                        <option>문앞에 놔두어 주세요</option>
                    </select>
                </div>
            </div>
            <button className='delivery-button'>수정</button>
        </div>
        </>
      
    )
}