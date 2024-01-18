import './styles.css'
import Label from '../../../components/Label';
import { useForm } from 'react-hook-form';



export default function WorkerForm() {

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
                        <input type="text" id="nome-completo" {...register("Nome completo", {required: true, min: 10, maxLength: 50})} />

                        <h3 className="pergunta-label"><Label id="endereco" label="Endereço"/></h3>
                        <p className='caracteres'>Conforme consta nos seus documentos</p>
                        <input type="text" id="endereco" {...register("endereco", {required: true, maxLength: 100})} />

                        <h3 className="pergunta-label"><Label id="data-nascimento" label="Data de Nascimento"/></h3>
                        <p className='caracteres'>Ex.: 06/09/1975</p>
                        <input type="date" id="data-nascimento" {...register("Data de Nascimento", {required: true, pattern: /^\S+@\S+$/i})} />

                        <h3 className="pergunta-label"><Label id="e-mail" label="E-mail"/></h3>
                        <input type="email" id="e-mail" {...register("e-mail", {required: true, maxLength: 40})} />
                    </div>

                    <div className="right">
                    <h3 className="pergunta-label"><Label id="RG" label="RG"/> </h3>
                        <p className='caracteres'>Apenas números</p>
                        <input type="text" id="RG" {...register("RG", {required: true, maxLength: 14})} />

                        <h3 className="pergunta-label"><Label id="CPF" label="CPF"/> </h3>
                        <p className='caracteres'>Apenas números</p>
                        <input type="text" id="CPF" {...register("CPF", {required: true, maxLength: 11})} />

                        <h3 className="pergunta-label"><Label id="telefone" label="Telefone"/> </h3>
                        <p className='caracteres'>Apenas números</p>
                        <input type="tel" id="telefone" {...register("telefone", {required: true, maxLength: 11, pattern: /[0-9]{11}/i })} />
                    </div>
                </section>

                    <div className="port-deficiencia">
                        <h3 className="pergunta-label">Você é uma pessoa com deficiência?</h3>
                        <Label id="sim-deficiencia" label="Sim" />
                        <input type="radio" id="sim-deficiencia" value="Sim" className="escolha-horario" {...register("port-deficiencia", { required: true })}   />

                        <Label id="nao-deficiencia" label="Não" />
                        <input type="radio" id="nao-deficiencia" value="Nao" className="escolha-horario" {...register("port-deficiencia", { required: true })}   />
                        
                        <h3 className="pergunta-label">Se sim, qual o tipo de deficiência?</h3>

                        <input type="checkbox" id="defic-fisica" className="escolha-horario" {...register("tipo-deficiencia", {required: true})} />
                        <Label id="defic-fisica" label="Deficiência Física" />

                        <input type="checkbox" id="defic-intelectual" className="escolha-horario" {...register("tipo-deficiencia", {required: true})} />
                        <Label id="defic-intelectual" label="Deficiência Intelectual" />

                        <input type="checkbox" id="defic-motora" className="escolha-horario" {...register("tipo-deficiencia", {required: true})} />
                        <Label id="defic-motora" label="Deficiência Motora" />

                        <input type="checkbox" id="defic-visual" className="escolha-horario" {...register("tipo-deficiencia", {required: true})} />
                        <Label id="defic-visual" label="Deficiência Visual" />

                        <input type="checkbox" id="defic-auditiva" className="escolha-horario" {...register("tipo-deficiencia", {required: true})} />
                        <Label id="defic-auditiva" label="Deficiência Auditiva" />

                        <input type="checkbox" id="defic-outras"  className="escolha-horario" {...register("tipo-deficiencia", {required: true})} />
                        <Label id="defic-outras" label="Outras" />
                    </div>
                    
        <section className="dadosProfissionais">

            <h1>Dados Profissionais</h1>
            <div className="box-line"></div>

            <div className="cnpj">
                <h3 className="pergunta-label">Possui CNPJ</h3>
                <span className="escolha-horario"><Label id="sim-cnpj" label="Sim" /></span>
                    <input {...register("cnpj-sim-nao", { required: true })} type="radio" value="Sim" />

                <span className="escolha-horario"><Label id="nao-cnpj" label="Não"/> </span>
                    <input {...register("cnpj-sim-nao", { required: true })} type="radio" value="Não" />
        
                <h3 className="pergunta-label">CNPJ <em>(opcional)</em></h3>
                <p className="caracteres">Caso possua, informe apenas números</p>
                <Label id="cnpj" />
                <input type="text" {...register("cpnj", {})} />

                <h3 className="pergunta-label">Qual sua área de atuação?</h3>
                <Label id="area-atuacao" />
                <input type="text" {...register("area-atuacao", {})} />
            </div>
        </section>

        <section id="servicos">
                        <h1>Serviços</h1>
                        <div className="box-line"></div>

                        <h3 className="pergunta-label">Quais serviços você se sente mais seguro(a) em fazer?</h3>

                        <div id="checklistServicos" className="dropdown-check-list" tabindex="100">
                            <span className="anchor">Marque quantas opções desejar</span> 
                            <ul className="items">
                            <li>
                                <input type="checkbox" id="arquitetura" value="arquitetura" {...register("servicos", {required: true})} />
                                <Label id="defic-outras" label="Arquitetura" />
                            </li>
                            <li>
                                <input type="checkbox" id="assentamento" value="assentamento" {...register("servicos", {required: true})} />
                                <Label id="assentamento" label="Assentamento de piso e revestimento" />
                            </li>
                            <li>
                                <input type="checkbox" id="consertos" value="consertos" {...register("servicos", {required: true})} />
                                <Label id="consertos" label="Consertos de portas e janelas" />
                            </li>
                            <li>
                                <input type="checkbox" id="construcao" value="construcao" {...register("servicos", {required: true})} />
                                <Label id="construcao" label="Construção" />
                            </li>
                            <li>
                                <input type="checkbox" id="design" value="design" {...register("servicos", {required: true})} />
                                <Label id="design" label="Design de interiores" />
                            </li>
                            <li>
                                <input type="checkbox" id="engenharia" value="engenharia" {...register("servicos", {required: true})} />
                                <Label id="engenharia" label="Engenharia" />
                            </li>
                            <li>
                                <input type="checkbox" id="instalacaoBancadas" value="instalacaoBancadas" {...register("servicos", {required: true})} />
                                <Label id="instalacaoBancadas" label="Instalação de bancadas em Mármore, Quartzo e Granito" />
                            </li>
                            <li>
                                <input type="checkbox" id="instalacaoGesso" value="instalacaoGesso" {...register("servicos", {required: true})} />
                                <Label id="instalacaoGesso" label="Instalação de gesso" />
                            </li>
                            <li>
                                <input type="checkbox" id="instalacaoGesso" value="instalacaoGesso" {...register("servicos", {required: true})} />
                                <Label id="instalacaoGesso" label="Instalação de gesso" />
                            </li>
                            <li>
                                <input type="checkbox" id="instalacaoDrywallGesso" value="instalacaoDrywallGesso" {...register("servicos", {required: true})} />
                                <Label id="instalacaoDrywallGesso" label="Instalação em drywall e gesso acartonado" />
                            </li>
                            <li>
                                <input type="checkbox" id="instalacaoPapel" value="instalacaoPapel" {...register("servicos", {required: true})} />
                                <Label id="instalacaoPapel" label="Instalação de papel de parede" />
                            </li>
                            <li>
                                <input type="checkbox" id="limpeza" value="limpeza" {...register("servicos", {required: true})} />
                                <Label id="limpeza" label="Limpeza pós obra" />
                            </li>
                            <li>
                                <input type="checkbox" id="pedreiro" value="pedreiro" {...register("servicos", {required: true})} />
                                <Label id="pedreiro" label="Pedreiro de alvenaria" />
                            </li>
                            <li>
                                <input type="checkbox" id="marcenaria" value="marcenaria" {...register("servicos", {required: true})} />
                                <Label id="marcenaria" label="Marcenaria" />
                            </li>
                            <li>
                                <input type="checkbox" id="pequenosReparos" value="pequenosReparos" {...register("servicos", {required: true})} />
                                <Label id="pequenosReparos" label="Pequenos Reparos" />
                            </li>
                            <li>
                                <input type="checkbox" id="pinturaFerragens" value="pinturaFerragens" {...register("servicos", {required: true})} />
                                <Label id="pinturaFerragens" label="Pintura de ferragens" />
                            </li>
                            <li>
                                <input type="checkbox" id="pinturaGeral" value="pinturaGeral" {...register("servicos", {required: true})} />
                                <Label id="pinturaGeral" label="Pintura Geral" />
                            </li>
                            <li>
                                <input type="checkbox" id="reformaCompleta" value="reformaCompleta" {...register("servicos", {required: true})} />
                                <Label id="reformaCompleta" label="Reforma completa" />
                            </li>
                            <li>
                                <input type="checkbox" id="servicosAcabamento" value="servicosAcabamento" {...register("servicos", {required: true})} />
                                <Label id="servicosAcabamento" label="Serviços de acabamento geral" />
                            </li>
                            <li>
                                <input type="checkbox" id="servicosJardinagem" value="servicosJardinagem" {...register("servicos", {required: true})} />
                                <Label id="servicosJardinagem" label="Serviços de Jardinagem" />
                            </li>
                            <li>
                                <input type="checkbox" id="servicosEletricos" value="servicosEletricos" {...register("servicos", {required: true})} />
                                <Label id="servicosEletricos" label="Serviços elétricos" />
                            </li>
                            <li>
                                <input type="checkbox" id="servicosHidraulicos" value="servicosHidraulicos" {...register("servicos", {required: true})} />
                                <Label id="servicosHidraulicos" label="Serviços hidráulicos" />
                            </li>
                            <li>
                                <input type="checkbox" id="vidracarias" value="vidracarias" {...register("servicos", {required: true})} />
                                <Label id="vidracarias" label="Vidraçarias" />
                            </li>
                            <li>
                                <input type="checkbox" id="outros" value="outros" {...register("servicos", {required: true})} />
                                <Label id="outros" label="Outros" />
                            </li>
                            </ul>

                        </div>
                    </section>

        <section id="agenda">

            <h1>Agenda</h1>
            <div className="box-line"></div>

            <div className="horarios">
               <h3 className="pergunta-label">Qual sua disponibilidade de horário?</h3>
                 <span className="escolha-horario"><Label id="escolha-horario" label="Manhã"/></span>
                    <input {...register("horarios", { required: true })} type="radio" value="Manhã" />
                <span className="escolha-horario"><Label id="escolha-horario" label="Tarde"/></span>
                    <input {...register("horarios", { required: true })} type="radio" value=" Tarde" /> 
                <span className="escolha-horario"><Label id="escolha-horario" label="Noite"/></span>
                    <input {...register("horarios", { required: true })} type="radio" value=" Noite" /> 

               <h3 className="pergunta-label">Aceita prestar serviços nos finais de semana?</h3>
                <span className="escolha-horario"><Label id="sim-nao" label="Sim"/></span>
                    <input {...register("fim-semana", { required: true })} type="radio" value="Sim" /> 
                <span className="escolha-horario"><Label id="sim-nao" label="Não"/></span>
                    <input {...register("fim-semana", { required: true })} type="radio" value=" Não" /> 

               <h3 className="pergunta-label">Você está trabalhando de carteira assinada?</h3>
                <span className="escolha-horario"><Label id="sim-nao" label="Sim"/></span>
                <input {...register("cart-assinada", { required: true })} type="radio" value="Sim" />
                <span className="escolha-horario"><Label id="sim-nao" label="Não"/></span>
                <input {...register("cart-assinada", { required: true })} type="radio" value=" Não" /> 
            </div>
        </section>

        <section id="financeiro">

            <h1>Financeiro</h1>
            <div className="box-line"></div>

            <div className="financeiro-servico">
                <h3 className="pergunta-label">Como você costuma cobrar pelo serviço?</h3>

                <span className="escolha-horario"><Label id="escolha-horario" label="Por Hora"/></span>
                <input {...register("cobrar-servico", { required: true })} type="radio" value="Por Hora" />
                <span className="escolha-horario"><Label id="escolha-horario" label="Por Diária"/></span>
                <input {...register("cobrar-servico", { required: true })} type="radio" value="Por Diária" />
                <span className="escolha-horario"><Label id="escolha-horario" label="Por Metro"/></span>
                <input {...register("cobrar-servico", { required: true })} type="radio" value="Por Metro" />
                <span className="escolha-horario"><Label id="escolha-horario" label="Por Empreitada"/></span>
                <input {...register("cobrar-servico", { required: true })} type="radio" value="Por Empreitada" />

                    <h3 className="pergunta-label">Campo a ser alterado para inputs de dados</h3>

               <Label id="preco-medio" />
                <p className="caracteres">  Ex.: Se cobrar por diária, quanto custa sua diária? </p>
                <input type="text" {...register("preco-medio", {required: true})} />
            </div>
        </section>

        <section id="experiencia-profissional">
            <h1>Experiência Profissional</h1>
            <div className="box-line"></div>
            <section className="informe">
                <h3 className="pergunta-label"> Informe pelo menos um contato de  referência profissional:
                </h3>

                <Label id="contato" />
                    <input type="tel" placeholder="(DDD) + número" 
                    {...register("contato1", 
                    {required: true, max: 11, min: 11, maxLength: 11, pattern: /[0-9]{11}/i})} />

                <Label id="contato" />
                    <input type="tel" placeholder="(DDD) + número" 
                    {...register("contato2", 
                    {max: 11, min: 11, maxLength: 11, pattern: /[0-9]{11}/i})} />

                <Label id="Certificado" />
                    <h3>Possui certifições complementares? Quais? (opcional)</h3>
                    <input type="text"  
                    {...register("certificacoes", {})} />

            </section>

                

        </section>                
            </section>
            <input type="submit" />
        </form>
        
    </main>
  );
}
