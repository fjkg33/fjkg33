import React from 'react';
import "../School/ScmFooter.css"

export default function ScmFooter(){
    return(
        <div className='scm-footer'>
        <div className="footer-text-first">
        <p>환불규정</p>
        <p><br/>이 상품에 대한 환불은 어쩌구저쩌구 처리해서 이렇게 저렇게 할 거고 
            <br/>그 다음엔 요로케 저러케  할 예정입니다</p>
</div>
<div className="footer-text-second">
        <p>서비스 이용약관<br/>
            마이데이터 서비스 이용약관<br/>
            개인정보 처리방침<br/>
            가맹점 고지사항<br/>
            위치기반서비스 이용약관</p>
</div>
        </div>
    )
}