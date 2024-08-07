import './FuneralHeader.css'
import { useNavigate } from 'react-router-dom';

export default function Funeral() {

    const navigate = useNavigate();
    const GotoMainpage = () =>{navigate('/')};

    return(

        
        <div className="Fheader">
            <div className="TopHeader">
                <div className="Flogo" onClick={GotoMainpage}>MEONG-GORITHM</div>
                
            </div>
            <nav className="FMenu">
                <ul>
                    <li><a href="/school">유치원 펀딩</a></li>
                    <li><a href="/">HOME</a></li>
                    <li><a href="/products">반려동물 용품 펀딩</a></li>
                    
                </ul>
            </nav>
        </div>
    )
};


