import "./Main.css"
import {Link} from "react-router-dom";
import { Parallax, ParallaxLayer } from '@react-spring/parallax';



function Main() {

    return(
        <div className="MainPage">
            <Parallax pages={3}>
                <ParallaxLayer id="field3" 
                    style={{backgroundImage:`url(${process.env.PUBLIC_URL}/Main_img/field3.jpg)`, zIndex:0.5}}
                    offset ={0}
                    speed={0.3}
                    factor={4}
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
            

            <footer className="Main-footer" style={{zIndex:15}}>
                <MainFooter/>
            </footer>
        </div>
        
    )
};



function MainFooter(){
    return(
        <div className="footer-meong">
            <p id="main-footer-title">MEONG-GORITHM</p>
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
                <Link id= 'mypageLink' to={'/mypage'}>My Page</Link>             
            </div>
        </div>
    )
};

export default Main;