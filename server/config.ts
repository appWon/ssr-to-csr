import path from 'path';

const CONFIG = {
  // 서버 포트번호
  port: 3000,
  // html 기본경로
  html: path.resolve(__dirname, '../public/', 'index.html'),
  // html 데이터 입력 위치
  tplPoint: /\{\{__react-app__\}\}/,
};

export default CONFIG;
