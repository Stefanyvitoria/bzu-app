import React from 'react';
import './App.css';
import Navbar from './components/navbar/navbar.js';
import HomePage from './components/pages/home.js';
import NovoPage from './components/pages/novo.js';
import AlterarPage from './components/pages/alterar';
import RemoverPage from './components/pages/remover';
function App() {

  const [pageState, setPageState] = React.useState(window.location.hash);

  window.addEventListener('hashchange', function() {
    setPageState(window.location.hash)
  });

  return (
    <div className="App">
      <Navbar text="Aluno"/>
      <div className='app-body'>
        <HomePage pageState={pageState} />
        <NovoPage pageState={pageState} />
        <AlterarPage pageState={pageState} />
        <RemoverPage pageState={pageState} />
        
      </div>
    </div>
  );
}

export default App;
