import './styles.css'
import Label from '../../../components/Label';
import { useForm } from 'react-hook-form';



export default function WorkerForm() {

  const { 
    register, 
    handleSubmit, 
    formState: { errors }
 } = useForm({
    defaultValues: {
        
    }
 });
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    
        <form id="form-container" onSubmit={handleSubmit(onSubmit) }>
            <section class="Dadospessoas">
                <h1>Dados Pessoais</h1>
                <div class="box-line"></div>
                <section class="left-right">
                    <div class="left">
                        <Label id="nome-completo" label="Nome Completo"/> 
                        <p className='caracteres'>Conforme consta nos seus documentos</p>
                        <input type="text" id="nome-completo" {...register("Nome completo", {required: true, min: 10, maxLength: 50})} />

                        <Label id="endereco" label="Endereço"/>
                        <p className='caracteres'>Conforme consta nos seus documentos</p>
                        <input type="text" id="endereco" {...register("endereco", {required: true, maxLength: 100})} />

                        <Label id="data-nascimento" label="Data de Nascimento"/>
                        <p className='caracteres'>Ex.: 06/09/1975</p>
                        <input type="datetime" id="data-nascimento" {...register("Data de Nascimento", {required: true, pattern: /^\S+@\S+$/i})} />

                        <Label id="e-mail" label="E-mail"/>
                        <input type="email" id="e-mail" {...register("e-mail", {required: true, maxLength: 40})} />
                    </div>

                    <div class="right">
                        <Label id="RG" label="RG"/> 
                        <p className='caracteres'>Apenas números</p>
                        <input type="text" id="RG" {...register("RG", {required: true, maxLength: 14})} />

                        <Label id="CPF" label="CPF"/> 
                        <p className='caracteres'>Apenas números</p>
                        <input type="text" id="CPF" {...register("CPF", {required: true, maxLength: 11})} />

                        <Label id="telefone" label="Telefone"/> 
                        <p className='caracteres'>Apenas números</p>
                        <input type="tel" id="telefone" {...register("telefone", {required: true, maxLength: 11, pattern: /[0-9]{11}/i })} />
                    </div>

                    <div class="port-deficiencia">
                        <h3 className="pergunta-label">Você é uma pessoa com deficiência?</h3>
                        <Label id="sim-deficiencia" label="Sim" />
                        <input type="radio" id="sim-deficiencia" value="Sim" {...register("port-deficiencia", { required: true })}   />

                        <Label id="nao-deficiencia" label="Não" />
                        <input type="radio" id="nao-deficiencia" value="Nao"{...register("port-deficiencia", { required: true })}   />
                        
                        
                        <input type="checkbox" id="defic-fisica" {...register("tipo-deficiencia", {required: true})} />
                        <Label id="defic-fisica" label="Deficiência Física" />

                        <input type="checkbox" id="defic-intelectual" {...register("tipo-deficiencia", {required: true})} />
                        <Label id="defic-intelectual" label="Deficiência Intelectual" />

                        <input type="checkbox" id="defic-motora" {...register("tipo-deficiencia", {required: true})} />
                        <Label id="defic-motora" label="Deficiência Motora" />

                        <input type="checkbox" id="defic-visual" {...register("tipo-deficiencia", {required: true})} />
                        <Label id="defic-visual" label="Deficiência Visual" />

                        <input type="checkbox" id="defic-auditiva" {...register("tipo-deficiencia", {required: true})} />
                        <Label id="defic-auditiva" label="Deficiência Auditiva" />

                        <input type="checkbox" id="defic-outras" {...register("tipo-deficiencia", {required: true})} />
                        <Label id="defic-outras" label="Outras" />
                    </div>
                    
                    <section id="servicos">
                        <h1>Serviços</h1>
                        <div className="box-line"></div>

                        <h3 className="pergunta-label">Quais serviços você se sente mais seguro(a) em fazer?</h3>

                        <div id="checklistServicos" className="dropdown-check-list" tabindex="100">
                            <span class="anchor">Marque quantas opções desejar</span> 
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

                    </section>
            </section>
            <input type="submit" />
        </form>
  );
}
