import './App.css';
import Navbar from './components/navbar/navbar.js'
import ButtonMenu from './components/buttons/button-menu.js';
import TableAluno from './components/table/table';

function App() {
  return (
    <div className="App">
      <Navbar text="Aluno"/>
      <div className='app-body'>
          <header className='app-header'>
            <ButtonMenu text="Novo"/>
            <ButtonMenu text="Gráfico"/>
          </header>
          <div className='app-content'>
            <div className='content-body'>
              <div className='table-header'>
                ALUNOS CADASTRADOS
              </div>
              <div className='content-table'>
                <TableAluno alunos={[
                  ["1","Melo","12345678901","10"], 
                  ["2","Ste","11115689610","9"],
                  ["3","Teg","859322147560","4"],
                  ["4","Vic","77745963215","6"],
                  ["5","Biu","85236941255","7"]]}/>
              </div>
            </div>
          </div>
      </div>
    </div>
    
  );
}

export default App;
