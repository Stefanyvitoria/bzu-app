import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


var alunos =[["1","Melo11","123.456.789-01","10"], 
["2","Ste111","111.156.896-10","9"],
["3","Teg111","859.322.1475-60","4"],
["4","Vic111","777.459.632-15","6"],
["5","Biu111","852.369.412-55","7"]]


ReactDOM.render(
  <React.StrictMode>
    <App alu={alunos}/>
  </React.StrictMode>,
  document.getElementById('root')
);