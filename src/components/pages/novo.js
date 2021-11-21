import React from "react";
import './novo.css';

function maxIndexPlus1(alunos) {
  let max = 0;
  for (var i=0; i<alunos.length; i++) {
    let aluno = alunos[i];
    if ( aluno[0] > max) {
      max = aluno[0]
    }
  }
  return Number(max) + 1;
}

export default function NovoPage({pageState, alunos, setAlunos}) {

  window.addEventListener('hashchange', function(h) {
    if (h.newURL.indexOf('#novoaluno') !== -1) {
      let nome = document.querySelector("#novo-nome");
      let cpf = document.querySelector("#novo-cpf");
      let avaliacao = document.querySelector("#novo-avaliacao");
      nome.value = '';
      cpf.value = '';
      avaliacao.value = '';
      setAluno(["", "", "", ""]);
    }
  });

  const [aluno, setAluno] = React.useState(["", "", "", ""]);

  function changeAluno(value, i) {
    if (i===1) {
      setAluno([aluno[0], value, aluno[2], aluno[3]]);
    } else if(i===2) {
      setAluno([aluno[0], aluno[1], value,  aluno[3]]);
    }else if(i===3) {
      setAluno([aluno[0], aluno[1], aluno[2], value]);
    }
  }

  function novoClick() {
    var a = [maxIndexPlus1(alunos), aluno[1], aluno[2], aluno[3]];
    setAlunos([...alunos, a])
    window.history.back()    
  }

  return (
    <div className='novo-content' id='novoaluno' hidden={pageState !== '#novoaluno'? true : false }>
      <header className='novo-content-head'>
        CADASTRAR ALUNO
      </header>
      <div className='novo-content-body'>
        <p>Nome</p>
        <input id='novo-nome' value={aluno[1]} onChange={e => changeAluno(e.target.value, 1)}/>
        <div id ='t'>
          <p>CPF:</p>
          <p>Avaliação:</p>
          <input id='novo-cpf' value={aluno[2]} onChange={e => changeAluno(e.target.value, 2)}/>
          <input id='novo-avaliacao' value={aluno[3]} onChange={e => changeAluno(e.target.value, 3)}/>
        </div> 
      </div>
      <div className='novo-content-footer'>
        <button onClick={novoClick} id='novo-confirm'>
          CADASTRAR
        </button>
        <button onClick={() => window.history.back()} id='novo-voltar'>
          Voltar
        </button>
      </div>
    </div>
  );
}
