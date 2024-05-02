import './styles.css'
import Label from '../../../components/Label';
import LabelCheck from '../../../components/LabelCheck';
import LabelServ from '../../../components/LabelServices';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

/*import { yupResolver } from "@hookform/resolvers/yup";*/
//React hook form import
import { useFormik } from "formik";
import * as Yup from "yup";

/* Dados do Trabalhador*/ /*apaga e joga no lixo*/

export default function WorkerForm() {
    const [isCheckListVisible, setCheckListVisible] = useState(false);
    const [mostrarTipoDeficiencia, setMostrarTipoDeficiencia] = useState(false);

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
    <main id="worker-form">
        <form id="form-container" onSubmit={handleSubmit(onSubmit) }>
            <section className="Dadospessoas">
                <h1>Dados Pessoais</h1>
                <div className="box-line"></div>
                <section className="left-right">
                    <div className="left">
                        <h3 className="pergunta-label"><Label id="nome-completo" label="Nome Completo"/> </h3>
                        <p className='caracteres'>Conforme consta nos seus documentos</p>

                        <input type="text" id="nome-completo" {...register("nomeCompleto", {required: true, minLength: 10, maxLength: 100})} />
                        {errors.nomeCompleto && errors.nomeCompleto.type === "required" && (
                            <p className="error-message">O nome completo é obrigatório.</p>
                        )}
                        {errors.nomeCompleto && errors.nomeCompleto.type === "minLength" && (
                            <p className="error-message">O nome completo deve ter pelo menos 10 caracteres.</p>
                        )}
                        {errors.nomeCompleto && errors.nomeCompleto.type === "maxLength" && (
                            <p className="error-message">O nome completo não pode ter mais de 50 caracteres.</p>
                        )}

                        <Label id="data-nascimento" label="Data de Nascimento"/>
                        <p className='caracteres'>Ex.: 06/09/1975</p>
                        <input type="date" id="data-nascimento" {...register("DataNascimento", {required: true, pattern: /^\S+@\S+$/i})} />
                        {errors.DataNascimento && errors.DataNascimento.type === "required" && (
                            <p className="error-message">A data de nascimento é obrigatória.</p>
                        )}

                        <Label id="e-mail" label="E-mail"/>
                        <input type="email" id="e-mail" {...register("Email", {required: true, maxLength: 40})} />
                        {errors.Email && errors.Email.type === "required" && (
                            <p className="error-message">O e-mail é obrigatório.</p>
                        )}
                        {errors.Email && errors.Email.type === "maxLength" && (
                            <p className="error-message">O e-mail não pode ter mais de 40 caracteres.</p>
                        )}
                    </div>

                    <div className="right">
                        <Label id="RG" label="RG"/> 
                        <p className='caracteres'>Apenas números</p>

                        <input type="text" id="RG" {...register("RG", {required: true, maxLength: 18})} />
                        {errors.RG && errors.RG.type === "required" && (
                            <p className="error-message">O RG é obrigatório.</p>
                        )}
                            {errors.RG && errors.RG.type === "maxLength" && (
                            <p className="error-message">O RG não pode ter mais de 18 caracteres.</p>
                        )}

                        <Label id="CPF" label="CPF"/>
                        <p className='caracteres'>Apenas números</p>
                        <input type="text" id="CPF" {...register("CPF", {required: true, maxLength: 11})} />
                        {errors.CPF && errors.CPF.type === "required" && (
                            <p className="error-message">O CPF é obrigatório.</p>
                        )}
                        {errors.CPF && errors.CPF.type === "maxLength" && (
                            <p className="error-message">O CPF não pode ter mais de 11 caracteres.</p>
                        )}

                        <Label id="telefone" label="Telefone"/>
                        <p className='caracteres'>Apenas números</p>
                        <input type="tel" id="telefone" {...register("telefone", {required: true, maxLength: 11, pattern: /[0-9]{11}/i })} />
                        {errors.telefone && errors.telefone.type === "required" && (
                            <p className="error-message">O telefone é obrigatório.</p>
                        )}
                        {errors.telefone && errors.telefone.type === "maxLength" && (
                            <p className="error-message">O telefone não pode ter mais de 11 caracteres.</p>
                        )}
                        {errors.telefone && errors.telefone.type === "pattern" && (
                            <p className="error-message">O telefone deve conter apenas números.</p>
                        )}
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

                    <div className="port-deficiencia">
                        <h3 className="pergunta-label">Você é uma pessoa com deficiência?</h3>

                        <input type="radio" id="sim-deficiencia" value="Sim" {...register("port-deficiencia", { required: true  })} onChange={() => {
                        setMostrarTipoDeficiencia(true);
                        }} />
                        <LabelCheck id="sim-deficiencia" label="Sim"/>
                        
                        <input type="radio" id="nao-deficiencia" value="Nao" {...register("port-deficiencia", { required: true })}  onChange={() => {
                        setMostrarTipoDeficiencia(false);
                     }} />
                        <LabelCheck id="nao-deficiencia" label="Não" />

                        {mostrarTipoDeficiencia && ( // mostrar a segunda parte apenas se "Sim" for selecionado
                            <>
                                <h3 className="pergunta-label">Se sim, qual o tipo de deficiência?</h3>

                                <input type="checkbox" id="defic-fisica" {...register("tipo-deficiencia", {required: true})} />
                                <LabelCheck id="defic-fisica" label="Deficiência Física"/>

                                <input type="checkbox" id="defic-intelectual" {...register("tipo-deficiencia", {required: true})} />
                                <LabelCheck id="defic-intelectual" label="Deficiência Intelectual"/>

                                <input type="checkbox" id="defic-motora" {...register("tipo-deficiencia", {required: true})} />
                                <LabelCheck id="defic-motora" label="Deficiência Motora"/> 

                                <input type="checkbox" id="defic-visual" {...register("tipo-deficiencia", {required: true})} />
                                <LabelCheck id="defic-visual" label="Deficiência Visual"/>

                                <input type="checkbox" id="defic-auditiva" {...register("tipo-deficiencia", {required: true})} />
                                <LabelCheck id="defic-auditiva" label="Deficiência Auditiva"/>

                                <input type="checkbox" id="defic-outras" {...register("tipo-deficiencia", {required: true})} />
                                <LabelCheck id="defic-outras" label="Outras"/>
                            </>
                            )}
                    </div>
                </section>
        <section className="dadosProfissionais">

            <h1>Dados Profissionais</h1>
            <div className="box-line"></div>


            <div className="cnpj">
                <h3 className="pergunta-label">Possui CNPJ?</h3>
                
                <input id="sim-cnpj" {...register("cnpj-sim-nao", { required: true })} type="radio" value="Sim" />
                <LabelCheck id="sim-cnpj" label="Sim" />

                
                <input id="nao-cnpj" {...register("cnpj-sim-nao", { required: true })} type="radio" value="Não" />
                <LabelCheck id="nao-cnpj" label="Não"/> 

                <h3 className="pergunta-label">CNPJ <em>(opcional)</em></h3>
                <p className="caracteres">Caso possua, informe apenas números</p>
                <Label id="cnpj" />
                <input id="cnpj" type="text" {...register("cpnj", {})} />

                <h3 className="pergunta-label">Qual sua área de atuação?</h3>
                <Label id="area-atuacao" />
                <input id="area-atuacao" type="text" {...register("area-atuacao", {})} />
            </div>
        </section>

        <section id="servicos">
                        <h1>Serviços</h1>
                        <div className="box-line"></div>

                        <h3 className="pergunta-label">Quais serviços você se sente mais seguro(a) em fazer?</h3>

                        <div id="checklistServicos" className={`dropdown-check-list ${isCheckListVisible ? 'visible' : ''}`} tabIndex="100">
                        <span className="anchor" onClick={toggleCheckList}>
                            Marque quantas opções desejar</span> 
                            <ul className="items">
                            <li>
                                <input type="checkbox" id="arquitetura" value="arquitetura" {...register("servicos", {required: true})} />
                                <LabelServ id="arquitetura" label="Arquitetura" />
                            </li>
                            <li>
                                <input type="checkbox" id="assentamento" value="assentamento" {...register("servicos", {required: true})} />
                                <LabelServ  id="assentamento" label="Assentamento de piso e revestimento" />
                            </li>
                            <li>
                                <input type="checkbox" id="consertos" value="consertos" {...register("servicos", {required: true})} />
                                <LabelServ  id="consertos" label="Consertos de portas e janelas" />
                            </li>
                            <li>
                                <input type="checkbox" id="construcao" value="construcao" {...register("servicos", {required: true})} />
                                <LabelServ  id="construcao" label="Construção" />
                            </li>
                            <li>
                                <input type="checkbox" id="design" value="design" {...register("servicos", {required: true})} />
                                <LabelServ  id="design" label="Design de interiores" />
                            </li>
                            <li>
                                <input type="checkbox" id="engenharia" value="engenharia" {...register("servicos", {required: true})} />
                                <LabelServ  id="engenharia" label="Engenharia" />
                            </li>
                            <li>
                                <input type="checkbox" id="instalacaoBancadas" value="instalacaoBancadas" {...register("servicos", {required: true})} />
                                <LabelServ  id="instalacaoBancadas" label="Instalação de bancadas em Mármore, Quartzo e Granito" />
                            </li>
                            <li>
                                <input type="checkbox" id="instalacaoGesso" value="instalacaoGesso" {...register("servicos", {required: true})} />
                                <LabelServ  id="instalacaoGesso" label="Instalação de gesso" />
                            </li>
                            <li>
                                <input type="checkbox" id="instalacaoDrywallGesso" value="instalacaoDrywallGesso" {...register("servicos", {required: true})} />
                                <LabelServ  id="instalacaoDrywallGesso" label="Instalação em drywall e gesso acartonado" />
                            </li>
                            <li>
                                <input type="checkbox" id="instalacaoPapel" value="instalacaoPapel" {...register("servicos", {required: true})} />
                                <LabelServ  id="instalacaoPapel" label="Instalação de papel de parede" />
                            </li>
                            <li>
                                <input type="checkbox" id="limpeza" value="limpeza" {...register("servicos", {required: true})} />
                                <LabelServ  id="limpeza" label="Limpeza pós obra" />
                            </li>
                            <li>
                                <input type="checkbox" id="pedreiro" value="pedreiro" {...register("servicos", {required: true})} />
                                <LabelServ  id="pedreiro" label="Pedreiro de alvenaria" />
                            </li>
                            <li>
                                <input type="checkbox" id="marcenaria" value="marcenaria" {...register("servicos", {required: true})} />
                                <LabelServ  id="marcenaria" label="Marcenaria" />
                            </li>
                            <li>
                                <input type="checkbox" id="pequenosReparos" value="pequenosReparos" {...register("servicos", {required: true})} />
                                <LabelServ  id="pequenosReparos" label="Pequenos Reparos" />
                            </li>
                            <li>
                                <input type="checkbox" id="pinturaFerragens" value="pinturaFerragens" {...register("servicos", {required: true})} />
                                <LabelServ  id="pinturaFerragens" label="Pintura de ferragens" />
                            </li>
                            <li>
                                <input type="checkbox" id="pinturaGeral" value="pinturaGeral" {...register("servicos", {required: true})} />
                                <LabelServ  id="pinturaGeral" label="Pintura Geral" />
                            </li>
                            <li>
                                <input type="checkbox" id="reformaCompleta" value="reformaCompleta" {...register("servicos", {required: true})} />
                                <LabelServ  id="reformaCompleta" label="Reforma completa" />
                            </li>
                            <li>
                                <input type="checkbox" id="servicosAcabamento" value="servicosAcabamento" {...register("servicos", {required: true})} />
                                <LabelServ  id="servicosAcabamento" label="Serviços de acabamento geral" />
                            </li>
                            <li>
                                <input type="checkbox" id="servicosJardinagem" value="servicosJardinagem" {...register("servicos", {required: true})} />
                                <LabelServ  id="servicosJardinagem" label="Serviços de Jardinagem" />
                            </li>
                            <li>
                                <input type="checkbox" id="servicosEletricos" value="servicosEletricos" {...register("servicos", {required: true})} />
                                <LabelServ  id="servicosEletricos" label="Serviços elétricos" />
                            </li>
                            <li>
                                <input type="checkbox" id="servicosHidraulicos" value="servicosHidraulicos" {...register("servicos", {required: true})} />
                                <LabelServ  id="servicosHidraulicos" label="Serviços hidráulicos" />
                            </li>
                            <li>
                                <input type="checkbox" id="vidracarias" value="vidracarias" {...register("servicos", {required: true})} />
                                <LabelServ  id="vidracarias" label="Vidraçarias" />
                            </li>
                            <li>
                                <input type="checkbox" id="outros" value="outros" {...register("servicos", {required: true})} />
                                <LabelServ  id="outros" label="Outros" />
                            </li>
                            </ul>

                        </div>
                    </section>

        <section id="agenda">

            <h1>Agenda</h1>
            <div className="box-line"></div>

            <div className="horarios">
               <h3 className="pergunta-label">Qual sua disponibilidade de horário?</h3>

                <input id="manha" {...register("horarios", { required: true })} type="radio" value="Manhã" />
                <LabelCheck id="manha" label="Manhã"/>

                <input id="tarde" {...register("horarios", { required: true })} type="radio" value=" Tarde" /> 
                <LabelCheck id="tarde" label="Tarde"/>

                <input id="noite" {...register("horarios", { required: true })} type="radio" value=" Noite" /> 
                <LabelCheck id="noite" label="Noite"/>

               <h3 className="pergunta-label">Aceita prestar serviços nos finais de semana?</h3>
                
                <input id="sim-fimsemana" {...register("fim-semana", { required: true })} type="radio" value="Sim" /> 
                <LabelCheck id="sim-fimsemana" label="Sim"/>
                
                <input id="nao-fimsemana" {...register("fim-semana", { required: true })} type="radio" value=" Não" /> 
                <LabelCheck id="nao-fimsemana" label="Não"/>

               <h3 className="pergunta-label">Você está trabalhando de carteira assinada?</h3>
                
                <input id="sim-cart-assinada"{...register("cart-assinada", { required: true })} type="radio" value="Sim" />
                <LabelCheck id="sim-cart-assinada" label="Sim"/>

                <input id="nao-cart-assinada"{...register("cart-assinada", { required: true })} type="radio" value=" Não" /> 
                <LabelCheck id="nao-cart-assinada" label="Não"/>
            </div>

        </section>

        <section id="financeiro">

            <h1>Financeiro</h1>
            <div className="box-line"></div>

            <div className="box-line"></div>
            <div className="financeiro-servico">
                <h3 className="pergunta-label">Como você costuma cobrar pelo serviço?</h3>

                <input id="por-hora" type="radio" value="Por Hora"  {...register("cobrar-servico", { required: true })} />
                <LabelCheck id="por-hora" label="Por Hora"/>

                <input id="por-diaria" type="radio" value="Por Diária" {...register("cobrar-servico", { required: true })}  />
                <LabelCheck  id="por-diaria" label="Por Diária"/>
                
                <input id="por-metro" type="radio" value="Por Metro" {...register("cobrar-servico", { required: true })} />
                <LabelCheck id="por-metro" label="Por Metro"/>

                
                <input id="por-empreitada" {...register("cobrar-servico", { required: true })} type="radio" value="Por Empreitada" />
                <LabelCheck  id="por-empreitada" label="Por Empreitada"/>

                <h3 className="pergunta-label">Quanto você costuma cobrar, em média, pelo serviço?</h3>

               <Label id="preco-medio" />
                <p className="caracteres">  Ex.: Se cobrar por diária, quanto custa sua diária? </p>
                <input type="text" id="preco-medio" {...register("preco-medio", {required: true})} />
            

               <Label id="preco-medio" />
                <p className="caracteres">  Ex.: Se cobrar por diária, quanto custa sua diária? </p>
                <input type="text" id="preco-medio" {...register("precoMedio")} onChange={formik.handleChange} value={formik.values.precoMedio}/>
                <p className="error-message">{formik.errors.precoMedio }</p>
            </div>
        </section>

        <section id="experiencia-profissional">
            <h1>Experiência Profissional</h1>
            <div className="box-line"></div>
            <section className="informe">
                <h3 className="pergunta-label"> Informe pelo menos um contato de  referência profissional:
                </h3>

            <div className="box-line"></div>
             <section className="informe">
                <h3 className="pergunta-label"> Informe pelo menos um contato de  referência profissional:
                </h3>

                    <input type="tel" id="contato1" placeholder="(DDD) + número" 
                    {...register("contato1", 
                    {required: true, max: 11, min: 11, maxLength: 11, pattern: /[0-9]{11}/i})} />
                    <input type="tel" id="contato2" placeholder="(DDD) + número" 
                    {...register("contato2", 
                    {max: 11, min: 11, maxLength: 11, pattern: /[0-9]{11}/i})} />

                    <h3><Label id="certificado" label="Possui certifições complementares? Quais? (opcional)" /></h3>
                    <input id="certificado" type="text"  
                    {...register("certificacoes", {})} />
                </section>

            </section>

                

        </section>    
        <div id="button">            
            <button type="submit">Enviar</button>
        </div>
        </form>
        
    </main>

  );
}
