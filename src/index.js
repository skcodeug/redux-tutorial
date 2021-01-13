// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import { createStore } from "redux";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      state = state + action.payload;
      break;
    case "SUBTRACT":
      state = state - action.payload;
      break;
    default:
      return 0;
  }
  return state;
}

const store = createStore(reducer, 1);

store.subscribe(() => {
  console.log("Store updated!", store.getState())
})

store.dispatch({
  type: "ADD",
  payload: 10
})

store.dispatch({
  type: 'SUBTRACT',
  payload: 100,
});