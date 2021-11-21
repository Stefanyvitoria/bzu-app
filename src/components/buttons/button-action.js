import React from "react";
import './button-action.css';

export function ButtonActionAlterar({aluno}) {
    return (
        <a href={"#alteraraluno="+aluno[0]} className='button-alterar'>
            ALTERAR
        </a>
    );
}

export function ButtonActionRemover() {
    return (
        <a href='#removeraluno' className='button-remover'>
            REMOVER
        </a>
    );
}