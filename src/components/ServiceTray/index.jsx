// esteira de serviços
import "./styles.css";

function ServiceTray() {

  return (
  <div className="services" id="services">
    <div className="services-row">

      <div className="services-row-card">
        <a href="#" className="card-clicavel" id="planejar-decorar">
          <img
            className="services-image"
            src="src\assets\planejar-decorar.png"
            alt="planejar ou decorar"
          />
          <p>Planejar ou decorar</p>
        </a>
      </div>

      <div className="services-row-card">
        <a href="#" className="card-clicavel" id="pintura">
          <img
            className="services-image"
            src="src\assets\pintura.png"
            alt="pintura"
          />
          <p>Pintura</p>
        </a>
      </div>

      <div className="services-row-card">
        <a href="#" className="card-clicavel" id="construr">
          <img
            className="services-image"
            src="src\assets\construir.png"
            alt="construir"
          />
          <p>Construir</p>
        </a>
      </div>

      <div className="services-row-card">
        <a href="#" className="card-clicavel" id="reformar">
          <img
            className="services-image"
            src="src\assets\reformar.png"
            alt="reformar"
          />
          <p>Reformar</p>
        </a>
      </div>

      <div className="services-row-card">
        <a href="#" className="card-clicavel" id="pequenos-reparos">
          <img
            className="services-image"
            src="src\assets\pequenos-reparos.png"
            alt="planejar ou decorar"
          />
          <p>Pequenos Reparos</p>
        </a>
      </div>

      <div className="services-row-card">
        <a href="#" className="card-clicavel" id="servicos-eletricos">
          <img
            className="services-image"
            src="src\assets\servicos-eletricos.png"
            alt="serviços elétricos e automação"
          />
          <p>Serviços Elétricos e Automação</p>
        </a>
      </div>
    </div>
  </div>

  )
}

export default ServiceTray;