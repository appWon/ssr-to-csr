import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div>
      <div>회원가입</div>
      <Link to={'/'}>메인으로</Link>
      <Link to={'/login'}>로그인페이지 이동</Link>
    </div>
  );
};

export default Signup;
