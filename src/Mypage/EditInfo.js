import React, { createElement,useState, useEffect } from 'react';
import './EditInfo.css';
import axios from "axios";


function EditInfo({userAuthID}) {

    
    const [postImg, setPostImg] = useState(null);
    const [preview, setPreview] = useState("/Mypage_img/profileDefault.png");
    const [befpassword, setBefpassword] = useState('');
    const [aftpassword, setAftpassword] = useState('');

    const [userRealname, setUserRealname] = useState('');
    const [username, setUsername] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

    useEffect(() => {
        axios.get(`http://localhost:5000/user/${userAuthID}`)
          .then(response => {
            console.log("userRealname:", response.data[0].userRealname);
            console.log("phone:", response.data[0].phone);
            console.log("address:", response.data[0].address);
            setUserRealname(response.data[0].userRealname);
            setUsername(response.data[0].username);
            setPhone(response.data[0].phone);
            setAddress(response.data[0].address);            
          })
          .catch(error => {
            console.error('There was an error fetching the user!', error);
          });

      }, []);

    const handleImageChange = (e)=>{
        const file = e.target.files[0]; 
        if(file){
            setPostImg(file);
            const reader = new FileReader(); 
            reader.onload = ()=>{
                setPreview(reader.result);
            };
            reader.readAsDataURL(file);

        }
    };
    


    const handleBeforepw = (e)=>{
        setBefpassword(e.target.value)
    };
    const handleAfterpw = (e)=>{
        setAftpassword(e.target.value)
    };

    const handlePwChange = (e)=>{
        e.preventDefault();
        if(befpassword != aftpassword){
            alert('비밀번호가 일치하지 않습니다')
        }
        else{
            alert('일치합니다')
        }
    };

    return (
        <div className="EditMyInfo">
            <header className="myinfo-title">
                MEONG-GORITHM
            </header>
            <div className="myinfo-form-container">
                <div className="myinfo-form-section">
                    <div className="myinfo-form-sub">
                        <label>이름</label>
                        <input type="text" maxLength="10" placeholder={userRealname}/>
                    </div>

                    <div className="myinfo-form-sub">
                        <label>전화번호</label>
                        <div className="myinfo-phone-number">
                            <input type="text" maxLength="3" placeholder={phone} />
                            {/* <span>-</span>
                            <input type="text" maxLength="4" placeholder="0000" />
                            <span>-</span>
                            <input type="text" maxLength="4" placeholder="0000" /> */}
                        </div>
                    </div>

                    <div className="myinfo-form-sub">
                        <label>주소</label>
                        {/* <input type="text" placeholder="우편번호" maxLength='5'/> */}
                        <input type="text" placeholder={address} />
                    </div>

                    <div className="myinfo-form-sub">
                        <label>닉네임</label>
                        <input type="text" maxLength="10" placeholder={username} />
                    </div>

                    <div className="myinfo-form-sub">
                        <label>비밀번호</label>
                        <input type="text" placeholder="영어 소문자+숫자 포함 6자 이상" 
                         value={befpassword}  onChange={handleBeforepw} id='beforepassword' />
                    </div>

                    <div className="myinfo-form-sub">
                        <label>비밀번호 확인</label>
                        <input type="password" placeholder="비밀번호 확인" id='checkpassword'
                          value={aftpassword}   onChange={handleAfterpw} />
                        <button id='myinfo-cpwbtn' onClick={handlePwChange}>비밀번호 확인</button>
                    </div>
                </div>
                <div className="myinfo-profile-section">
                    <div id='myprofile-container'>
                        <div className='myinfo-circle'>
                            {<img src = {preview} id='myinfo-changed-photo' />}
                        </div>
                        <label className='myinfo-pickphoto-btn' htmlFor='myprofile'>사진 선택하기</label>
                    </div>
                    <input type='file' id='myprofile' name='myprofile' accept='image/*' 
                                 onChange = {handleImageChange} style={{display:'none'}} />       
                </div>
            </div>
            <button className="myinfo-save-button" onClick={SaveAlert}>저장</button>
        </div>
    );
};

function SaveAlert(){
    return(
        alert('저장이 완료되었습니다')
    )
};



export default EditInfo;

