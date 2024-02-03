import './style.css';
import Label from '../../../components/Label';
import LabelCheck from '../../../components/LabelCheck';
import LabelServ from '../../../components/LabelServices';
import HeaderForm from '../../../components/HeaderForm';

import { useForm } from 'react-hook-form';
import { useState } from 'react';


export default function CompanyForm() {
    const [isCheckListVisible, setCheckListVisible] = useState(false);
    const toggleCheckList = () => {
      setCheckListVisible(!isCheckListVisible);
    };

  const { 
    register, 
    handleSubmit, 
    formState: { errors }
 } = useForm({
 });

const onSubmit = data => console.log(data);
console.log(errors);

  return ( 
    <main id="company-form">
        <form id="form-container" onSubmit={handleSubmit(onSubmit) }>
            <section className='dadosEmpresa'>
                <h1>Dados da Empresa</h1>
                <div className="box-line"></div>
                <section className="left-right">
                    <div className="left">
                        <Label id="razao-social" label="Razão Social" />
                        <input type="text" id="razao-social" {...register("razaoSocial", {required: true, minLength: 10, maxLength: 50})} />

                        <Label id="cnpj" label="CNPJ" />
                        <p className="caracteres">Apenas números</p>
                        <input id="cnpj" type="text" {...register("cpnj", { required: true, minLength: 14, maxLength: 14 })} />

                        <Label id="telefone-empresa" label="Telefone"/>
                        <p className='caracteres'>Apenas números</p>
                        <input type="tel" id="telefone-empresa" {...register("telefoneEmpresa", {required: true, maxLength: 11, pattern: /[0-9]{11}/i })} />
                        
                    </div>
                    <div className='right'>
                        <Label id="nome-fantasia" label="Nome Fantasia" />
                        <input type="text" id="nome-fantasia" {...register("nomeFantasia", {required: true, minLength: 10, maxLength: 50})} />

                        <h3 className='pergunta-label'> Quantos colaboradores?</h3>
                        <p className='caracteres'>Escolha uma opção</p>

                        <div id="checklistServicos" className={`dropdown-check-list ${isCheckListVisible ? 'visible' : ''}`} tabIndex="100">
                        <span className="anchor" onClick={toggleCheckList}>Selecione</span>
                        <ul className="items">
                            <li>
                                <input type="radio" id="1a5" value="Entre 1 e 5" {...register("qtdColaboradores", {required: true})} />
                                <LabelServ id="1a5" label="1-5" />
                            </li>
                            <li>
                                <input type="radio" id="5a20" value="Entre 5 e 20" {...register("qtdColaboradores", {required: true})} />
                                <LabelServ id="5a20" label="5-20" />
                            </li>
                            <li>
                                <input type="radio" id="20a50" value="Entre 20 e 50" {...register("qtdColaboradores", {required: true})} />
                                <LabelServ id="20a50" label="20-50" />
                            </li>
                            <li>
                                <input type="radio" id="acima50" value="mais de 50" {...register("qtdColaboradores", {required: true})} />
                                <LabelServ id="acima50" label="Mais de 50" />
                            </li>
                        </ul>
                        </div>

                        <Label id="endereco-eletronico" label="Endereço Eletrônico" />
                        <p className='caracteres'>E-mail ou link de rede social</p>
                        <input type="text" id="endereco-eletronico" {...register("enderecoEletronico", {required: true, minLength: 10, maxLength: 50})} />
                    </div>
                    </section>
                    <div className="endereco-pessoal">
                        <h1>Endereço</h1>
                        <div className="box-line"></div>
                            <div className="left-right">
                                <div className="left">
                                <Label id="endereco" label="Logadouro"/>
                                <input type="text" id="endereco" {...register("endereco", {required: true, maxLength: 100})} />
                                {errors.endereco && errors.endereco.type === "required" && (
                                    <p className="error-message">O logradouro é obrigatório.</p>
                                )}
                                {errors.endereco && errors.endereco.type === "maxLength" && (
                                    <p className="error-message">O logradouro não pode ter mais de 100 caracteres.</p>
                                )}

                                <Label id="bairro" label="Bairro"/>
                                <input type="text" id="bairro" {...register("bairro", {required: true, maxLength: 100})} />
                                {errors.bairro && errors.bairro.type === "required" && (
                                    <p className="error-message">O bairro é obrigatório.</p>
                                )}
                                {errors.bairro && errors.bairro.type === "maxLength" && (
                                    <p className="error-message">O bairro não pode ter mais de 100 caracteres.</p>
                                )}
                                
                                <Label id="cidade" label="Cidade"/>
                                <input type="text" id="cidade" {...register("cidade", {required: true, maxLength: 100})} />
                                {errors.cidade && errors.cidade.type === "required" && (
                                    <p className="error-message">O campo cidade é obrigatório.</p>
                                )}
                                {errors.cidade && errors.cidade.type === "maxLength" && (
                                    <p className="error-message">O campo cidade não pode ter mais de 100 caracteres.</p>
                                )}
                            </div>
                                
                            <div className="right">
                            <Label id="cep" label="CEP"/>
                                <input type="number" id="cep" {...register("cep", {required: true, maxLength: 8})} />  
                                {errors.cep && errors.cep.type === "required" && (
                                    <p className="error-message">O CEP é obrigatório.</p>
                                )}
                                {errors.cidade && errors.cidade.type === "maxLength" && (
                                    <p className="error-message">O CEP não pode ter mais de 8 caracteres.</p>
                                )}     

                                <Label id="numero" label="Número"/>
                                <input type="number" id="numero" {...register("numero", {required: true, maxLength: 5})} />
                                {errors.cep && errors.cep.type === "required" && (
                                    <p className="error-message">O número é obrigatório.</p>
                                )}
                                {errors.cidade && errors.cidade.type === "maxLength" && (
                                    <p className="error-message">O número não pode ter mais de 5 caracteres.</p>
                                )}  
                                
                                <Label id="estado" label="Estado"/>
                                <input type="text" id="estado" {...register("estado", {required: true, maxLength: 20})} />
                                {errors.estado && errors.estado.type === "required" && (
                                    <p className="error-message">O estado é obrigatório.</p>
                                )}
                                {errors.estado && errors.estado.type === "maxLength" && (
                                    <p className="error-message">O estado não pode ter mais de 20 caracteres.</p>
                                )}  
                            </div>
                        
                        </div>
                       </div>
            </section>
            <section className='dadosRepresentante'>
                <h1>Dados da(o) Representante</h1>
                <div className="box-line"></div>
                <section className="left-right">
                    <div className="left">
                        <Label id="nome-completo" label="Nome Completo"/>
                        <input type="text" id="nome-completo" {...register("nomeCompleto", {required: true, minLength: 10, maxLength: 100})} />
                    </div> 
                    <div className="right">              
                    <Label id="telefone-representante" label="Telefone"/>
                        <input type="tel" id="telefone-representante" {...register("telefoneRepresentante", {required: true, maxLength: 11, pattern: /[0-9]{11}/i })} />
                    </div>
                </section>

                <Label id="cargo-empresa" label="Cargo que ocupa na empresa" />
                <input type="text" id="cargo-empresa" {...register("cargoEmpresa", {required: true, minLength: 10, maxLength: 50})} />
                <Label id="email-representante" label="Informe seu melhor e-mail" />
                <input type="email" id="email-representante" {...register("emailRepresentante", {required: true, minLength: 10, maxLength: 50})} />

                <section className="left-right">
                    <div className="left">
                        <Label id="indicacao" label="Quem lhe indicou à Viverde Casa?" />
                        <input type="text" id="indicacao" {...register("indicacao", {required: true, minLength: 10, maxLength: 50})} />
                    </div>
                    <div className='right'>
                        <Label id="indicacao" label="Cód. de Indicação" />
                        <input type="text" id="codigo-indicacao" {...register("codigo-indicacao", {required: true, minLength: 10, maxLength: 50})} />
                    </div>
                </section>                   
            </section>
            <section className='informacaoSolicitacao'>
                <h1>Informações da Solicitação  </h1>
                 <p className="caracteres">Queremos entender um pouco mais da necessidade de sua empresa</p>

                <p className='questions'>Que tipo de serviço está buscando?</p>
                <div id="checklistServicos" className={`dropdown-check-list ${isCheckListVisible ? 'visible' : ''}`} tabIndex="100">
                    <span className="anchor" onClick={toggleCheckList}>
                                Selecione uma opção</span> 
                    <ul className="items">
                        <li>
                            <input type="radio" id="parceria-comercial" value="Parceria comercial" {...register("servicoInfo", {required: true})} />
                            <LabelServ id="parceria-comercial" label="Parceria comercial (Quero fazer parte do programa de descontos e conquistar novos clientes)" />
                        </li>
                        <li>
                            <input type="radio" id="intermediacao" value="Intermediação" {...register("servicoInfo", {required: true})} />
                            <LabelServ id="intermediacao" label="Intermediação de mão de obra (Busco contratação de mão de obra qualificada para reforma e construção)" />
                        </li>
                        <li>
                            <input type="radio" id="qualificacao-profissional" value="Qualificação profissional" {...register("servicoInfo", {required: true})} />
                            <LabelServ id="qualificacao-profissional" label="Qualificação profissional (Quero contratar um pacote de qualificação de mão de obra para minha equipe) " />
                        </li>
                        <li>
                            <input type="radio" id="apoio-acoes" value="Apoio a ações ESG" {...register("servicoInfo", {required: true})} />
                            <LabelServ id="apoio-acoes" label="Apoio a ações ESG (Quero investir em ações de impacto social e ambiental com a Viverde Casa) " />
                        </li>
                    </ul>
                    </div>

                    <Label id="servicoOutro" label="Outro" />
                    <input id="servicoOutro" type="text" {...register("servicoOutro", { required: true, minLength: 14, maxLength: 14 })} />
                    
                    
                    <p className='questions'>Que iniciativa de impacto gostaria de apoiar?</p>
                    <div id="checklistServicos" className={`dropdown-check-list ${isCheckListVisible ? 'visible' : ''}`} tabIndex="100">
                    <span className="anchor" onClick={toggleCheckList}>
                                Selecione uma opção</span> 
                    <ul className="items">
                        <li>
                            <input type="checkbox" id="viverde-capacita" value="viverdeCapacita" {...register("iniciativaInfo", {required: true})} />
                            <LabelServ id="viverde-capacita" label="Viverde Capacita (Programa de qualificação profissional)" />
                        </li>
                        <li>
                            <input type="checkbox" id="viverde-athis" value="viverdeATHIS" {...register("iniciativaInfo", {required: true})} />
                            <LabelServ id="viverde-athis" label="Viverde ATHIS (Programa de melhorias habitacionais de interesse social) " />
                        </li>
                        <li>
                            <input type="checkbox" id="viverde-hub" value="viverdeHub" {...register("iniciativaInfo", {required: true})} />
                            <LabelServ id="viverde-hub" label="Viverde HUB (Programa de incentivo a pesquisa, desenvolvimento e inovação) " />
                        </li>

                    </ul>
                    <Label id="comentarioSolicitacao" label="Comentário" />
                    <textarea id="comentarioSolicitacao" {...register("comentarioSolicitacao", {required: true, minLength: 10, maxLength: 50})} />
                    
                </div>
            </section>

            <section className="Veiculos-Que">
              <h1>Vínculos, questões éticas e morais</h1>
              <div className="box-line"></div>

              <p className='caracteres'>Gostaríamos de conhecer um pouco mais sobre você e os 
                representantes da sua organização.</p>
                <p className='questions'>Sua empresa ou algum de seus representantes tem ou teve envolvimento
                com campanhas políticas ou partidárias nos últimos 20 anos?</p>

                <div className="inputs-escolha">
                    <input id="CampanhasSim" {...register("CampanhasPoliticas", { required: true })} 
                    type="radio" value="Sim" />
                    <LabelCheck id="CampanhasSim" label="Sim"/>

                    <input id="CampanhasNao" {...register("CampanhasPoliticas", { required: true })} 
                    type="radio" value=" Não" />
                    <LabelCheck id="CampanhasNao" label="Não"/>
                 </div>
                 <p className='questions'>Você ou algum outro dirigente da empresa tem ou teve algum parente de 
                  até 2º ocupando cargo publico nos últimos 20 anos?</p>

                  <div className="inputs-escolha">
                    <input id="CargoSim" {...register("CargoPublic", { required: true })} 
                    type="radio" value="Sim" />
                    <LabelCheck id="CargoSim" label="Sim"/>

                    <input id="CargoNao" {...register("CargoPublic", { required: true })} 
                    type="radio" value=" Não" />
                    <LabelCheck id="CargoNao" label="Não"/>
                  </div>

                  <Label id="VinculoPolitico" label="Se a sua resposta para as perguntas anteriores for sim; 
                  por gentileza, especifique aqui o vinculo político partidário,
                   e o período a que se refere:"/>
                   <input id="VinculoPolitico" type="text" {...register("VinculoPolitico", {required: true})} />

                   <p className='questions'>Sua empresa ou algum de seus representantes tem ou teve envolvimento em algum 
                    escândalo envolvendo questões de trabalho escravo desde a sua fundação?</p>
                    <div className="inputs-escolha">
                        <input id="EscandaloSim" {...register("escandalo", { required: true })} type="radio" value="Sim" />
                        <LabelCheck id="EscandaloSim" label="Sim"/>

                        <input id="EscandaloNao" {...register("escandalo", { required: true })} type="radio" value=" Não" />
                        <LabelCheck id="EscandaloNao" label="Não"/>
                    </div>

                    <p className='questions'>Sua empresa ou algum de seus representantes tem ou teve envolvimento em algum escândalo
                       envolvendo questões de assédio físico ou moral desde a sua fundação?</p>
                    <div className="inputs-escolha">
                       <input id="AssedioSim" {...register("escandaloAssedio", { required: true })} 
                       type="radio" value="Sim" />
                       <LabelCheck id="AssedioSim" label="Sim"/>

                       <input id="AssedioNao" {...register("escandaloAssedio", { required: true })} 
                       type="radio" value=" Não" />
                       <LabelCheck id="AssedioNao" label="Não"/>
                    </div>

                    <p className='questions'>Sua empresa ou organização já possui um plano de impacto positivo, 
                      com parâmetros claros e definidos,que esteja em prática? </p>
                      <div className="inputs-escolha">
                        <input id="PlanoSim" {...register("PlanoImpacto", { required: true })} 
                        type="radio" value="Sim" />
                            <LabelCheck id="PlanoSim" label="Sim"/>

                        <input id="PlanoNão" {...register("PlanoImpacto", { required: true })}
                        type="radio" value=" Não" />
                            <LabelCheck id="PlanoNão" label="Não"/>
                    </div>

                    <Label id="ImpactoPositivo" label="O que você enxerga de possível melhoria para ampliar 
                      o impacto positivo gerando por sua empresa ou organização?"/>
                      <input type="text" id="ImpactoPositivo" {...register("ImpactoPositivo", {required: true})} />

                      <Label id="ImpactoSocial" label="Quais os setores da sua organização que investem em 
                      impacto social ou ambiental positivo?"/>
                      <input type="text" id="ImpactoSocial" {...register("ImpactoSocial", {required: true})} />

                      <p className='questions'>Sua organização já possui uma política de diversidade implantada em algum 
                      setor?</p>
                      <div className="inputs-escolha">
                        <input id="DiversidadeSim" {...register("PoliticaDiversidade", { required: true })}
                        type="radio" value="Sim" />
                        <LabelCheck id="DiversidadeSim" label="Sim"/>

                        <input id="DiversidadeNão" {...register("PoliticaDiversidade", { required: true })} 
                        type="radio" value=" Não" />
                        <LabelCheck id="DiversidadeNão" label="Não"/>
                    </div>
            </section>

            <div id="button">            
                <button type="submit">Enviar</button>
            </div>
        </form>
    </main>
  )}