import React, { useState } from 'react';
import './Login.css'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login = ({ setToken }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameMessage, setUsernameMessage] = useState("");
  const [isUsername, setIsUsername] = useState(false);
  const [passwordMessage, setPasswordMessage] = useState("");
  const [isPassword, setIsPassword] = useState(false);

  const navigate = useNavigate();


  const handleLogin = async (e) => {
    e.preventDefault();

    setUsername(username);

    setPassword(password);

    try {
      const response = await axios.post('http://localhost:5000/login', { username, password });
      setToken(response.data.token);
      console.log('Login successful');
      navigate('/');
    } catch (error) {
      if (!username) {
        setUsernameMessage("아이디를 입력해주세요.");
        setIsUsername(false);
      } else {
        setUsernameMessage("");
        setIsUsername(true);
      }
      if (!password) {
        setPasswordMessage("비밀번호를 입력해주세요.");
        setIsPassword(false);
      } else {
        setPasswordMessage("아이디 또는 비밀번호가 틀렸습니다.");
        setIsPassword(true);
      }
    
      console.error('Login failed', error);
    }
  };

  const handleKakaoLogin = () => {
    window.location.href = 'http://localhost:5000/auth/kakao';
  };

  const handleNaverLogin = () => {
    window.location.href = 'http://localhost:5000/auth/naver';
  };


  return (
    <div>
      <div className='login-container'>
        <form onSubmit={handleLogin}>
        <div className='log'>로그인</div>
          <label>아이디</label>
          <div>
            <input type="text" value={username} placeholder='아이디' onChange={(e) => 
              setUsername(e.target.value)} className='login-input'/>
              <div className="message">{usernameMessage}</div>
          </div>
          <label>비밀번호</label>
          <div>
            <input type="password" value={password} placeholder='비밀번호' onChange={(e) => 
              setPassword(e.target.value)} className='login-input'/>
              <div className="message">{passwordMessage}</div> 
          </div>
          <button type="submit" className='login-btn'>로그인</button>
        </form>
        <h2>또는</h2>
        <button onClick={handleKakaoLogin} className='kakao-btn'>카카오로 로그인</button>
        <button onClick={handleNaverLogin} className='naver-btn'>네이버로 로그인</button>
        <p>회원이 아니시라면?</p>
        <Link to= "/register" className="goRegister">회원가입</Link>
      </div>
    </div>
  );
};

export default Login;
