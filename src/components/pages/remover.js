import React from "react";
import './remover.css';

function searchAluno(alunos) {
  let matricula = window.location.hash.split("=")[1];
    for (var i=0; i<alunos.length; i++) {
      var alun = alunos[i];
      if (alun[0] === matricula) {
        break
      }  
    }
    return alun;
}

export default function RemoverPage({pageState, alunos=[], setAlunos}) {

  window.addEventListener('hashchange', function(h) {
    if (h.newURL.indexOf('#removeraluno') !== -1) {
      setAluno(searchAluno(alunos))
    }
  });

  const [aluno, setAluno] = React.useState(searchAluno(alunos));

  function removerClick() {
    var a = alunos.filter(function(a) {
      return a[0] !== aluno[0];
    });
    setAlunos(a)
    window.history.back()    
  }

  return (
    <div className='remover-content' id='removeraluno' hidden={pageState.indexOf('#removeraluno') === -1? true : false }>
      <header className='remover-content-head'>
        REMOÇÃO DO ALUNO 
      </header>
      <div className='remover-content-body'>
        <p>Matricula</p>
        <input id='remover-matricula' disabled={true} value={aluno[0]}/>
        <p>Nome</p>
        <input id='remover-nome'disabled={true} value={aluno[1]}/>
        <div id ='t'>
          <p>CPF:</p>
          <p>Avaliação:</p>
          <input id='remover-cpf' disabled={true} value={aluno[2]}/>
          <input id='remover-avaliacao' disabled={true} value={aluno[3]}/>
        </div> 
      </div>
      <div className='remover-content-footer'>
        <button onClick={removerClick} id='remover-confirm'>
          REMOVER
        </button>
        <button onClick={() => window.history.back()} id='remover-voltar'>
          Voltar
        </button>
      </div>
    </div>
  );
}
