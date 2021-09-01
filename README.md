# React SSR = > CSR

```
SSR-CSR
├── client
		└──  .... 세팅파일
├── config
		├── webpack.client.ts
		└── webpack.server.ts
├── public
		└──  index.html
├── server
		└──  .... 세팅파일
├── .eslintrc.js
├── .prettier.js
├── Dockerfile - 작성중
├── nginx.conf - 작성중
├── package-lock.json
├── package.json
└── tsconfig.json
```

React 로 첫 렌더링을 SSR(server-side-rendering)을 할 수 있도록 작성하였다.

프로젝터는 크게 2가지로 나눠진다.

>client - 기본 React 앱
>
>Server - SSR을 적용하기 위해 사용하는 서버

## 메모

### CSR 적용

```javascript
app.use(express.static(CONFIG.bundleFolder));
```

미들웨어에 정적파일로 번들 폴더를 적용을 해야 CSR 을 사용할 수 있다.



## SSR 적용

```javascript
app.use(async (req, res) => {
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
```

SSR은 서버에서 화면을 그려줄 HTML string 데이터를 받으면서 적용이된다. react 에서는 라우터가 있지만 `StaticRouter`을 이용하여 접속한 `url` 에 맞는 컴포넌터를 가져와서 string으로 변환 시켜준다.

그 후, base가 될 HTML 파일도 string으로 가지고 와서 접속한 url에 맞는 컴포넌트를 html에 끼워 넣어 주고 response 해주면 된다.



## hydrate

```javascript
ReactDOM.hydrate(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
```

SSR 에서 가장 중요한 요소일거다. 

> [`render()`](https://ko.reactjs.org/docs/react-dom.html#render)와 동일하지만 HTML 콘텐츠가 [`ReactDOMServer`](https://ko.reactjs.org/docs/react-dom-server.html)로 렌더링 된 컨테이너에 이벤트를 보충하기 위해 사용됩니다. React는 기존 마크업에 이벤트 리스너를 연결합니다.

즉, 서버에서 정적인 데이터를 이벤트에 의해서 동적인 데이터 형태로 변환 하는 프로세서라고 해석할 수 있을거 같다.

## 개발예정

>- Docker
>- nginx
>- Redux



