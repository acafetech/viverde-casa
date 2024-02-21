//Carrossel
import { useState } from "react";
import Button from "../Button";
import "./styles.css";
import { Link } from "react-router-dom";

function Content({ title, text }) {
  return (
      <div>
        <h2>{title}</h2>
        <p className="contrate-text"> {text}</p>
        <Button />
    </div>
  );
}

function ContrateOpcoes() {
  //mudar o background
  const [backgroundImg, setBackgroundImg] = useState('');
  const bgsDisponiveis = [
    'url("src/assets/carousel1.svg")',
    'url("src/assets/carousel2.svg")',
    'url("src/assets/carousel3.svg")'
  ]; 

  const bgPadrao = 'url("src/assets/carousel1.svg")';
  const bgAtual = backgroundImg ? backgroundImg : bgPadrao;

  const mudarBg = (indice) => {
    setBackgroundImg(bgsDisponiveis[indice]);
  };

//mudar o texto/descrição
  const [opt, setOpt] = useState(0);
  function handleOptionChange(option) {
    setOpt(option);
  }

  function contrateCardContent() {
    switch (opt) {
      case 0:
        return (
          <div>
            <Content 
            title="Encontre o profissional ideal" 
            text="Mão de obra qualificada e acessível, perto de você." 
            />
            <Link to="/contrate">
              {" "}
            <Button
              link="src/pages/Forms/WorkerForm/index.jsx"
              title="Encontre um profissional"
              type="find-proh"
              />
              </Link>
          </div>
        );
      case 1:
        return (
            <div>
              <Content 
              title="Ofereça seus serviços" 
              text="Trazemos clientes para você!" 
              />
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
              <Content 
              title="Seja uma empresa parceira" 
              text="O que vamos construir juntes hoje?" 
              />
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
    <main className="carousel" id="carousel" style={{ backgroundImage: bgAtual}}>
      <div className="carousel-inside">
        <div id="contrate-secao">
          <div className="contrate-icons">
            <div
              className="contrate-opcoes"
              onClick={() => { { handleOptionChange(0); mudarBg(0) } }}
            >
              <img src="src\assets\icon-contrate.png" alt="Icone Contrate" />
              <p className="contrate">Contrate</p>
            </div>

            <div
              className="contrate-opcoes"
              onClick={() => { { handleOptionChange(1); mudarBg(1) } }}
            >
              <img src="src\assets\icon-trabalhe.png" alt="Icone Trabalhe" />
              <p className="trabalhe">Trabalhe</p>
            </div>

            <div
              className="contrate-opcoes"
              onClick={() => { handleOptionChange(2); mudarBg(2) }}
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
