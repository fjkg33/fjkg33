import axios from 'axios';
import React,{useState, useEffect} from 'react';
import './ReservationMain.css'

export default function ReservationMain({userAuthID}){
    const [userName, setUserName] = useState("");
    const [userPhone, setUserPhone] = useState("");
    const [timeSelected, setTimeSelected] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:5000/user/${userAuthID}`)
          .then(response => {
            //setUserName(response.data.username);
            setUserName(response.data[0].userRealname);
            setUserPhone(response.data[0].phone);
          })
          .catch(error => {
            console.error('There was an error fetching the user!', error);
          });
      }, []);

      const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/makereservation', 
                { userAuthID, timeSelected  });
            alert(response.data.message)
            console.log('response:', response.data.message);
            // console.log('reserve successful');
          } catch (error) {
            console.error('reserve failed', error);
          }


        console.log("submit!!")
      }

    return(
        <div className="Rmain">
            <h1 className="R_txt">예약 신청 {timeSelected}</h1>

            <form>
                <fieldset>
                <div className="R_box">
                <label htmlFor="username" className="R_name">보호자 성함</label>
                <input id="username" type="text" value={userName} disabled/>
                </div>
                <div className="R_box2">
                <label htmlFor="userphone" className="R_phone">휴대폰 번호</label>
                <input  id="userphone" type="text" value={userPhone} disabled/>
                </div>
                <div>
                <label htmlFor="r9">09:00</label>
                <input onChange={()=>{setTimeSelected("9")}} id="r9" type="radio" name="reserveTime" value="9h"/>
                </div>
                <div>
                <label htmlFor="r11">11:00</label>
                <input onChange={()=>{setTimeSelected("11")}} id="r11" type="radio" name="reserveTime" value="11h"/>
                </div>
                <div>
                <label htmlFor="r13">13:00</label>
                <input onChange={()=>{setTimeSelected("13")}} id="r13" type="radio" name="reserveTime" value="13h"/>
                </div>
                <div>
                <label htmlFor="r15">15:00</label>
                <input onChange={()=>{setTimeSelected("15")}} id="r15" type="radio" name="reserveTime" value="15h"/>
                </div>
                <div>
                <label htmlFor="r17">17:00</label>
                <input onChange={()=>{setTimeSelected("17")}} id="r17" type="radio" name="reserveTime" value="17h"/>
                </div>
                <div>
                <label htmlFor="r19">19:00</label>
                <input onChange={()=>{setTimeSelected("19")}} id="r19" type="radio" name="reserveTime" value="19h"/>
                </div>
                <div>
                <label htmlFor="r21">21:00</label>
                <input onChange={()=>{setTimeSelected("21")}} id="r21" type="radio" name="reserveTime" value="21h"/>
                </div>
                </fieldset>
                <div>
                <p>확인해주세요!</p>
                <ul>
                    <li>예약 완료 확인을 위해 1:1로 담당 상담원이 연락드립니다.</li>
                    <li>장례 서비스에 궁금한 점이 있으시면 1:1 상담원에게 연락 주시면 감사하겠습니다.</li>
                    <li>반려동물의 가장 예쁜 사진을 준비해주세요.</li>
                    <li>포인트,픽업 서비스 문의는 상담원에게 말씀해주세요.</li>
                    
                </ul>
                </div>
                <button type="submit" className="R_btn" onClick={handleSubmit}>예약완료</button>

            </form>
            
        </div>
    )
} 