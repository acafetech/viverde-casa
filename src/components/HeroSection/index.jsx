//Carrossel
import { useState } from "react";
import Button from "../Button";
import "./styles.css";
import { Link } from "react-router-dom";

function ContrateOpcoes() {
  const [opt, setOpt] = useState(0);

  function handleOptionChange(option) {
    setOpt(option);
  }

  function contrateCardContent() {
    switch (opt) {
      case 0:
        return (
          <div style={{background: `url($../../assets/carousel1.svg})`}}>
            <h2>Encontre o profissional ideal</h2>
            <p className="contrate-text">
              Mão de obra qualificada e acessível, perto de você.
            </p>

            <Button
              link="/contrate"
              title="Encontre um profissional"
              type="find-proh"
            />
            
          </div>
        );
      case 1:
        return (
          <div style={{background: `url($../../assets/carousel2.svg})`}}>
            <h2>Ofereça seus serviços</h2>
            <p className="contrate-text">Trazemos clientes para você!</p>

            <Link to="/trabalhe">
              {" "}
              <Button
                link="src/pages/Forms/WorkerForm/index.jsx"
                title="Ofereça seus serviços"
                type="offer-servh"
              />
            </Link>
          </div>
        );
        case 2:
          return (
            <div>
              <h2>Seja uma empresa parceira</h2>
              <p className="contrate-text">O que vamos construir juntes hoje?</p>
  
              <Link to="/parceria">
                {" "}
                <Button
                  link="src/pages/Forms/WorkerForm/index.jsx"
                  title="Seja uma parceira(o)"
                  type="offer-parth"
                />
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
            <div
              className="contrate-opcoes"
              onClick={() => handleOptionChange(0)}
            >
              <img src="src\assets\icon-contrate.png" alt="Icone Contrate" />
              <p className="contrate">Contrate</p>
            </div>

            <div
              className="contrate-opcoes"
              onClick={() => handleOptionChange(1)}
            >
              <img src="src\assets\icon-trabalhe.png" alt="Icone Trabalhe" />
              <p className="trabalhe">Trabalhe</p>
            </div>

            <div
              className="contrate-opcoes"
              onClick={() => handleOptionChange(2)}
            >
              <img src="src\assets\icon-parceria.png" alt="Icone Parceria" className="icon-part" />
              <p className="parceria">Parceria</p>
            </div>

            <hr
              id="contrate-barra"
              style={{ marginLeft: `${0 + opt * 33}%` }}
            />
          </div>
          <div className="contrate-card">{contrateCardContent()}</div>
        </div>
      </div>
    </main>
  );
}

export default ContrateOpcoes;
