import React from 'react';
// 물리 DOM
// let pPhysicalDOM = document.createElement('p');
// pPhysicalDOM.innerText = 'Hello physical DOM world!'
// document.body.appendChild(pPhysicalDOM);

import ReactDOM from 'react-dom/client'
// 가상 DOM
const pVirtualDOM = React.createElement('p', null, 'Hello virtual DOM world!')
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
// render가 없으면 pVirtualDOM은 화면에 나타나지 않는다.
// 생성만 되어있을 뿐 아직 가상 DOM 트리에 추가되지않음
// pVirtualDOM은 document.body.appendChild(pVirtualDOM)으로 못 나타낸다 => 해당 함수가 이해할 수 있는 DOM 객체가 아니기 때문.
// appendChild의 기능을 render가 해주는 것이다. => 가상 DOM을 물리 DOm으로 전환해주는 기능.
// 물리 DOM으로 작업을 하게되면 최초 렌더링 이후 트리 구조에 변화가 생겼을 때 적용하는게 어려워진다. 왜?
// id 또는 class를 가져와서 물리 DOm을 변경해주어야 하는데 모든 이름을 다르게 짓기도 힘들고 찾는 것도 일이기에 이를 해결하는 것이 가상 DOM
root.render(pVirtualDOM)


// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
