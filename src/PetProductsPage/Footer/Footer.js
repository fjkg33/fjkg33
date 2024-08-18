import React from 'react';
import "../Footer/Footer.css"


export default function Footer(){
    return(
        <footer className="pet-footer">
        <div className="footer-text first">
            <p className='refund'>환불규정</p>
            <p className='refund-text'><br/>이 상품에 대한 환불은 어쩌구저쩌구 처리해서 이렇게 저렇게 할 거고 
                    그 다음엔 요로케 저러케  할 예정입니다</p>
        </div>
        <div className="footer-text second">
            <p className='Terms-of-Use'>서비스 이용약관<br/>
                마이데이터 서비스 이용약관<br/>
                개인정보 처리방침<br/>
                가맹점 고지사항<br/>
                위치기반서비스 이용약관</p>
        </div>
        <div className="footer-text three">
            <h3>Follow us</h3>
            <img src={process.env.PUBLIC_URL + './insta.png'} className="sns"></img>
            <img src={process.env.PUBLIC_URL + './facebook.png'} className="sns"></img>
        </div>
    </footer>   
    )
}
