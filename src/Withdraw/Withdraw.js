import React, { useState } from 'react';
import './Withdraw.css';
import { useNavigate } from 'react-router-dom';

const PasswordInput = ({ onPasswordSubmit }) => {
  const [password, setPassword] = useState('');

  const handleChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    if (password) {
      onPasswordSubmit(password);
    } else {
      alert('비밀번호를 입력해 주시겠습니까?');
    }
  };

  return (
    <div className="container">
      <h2>비밀번호를 입력해 주시겠습니까</h2>
      <input 
        type="password" 
        value={password} 
        onChange={handleChange} 
        className="input" 
      />
      <button onClick={handleSubmit} className="button">
        비밀번호 확인
      </button>
    </div>
  );
};

const ConfirmExit = ({ onCancel, onConfirm }) => {
  return (
    <div className="container">
      <h2>정말로 탈퇴 하실건가요?</h2>
      <div>
        <button onClick={onCancel} className="button">
          취소하기
        </button>
        <button onClick={onConfirm} className="button">
          탈퇴하기
        </button>
      </div>
    </div>
  );
};

const App = () => {
  const [isPasswordConfirmed, setIsPasswordConfirmed] = useState(false);
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handlePasswordSubmit = (password) => {
    setPassword(password);
    setIsPasswordConfirmed(true);
  };

  const handleCancel = () => {
    setIsPasswordConfirmed(false);
    setPassword('');
  };

  const handleConfirm = () => {
    alert('탈퇴가 완료되었습니다.');
    navigate('/Mypage/Withdraw');
  };

  return (
    <div>
      {isPasswordConfirmed ? (
        <PasswordInput onPasswordSubmit={handlePasswordSubmit} />
      ) : (
        <ConfirmExit onCancel={handleCancel} onConfirm={handleConfirm} />
      )}
    </div>
  );
};

export default App;
