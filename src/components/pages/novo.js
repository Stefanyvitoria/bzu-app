import React from "react";
import './novo.css';

export default function NovoPage({pageState}) {

    return (
      <div className='novo-content' id='novoaluno' hidden={pageState !== '#novoaluno'? true : false }>
        <header className='novo-content-head'>
          CADASTRAR ALUNO
        </header>
        <div className='novo-content-body'>
          <p>Nome</p>
          <input id='novo-nome'/>
          <div id ='t'>
            <p>CPF:</p>
            <p>Avaliação:</p>
            <input id='novo-cpf' />
            <input id='novo-avaliacao' />
          </div> 
        </div>
        <div className='novo-content-footer'>
          <button onClick={null} id='novo-cadastrar'>
            CADASTRAR
          </button>
          <button onClick={() => window.history.back()} id='novo-voltar'>
            Voltar
          </button>
        </div>
      </div>
    );
}
