import React from "react";
import {Line} from "react-chartjs-2";
import './linegraph.css';

export default function LineGraph({alunos}) {

    const data = {
        labels: alunos.map((aluno) =>aluno[1]),
        datasets: [
            {
            label: 'Resultado do semestre',
            data: alunos.map((aluno => aluno[3])),
            fill: false,
            backgroundColor: 'rgb(0,122,255)',
            borderColor: 'rgb(0,122,255)',
            },
        ],
    };
    
    const options = {
        scales: {
            y: {
            beginAtZero: true
            }
        },

    };

    return (
    <Line className='linegraph' data={data} options={options} />);
}