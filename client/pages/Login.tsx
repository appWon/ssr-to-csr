import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
      <div>여기는 로그인 페이지</div>
      <Link to={'/'}>메인페이지 이동</Link>
      <Link to={'/signup'}>회원가입</Link>
    </div>
  );
};

export default Login;
