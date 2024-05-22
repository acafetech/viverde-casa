import './styles.css';
import Label from '../../../components/Label';
import LabelServ from '../../../components/LabelServices';
import LabelCheck from '../../../components/LabelCheck';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useFormik } from 'formik';
import * as Yup from "yup";
import HeaderForm from '../../../components/HeaderForm';
import Footer from '../../../components/Footer'

/* TEMOS 6 BUGS DE ARREY BUGAD */

function ClientForm() {
  const [isCheckListVisible, setCheckListVisible] = useState(false);
  //deixar visível a esteira de serviços
  const toggleCheckList = () => {
    setCheckListVisible(!isCheckListVisible);
  };

  const workerSchema = Yup.object().shape({
    email: Yup.string()
      .required("O e-mail é obrigatório")
      .email("E-mail inválido."),
    nomeCompleto: Yup.string()
      .required("O nome completo é obrigatório")
      .min(10, "Você precisa inserir pelo menos 10 caracteres."),
    nomeSocial: Yup.string()
      .min(3, "Você precisa inserir pelo menos 10 caracteres."),
    telefone1: Yup.string()
      .min(10, 'O telefone deve ter no mínimo 11 caracteres')
      .max(12, 'O telefone deve ter no máximo 11 caracteres')
      .matches(/[0-9]/, 'Formato de telefone inválido'),
    telefone2: Yup.string()
      .min(11, 'O telefone deve ter no mínimo 11 caracteres')
      .max(11, 'O telefone deve ter no máximo 11 caracteres')
      .matches(/[0-9]/, 'Formato de telefone inválido'),
    dadosPcd: Yup.string()
      .required("Selecione uma opção."),
    tipoPcd: Yup.array("Selecione, no mínimo, uma opção.") /* BUGADO */
      .min().of(Yup.array().required())
      .required(1, "Selecione, no mínimo, uma opção."),
    cepPessoal: Yup.string()
      .matches(/[0-9]/, "O campo CEP pode conter apenas dígitos.")
      .min(8, "O CEP deve conter 8 dígitos.")
      .max(8, "O CEP deve conter 8 dígitos.")
      .required('CEP é obrigatório'),
    numeroPessoal: Yup.string()
      .required("O número é obrigatório.")
      .max(10, "Número máximo de 10 dígitos."),
    cidadePessoal: Yup.string()
      .required("A cidade é obrigatória."),
    enderecoPessoal: Yup.string()
      .required("O logadouro é obrigatório."),
    bairroPessoal: Yup.string()
      .required("O bairro é obrigatório."),
    estadoPessoal: Yup.string()
      .required("O estado é obrigatório.")
      .min(2, "Número mínimo de 2 caracteres.")
      .max(20, "Número máximo de 20 caracteres."),
    cepObra: Yup.string()
      .matches(/[0-9]/, "O campo CEP pode conter apenas dígitos.")
      .min(8, "O CEP deve conter 8 dígitos.")
      .max(8, "O CEP deve conter 8 dígitos.")
      .required('CEP é obrigatório'),
    numeroObra: Yup.string()
      .required("O número é obrigatório.")
      .max(10, "Número máximo de 10 dígitos."),
    cidadeObra: Yup.string()
      .required("A cidade é obrigatória."),
    enderecoObra: Yup.string()
      .required("O logadouro é obrigatório."),
    bairroObra: Yup.string()
      .required("O bairro é obrigatório."),
    estadoObra: Yup.string()
      .required("O estado é obrigatório.")
      .min(2, "Número mínimo de 2 caracteres.")
      .max(20, "Número máximo de 20 caracteres."),
    servicos: Yup.array("Selecione, no mínimo, uma opção.")
      .min(1).of(Yup.array().required())
      .required("Selecione, no mínimo, uma opção."), /* BUGADO */
    textbox: Yup.string()
      .min(2, "Número mínimo de 10 caracteres.")
      .max(2500, "Número máximo de excedido caracteres."),
    agendamento: Yup.array("Selecione, no mínimo, uma opção.")
      .min(1).of(Yup.array().required())
      .required("Selecione, no mínimo, uma opção."), /* BUGADO */
    agendamentoFimDeSemana: Yup.string()
      .required("Selecione uma opção."),
    dataServico: Yup.array("Selecione, no mínimo, uma opção.") /* BUGADO */
      .min(1).of(Yup.array().required())
      .required("Selecione, no mínimo, uma opção."),
    indicacao: Yup.array("Selecione, no mínimo, uma opção.")
      .min(1).of(Yup.array().required()) /* BUGADO */
      .required("Selecione, no mínimo, uma opção."), /* BUGADO */
    codigoIndicacao: Yup.string()
      .min(2, "Número mínimo de 2 caracteres.")
      .max(50, "Número máximo de 20 caracteres."),
      PoliticaPrivacidade: Yup.string()
        .required("Campo obrigatório"),

  });

  const formik = useFormik({
    validationSchema: workerSchema,
          validateOnBlur: false,
          validateOnChange: false,
          initialValues: {
            email: '',
            nomeCompleto: '',
            nomeSocial: '',
            telefone1: '',
            telefone2: '',
            dadosPcd: '',
            tipoPcd: [],
            cepPessoal: '',
            numeroPessoal: '',
            cidadePessoal: '',
            enderecoPessoal: '',
            bairroPessoal: '',
            estadoPessoal: '',
            cepObra: '',
            numeroObra: '',
            cidadeObra: '',
            enderecoObra: '',
            bairroObra: '',
            estadoObra: '',
            servicos: [],
            textbox: '',
            agendamento: [],
            agendamentoFimDeSemana: '',
            dataServico: [],
            indicacao: [],
            codigoIndicacao: '',
            PoliticaPrivacidade:'',

          },

          onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
            console.log(values)
          }
  });

  const { 
    register, 
    } = useForm({
  });

  return (
    <main className="client-form">
      <HeaderForm/>

      <form id="client-form-container" onSubmit={formik.handleSubmit}>
        <section id="dados-pessoais">
          <h1>Dados Pessoais</h1>
          <div className="box-line"></div>
          <div className="primeiros-dados">
            <Label id="e-mail" label="Informe o seu melhor e-mail"/>
            <input type="email" id="e-mail" {...register("email")} onChange={formik.handleChange} value={formik.values.email} />
            <p className="error-message">{formik.errors.email}</p>

            <Label id="nome-completo" label="Nome Completo"/> 
            <input type="text" id="nome-completo" {...register("nomeCompleto")} onChange={formik.handleChange} value={formik.values.nomeCompleto} />
            <p className="error-message">{formik.errors.nomeCompleto}</p>

            <Label id="nome-social" label="Nome Social"/> 
            <p className='caracteres'>Como podemos te chamar?</p>
            <input type="text" id="nome-completo" {...register("nomeSocial")} onChange={formik.handleChange} value={formik.values.nomeSocial} />
            <p className="error-message">{formik.errors.nomeSocial}</p>

            <Label id="telefone" label="Telefones para contato"/>
            <div className="telefones">
              <input type="tel" id="telefone" {...register("telefone1")} onChange={formik.handleChange} value={formik.values.telefone1} />
              <p className="error-message">{formik.errors.telefone1}</p>
              <input type="tel" id="telefone" {...register("telefone2")} onChange={formik.handleChange} value={formik.values.telefone2} />
              <p className="error-message">{formik.errors.telefone2}</p>
            </div>
            
          </div>

          <div className="dados-pcd">
            <br></br>
            <h3>Você é uma pessoa com deficiência?</h3>
            <br></br>

            <div className="pcdSimNao">
              
              <input type="radio" id="pcd-sim" value="Sim" {...register("dadosPcd")} onChange={formik.handleChange} />
              <LabelCheck id="pcd-sim" label="Sim"/>
              
              <input type="radio" id="pcd-nao"  value="Nao" {...register("dadosPcd")} onChange={formik.handleChange} />
              <LabelCheck id="pcd-nao" label="Não"/>
              <p className="error-message">{formik.errors.dadosPcd}</p>
            </div>

            <br></br>
            <h3>Se sim, qual tipo de deficiência?</h3>
            <br></br>
            <div className="pcdTipo">
              <input type="radio" id="pcd-fisica"  value="fisica"{...register("tipoPcd")} onChange={formik.handleChange} />
              <LabelCheck id="pcd-fisica" label="Física" />
              
              <input type="radio" id="pcd-intelectual"  value="intelectual"{...register("tipoPcd")} onChange={formik.handleChange} />
              <LabelCheck id="pcd-intelectual" label="Intelectual" />
              
              <input type="radio" id="pcd-motora"  value="motora"{...register("tipoPcd")} onChange={formik.handleChange} />
              <LabelCheck id="pcd-motora" label="Motora" />
              
              <input type="radio" id="pcd-visual"  value="visual"{...register("tipoPcd")} onChange={formik.handleChange} />
              <LabelCheck id="pcd-visual" label="Visual" />
              
              <input type="radio" id="pcd-auditiva"  value="auditiva"{...register("tipoPcd")} onChange={formik.handleChange} />
              <LabelCheck id="pcd-auditiva" label="Auditiva" />
              
              <input type="radio" id="pcd-outra"  value="outra"{...register("tipoPcd")} onChange={formik.handleChange} />
              <LabelCheck id="pcd-outra" label="Outra" />
              <p className="error-message">{formik.errors.tipoPcd}</p>
            </div>
            
          </div>

          <div className="endereco-pessoal">
            <h1>Seu endereço</h1>
            <div className="box-line"></div>
              <div>
                <Label id="cep" label="CEP"/>
                <input type="number" id="cep" {...register("cepPessoal")} onChange={formik.handleChange} value={formik.values.cepPessoal} />
                <p className="error-message">{formik.errors.cepPessoal}</p>
                <Label id="numero" label="Número"/>
                <input type="number" id="numero" {...register("numeroPessoal")} onChange={formik.handleChange} value={formik.values.numeroPessoal} />
                <p className="error-message">{formik.errors.numeroPessoal}</p>
                <Label id="cidade" label="Cidade"/>
                <input type="text" id="cidade" {...register("cidadePessoal")} onChange={formik.handleChange} value={formik.values.cidadePessoal} />
                <p className="error-message">{formik.errors.cidadePessoal}</p>
            </div>
            
            <div>
              <Label id="endereco" label="Rua"/>
              <input type="text" id="endereco" {...register("enderecoPessoal")} onChange={formik.handleChange} value={formik.values.enderecoPessoal} />
              <p className="error-message">{formik.errors.enderecoPessoal}</p>
              <Label id="bairro" label="Bairro"/>
              <input type="text" id="bairro" {...register("bairroPessoal")} onChange={formik.handleChange} value={formik.values.bairroPessoal} />
              <p className="error-message">{formik.errors.bairroPessoal}</p>
              <Label id="estado" label="Estado"/>
              <input type="text" id="estado" {...register("estadoPessoal")} onChange={formik.handleChange} value={formik.values.estadoPessoal} />
              <p className="error-message">{formik.errors.estadoPessoal}</p>
            </div>
          </div>

          <div className="endereco-obra">
            <h1>Endereço da obra</h1>
            <div className="box-line"></div>

            <div>
              <Label id="cep" label="CEP"/>
              <input type="number" id="cep" {...register("cepObra")} onChange={formik.handleChange} value={formik.values.cepObra} />
              <p className="error-message">{formik.errors.cepObra}</p>
              <Label id="numero" label="Número"/>
              <input type="number" id="numero" {...register("numeroObra")} onChange={formik.handleChange} value={formik.values.numeroObra} />
              <p className="error-message">{formik.errors.numeroObra}</p>
              <Label id="cidade" label="Cidade"/>
              <input type="text" id="cidade" {...register("cidadeObra")} onChange={formik.handleChange} value={formik.values.cidadeObra} />
              <p className="error-message">{formik.errors.cidadeObra}</p>
            </div>

            <div>
              <Label id="endereco" label="Rua"/>
              <input type="text" id="endereco" {...register("enderecoObra")} onChange={formik.handleChange} value={formik.values.enderecoObra} />
              <p className="error-message">{formik.errors.enderecoObra}</p>
              <Label id="bairro" label="Bairro"/>
              <input type="text" id="bairro" {...register("bairroObra")} onChange={formik.handleChange} value={formik.values.bairroObra} />
              <p className="error-message">{formik.errors.bairroObra}</p>
              <Label id="estado" label="Estado"/>
              <input type="text" id="estado" {...register("estadoObra")} onChange={formik.handleChange} value={formik.values.estadoObra} />
              <p className="error-message">{formik.errors.estadoObra}</p>
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
                <input type="checkbox" id="arquitetura" value="arquitetura" {...register("servicos")} onChange={formik.handleChange} />
                <LabelServ id="arquitetura" label="Arquitetura" />
              </li>
              <li>
                <input type="checkbox" id="assentamento" value="assentamento" {...register("servicos")} onChange={formik.handleChange} />
                <LabelServ  id="assentamento" label="Assentamento de piso e revestimento" />
              </li>
              <li>
                <input type="checkbox" id="consertos" value="consertos" {...register("servicos")} onChange={formik.handleChange} />
                <LabelServ  id="consertos" label="Consertos de portas e janelas" />
              </li>
              <li>
                <input type="checkbox" id="construcao" value="construcao" {...register("servicos")} onChange={formik.handleChange} />
                <LabelServ  id="construcao" label="Construção" />
              </li>
              <li>
                <input type="checkbox" id="design" value="design" {...register("servicos")} onChange={formik.handleChange} />
                <LabelServ  id="design" label="Design de interiores" />
              </li>
              <li>
                <input type="checkbox" id="engenharia" value="engenharia" {...register("servicos")} onChange={formik.handleChange} />
                <LabelServ  id="engenharia" label="Engenharia" />
              </li>
              <li>
                <input type="checkbox" id="instalacaoBancadas" value="instalacaoBancadas" {...register("servicos")} onChange={formik.handleChange} />
                <LabelServ  id="instalacaoBancadas" label="Instalação de bancadas em Mármore, Quartzo e Granito" />
              </li>
              <li>
                <input type="checkbox" id="instalacaoCameras" value="instalacaoCameras" {...register("servicos")} onChange={formik.handleChange} />
                <LabelServ  id="instalacaoCameras" label="Instalação de câmeras e sensores de monitoramento e segurança" />
              </li>
              <li>
                <input type="checkbox" id="instalacaoEsquadrias" value="instalacaoEsquadrias" {...register("servicos")} onChange={formik.handleChange} />
                <LabelServ  id="instalacaoEsquadrias" label="Instalação de esquadrias" />
              </li>
              <li>
                <input type="checkbox" id="instalacaoGesso" value="instalacaoGesso" {...register("servicos")} onChange={formik.handleChange} />
                <LabelServ  id="instalacaoGesso" label="Instalação de gesso" />
              </li>
              <li>
                <input type="checkbox" id="instalacaoDrywallGesso" value="instalacaoDrywallGesso" {...register("servicos")} onChange={formik.handleChange} />
                <LabelServ  id="instalacaoDrywallGesso" label="Instalação em drywall e gesso acartonado" />
              </li>
              <li>
                <input type="checkbox" id="instalacaoPapel" value="instalacaoPapel" {...register("servicos")} onChange={formik.handleChange} />
                <LabelServ  id="instalacaoPapel" label="Instalação de papel de parede" />
              </li>
              <li>
                <input type="checkbox" id="limpeza" value="limpeza" {...register("servicos")} onChange={formik.handleChange} />
                <LabelServ  id="limpeza" label="Limpeza pós obra" />
              </li>
              <li>
                <input type="checkbox" id="marcenaria" value="marcenaria" {...register("servicos")} onChange={formik.handleChange} />
                <LabelServ  id="marcenaria" label="Marcenaria" />
              </li>
              <li>
                <input type="checkbox" id="pedreiro" value="pedreiro" {...register("servicos")} onChange={formik.handleChange} />
                <LabelServ  id="pedreiro" label="Pedreiro de alvenaria" />
              </li>
              <li>
                <input type="checkbox" id="pequenosReparos" value="pequenosReparos" {...register("servicos")} onChange={formik.handleChange} />
                <LabelServ  id="pequenosReparos" label="Pequenos Reparos" />
              </li>
              <li>
                <input type="checkbox" id="pinturaFerragens" value="pinturaFerragens" {...register("servicos")} onChange={formik.handleChange} />
                <LabelServ  id="pinturaFerragens" label="Pintura de ferragens" />
              </li>
              <li>
                <input type="checkbox" id="pinturaGeral" value="pinturaGeral" {...register("servicos")} onChange={formik.handleChange} />
                <LabelServ  id="pinturaGeral" label="Pintura Geral" />
              </li>
              <li>
                <input type="checkbox" id="reformaCompleta" value="reformaCompleta" {...register("servicos")} onChange={formik.handleChange} />
                <LabelServ  id="reformaCompleta" label="Reforma completa" />
              </li>
              <li>
                <input type="checkbox" id="servicosAcabamento" value="servicosAcabamento" {...register("servicos")} onChange={formik.handleChange} />
                <LabelServ  id="servicosAcabamento" label="Serviços de acabamento geral" />
              </li>
              <li>
                <input type="checkbox" id="servicosJardinagem" value="servicosJardinagem" {...register("servicos")} onChange={formik.handleChange} />
                <LabelServ  id="servicosJardinagem" label="Serviços de Jardinagem" />
              </li>
              <li>
                <input type="checkbox" id="servicosEletricos" value="servicosEletricos" {...register("servicos")} onChange={formik.handleChange} />
                <LabelServ  id="servicosEletricos" label="Serviços elétricos" />
              </li>
              <li>
                <input type="checkbox" id="servicosHidraulicos" value="servicosHidraulicos" {...register("servicos")} onChange={formik.handleChange} />
                <LabelServ  id="servicosHidraulicos" label="Serviços hidráulicos" />
              </li>
              <li>
                <input type="checkbox" id="vidracarias" value="vidracarias" {...register("servicos")} onChange={formik.handleChange} />
                <LabelServ  id="vidracarias" label="Vidraçarias" />
              </li>
              <li>
                <input type="checkbox" id="outros" value="outros" {...register("servicos")} onChange={formik.handleChange} />
                <LabelServ  id="outros" label="Outros" />
              </li>
            </ul>
            <p className="error-message">{formik.errors.servicos}</p>
          </div>

          

          <div id="servicos-detalhes">
            <h3 className="pergunta-label">Outros: </h3>
            <Label id="outros-servicos"/>
            <textarea placeholder="Descreva qual serviço você deseja?" id="textbox" cols="30" rows="10" {...register("textbox")} onChange={formik.handleChange} value={formik.values.textbox} />
            <p className="error-message">{formik.errors.textbox}</p>
          </div>

          <br></br>
          <h3>Queremos entender exatamente qual é sua necessidade.</h3>
          <p>Informe nesse espaço os detalhes do serviço que deseja contratar. (Ex: Aplicação de revestimento cerâmico em parede de banheiro que mede 2m x 3m).</p>
          <div id="servicos-detalhes">
            <Label id="detalhes"/>
            <textarea placeholder="Digite aqui...." id="textbox" cols="30" rows="10" {...register("textbox")} onChange={formik.handleChange} value={formik.values.textbox} />
            <p className="error-message">{formik.errors.textbox}</p>
          </div>

          <br></br>
          <p>Precisa de ajuda para medir os espaços? Assista nosso tutorial!</p>
          
        </section>

        <section id="agendamento">
          <h1>Agendamento</h1>
          <div className="box-line"></div>
          <br></br>
          <h3 className="pergunta-label">Melhor horário para você ser atendido:</h3>

          
          <input {...register("agendamento")} onChange={formik.handleChange} id="horario-manha" type="radio" value="Manhã" />
          <LabelCheck id="horario-manha" label="Manhã"/>
          
          <input {...register("agendamento")} onChange={formik.handleChange} id="horario-tarde" type="radio" value=" Tarde" />
          <LabelCheck id="horario-tarde" label="Tarde"/>
          
          <input {...register("agendamento")} onChange={formik.handleChange} id="horario-noite" type="radio" value=" Noite" />
          <LabelCheck id="horario-noite" label="Noite"/>
          <p className="error-message">{formik.errors.agendamento}</p>

          <h3 className="pergunta-label">Aceita que o serviço seja realizado durante o final de semana?</h3>
          
          <input {...register("agendamentoFimDeSemana")} onChange={formik.handleChange} id="agendamento-sim"  type="radio" value="Sim" />
          <LabelCheck id="agendamento-sim" label="Sim"/>
          
          <input {...register("agendamentoFimDeSemana")} onChange={formik.handleChange} id="agendamento-nao" type="radio" value=" Não" />
          <LabelCheck id="agendamento-nao" label="Não"/>
          <p className="error-message">{formik.errors.agendamentoFimDeSemana}</p>

          <h3 className="pergunta-label">Pra quando precisa do serviço?</h3>

          <div className="data-servico">
            <ul type="none">
              <li>
                <input type="checkbox" id="srvc-urgente" placeholder="data-servico" {...register("dataServico")} onChange={formik.handleChange} />
                <LabelServ id="srvc-urgente" label="Urgente"/>
              </li>

              <li>
                <input type="checkbox" id="srvc-proxsem" placeholder="data-servico" {...register("dataServico")} onChange={formik.handleChange} />
                <LabelServ id="srvc-proxsem" label="Na próxima semana"/>
              </li>

              <li>
                <input type="checkbox" id="srvc-mes" placeholder="data-servico" {...register("dataServico")} onChange={formik.handleChange} />
                <LabelServ id="srvc-mes" label="Daqui a um mês"/>
              </li>

              <li>
                <input type="checkbox" id="srvc-seismeses" placeholder="data-servico" {...register("dataServico")} onChange={formik.handleChange} />
                <LabelServ id="srvc-seismeses" label="6 meses ou mais"/>
              </li>
            </ul>
            <p className="error-message">{formik.errors.dataServico}</p>
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
                <input type="checkbox" id="pagamentoFacilitado" value="pagamentoFacilitado" {...register("servicos")} onChange={formik.handleChange} />
                <LabelServ  id="pagamentoFacilitado" label="Pagamento facilitado" />
              </li>
              <li>
                <input type="checkbox" id="obraEspecializada" value="obraEspecializada" {...register("servicos")} onChange={formik.handleChange} />
                <LabelServ  id="obraEspecializada" label="Mão de obra especializada" />
              </li>
              <li>
                <input type="checkbox" id="obraFeminina" value="obraFeminina" {...register("servicos")} onChange={formik.handleChange} />
                <LabelServ  id="obraFeminina" label="Mão de obra feminina" />
              </li>
              <li>
                <input type="checkbox" id="qualidadeAcabamento" value="qualidadeAcabamento" {...register("servicos")} onChange={formik.handleChange} />
                <LabelServ  id="qualidadeAcabamento" label="Qualidade no acabamento" />
              </li>
              <li>
                <input type="checkbox" id="melhorPreco" value="melhorPreco" {...register("servicos")} onChange={formik.handleChange} />
                <LabelServ  id="melhorPreco" label="Melhor preço" />
              </li>
            </ul>
            <p className="error-message">{formik.errors.servicos}</p>
          </div>
        </section>

        <section id="indicacao">
          <h1>Pesquisa</h1>
          <div className="box-line"></div>
          <h3 className="pergunta-label">Quem indicou a Viverde Casa:</h3>

          <div>
            <ul type="none">
              <li>
                <input type="checkbox" id="indic-amigos"  placeholder="indicacao" {...register("indicacao")} onChange={formik.handleChange} />
                <LabelServ id="indic-amigos" label="Amigos"/>
              </li>

              <li>
                <input type="checkbox" id="indic-projsocparceiro" placeholder="indicacao" {...register("indicacao")} onChange={formik.handleChange} />
                <LabelServ id="indic-projsocparceiro" label="Projeto Social Parceiro"/>
              </li>

              <li>
                <input type="checkbox" id="indic-profparc"  placeholder="indicacao" {...register("indicacao")} onChange={formik.handleChange} />
                <LabelServ id="indic-profparc" label="Profissional Parceiro"/>
              </li>

              <li>
                <input type="checkbox" id="indic-estabelecimento" placeholder="indicacao" {...register("indicacao")} onChange={formik.handleChange} />
                <LabelServ id="indic-estabelecimento" label="Estabelecimento conveniado"/>
              </li>

              <li>
                <input type="checkbox" id="indic-insta" placeholder="indicacao" {...register("indicacao")} onChange={formik.handleChange} />
                <LabelServ id="indic-insta" label="Instagram"/>
              </li>

              <li>
                <input type="checkbox"  id="indic-face" placeholder="indicacao" {...register("indicacao")} onChange={formik.handleChange} />
                <LabelServ id="indic-face" label="Facebook"/>
              </li>

              <li>
                <input type="checkbox" id="indic-outro" placeholder="indicacao" {...register("indicacao")} onChange={formik.handleChange} />
                <LabelServ id="indic-outro" label="Outro"/>
              </li>
              <p className="error-message">{formik.errors.indicacao}</p>
            </ul>
              
          </div>

          <br></br>
          <Label id="codigo-indicacao" label="Código de indicação:"/>
          <input type="text" id="codigo-indicacao" {...register("codigoIndicacao")} onChange={formik.handleChange} value={formik.values.codigoIndicacao} />
          <p className="error-message">{formik.errors.codigoIndicacao}</p>
        </section>

        <section className='termoUso'>
            <h1>Política de Privacidade</h1>
            <div className='box-line'></div>
            <a href="https://drive.google.com/drive/folders/1dR4AAgwrhY0Znqs-TDwCzoKYNDyU52Ip" target="_blank">Política de Privacidade</a>
            <a href="https://drive.google.com/file/d/1jIJbR4bSmUH-CG-tEnTdYBD9uDFR2Sof/view?usp=sharing" target="_blank">Termo de Privacidade</a>
            <p>
                 Li e compreendi os Termos de Uso, a Lei Geral de Proteção de Dados Pessoais (LGPD) e a Política de Privacidade da Viverde Casa.
            </p>

            <div className="Termo-sim-nao">
    
                <input id="TermoSim" {...register("PoliticaPrivacidade")}
                type="radio" value="Sim" onChange={formik.handleChange} />
                <LabelCheck id="TermoSim" label="Sim"/>

                <input id="TermoNão" {...register("PoliticaPrivacidade")} 
                        type="radio" value=" Não" onChange={formik.handleChange} />
                        <LabelCheck id="TermoNão" label="Não"/>
                    <p className="error-message">{formik.errors.PoliticaPrivacidade}</p>

            </div>
            </section> 


        <button type="submit">Enviar</button> 
      </form>
      <Footer/>
    </main>
  )
}

export default ClientForm;