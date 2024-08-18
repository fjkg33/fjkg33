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
            setUserName(response.data[0].username);
            setUserPhone(response.data[0].phone);
            
          })
          .catch(error => {
            console.error('There was an error fetching the user!', error);
          });
      }, []);

      const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/makereservation', { userAuthID, timeSelected  });
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
            <h1 className="R_txt">예약 신청</h1>
            <form>
                <fieldset className="R_space">
                  <div className="R_box">
                  <label htmlFor="username" className="R_name">보호자 성함</label>
                  <input id="username" type="text" className="R_name2" value={userName} disabled/>
                  </div>
                  <div className="R_box2">
                    <label htmlFor="userphone" className="R_phone">휴대폰 번호</label>
                    <input  id="userphone" type="text" className="R_phone2" value={userPhone} disabled/>
                  </div>

                  
                    <div className="reservHJ">
                      <div className="reservHJ-inner">
                        <div>
                          <label htmlFor="r9" className="radio_btn">09:00</label>
                          <input onChange={()=>{setTimeSelected("9")}} id="r9" type="radio" name="reserveTime" className="r_radio" value="9h"/>
                        </div>
                        <div>
                          <label htmlFor="r11" className="radio_btn">11:00</label>
                          <input onChange={()=>{setTimeSelected("11")}} id="r11" type="radio" name="reserveTime" className="r_radio" value="11h"/>
                        </div>
                        <div>
                          <label htmlFor="r13" className="radio_btn">13:00</label>
                          <input onChange={()=>{setTimeSelected("13")}} id="r13" type="radio" name="reserveTime" className="r_radio" value="13h"/>
                        </div>
                        <div>
                          <label htmlFor="r15" className="radio_btn">15:00</label>
                          <input onChange={()=>{setTimeSelected("15")}} id="r15" type="radio" name="reserveTime" className="r_radio" value="15h"/>
                        </div>
                      </div>
                      <div className="reservHJ-inner">
                        <div>
                          <label htmlFor="r17" className="radio_btn">17:00</label>
                          <input onChange={()=>{setTimeSelected("17")}} id="r17" type="radio" name="reserveTime" className="r_radio" value="17h"/>
                        </div>
                        <div>
                          <label htmlFor="r19" className="radio_btn">19:00</label>
                          <input onChange={()=>{setTimeSelected("19")}} id="r19" type="radio" name="reserveTime" className="r_radio" value="19h"/>
                        </div>
                        <div>
                          <label htmlFor="r21" className="radio_btn">21:00</label>
                          <input onChange={()=>{setTimeSelected("21")}} id="r21" type="radio" name="reserveTime" className="r_radio" value="21h"/>
                        </div> 
                      </div>
                    </div>
                   
               
                </fieldset>
                <div className="R_check">
                  <p className="R_checktxt1">확인해주세요!</p>
                  <ul className="R_checktxt2">
                      <li className="R_checktxt3">예약 완료 확인을 위해 1:1로 담당 상담원이 연락드립니다.</li>
                      <li className="R_checktxt3">장례 서비스에 궁금한 점이 있으시면 1:1 상담원에게 연락 주시면 감사하겠습니다.</li>
                      <li className="R_checktxt3">반려동물의 가장 예쁜 사진을 준비해주세요.</li>
                      <li className="R_checktxt3">포인트,픽업 서비스 문의는 상담원에게 말씀해주세요.</li>
                  </ul>
                </div>
                <div className="R_btn">
                  <button type="submit" className="R_btn2" onClick={handleSubmit}>예약완료</button>
                </div>
           </form>        
        </div>
    )
} 