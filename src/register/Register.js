import React, { useState } from 'react';
import './Register.css';
import DaumPostcode from 'react-daum-postcode';
import { useNavigate } from 'react-router-dom';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import axios from 'axios';

const Register = () => {
  const [username, setUsername] = useState('');
  const [userRealname, setUserRealname] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordType, setPasswordType] = useState({ type: 'password', visivle: false});
  const [passwordConfirmType, setPasswordConfirmType] = useState({ type: 'password', visivle: false});
  const [address, setAddress] = useState('');
  const [detailAddress, setDetailAddress] = useState('');
  const [zip, setZip] = useState('');
  const [isPostcodeOpen, setIsPostcodeOpen] = useState(false);
  const [isUsername, setIsUsername] = useState(false);
  const [isUserRealname, setIsUserRealname] = useState(false);
  const [isPhone, setIsPhone] = useState(false);
  const [isZip, setIsZip] = useState(false);
  const [isDetailAddress, setIsDetailAddress] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isConfirmPassword, setIsConfirmPassword] = useState(false);


  const navigate = useNavigate();

  const handlePostcodeComplete = (data) => {
    // 주소 선택 시 호출되는 함수
    setAddress(data.address);
    setZip(data.zonecode);
    setIsPostcodeOpen(false); // 주소 입력 창 닫기
};

  const usernameMes = () =>{
    return isUsername === false ? 'register-username-alert' : 'register-username-alert-view';
  }

  const userRealnameMes = () =>{
    return isUserRealname === false ? 'register-userRealname-alert' : 'register-userRealname-alert-view';
  }
  const phoneMes = () =>{
    return isPhone === false ? 'register-phone-alert' : 'register-phone-alert-view';
  }
  const zipMes = () =>{
    return isZip === false ? 'register-zip-alert' : 'register-zip-alert-view';
  }
  const detailAddressMes = () =>{
    return isDetailAddress === false ? 'register-detailAddress-alert' : 'register-detailAddress-alert-view';
  }
  const passwordMes = () =>{
    return isPassword === false ? 'register-password-alert' : 'register-password-alert-view';
  }
  const confirmPasswordMes = () =>{
    return isConfirmPassword === false ? 'register-confirmPassword-alert' : 'register-confirmPassword-alert-view';
  }

  const handleRegister = async (e) => {
    e.preventDefault();

    

    const usernameRegExp = /^[a-zA-Z0-9]{6,12}$/;
    const phoneRegExp = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
    const passwordRegExp = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;

    const isUsernameValid = usernameRegExp.test(username);
    const isUserRealnameValid = !!userRealname;
    const isPhoneValid = phoneRegExp.test(phone);
    const isZipValid = !!zip;
    const isDetailAddressValid = !!detailAddress;
    const isPasswordValid = passwordRegExp.test(password);
    const isConfirmPasswordValid = password === confirmPassword;

    // 유효성 검사 결과 업데이트
    setIsUsername(!isUsernameValid);
    setIsUserRealname(!isUserRealnameValid);
    setIsPhone(!isPhoneValid);
    setIsZip(!isZipValid);
    setIsDetailAddress(!isDetailAddressValid);
    setIsPassword(!isPasswordValid);
    setIsConfirmPassword(!isConfirmPasswordValid);

    // 모든 필드가 유효할 때만 API 요청
    if (isUsernameValid && isUserRealnameValid && isPhoneValid && isZipValid && isDetailAddressValid && isPasswordValid && isConfirmPasswordValid) {
      try {
        const response = await axios.post('http://localhost:5000/register', {
          username,
          userRealname,
          phone,
          zip,
          address: `${address}, ${detailAddress}`,
          password,
        });
        console.log('Registration successful', response.data);
        navigate('/login');
      } catch (error) {
        console.error('Registration failed', error.response ? error.response.data : error.message);
      }
    }
  };

  const handleKakaoLogin = () => {
    window.location.href = 'http://localhost:5000/auth/kakao';
  };

  const handleNaverLogin = () => {
    window.location.href = 'http://localhost:5000/auth/naver';
  };

  const handlePasswordType = e => {
    setPasswordType(() => {
      if (!passwordType.visivle) {
        return { type: 'text' , visivle: true};
      }
      return { type: 'password', visivle: false};
    })
  }

  const handlePasswordConfirmType = e => {
    setPasswordConfirmType(() => {
      if (!passwordConfirmType.visivle) {
        return { type: 'text' , visivle: true};
      }
      return { type: 'password', visivle: false};
    })
  }

  return (
    <div>
      <div className='register-container'>
     <div className='Reg'>회원가입</div>
      <form onSubmit={handleRegister}>
      <label>아이디</label>
        <div>
          <input type="text" value={username} placeholder='아이디를 입력하세요' onChange={(e) => 
            setUsername(e.target.value)} className='register-input'/>
        </div>
        <div className={usernameMes()}>6-12사이 대소문자 또는 숫자를 입력해주세요.</div>
        <label>이름</label>
        <div>
          <input type="text" value={userRealname} placeholder='이름을 입력하세요' onChange={(e) => 
            setUserRealname(e.target.value)} className='register-input'/>
        </div>
        <p className={userRealnameMes()}>이름을 입력해주세요.</p>
        <label>전화번호</label>
        <div>
          <input type="text" value={phone} placeholder='전화번호를 입력하세요. (- 포함)' onChange={(e) => 
            setPhone(e.target.value)} className='register-input'/>
        </div>
        <p className={phoneMes()}>전화번호를 입력해주세요.</p>
        <label>우편번호</label>
        <div>
            <input type="text" value={zip} placeholder='우편번호' readOnly className='register-zip-input' />
            <button type="button" onClick={() => setIsPostcodeOpen(true)} className='post-open-btn'>주소 검색</button>
        </div>
        <p className={zipMes()}>우편번호를 입력해주세요.</p>
        <label>주소</label>
            <div>
                <input type="text" value={address} placeholder='주소를 입력하세요' readOnly onClick={() => setIsPostcodeOpen(true)} className='register-input' />
            </div>
            {isPostcodeOpen && (
                <div style={{ position: 'absolute', zIndex: 100 }}>
                    <DaumPostcode onComplete={handlePostcodeComplete} autoClose />
                    <button onClick={() => setIsPostcodeOpen(false)} className='post-close-btn'>닫기</button>
                </div>
            )}    
        <div>
        <input type="text" value={detailAddress} placeholder='상세 주소를 입력하세요.' onChange={(e) => 
            setDetailAddress(e.target.value)} className='register-input'/>
        </div>
        <p className={detailAddressMes()}>상세 주소를 입력해주세요.</p>
        <label>비밀번호</label>
        <div>
          <input type={passwordType.type} value={password} placeholder='비밀번호를 입력하세요' onChange={(e) => 
            setPassword(e.target.value)} className='register-input'/>
            <p className={passwordMes()}>숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요.</p>
        </div>
        <label>비밀번호 확인</label>
        <div>
          <input type={passwordConfirmType.type} value={confirmPassword} placeholder='비밀번호를 한번 더 입력하세요' onChange={(e) => 
            setConfirmPassword(e.target.value)} className='register-input'/>
        </div>
        <div className={confirmPasswordMes()}>비밀번호와 일치하지 않습니다.</div>
        <div className='password-visible-icon' onClick={handlePasswordType}>
          { passwordType.visivle ? <FaEye size="25px"/> : <FaEyeSlash size="25px"/>}
        </div>
        <div className='passwordConfirm-visible-icon' onClick={handlePasswordConfirmType}>
          { passwordConfirmType.visivle ? <FaEye size="25px"/> : <FaEyeSlash size="25px"/>}
        </div>
        <button type="submit" className='register-btn'>가입 완료하기</button>
      </form>
      <h2>간편가입</h2>
      <button onClick={handleKakaoLogin} className='kakao-btn'>카카오로 회원가입</button>
      <button onClick={handleNaverLogin} className='naver-btn'>네이버로 회원가입</button> 
      </div>
    </div>
  );
};

export default Register;
