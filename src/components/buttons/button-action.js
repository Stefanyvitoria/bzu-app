import React from "react";
import './button-action.css';

export function ButtonActionAlterar({matricula}) {
    return (
        <a href={"#alteraraluno="+matricula} className='button-alterar'>
            ALTERAR
        </a>
    );
}

export function ButtonActionRemover({matricula}) {
    return (
        <a href={'#removeraluno='+matricula} className='button-remover'>
            REMOVER
        </a>
    );
}