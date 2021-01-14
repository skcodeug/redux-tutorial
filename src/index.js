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

const initialState = {
  result: 1,
  lastValues: [],
  username: 'Max'
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      state = {
        ...state,
        result: state.result + action.payload,
        lastValues: [...state.lastValues, action.payload]
      };
      break;
    case "SUBTRACT":
      state = {
        ...state,
        result: state.result - action.payload,
        lastValues: [...state.lastValues, action.payload]
      };
      break;
    default:
      return state;
  }
  return state;
}

const store = createStore(reducer);

store.subscribe(() => {
  console.log("Store updated!", store.getState())
})

store.dispatch({
  type: "ADD",
  payload: 100
})

store.dispatch({
  type: 'ADD',
  payload: 22,
});

store.dispatch({
  type: 'SUBTRACT',
  payload: 80,
});