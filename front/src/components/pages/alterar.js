import React from "react";
import './alterar.css';
import api from '../../services/api.js'

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
      var nome = document.querySelector("#alterar-nome");
      var cpf = document.querySelector("#alterar-cpf");
      var avaliacao = document.querySelector("#alterar-avaliacao");
      nome.setCustomValidity('');
      cpf.setCustomValidity('');
      avaliacao.setCustomValidity('');
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

  async function alterarClick() {

    var nome = document.querySelector("#alterar-nome");
    var cpf = document.querySelector("#alterar-cpf");
    var avaliacao = document.querySelector("#alterar-avaliacao");

    var nomesemespaco = nome.value.replace(" ", "")
    while (nomesemespaco.indexOf(" ") !== -1) {
      nomesemespaco = nomesemespaco.replace(" ", "")
    }

    if (!aluno[1].match(/^[a-z0-9]+$/i) || nome.value.length < 6 || nome.value.length > 40) {
      nome.setCustomValidity('invalid');
      window.alert("Campo inválido! \nO Nome deve ter antre 6 e 40 caracteres e não pode conter símbolos.")
      console.log(nome.value.match(/^[a-z0-9]+$/i))
      return;
    } else {
      nome.setCustomValidity('');
    }

    if (!cpf.value.match(/(\d{3})(.)(\d{3})(.)(\d{3})(-)(\d{2})/)) {
      cpf.setCustomValidity('invalid');
      window.alert("Campo inválido! \nO CPF deve ter 11 caracteres e conter somente números.")
      console.log(cpf.value)
      return;
    } else {
      cpf.setCustomValidity('');
    }

    if (!avaliacao.value.match(/^[0-9]+$/) || avaliacao.value > 10 || avaliacao.value < 0) {
      avaliacao.setCustomValidity('invalid');
      window.alert("Campo inválido! \n A Avaliacao deve conter somente números e estar entre 0 e 10.")
      return;
    } else {
      avaliacao.setCustomValidity('');
    }

    var json = {nome : nome.value, cpf: cpf.value, avaliacao: avaliacao.value}
    await api.put(`alteraraluno/${aluno[0]}`, json )
    window.history.back()
  }

  function mascara() {
    const tamanhoInput = document.getElementById('alterar-cpf').maxLength;
    let valorInput = document.getElementById('alterar-cpf').value;

    let valorSemPonto = document.getElementById('alterar-cpf').value.replace(/([^0-9])+/g, "");
    const mascaracpf = valorInput.replace(/[^\d]/g, "").replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    valorInput.length === tamanhoInput ? document.getElementById('alterar-cpf').value = mascaracpf : document.getElementById('novo-cpf').value = valorSemPonto;
  
  };

  return (
    <div className='alterar-content' id='alteraraluno' 
      hidden={pageState.indexOf('#alteraraluno') === -1? true : false }>
      <header className='alterar-content-head'>
        ALTERAÇÃO DO ALUNO 
      </header>
      <div className='alterar-content-body'>
        <p>Matricula</p>
        <input id='alterar-matricula' type='text' disabled={true} value={aluno[0]}/>
        <p>Nome:*</p>
        <input id='alterar-nome' value={aluno[1]} onChange={e => changeAluno(e.target.value, 1)}/>
        <div id ='t'>
          <p>CPF:*</p>
          <p>Avaliação:*</p>
          <input id='alterar-cpf' 
            value={aluno[2]} 
            onChange={e => changeAluno(e.target.value, 2)} 
            maxLength={11} 
            onInput={mascara}/>
          <input id='alterar-avaliacao' value={aluno[3]} 
            onChange={e => changeAluno(e.target.value, 3)} />
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
