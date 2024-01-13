import './styles.css';

function WorkerForm () {
    return(
        <div className="container">
            <div className="geral-box">
                <div className="text-box"> 
            
                    <div className="fina-line">
                        <h1> Financeiro</h1>
                    <div className="box-line"></div>
                </div>
                <p className="text-inter">
                    Como você constuma cobrar pelos serviços
                </p>

                <section className="box-form">

                    <div>  <label htmlFor="por_hora"> <input type="checkbox" name="hora" value="por_hora" /> Por Hora </label> </div>
                    <div> <label htmlFor="por_diaria"><input type="checkbox" name="diaria" value="por_diaria" /> Por Diária </label> </div>
                    <div>   <label htmlFor="por_metro"><input type="checkbox" name="metro" value="por_metro" /> Por Metro </label></div>
                    <div> <label htmlFor="por_empreitada"><input type="checkbox" name="empreitada" value="por_empreitada" /> Por Empreitada </label></div>
                </section>

                <p className="text-inter">
                    Quanto costuma cobrar em média pelo serviço?
                </p>
                <p className="text-italic">
                    Ex: Se cobrar por diária, quanto custa sua diária?
                </p>
                <div className="valor-box">
                    <input className="valor" type="text" name="Valor" id="Valor" placeholder="Digite o valor:" />
                </div>
            </div>
        </div>
            <img className="img-pessoas"  src="./assets/pessoas-02 1.png" alt="pessoas" />
        </div>
    )
}

export default WorkerForm 