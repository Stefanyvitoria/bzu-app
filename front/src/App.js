import React from 'react';
import './App.css';
import Navbar from './components/navbar/navbar.js';
import HomePage from './components/pages/home.js';
import NovoPage from './components/pages/novo.js';
import AlterarPage from './components/pages/alterar';
import RemoverPage from './components/pages/remover';



function App() {

  const [pageState, setPageState] = React.useState(window.location.hash);

  const [alunos, setAlunos] = 
    React.useState([
        ["1","Melo11","123.456.789-01","10"], 
        ["2","Ste111","111.156.896-10","9"],
        ["3","Teg111","859.322.1475-60","4"],
        ["4","Vic111","777.459.632-15","6"],
        ["5","Biu111","852.369.412-55","7"]
      ]);

  window.addEventListener('hashchange', function() {
    setPageState(window.location.hash)
  });

  return (
    <div className="App">
      <Navbar text="Aluno"/>
      <div className='app-body'>
        <HomePage pageState={pageState} alunos={alunos} setAlunos={setAlunos}/>
        <NovoPage pageState={pageState} alunos={alunos} setAlunos={setAlunos}/>
        <AlterarPage pageState={pageState} alunos={alunos} setAlunos={setAlunos}/>
        <RemoverPage pageState={pageState} alunos={alunos} setAlunos={setAlunos} />
        
      </div>
    </div>
  );
}

export default App;
