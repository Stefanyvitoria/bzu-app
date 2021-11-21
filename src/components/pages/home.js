import React from "react";
import './home.css';
import ButtonMenu from '../buttons/button-menu.js';
import TableAluno from '../table/table.js';
import BarGraph from "../graph/bargraph";
import LineGraph from "../graph/linegraph";

export default function HomePage({pageState, alunos}) {
    return (
        <div id='home' hidden={pageState === "" || pageState === "#graph"? false: true}>
        <header className='home-header'>
          <ButtonMenu text="Novo" href='#novoaluno'/>
          <ButtonMenu text="Gráfico" href={pageState === '#graph'? '#': '#graph'}/>
        </header>
        <div className='home-content'>
          <div className='home-content-body'>
            <div>
              <div className='home-table-header'>
                ALUNOS CADASTRADOS
              </div>
              <div className='home-table-content'>
                <TableAluno alunos={alunos}/>
              </div>
            </div>
            <div className='home-graph' hidden={pageState !== "#graph"? true: false}>
              <BarGraph alunos={alunos}/>
              <LineGraph alunos={alunos}/>
            </div>
          </div>
        </div>
      </div>
    );
}
