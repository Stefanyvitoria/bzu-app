import React from "react";
import './alterar.css';

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

export default function AlterarPage({pageState, alunos=[], setAlunos}) {

  window.addEventListener('hashchange', function(h) {
    if (h.newURL.indexOf('#alteraraluno') !== -1) {
      setAluno(searchAluno(alunos))
    }
  });

  const [aluno, setAluno] = React.useState(searchAluno(alunos));

  function changeAluno(value, i) {
    if (i===1) {
      setAluno([aluno[0], value, aluno[2], aluno[3]]);
    } else if(i===2) {
      setAluno([aluno[0], aluno[1], value,  aluno[3]]);
    }else if(i===3) {
      setAluno([aluno[0], aluno[1], aluno[2], value]);
    }
  }

  function alterarClick() {
    var a = alunos.filter(function(a) {
      return a[0] !== aluno[0];
    });
    setAlunos([aluno, ...a]);
    window.history.back()    
  }

  return (
    <div className='alterar-content' id='alteraraluno' hidden={pageState.indexOf('#alteraraluno') === -1? true : false }>
      <header className='alterar-content-head'>
        ALTERAÇÃO DO ALUNO 
      </header>
      <div className='alterar-content-body'>
        <p>Matricula</p>
        <input id='alterar-matricula' type='text' disabled={true} value={aluno[0]}/>
        <p>Nome</p>
        <input id='alterar-nome' value={aluno[1]} onChange={e => changeAluno(e.target.value, 1)}/>
        <div id ='t'>
          <p>CPF:</p>
          <p>Avaliação:</p>
          <input id='alterar-cpf' value={aluno[2]} onChange={e => changeAluno(e.target.value, 2)} />
          <input id='alterar-avaliacao' value={aluno[3]} onChange={e => changeAluno(e.target.value, 3)} />
        </div>
      </div>
      <div className='alterar-content-footer'>
        <button onClick={alterarClick} id='alterar-confirm'>
          ALTERAR
        </button>
        <button onClick={() => window.history.back()} id='alterar-voltar'>
          Voltar
        </button>
      </div>
    </div>
  );
}
