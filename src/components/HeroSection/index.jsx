//Carrossel
import React, { useState } from 'react';
import Button from "../Button"
import "./styles.css";
import { Link } from 'react-router-dom';

function ContrateOpcoes() {
  const [opt, setOpt] = useState(0);

  function handleOptionChange(option) {
    setOpt(option);
  }

  function contrateCardContent() {
    switch (opt) {
      case 0:
        return (
          <div>
            <h2>Encontre o profissional ideal</h2>
            <p className='contrate-text'>Mão de obra qualificada e acessível, perto de você.</p>

            <Button link="/form" title="Encontre um profissional" type="find-proh"/>
            
          </div>
        );
      case 1:
        return (
          <div>
            <h2>Ofereça seus serviços</h2>
            <p className='contrate-text'>Trazemos clientes para você!</p>

            
            <Link to="/src/pages/Forms/WorkerForm"> <Button link="src/pages/Forms/WorkerForm/index.jsx" title="Ofereça seus serviços" type="offer-servh" /> 
 </Link>
          </div>
        );
      default:
        return null;
    }
  }

  return (
    <main className="carousel" id="carousel">
      <div className="carousel-inside">
        <div id="contrate-secao">
          <div className="contrate-icons">

            <div className="contrate-opcoes" onClick={() => handleOptionChange(0)}>
              <img src="src\assets\icon-contrate.png" alt="Icone Contrate" />
              <p className="contrate">Contrate</p>
            </div>

            <div className="contrate-opcoes" onClick={() => handleOptionChange(1)}>
              <img src="src\assets\icon-trabalhe.png" alt="Icone Trabalhe" />
              <p className="trabalhe">Trabalhe</p>
            </div>

            <hr id="contrate-barra" style={{marginLeft: `${0 + opt * 33}%`}} />
         
          </div>
          <div className="contrate-card">{contrateCardContent()}</div>
        </div>
      </div>
    </main>
  );
}

export default ContrateOpcoes;
