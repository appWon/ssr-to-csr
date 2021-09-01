// Express
import express from 'express';

// React
import React from 'react';
import Route from '../client/App';
import { store } from '../client/store';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';

// Setting Util
import path from 'path';
import CONFIG from './config';
import { readFile } from 'fs';
import { promisify } from 'util';

const app = express();

// CSR
// Client File 미들웨어사용
app.use(express.static(CONFIG.bundleFolder));

// SSR
app.use(async (req, res, next) => {
  const view = renderToString(
    <StaticRouter location={req.url}>
      <Route />
    </StaticRouter>
  );

  const FileRead = promisify(readFile);

  // HTML => String
  const htmlToString = await FileRead(CONFIG.bundleHTML).then(res =>
    res.toString()
  );

  // HTML <id='root'> 내용 추가
  const html = htmlToString.replace(CONFIG.pageContentPoint, view);

  res.send(html);
});

//서버 실행
app.listen(CONFIG.port, () => {
  console.log(`서버 시작 PORT = ${CONFIG.port}`);
});
