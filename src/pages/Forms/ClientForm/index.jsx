import './styles.css';
import Label from '../../../components/Label';
import LabelServ from '../../../components/LabelServices';
import LabelCheck from '../../../components/LabelCheck';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useFormik } from 'formik';
import * as Yup from "yup";

function ClientForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isCheckListVisible, setCheckListVisible] = useState(false);
  const onSubmit = data => console.log(data);
  console.log(errors);

  const toggleCheckList = () => {
    setCheckListVisible(!isCheckListVisible);
  };

  return (
    <main className="client-form">
      <form id="client-form-container" onSubmit={handleSubmit(onSubmit)}>
        <section id="dados-pessoais">
          <h1>Dados Pessoais</h1>
          <div className="box-line"></div>
          <div className="primeiros-dados">
            <Label id="e-mail" label="Informe o seu melhor e-mail"/>
            <input type="email" id="e-mail" {...register("e-mail", {required: true, maxLength: 40})} />

            <Label id="nome-completo" label="Nome Completo"/> 
            <input type="text" id="nome-completo" {...register("Nome completo", {required: true, min: 10, maxLength: 50})} />

            <Label id="nome-social" label="Nome Social"/> 
            <p className='caracteres'>Como podemos te chamar?</p>
            <input type="text" id="nome-completo" {...register("Nome completo", {required: false, min: 10, maxLength: 50})} />

            <Label id="telefone" label="Telefones para contato"/> 
            <input type="tel" id="telefone" {...register("telefone", {required: true, maxLength: 11, pattern: /[0-9]{11}/i })} />
            <input type="tel" id="telefone" {...register("telefone", {required: true, maxLength: 11, pattern: /[0-9]{11}/i })} />
          </div>

          <div className="dados-pcd">
            <br></br>
            <h3>Você é uma pessoa com deficiência?</h3>
            <br></br>
            <div className="pcdSimNao">
              <LabelCheck id="pcd-sim" label="Sim"/>
              <input type="radio" id="port-deficiencia" value="Sim" {...register("dados-pcd", { required: true })}   />
              <LabelCheck id="pcd-nao" label="Não"/>
              <input type="radio" id="port-deficiencia"  value="Nao"{...register("dados-pcd", { required: true })}   />
            </div>

            <br></br>
            <h3>Se sim, qual tipo de deficiência?</h3>
            <br></br>
            <div className="pcdTipo">
              <input type="radio" id="pcd-tipo"  value="fisica"{...register("dados-pcd", { required: true })}   />
              <LabelCheck id="pcd-tipo" label="Física" />
              <input type="radio" id="pcd-tipo"  value="intelectual"{...register("dados-pcd", { required: true })}   />
              <LabelCheck id="pcd-tipo" label="Intelectual" />
              <input type="radio" id="pcd-tipo"  value="motora"{...register("dados-pcd", { required: true })}   />
              <LabelCheck id="pcd-tipo" label="Motora" />
              <input type="radio" id="pcd-tipo"  value="visual"{...register("dados-pcd", { required: true })}   />
              <LabelCheck id="pcd-tipo" label="Visual" />
              <input type="radio" id="pcd-tipo"  value="auditiva"{...register("dados-pcd", { required: true })}   />
              <LabelCheck id="pcd-tipo" label="Auditiva" />
              <input type="radio" id="pcd-tipo"  value="outra"{...register("dados-pcd", { required: true })}   />
              <LabelCheck id="pcd-tipo" label="Outra" />
            </div>
            
          </div>

          <div className="endereco-pessoal">
            <h1>Seu endereço</h1>
            <div className="box-line"></div>
              <div>
                <Label id="cep" label="CEP"/>
                <input type="number" id="cep" {...register("cep", {required: true, maxLength: 8})} />       
                <Label id="numero" label="Número"/>
                <input type="number" id="numero" {...register("numero", {required: true, maxLength: 20})} />
                <Label id="cidade" label="Cidade"/>
                <input type="text" id="cidade" {...register("cidade", {required: true, maxLength: 100})} />
            </div>
            
            <div>
              <Label id="endereco" label="Rua"/>
              <input type="text" id="endereco" {...register("endereco", {required: true, maxLength: 100})} />
              <Label id="bairro" label="Bairro"/>
              <input type="text" id="bairro" {...register("bairro", {required: true, maxLength: 100})} />
              <Label id="estado" label="Estado"/>
              <input type="text" id="estado" {...register("estado", {required: true, maxLength: 100})} />
            </div>
          </div>

          <div className="endereco-obra">
            <h1>Endereço da obra</h1>
            <div className="box-line"></div>

            <div>
              <Label id="cep" label="CEP"/>
              <input type="number" id="cep" {...register("cep", {required: true, maxLength: 8})} />
              <Label id="numero" label="Número"/>
              <input type="number" id="numero" {...register("numero", {required: true, maxLength: 20})} />
              <Label id="cidade" label="Cidade"/>
              <input type="text" id="cidade" {...register("cidade", {required: true, maxLength: 100})} />
            </div>

            <div>
              <Label id="endereco" label="Rua"/>
              <input type="text" id="endereco" {...register("endereco", {required: true, maxLength: 100})} />
              <Label id="bairro" label="Bairro"/>
              <input type="text" id="bairro" {...register("bairro", {required: true, maxLength: 100})} />
              <Label id="estado" label="Estado"/>
              <input type="text" id="estado" {...register("estado", {required: true, maxLength: 100})} />
            </div>
          </div>
        </section>

        <section>
          <h1>Serviço</h1>
          <div className="box-line"></div>
          <br></br>
          <p>Que tipo de serviço deseja realizar?</p>

          <div id="checklistServicos" className={`dropdown-check-list ${isCheckListVisible ? 'visible' : ''}`} tabIndex="100">
            <span className="anchor" onClick={toggleCheckList}>Marque quantas opções desejar</span>
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
                <input type="checkbox" id="instalacaoCameras" value="instalacaoCameras" {...register("servicos", {required: true})} />
                <LabelServ  id="instalacaoCameras" label="Instalação de câmeras e sensores de monitoramento e segurança" />
              </li>
              <li>
                <input type="checkbox" id="instalacaoEsquadrias" value="instalacaoEsquadrias" {...register("servicos", {required: true})} />
                <LabelServ  id="instalacaoEsquadrias" label="Instalação de esquadrias" />
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
                <input type="checkbox" id="marcenaria" value="marcenaria" {...register("servicos", {required: true})} />
                <LabelServ  id="marcenaria" label="Marcenaria" />
              </li>
              <li>
                <input type="checkbox" id="pedreiro" value="pedreiro" {...register("servicos", {required: true})} />
                <LabelServ  id="pedreiro" label="Pedreiro de alvenaria" />
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

          

          <div id="servicos-detalhes">
            <h3 className="pergunta-label">Outros: </h3>
            <Label id="outros-servicos"/>
            <textarea placeholder="Descreva qual serviço você deseja?" id="textbox" cols="30" rows="10"></textarea>
          </div>

          <br></br>
          <h3>Queremos entender exatamente qual é sua necessidade.</h3>
          <p>Informe nesse espaço os detalhes do serviço que deseja contratar. (Ex: Aplicação de revestimento cerâmico em parede de banheiro que mede 2m x 3m).</p>
          <div id="servicos-detalhes">
            <Label id="detalhes"/>
            <textarea placeholder="Digite aqui...." id="textbox" cols="30" rows="10"></textarea>
          </div>

          <br></br>
          <p>Precisa de ajuda para medir os espaços? Assista nosso tutorial!</p>
          
        </section>

        <section id="agendamento">
          <h1>Agendamento</h1>
          <div className="box-line"></div>
          <br></br>
          <h3 className="pergunta-label">Melhor horário para você ser atendido:</h3>

          <LabelCheck id="horario-manha" label="Manhã"/>
          <input {...register("agendamento")} type="radio" value="Manhã" />
          <LabelCheck id="horario-tarde" label="Tarde"/>
          <input {...register("agendamento")} type="radio" value=" Tarde" />
          <LabelCheck id="horario-noite" label="Noite"/>
          <input {...register("agendamento")} type="radio" value=" Noite" />

          <h3 className="pergunta-label">Aceita que o serviço seja realizado durante o final de semana?</h3>
          <LabelCheck id="agendamento-sim" label="Sim"/>
          <input {...register("finaldesemana", { required: true })} type="radio" value="Sim" />
          <LabelCheck id="agendamento-nao" label="Não"/>
          <input {...register("finaldesemana", { required: true })} type="radio" value=" Não" />

          <h3 className="pergunta-label">Pra quando precisa do serviço?</h3>

          <div className="data-servico">
            <ul type="none">
              <li>
                <input type="checkbox" placeholder="data-servico" {...register("data-servico", {required: true})} />
                <LabelServ id="data-servico" label="Urgente"/>
              </li>

              <li>
                <input type="checkbox" placeholder="data-servico" {...register("data-servic", {required: true})} />
                <LabelServ id="data-servico" label="Na próxima semana"/>
              </li>

              <li>
                <input type="checkbox" placeholder="data-servico" {...register("data-servico", {required: true})} />
                <LabelServ id="data-servico" label="Daqui a um mês"/>
              </li>

              <li>
                <input type="checkbox" placeholder="data-servico" {...register("data-servico", {required: true})} />
                <LabelServ id="data-servico" label="6 meses ou mais"/>
              </li>
            </ul>
          </div>
          

          <h3 className="pergunta-label">Há alguma observação sobre o ambiente (norma, restrição ou necessidade especial)?</h3>
          <Label id="observacao" />
          <textarea placeholder="Digite aqui...." id="textbox" cols="30" rows="10"></textarea>

          <h3 className="pergunta-label">Qual é a sua prioridade para contratar este serviço?</h3>
          <br></br>

          <div id="checklistServicos" className={`dropdown-check-list ${isCheckListVisible ? 'visible' : ''}`} tabIndex="100">
            <span className="anchor" onClick={toggleCheckList}>Marque quantas opções desejar</span>

            <ul className="items">
              <li>
                <input type="checkbox" id="pagamentoFacilitado" value="pagamentoFacilitado" {...register("servicos", {required: true})} />
                <LabelServ  id="pagamentoFacilitado" label="Pagamento facilitado" />
              </li>
              <li>
                <input type="checkbox" id="obraEspecializada" value="obraEspecializada" {...register("servicos", {required: true})} />
                <LabelServ  id="obraEspecializada" label="Mão de obra especializada" />
              </li>
              <li>
                <input type="checkbox" id="obraFeminina" value="obraFeminina" {...register("servicos", {required: true})} />
                <LabelServ  id="obraFeminina" label="Mão de obra feminina" />
              </li>
              <li>
                <input type="checkbox" id="qualidadeAcabamento" value="qualidadeAcabamento" {...register("servicos", {required: true})} />
                <LabelServ  id="qualidadeAcabamento" label="Qualidade no acabamento" />
              </li>
              <li>
                <input type="checkbox" id="melhorPreco" value="melhorPreco" {...register("servicos", {required: true})} />
                <LabelServ  id="melhorPreco" label="Melhor preço" />
              </li>
            </ul>
          </div>
        </section>

        <section id="indicacao">
          <h1>Pesquisa</h1>
          <div className="box-line"></div>
          <h3 className="pergunta-label">Quem indicou a Viverde Casa:</h3>

          <div>
            <ul type="none">
              <li>
                <input type="checkbox" placeholder="indicacao" {...register("indicacao", {required: true})} />
                <LabelServ id="indicacao" label="Amigos"/>
              </li>

              <li>
                <input type="checkbox" placeholder="indicacao" {...register("indicacao", {required: true})} />
                <LabelServ id="indicacao" label="Projeto Social Parceiro"/>
              </li>

              <li>
                <input type="checkbox" placeholder="indicacao" {...register("indicacao", {required: true})} />
                <LabelServ id="indicacao" label="Profissional Parceiro"/>
              </li>

              <li>
                <input type="checkbox" placeholder="indicacao" {...register("indicacao", {required: true})} />
                <LabelServ id="indicacao" label="Estabelecimento conveniado"/>
              </li>

              <li>
                <input type="checkbox" placeholder="indicacao" {...register("indicacao", {required: true})} />
                <LabelServ id="indicacao" label="Instagram"/>
              </li>

              <li>
                <input type="checkbox" placeholder="indicacao" {...register("indicacao", {required: true})} />
                <LabelServ id="indicacao" label="Facebook"/>
              </li>

              <li>
                <input type="checkbox" placeholder="indicacao" {...register("indicacao", {required: true})} />
                <LabelServ id="indicacao" label="Outro"/>
              </li>
            </ul>
              
          </div>

          <br></br>
          <Label id="codigo-indicacao" label="Código de indicação:"/>
          <input type="text" id="codigo-indicacao" {...register("codigo-indicacao", {required: false, min: 10, maxLength: 50})} />
        </section>

        <button type="submit">Enviar</button>
      </form>
    </main>
  )
}

export default ClientForm;
