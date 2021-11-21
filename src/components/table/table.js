import React from "react";
import './table.css';
import {ButtonActionAlterar, ButtonActionRemover} from "../buttons/button-action"; 

export default function TableAluno({alunos=[]}) {
    var key = 0;

    return (
        <table className='table'>
            <thead>
                <tr className='table-row'>
                    <th>Matricula</th>
                    <th>Nome</th>
                    <th>Cpf</th>
                    <th>Avaliação</th>
                    <th>Ações</th>
                </tr>
            </thead>
            
            <tbody className='table-body'>
                {alunos.map(aluno => {
                    key+=1
                    
                    return (
                        <tr key={key} className='table-row'>
                            <td>{aluno[0]}</td>
                            <td>{aluno[1]}</td>
                            <td>{aluno[2]}</td>
                            <td>{aluno[3]}</td>
                            <td>
                                <ButtonActionAlterar matricula={aluno[0]}/>
                                <ButtonActionRemover matricula={aluno[0]}/>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}