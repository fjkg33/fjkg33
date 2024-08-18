import "./Main.css"
import {Link} from "react-router-dom";
import { Parallax, ParallaxLayer } from '@react-spring/parallax';



function Main() {

    return(
    <>
        <div className="MainPage">
                <Parallax pages={3}>
                    <ParallaxLayer id="field3" 
                        style={{backgroundImage:`url(${process.env.PUBLIC_URL}/Main_img/field3.jpg)`, zIndex:0.5}}
                        offset ={0}
                        speed={0.3}
                        factor={3.5}
                        >
                    </ParallaxLayer>

                    <header style={{zIndex:15}}>
                        <MainHeader/>
                    </header>

                    <ParallaxLayer 
                        speed={0.3}
                        sticky={{ start: 0.1, end: 1.2 }}
                        style={{ textAlign: 'center' }}>
                        <img src={process.env.PUBLIC_URL + '/Main_img/cat.gif'} style={{ zIndex: 0.1 }} id="para-cat"/>
                    </ParallaxLayer> 


                    <ParallaxLayer  speed={1} className="Main-pupday" style={{ zIndex: 5 }}>
                        <p id="have">Have a </p>
                        <p id="puppy">puppy</p> <span id="day">day!</span>
                    </ParallaxLayer>
                </Parallax>
                <MainFooter/>
        </div>
           
        
    </>
    )
};



function MainFooter(){
    return(
        <div style={{ zIndex: 20 }} className="yellow-container">
            <div className="sc-text">
                <span>펫 펀딩, 당신의 사랑을 현실로 </span>
            </div>
        </div>
    )
};

function MainHeader(){
    return(
        <div className="MainAllNavs" style={{zIndex: 60}}>
            <div className="navFirst">
                <Link id= 'schoolLink' to={'/school'}>유치원 펀딩 </Link>
                <Link id= 'ItemsLink' to={'/ItemsPage'}>반려동물 용품 펀딩</Link>
                <Link id= 'funeralLink' to={'/funeral'}> 장묘 예약</Link>
                <Link id= 'mypageLink' to={'/mypage'}>마이페이지</Link>             
            </div>
            <div className="main-footer-title">
                <p id="main-footer-title">MEONG-GORITHM</p>
                <p id="main-footer-title2">멍고리즘</p>
            </div>
        </div>
    )
};

export default Main;