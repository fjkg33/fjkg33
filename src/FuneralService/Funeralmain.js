import './Funeralmain.css'
import './FuneralHeader.js'


function FMain(){

    const url = process.env.PUBLIC_URL;

    return(
        <>
        <section className="Fmain">
            <div className="Fbanner">
                <div className='Fbanner-text'>
                    <div className="top_text"><span>"</span><span>"</span></div>
                    <h2 className="banner_top"> 함께 해 온 시간 만큼의 슬픔</h2>
                    <h3 className="banner_top2"> 끝까지 함께 하겠습니다.</h3>
                    <div className="bottom_text">소중한 이별을 할 수 있도록</div>
                    <div className="bottom_text2">마지막까지 최선을 다 하겠습니다.</div>
                    <a href="/FReservation" className="Fbtn">예약하기</a>
                </div>
                
                <div className="img_banner">
                    <img src={`${url}/F_img/배너.jpeg`} art=""/>
                </div>
            </div>
        </section>
        <section className='Fmain2'>
            <div className="inner">
                <div className="tit">MEONG GORITHM SERVICE</div>
                <div className="img_service1">
                    <img src={`${url}/F_img/루세떼.jpg`} art=""/>
                    <div className="service1">
                        <h5 className="Fmain_txt">변하지 않는 모습 그대로</h5>
                        <h6 className="Fmain_txt2">아이가 가장 좋아하는 장소에서 보관하세요.</h6>
                        <p className="Fmain_txt3">온도,습도에 영향없이 장기간 보관 할 수 있습니다.<br/>
                           주얼리로 제작이 가능합니다.(목걸이or반지)<br/>
                           장례 진행 후 바로 받으실 수 있습니다.</p>
                        <div className="btm_txt">루세떼 전문 장례 지도사가 직접 관리 하는</div>
                        <div className="btm_txt2">LUCETE</div>
                    </div>
                </div>
            </div>
        </section>
        <section className='Fmain3'>
                <div className="img_service2">
                    <img src={`${url}/F_img/봉안당.jpg`} art=""/>
                    <div className="service2">
                        <h5 className="Fmain_txt">봉안당 안치</h5>
                        <h6 className="Fmain_txt2">24시간 관리하고 있습니다.</h6>
                        <p className="Fmain_txt3">24시간 열려있으니 보고싶을 때 찾아와주세요.</p>
                        <p className="Fmain_txt3">장례 후 유골분을 바로 안치 할 수 있습니다.</p>
                        <div className="btm_txt">멍고리즘에서 24시간 관리합니다.</div>
                    </div>
                </div>
        </section>
        <section className='Fmain4'>    
                <div className="img_service3">
                    <img src={`${url}/F_img/픽업.jpg`} art=""/>
                    <div className="service3">
                        <h5 className="Fmain_txt">Pickup service</h5>
                        <h6 className="Fmain_txt2">이동이 불편하실 때 도와드립니다.</h6>
                        <p className="Fmain_txt3">이동이 불편하시면 픽업or비동행서비스 해드립니다.<br/>
                            비동행 서비스 시 <br/>
                            장례 과정을 사진으로 보내드립니다.<br/>
                            장례 진행 후 바로 받으실 수 있습니다.</p>
                        <div className="btm_txt">픽업&비동행 서비스</div>
                    </div>
                </div>
        </section>
        </>
    )
}
export default FMain;