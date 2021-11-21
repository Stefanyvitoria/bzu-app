import React from 'react';
import './App.css';
import Navbar from './components/navbar/navbar.js';
import HomePage from './components/pages/home.js';
import NovoPage from './components/pages/novo.js';
import AlterarPage from './components/pages/alterar';
import RemoverPage from './components/pages/remover';
function App() {

  const [alunos] = React.useState(
    [
      ["1","Melo","12345678901","10"], 
      ["2","Ste","11115689610","9"],
      ["3","Teg","859322147560","4"],
      ["4","Vic","77745963215","6"],
      ["5","Biu","85236941255","7"]
    ]);

  const [pageState, setPageState] = React.useState(window.location.hash);

  window.addEventListener('hashchange', function() {
    setPageState(window.location.hash)
  });

  return (
    <div className="App">
      <Navbar text="Aluno"/>
      <div className='app-body'>
        <HomePage pageState={pageState} alunos={alunos} />
        <NovoPage pageState={pageState} />
        <AlterarPage pageState={pageState} />
        <RemoverPage pageState={pageState} />
        
      </div>
    </div>
  );
}

export default App;
