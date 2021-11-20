import React from "react";
import './table.css';
import {ButtonActionAlterar, ButtonActionRemover} from "../buttons/button-action"; 

export default function TableAluno({alunos=[]}) {
    // const alunos = [["1","Melo","12345678901","10"], ["2","Ste","11115689610","9"]];
    
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
            
            <tbody>
                {alunos.map(aluno => {
                    return (
                        <tr key={aluno[0]} className='table-row'>
                            <td>{aluno[0]}</td>
                            <td>{aluno[1]}</td>
                            <td>{aluno[2]}</td>
                            <td>{aluno[3]}</td>
                            <td>
                                <ButtonActionAlterar text='ALTERAR' />
                                <ButtonActionRemover text='REMOVER' />
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}