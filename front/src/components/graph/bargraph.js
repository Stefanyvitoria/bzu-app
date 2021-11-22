import React from "react";
import {Bar} from "react-chartjs-2";
import './bargraph.css';

export default function BarGraph({alunos=[]}) {
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
    <Bar className='bargraph' data={data} options={options} />);
}