import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div>메인페이지</div>
      <Link to={'/login'}>로그인페이지 이동</Link>
      <Link to={'/signup'}>TTTTTTEST</Link>
    </div>
  );
};

export default Home;
