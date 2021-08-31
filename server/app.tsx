import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Routes from '../client/routes';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';

import { store } from '../client/store';

import express from 'express';

import CONFIG from './config';

import { readFile } from 'fs';
import { promisify } from 'util';

import path from 'path';

const FileRead = promisify(readFile);

const main = async () => {
  const app = express();

  // HTML => String
  const htmlToString = await FileRead(CONFIG.html).then(result =>
    result.toString()
  );
  // HTML <id='root'> 내용 변경
  const test = (renderToString: string) =>
    // htmlToString.replace(CONFIG.tplPoint, renderToString);

    // CSR
    app.use('/public/', express.static(path.resolve(__dirname, '../public')));

  // SSR
  app.use((req, res) => {
    const url = req.url;
    const view = ReactDOMServer.renderToString(
      <StaticRouter location={url === '/' ? 'home' : url}>
        <Routes />
      </StaticRouter>
    );
    res.send(test(view));
  });

  //서버 실행
  app.listen(CONFIG.port, () => {
    console.log(`서버 시작 PORT = ${CONFIG.port}`);
  });
};

main();
