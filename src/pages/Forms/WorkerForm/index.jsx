import './styles.css';

function WorkerForm () {
    return (
        <body>
            <header></header>
            <main>
                <section className="Dadospessoas">
                    <h1>Dados Pessoais</h1>
                    <div className="box-line"></div>

                    <div className="left-right">
                        <div className="left">
                            <label htmlFor="nome-completo">
                                <h3 className="pergunta-label">Nome completo</h3>
                            </label>
                            <p className="caracteres"> Conforme consta nos seus documentos</p>
                            <input type="text" name="nome-completo" id="nome-completo" />

                            <label htmlFor="endereco">
                                <h3 className="pergunta-label">Endereço Completo</h3>
                            </label>
                            <p className="caracteres"> Ex.: Nome da Rua, número - Bairro, Cidade </p>
                            <input type="text" name="endereco" id="endereco" />

                            <label htmlFor="data-nascimento">
                                <h3 className="pergunta-label">Data de nascimento</h3>
                            </label>
                            <p className="caracteres">Ex.: 06/09/1975</p>
                            <input type="date" name="data-nascimento" id="data-nascimento" />

                            <label htmlFor="e-mail">
                                <h3 className="pergunta-label">E-mail</h3>
                            </label>
                            <input type="email" name="e-mail" id="e-mail" maxLength="40" required />
                        </div>
                        <div className="right">
                            <label htmlFor="rg">
                                <h3 className="pergunta-label">RG</h3>
                            </label>
                            <p className="caracteres">Apenas números</p>
                            <input type="text" name="rg" id="rg" maxLength="14" required />

                            <label htmlFor="cpf">
                                <h3 className="pergunta-label">CPF</h3>
                            </label>
                            <p className="caracteres">Apenas números</p>
                            <input type="text" name="cpf" id="cpf" maxLength="14" required />

                            <label htmlFor="telefone">
                                <h3 className="pergunta-label">Telefone</h3>
                            </label>
                            <p className="caracteres">Apenas números</p>
                            <input type="tel" name="telefone" id="telefone" pattern="[0-9]{11}" maxLength="11" required />
                        </div>
                    </div>
                    <div className="port-deficiencia">
                        <h3 className="pergunta-label">Você é uma pessoa com deficiência?</h3>
                        <input type="radio" name="deficiencia" value="sim" id="sim-deficiencia" />
                        <label htmlFor="sim-deficiencia" className="sim-nao">Sim</label>
                        <input type="radio" name="deficiencia" value="nao" id="nao-deficiencia" />
                        <label htmlFor="nao-deficiencia" className="sim-nao">Não</label>

                        <h3 className="pergunta-label">Se sim, qual o tipo de deficiência?</h3>

                        <input type="checkbox" name="tipo-deficiencia" value="defic-fisica" id="defic-fisica" />
                        <label htmlFor="defic-fisica" className="escolha-horario">Física</label>

                        <input type="checkbox" name="tipo-deficiencia" value="defic-intelectual" id="defic-intelectual" />
                        <label htmlFor="defic-intelectual" className="escolha-horario">Intelectual</label> 

                        <input type="checkbox" name="tipo-deficiencia" value="defic-motora" id="defic-motora" />
                        <label htmlFor="defic-motora" className="escolha-horario">Motora</label>

                        <input type="checkbox" name="tipo-deficiencia" value="defic-visual" id="defic-visual" />
                        <label htmlFor="defic-visual" className="escolha-horario">Visual</label>

                        <input type="checkbox" name="tipo-deficiencia" value="defic-auditiva" id="defic-auditiva" />
                        <label htmlFor="defic-auditiva" className="escolha-horario">Auditiva</label>

                        <input type="checkbox" name="tipo-deficiencia" value="defic-outras" id="defic-outras" />
                        <label htmlFor="defic-outras" className="escolha-horario">Outras</label>
                    </div>
                </section>
                <section className="dadosProfissionais">
                    <h1>Dados Profissionais</h1>
                    <div className="box-line"></div>

                    <div className="cnpj">
                        <h3 className="pergunta-label"> Possui CNPJ</h3>

                        <input type="radio" name="cnpj-sim-nao" value="sim" id="sim-cnpj" />
                        <label htmlFor="sim-cnpj" className="sim-nao">Sim</label>
                        <input type="radio" name="cnpj-sim-nao" value="nao" id="nao-cnpj" />
                        <label htmlFor="nao-cnpj" className="sim-nao">Não</label>

                        <div>
                            <label htmlFor="cnpj">
                                <h3 className="pergunta-label"> CNPJ<em>(opcional)</em> </h3>
                            </label>
                            <p className="caracteres">Caso possua, informe apenas números</p>
                            <input type="text" name="cnpj" id="cnpj" maxLength="14" />
                        </div>
                        <div>
                            <label htmlFor="area-atuacao">
                                <h3 className="pergunta-label"> Qual sua área de atuação? </h3>
                            </label>
                            <input type="text" name="area-atuacao" id="area-atuacao" />
                        </div>
                    </div>
                </section>
            </main>
        </body>
    )
}

export default WorkerForm 