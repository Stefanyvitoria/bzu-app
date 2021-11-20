import React from "react";
import './alterar.css';

export default function AlterarPage({pageState}) {

    return (
      <div className='alterar-content' id='alteraraluno' hidden={pageState !== '#alteraraluno'? true : false }>
        <header className='alterar-content-head'>
          ALTERAÇÃO DO ALUNO 
        </header>
        <div className='alterar-content-body'>
          <p>Matricula</p>
          <input id='alterar-matricula' disabled={true} />
          <p>Nome</p>
          <input id='alterar-nome'/>
          <div id ='t'>
            <p>CPF:</p>
            <p>Avaliação:</p>
            <input id='alterar-cpf' />
            <input id='alterar-avaliacao' />
          </div> 
        </div>
        <div className='alterar-content-footer'>
          <button onClick={null} id='alterar-cadastrar'>
            ALTERAR
          </button>
          <button onClick={() => window.history.back()} id='alterar-voltar'>
            Voltar
          </button>
        </div>
      </div>
    );
}
