import path from 'path';

const CONFIG = {
  // 서버 포트번호
  port: 3000,
  // port: html 기본경로
  bundleHTML: path.resolve(__dirname, './client/page.html'),
  // html: 데이터 입력 위치
  bundleFolder: path.resolve(__dirname, 'client'),
  // bundleFile: express 정작 파일 등록
  pageContentPoint: /\{\{__react-app__\}\}/,
  // pageContentPoint: html.index 파일에 내용 입력 부분
};

export default CONFIG;
