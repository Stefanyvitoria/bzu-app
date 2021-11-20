import React from "react";
import './home.css';
import ButtonMenu from '../buttons/button-menu.js';
import TableAluno from '../table/table.js';
import BarGraph from "../graph/bargraph";
import LineGraph from "../graph/linegraph";

export default function HomePage({pageState}) {
    return (
        <div id='home' hidden={pageState !== ""? true: false}>
        <header className='home-header'>
          <ButtonMenu text="Novo" href='#novoaluno'/>
          <ButtonMenu text="Gráfico"/>
        </header>
        <div className='home-content'>
          <div className='home-content-body'>
            <div>
              <div className='home-table-header'>
                ALUNOS CADASTRADOS
              </div>
              <div className='home-table-content'>
                <TableAluno alunos={[
                  ["1","Melo","12345678901","10"], 
                  ["2","Ste","11115689610","9"],
                  ["3","Teg","859322147560","4"],
                  ["4","Vic","77745963215","6"],
                  ["5","Biu","85236941255","7"]]}/>
              </div>
            </div>
            <div className='home-graph'>
              <BarGraph/>
              <LineGraph/>
            </div>
          </div>
        </div>
      </div>
    );
}
