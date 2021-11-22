import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


var alunos =[["1","João Melo","123.456.789-01","10"]]


ReactDOM.render(
  <React.StrictMode>
    <App alu={alunos}/>
  </React.StrictMode>,
  document.getElementById('root')
);