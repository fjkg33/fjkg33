import './FuneralFooter.css'
import './Funeralmain.js'
import './FuneralHeader.js'

function FFooter(){

    const url = process.env.PUBLIC_URL;

    return(
        <>
        <section className="Ffooter">
        <div className="Ffooter-text1">
                    <p>환불규정</p>
                    <p><br/>신뢰있는 서비스를 제공할 수 있도록
                        <br/>소비자기본법에서 정하고 있는 소비자분쟁해결기준을 참고하여 환불 정책을 시행하고 있습니다.</p>
                </div>
                <div className="Ffooter-text2">
                    <p className="Ffooter_txt">서비스 이용약관<br/>
                        마이데이터 서비스 이용약관<br/>
                        개인정보 처리방침<br/>
                        가맹점 고지사항<br/>
                        위치기반서비스 이용약관</p>
                </div>
                <div className="Ffooter-text">
                    <div className="FFollow">Follow us</div>
                    <img src={process.env.PUBLIC_URL + './F_img/insta.png'} className="Fsns"></img>
                    <img src={process.env.PUBLIC_URL + './F_img/facebook.png'} className="Fsns"></img>
                </div>
        </section>
        </>
    )
}
export default FFooter;