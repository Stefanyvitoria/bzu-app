import React from "react";
import './remover.css';

export default function RemoverPage({pageState}) {

    return (
      <div className='remover-content' id='removeraluno' hidden={pageState !== '#removeraluno'? true : false }>
        <header className='remover-content-head'>
          REMOÇÃO DO ALUNO 
        </header>
        <div className='remover-content-body'>
          <p>Matricula</p>
          <input id='remover-matricula' disabled={true} />
          <p>Nome</p>
          <input id='remover-nome'disabled={true} />
          <div id ='t'>
            <p>CPF:</p>
            <p>Avaliação:</p>
            <input id='remover-cpf' disabled={true} />
            <input id='remover-avaliacao' disabled={true} />
          </div> 
        </div>
        <div className='remover-content-footer'>
          <button onClick={null} id='remover-confirm'>
            REMOVER
          </button>
          <button onClick={() => window.history.back()} id='remover-voltar'>
            Voltar
          </button>
        </div>
      </div>
    );
}
