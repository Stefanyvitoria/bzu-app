import React from "react";
import {Bar} from "react-chartjs-2";
import './bargraph.css';

export default function BarGraph() {

    const data = {
        labels: ['1', '2', '3', '4', '5'],
        datasets: [
            {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2],
            fill: false,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgba(255, 99, 132, 0.2)',
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