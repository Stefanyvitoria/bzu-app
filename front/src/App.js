import React from 'react';
import './App.css';
import Navbar from './components/navbar/navbar.js';
import HomePage from './components/pages/home.js';
import NovoPage from './components/pages/novo.js';
import AlterarPage from './components/pages/alterar';
import RemoverPage from './components/pages/remover';
import api  from "./services/api";

var x = true;
function App({alu}) {

  const [pageState, setPageState] = React.useState(window.location.hash);

  const [alunos, setAlunos] = 
    React.useState(alu);
  
  React.useEffect(() => {
    if (x) {api.get('alunos').then(function (response) {
      setAlunos(response.data['alunos'])
    })}
    x = false
  });

  window.addEventListener('hashchange', function() {
    setPageState(window.location.hash)
    x = true;
  });

  return (
    <div className="App">
      <Navbar text="Aluno"/>
      <div className='app-body'>
        <HomePage pageState={pageState} alunos={alunos} setAlunos={setAlunos} />
        <NovoPage pageState={pageState} alunos={alunos} setAlunos={setAlunos}/>
        <AlterarPage pageState={pageState} alunos={alunos} setAlunos={setAlunos}/>
        <RemoverPage pageState={pageState} alunos={alunos} setAlunos={setAlunos} />
        
      </div>
    </div>
  );
}

export default App;
