import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Firstcomponent from './Frontend/Screens/Firstcomponent';
import Herobanner from './Frontend/components/Herobanner';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //how i can add screens
  <React.StrictMode>
    <Firstcomponent />
      <Herobanner />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
