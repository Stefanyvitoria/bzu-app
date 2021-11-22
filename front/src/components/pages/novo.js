import React from "react";
import './novo.css';
import api from '../../services/api.js'


function searcCPF(alunos, cpf) {
  let aluno = null;
  for (var i=0; i<alunos.length;i++ ){
    aluno = alunos[i];
    if(cpf === aluno[2]) {
      return false;
    }
  }
  return true;
}

export default function NovoPage({pageState, alunos, setAlunos, x}) {

  window.addEventListener('hashchange', function(h) {
    if (h.newURL.indexOf('#novoaluno') !== -1) {
      var nome = document.querySelector("#novo-nome");
      var cpf = document.querySelector("#novo-cpf");
      var avaliacao = document.querySelector("#novo-avaliacao");
      nome.value = ' ';
      cpf.value = ' ';
      avaliacao.value = ' ';
      nome.setCustomValidity('');
      cpf.setCustomValidity('');
      avaliacao.setCustomValidity('');
    }
  });

  async function novoClick() {
    // validação dos requesitos
    var nome = document.querySelector("#novo-nome");
    var cpf = document.querySelector("#novo-cpf");
    var avaliacao = document.querySelector("#novo-avaliacao");

    var nomesemespaco = nome.value.replace(" ", "")
    while (nomesemespaco.indexOf(" ") !== -1) {
      nomesemespaco = nomesemespaco.replace(" ", "")
    }

    if (!nomesemespaco.match(/^[a-z0-9]+$/i) || nome.value.length < 6 || nome.value.length > 40) {
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
      return;
    } else if (!searcCPF(alunos,cpf.value)) {
      cpf.setCustomValidity('invalid');
      window.alert("Campo inválido! \nO CPF é inválido.")
      return;
    } else {
      cpf.setCustomValidity('');
    }

    avaliacao.value = avaliacao.value.replace(" ", "")
    if (!avaliacao.value.match(/^[0-9]+$/) || avaliacao.value > 10 || avaliacao.value < 0) {
      avaliacao.setCustomValidity('invalid');
      window.alert("Campo inválido! \n A Avaliacao deve conter somente números e estar entre 0 e 10.")
      return;
    } else {
      avaliacao.setCustomValidity('');
    }

    var json = {nome : nome.value, cpf: cpf.value, avaliacao: avaliacao.value}
    await api.post('incluiraluno/', json )
    window.history.back()
  }

  function mascara() {
    const tamanhoInput = document.getElementById('novo-cpf').maxLength;
    let valorInput = document.getElementById('novo-cpf').value;

    let valorSemPonto = document.getElementById('novo-cpf').value.replace(/([^0-9])+/g, "");
    const mascaracpf = valorInput.replace(/[^\d]/g, "").replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    valorInput.length === tamanhoInput ? document.getElementById('novo-cpf').value = mascaracpf : document.getElementById('novo-cpf').value = valorSemPonto;
  
  };

  return (
    <div className='novo-content' id='novoaluno' hidden={pageState !== '#novoaluno'? true : false }>
      <header className='novo-content-head'>
        CADASTRAR ALUNO
      </header>
      <div className='novo-content-body'>
        <p>Nome:*</p>
        <input id='novo-nome' 
          required={true}/>
        <div id ='t'>
          <p>CPF:*</p>
          <p>Avaliação:*</p>
          <input id='novo-cpf' 
            maxLength={11} 
            onInput={mascara}/>
          <input id='novo-avaliacao'
            required={true}/>
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
