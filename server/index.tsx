// Express
import express from 'express';

// React
import React from 'react';
import Route from '../client/App';
import { store } from '../client/store';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet as styledStyleSheet } from 'styled-components';
import { ServerStyleSheets as materialStyleSheet } from '@material-ui/core/styles';

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
  const materialSheet = new materialStyleSheet();
  const styledComponentSheet = new styledStyleSheet();

  const bodyData = renderToString(
    styledComponentSheet.collectStyles(
      materialSheet.collect(
        <StaticRouter location={req.url}>
          <Route />
        </StaticRouter>
      )
    )
  );

  const FileRead = promisify(readFile);
  const htmlStringData = await FileRead(CONFIG.bundleHTML).then(res =>
    res.toString()
  );

  // 추가 : HTML body 데이터, styledComponet CSS, material-ui CSS
  const materialCss = materialSheet.toString();
  const styledComponentCss = styledComponentSheet.getStyleTags();
  const html = htmlStringData
    .replace(CONFIG.pageContentPoint, bodyData)
    .replace(CONFIG.addStyledCss, styledComponentCss)
    .replace(CONFIG.addMaterialUi, `<style>${materialCss}</style>`);

  res.send(html);
  // styledComponentSheet.seal();
});

//서버 실행
app.listen(CONFIG.port, () => {
  console.log(`서버 시작 PORT = ${CONFIG.port}`);
});
