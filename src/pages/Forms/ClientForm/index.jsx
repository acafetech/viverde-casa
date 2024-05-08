import "./styles.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import Label from "../../../components/Label";
import LabelServ from "../../../components/LabelServices";
import LabelCheck from "../../../components/LabelCheck";
import { useState } from "react";

function ClientForm() {
  const [isCheckListVisible, setCheckListVisible] = useState(false);
  const toggleCheckList = () => {
    setCheckListVisible(!isCheckListVisible);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      nomeCompleto: "",
      nomeSocial: "",
      telefone1: "",
      telefone2: "",
      dadosPcd: "",
      tipoPcd: [],
      cepPessoal: "",
      numeroPessoal: "",
      cidadePessoal: "",
      enderecoPessoal: "",
      bairroPessoal: "",
      estadoPessoal: "",
      cepObra: "",
      numeroObra: "",
      cidadeObra: "",
      enderecoObra: "",
      bairroObra: "",
      estadoObra: "",
      servicos: [],
      textbox: "",
      agendamento: [],
      agendamentoFimDeSemana: "",
      dataServico: [],
      indicacao: [],
      codigoIndicacao: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("O e-mail é obrigatório")
        .email("E-mail inválido"),
      nomeCompleto: Yup.string()
        .required("O nome completo é obrigatório")
        .min(10, "Você precisa inserir pelo menos 10 caracteres"),
      nomeSocial: Yup.string().min(
        10,
        "Você precisa inserir pelo menos 10 caracteres"
      ),
      telefone1: Yup.string().matches(
        /[0-9]{11}/,
        "Formato de telefone inválido"
      ),
      telefone2: Yup.string().matches(
        /[0-9]{11}/,
        "Formato de telefone inválido"
      ),
      dadosPcd: Yup.string().required("Selecione uma opção."),
      tipoPcd: Yup.array().min(1, "Selecione, no mínimo, uma opção."),
      cepPessoal: Yup.string()
        .matches(/[0-9]{8}/, "O campo CEP pode conter apenas dígitos.")
        .required("CEP é obrigatório"),
      numeroPessoal: Yup.string()
        .required("O número é obrigatório.")
        .max(10, "Número máximo de 10 dígitos."),
      cidadePessoal: Yup.string().required("A cidade é obrigatória."),
      enderecoPessoal: Yup.string().required("O logadouro é obrigatório."),
      bairroPessoal: Yup.string().required("O bairro é obrigatório."),
      estadoPessoal: Yup.string()
        .required("O estado é obrigatório.")
        .min(2, "Número mínimo de 2 caracteres.")
        .max(20, "Número máximo de 20 caracteres."),
      cepObra: Yup.string()
        .matches(/[0-9]{8}/, "O campo CEP pode conter apenas dígitos.")
        .required("CEP é obrigatório"),
      numeroObra: Yup.string()
        .required("O número é obrigatório.")
        .max(10, "Número máximo de 10 dígitos."),
      cidadeObra: Yup.string().required("A cidade é obrigatória."),
      enderecoObra: Yup.string().required("O logadouro é obrigatório."),
      bairroObra: Yup.string().required("O bairro é obrigatório."),
      estadoObra: Yup.string()
        .required("O estado é obrigatório.")
        .min(2, "Número mínimo de 2 caracteres.")
        .max(20, "Número máximo de 20 caracteres."),
      servicos: Yup.array().min(1, "Selecione, no mínimo, uma opção."),
      textbox: Yup.string()
        .min(10, "Número mínimo de 10 caracteres.")
        .max(2500, "Número máximo de 2500 caracteres."),
      agendamento: Yup.array().min(1, "Selecione, no mínimo, uma opção."),
      agendamentoFimDeSemana: Yup.string().required("Selecione uma opção."),
      dataServico: Yup.array().min(1, "Selecione, no mínimo, uma opção."),
      indicacao: Yup.array().min(1, "Selecione, no mínimo, uma opção."),
      codigoIndicacao: Yup.string()
        .min(2, "Número mínimo de 2 caracteres.")
        .max(20, "Número máximo de 20 caracteres."),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <main className="client-form">
      <form id="client-form-container" onSubmit={formik.handleSubmit}>
        <section id="dados-pessoais">
          <h1>Dados Pessoais</h1>
          <div className="box-line"></div>
          <div className="primeiros-dados">
            <Label id="e-mail" label="Informe o seu melhor e-mail" />
            <input
              type="email"
              name="email"
              id="e-mail"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            <p className="error-message">{formik.errors.email}</p>
            <Label id="nome-completo" label="Nome Completo" />
            <input
              type="text"
              id="nome-completo"
              name="nomeCompleto"
              onChange={formik.handleChange}
              value={formik.values.nomeCompleto}
            />
            <p className="error-message">{formik.errors.nomeCompleto}</p>
            <Label id="nome-social" label="Nome Social" />
            <p className="caracteres">Como podemos te chamar?</p>
            <input
              type="text"
              id="nome-completo"
              name="nomeSocial"
              onChange={formik.handleChange}
              value={formik.values.nomeSocial}
            />
            <p className="error-message">{formik.errors.nomeSocial}</p>
            <Label id="telefone" label="Telefones para contato" />
            <div className="telefones">
              <input
                type="tel"
                id="telefone"
                name="telefone1"
                onChange={formik.handleChange}
                value={formik.values.telefone1}
              />
              <p className="error-message">{formik.errors.telefone1}</p>
              <input
                type="tel"
                id="telefone"
                name="telefone2"
                onChange={formik.handleChange}
                value={formik.values.telefone2}
              />
              <p className="error-message">{formik.errors.telefone2}</p>
            </div>
          </div>
          <div className="dados-pcd">
            <br></br>
            <h3>Você é uma pessoa com deficiência?</h3>
            <br></br>
            <div className="pcdSimNao">
              <LabelCheck id="pcd-sim" label="Sim" />
              <input
                type="radio"
                id="port-deficiencia"
                value="Sim"
                onChange={formik.handleChange}
              />
              <LabelCheck id="pcd-nao" label="Não" />
              <input
                type="radio"
                id="port-deficiencia"
                value="Nao"
                onChange={formik.handleChange}
              />
              <p className="error-message">{formik.errors.dadosPcd}</p>
            </div>

            <br></br>
            <h3>Se sim, qual tipo de deficiência?</h3>
            <br></br>
            <div className="pcdTipo">
              <input
                type="radio"
                id="pcd-tipo"
                value="fisica"
                onChange={formik.handleChange}
              />
              <LabelCheck id="pcd-tipo" label="Física" />
              <input
                type="radio"
                id="pcd-tipo"
                value="intelectual"
                onChange={formik.handleChange}
              />
              <LabelCheck id="pcd-tipo" label="Intelectual" />
              <input
                type="radio"
                id="pcd-tipo"
                value="motora"
                onChange={formik.handleChange}
              />
              <LabelCheck id="pcd-tipo" label="Motora" />
              <input
                type="radio"
                id="pcd-tipo"
                value="visual"
                onChange={formik.handleChange}
              />
              <LabelCheck id="pcd-tipo" label="Visual" />
              <input
                type="radio"
                id="pcd-tipo"
                value="auditiva"
                onChange={formik.handleChange}
              />
              <LabelCheck id="pcd-tipo" label="Auditiva" />
              <input
                type="radio"
                id="pcd-tipo"
                value="outra"
                onChange={formik.handleChange}
              />
              <LabelCheck id="pcd-tipo" label="Outra" />
              <p className="error-message">{formik.errors.tipoPcd}</p>
            </div>
          </div>
          <div className="endereco-pessoal">
            <h1>Seu endereço</h1>
            <div className="box-line"></div>
            <div>
              <Label id="cep" label="CEP" />
              <input
                type="number"
                id="cep"
                onChange={formik.handleChange}
                value={formik.values.cepPessoal}
              />
              <p className="error-message">{formik.errors.cepPessoal}</p>
              <Label id="numero" label="Número" />
              <input
                type="number"
                id="numero"
                onChange={formik.handleChange}
                value={formik.values.numeroPessoal}
              />
              <p className="error-message">{formik.errors.numeroPessoal}</p>
              <Label id="cidade" label="Cidade" />
              <input
                type="text"
                id="cidade"
                onChange={formik.handleChange}
                value={formik.values.cidadePessoal}
              />
              <p className="error-message">{formik.errors.cidadePessoal}</p>
            </div>
            <div>
              <Label id="endereco" label="Rua" />
              <input
                type="text"
                id="endereco"
                onChange={formik.handleChange}
                value={formik.values.enderecoPessoal}
              />
              <p className="error-message">{formik.errors.enderecoPessoal}</p>
              <Label id="bairro" label="Bairro" />
              <input
                type="text"
                id="bairro"
                onChange={formik.handleChange}
                value={formik.values.bairroPessoal}
              />
              <p className="error-message">{formik.errors.bairroPessoal}</p>
              <Label id="estado" label="Estado" />
              <input
                type="text"
                id="estado"
                onChange={formik.handleChange}
                value={formik.values.estadoPessoal}
              />
              <p className="error-message">{formik.errors.estadoPessoal}</p>
            </div>
          </div>
          <div className="endereco-obra">
            <h1>Endereço da obra</h1>
            <div className="box-line"></div>
            <div>
              <Label id="cep" label="CEP" />
              <input
                type="number"
                id="cep"
                onChange={formik.handleChange}
                value={formik.values.cepObra}
              />
              <p className="error-message">{formik.errors.cepObra}</p>
              <Label id="numero" label="Número" />
              <input
                type="number"
                id="numero"
                onChange={formik.handleChange}
                value={formik.values.numeroObra}
              />
              <p className="error-message">{formik.errors.numeroObra}</p>
              <Label id="cidade" label="Cidade" />
              <input
                type="text"
                id="cidade"
                onChange={formik.handleChange}
                value={formik.values.cidadeObra}
              />
              <p className="error-message">{formik.errors.cidadeObra}</p>
            </div>
            <div>
              <Label id="endereco" label="Rua" />
              <input
                type="text"
                id="endereco"
                onChange={formik.handleChange}
                value={formik.values.enderecoObra}
              />
              <p className="error-message">{formik.errors.enderecoObra}</p>
              <Label id="bairro" label="Bairro" />
              <input
                type="text"
                id="bairro"
                onChange={formik.handleChange}
                value={formik.values.bairroObra}
              />
              <p className="error-message">{formik.errors.bairroObra}</p>
              <Label id="estado" label="Estado" />
              <input
                type="text"
                id="estado"
                onChange={formik.handleChange}
                value={formik.values.estadoObra}
              />
              <p className="error-message">{formik.errors.estadoObra}</p>
            </div>
          </div>
        </section>
        <section>
          <h1>Serviço</h1>
          <div className="box-line"></div>
          <br></br>
          <p>Que tipo de serviço deseja realizar?</p>
          <div
            id="checklistServicos"
            className={`dropdown-check-list ${
              isCheckListVisible ? "visible" : ""
            }`}
            tabIndex="100"
          >
            <span className="anchor" onClick={toggleCheckList}>
              Marque quantas opções desejar
            </span>
            <ul className="items">
              <li>
                <input
                  type="checkbox"
                  id="arquitetura"
                  value="arquitetura"
                  onChange={formik.handleChange}
                />
                <LabelServ id="arquitetura" label="Arquitetura" />
              </li>
              <li>
                <input
                  type="checkbox"
                  id="assentamento"
                  value="assentamento"
                  onChange={formik.handleChange}
                />
                <LabelServ
                  id="assentamento"
                  label="Assentamento de piso e revestimento"
                />
              </li>
              <li>
                <input
                  type="checkbox"
                  id="consertos"
                  value="consertos"
                  onChange={formik.handleChange}
                />
                <LabelServ
                  id="consertos"
                  label="Consertos de portas e janelas"
                />
              </li>
              <li>
                <input
                  type="checkbox"
                  id="construcao"
                  value="construcao"
                  onChange={formik.handleChange}
                />
                <LabelServ id="construcao" label="Construção" />
              </li>
              <li>
                <input
                  type="checkbox"
                  id="design"
                  value="design"
                  onChange={formik.handleChange}
                />
                <LabelServ id="design" label="Design de interiores" />
              </li>
              <li>
                <input
                  type="checkbox"
                  id="engenharia"
                  value="engenharia"
                  onChange={formik.handleChange}
                />
                <LabelServ id="engenharia" label="Engenharia" />
              </li>
              <li>
                <input
                  type="checkbox"
                  id="instalacaoBancadas"
                  value="instalacaoBancadas"
                  onChange={formik.handleChange}
                />
                <LabelServ
                  id="instalacaoBancadas"
                  label="Instalação de bancadas em Mármore, Quartzo e Granito"
                />
              </li>
              <li>
                <input
                  type="checkbox"
                  id="instalacaoCameras"
                  value="instalacaoCameras"
                  onChange={formik.handleChange}
                />
                <LabelServ
                  id="instalacaoCameras"
                  label="Instalação de câmeras e sensores de monitoramento e segurança"
                />
              </li>
              <li>
                <input
                  type="checkbox"
                  id="instalacaoEsquadrias"
                  value="instalacaoEsquadrias"
                  onChange={formik.handleChange}
                />
                <LabelServ
                  id="instalacaoEsquadrias"
                  label="Instalação de esquadrias"
                />
              </li>
              <li>
                <input
                  type="checkbox"
                  id="instalacaoGesso"
                  value="instalacaoGesso"
                  onChange={formik.handleChange}
                />
                <LabelServ id="instalacaoGesso" label="Instalação de gesso" />
              </li>
              <li>
                <input
                  type="checkbox"
                  id="instalacaoDrywallGesso"
                  value="instalacaoDrywallGesso"
                  onChange={formik.handleChange}
                />
                <LabelServ
                  id="instalacaoDrywallGesso"
                  label="Instalação em drywall e gesso acartonado"
                />
              </li>
              <li>
                <input
                  type="checkbox"
                  id="instalacaoPapel"
                  value="instalacaoPapel"
                  onChange={formik.handleChange}
                />
                <LabelServ
                  id="instalacaoPapel"
                  label="Instalação de papel de parede"
                />
              </li>
              <li>
                <input
                  type="checkbox"
                  id="limpeza"
                  value="limpeza"
                  onChange={formik.handleChange}
                />
                <LabelServ id="limpeza" label="Limpeza pós obra" />
              </li>
              <li>
                <input
                  type="checkbox"
                  id="marcenaria"
                  value="marcenaria"
                  onChange={formik.handleChange}
                />
                <LabelServ id="marcenaria" label="Marcenaria" />
              </li>
              <li>
                <input
                  type="checkbox"
                  id="pedreiro"
                  value="pedreiro"
                  onChange={formik.handleChange}
                />
                <LabelServ id="pedreiro" label="Pedreiro de alvenaria" />
              </li>
              <li>
                <input
                  type="checkbox"
                  id="pequenosReparos"
                  value="pequenosReparos"
                  onChange={formik.handleChange}
                />
                <LabelServ id="pequenosReparos" label="Pequenos Reparos" />
              </li>
              <li>
                <input
                  type="checkbox"
                  id="pinturaFerragens"
                  value="pinturaFerragens"
                  onChange={formik.handleChange}
                />
                <LabelServ id="pinturaFerragens" label="Pintura de ferragens" />
              </li>
              <li>
                <input
                  type="checkbox"
                  id="pinturaGeral"
                  value="pinturaGeral"
                  onChange={formik.handleChange}
                />
                <LabelServ id="pinturaGeral" label="Pintura Geral" />
              </li>
              <li>
                <input
                  type="checkbox"
                  id="reformaCompleta"
                  value="reformaCompleta"
                  onChange={formik.handleChange}
                />
                <LabelServ id="reformaCompleta" label="Reforma completa" />
              </li>
              <li>
                <input
                  type="checkbox"
                  id="servicosAcabamento"
                  value="servicosAcabamento"
                  onChange={formik.handleChange}
                />
                <LabelServ
                  id="servicosAcabamento"
                  label="Serviços de acabamento geral"
                />
              </li>
              <li>
                <input
                  type="checkbox"
                  id="servicosJardinagem"
                  value="servicosJardinagem"
                  onChange={formik.handleChange}
                />
                <LabelServ
                  id="servicosJardinagem"
                  label="Serviços de Jardinagem"
                />
              </li>
              <li>
                <input
                  type="checkbox"
                  id="servicosEletricos"
                  value="servicosEletricos"
                  onChange={formik.handleChange}
                />
                <LabelServ id="servicosEletricos" label="Serviços elétricos" />
              </li>
              <li>
                <input
                  type="checkbox"
                  id="servicosHidraulicos"
                  value="servicosHidraulicos"
                  onChange={formik.handleChange}
                />
                <LabelServ
                  id="servicosHidraulicos"
                  label="Serviços hidráulicos"
                />
              </li>
              <li>
                <input
                  type="checkbox"
                  id="vidracarias"
                  value="vidracarias"
                  onChange={formik.handleChange}
                />
                <LabelServ id="vidracarias" label="Vidraçarias" />
              </li>
              <li>
                <input
                  type="checkbox"
                  id="outros"
                  value="outros"
                  onChange={formik.handleChange}
                />
                <LabelServ id="outros" label="Outros" />
              </li>
            </ul>
            <p className="error-message">{formik.errors.servicos}</p>
          </div>
          <div id="servicos-detalhes">
            <h3 className="pergunta-label">Outros: </h3>
            <Label id="outros-servicos" />
            <textarea
              placeholder="Descreva qual serviço você deseja?"
              id="textbox"
              cols="30"
              rows="10"
              onChange={formik.handleChange}
              value={formik.values.textbox}
            />
            <p className="error-message">{formik.errors.textbox}</p>
          </div>
          <br></br>
          <h3>Queremos entender exatamente qual é sua necessidade.</h3>
          <p>
            Informe nesse espaço os detalhes do serviço que deseja contratar.
            (Ex: Aplicação de revestimento cerâmico em parede de banheiro que
            mede 2m x 3m).
          </p>
          <div id="servicos-detalhes">
            <Label id="detalhes" />
            <textarea
              placeholder="Digite aqui...."
              id="textbox"
              cols="30"
              rows="10"
              onChange={formik.handleChange}
              value={formik.values.textbox}
            />
            <p className="error-message">{formik.errors.textbox}</p>
          </div>
          <br></br>
          <p>Precisa de ajuda para medir os espaços? Assista nosso tutorial!</p>
        </section>
        <section id="agendamento">
          <h1>Agendamento</h1>
          <div className="box-line"></div>
          <br></br>
          <h3 className="pergunta-label">
            Melhor horário para você ser atendido:
          </h3>
          <LabelCheck id="horario-manha" label="Manhã" />
          <input onChange={formik.handleChange} type="radio" value="Manhã" />
          <LabelCheck id="horario-tarde" label="Tarde" />
          <input onChange={formik.handleChange} type="radio" value=" Tarde" />
          <LabelCheck id="horario-noite" label="Noite" />
          <input onChange={formik.handleChange} type="radio" value=" Noite" />
          <p className="error-message">{formik.errors.agendamento}</p>
          <h3 className="pergunta-label">
            Aceita que o serviço seja realizado durante o final de semana?
          </h3>
          <LabelCheck id="agendamento-sim" label="Sim" />
          <input onChange={formik.handleChange} type="radio" value="Sim" />
          <LabelCheck id="agendamento-nao" label="Não" />
          <input onChange={formik.handleChange} type="radio" value=" Não" />
          <p className="error-message">
            {formik.errors.agendamentoFimDeSemana}
          </p>
          <h3 className="pergunta-label">Pra quando precisa do serviço?</h3>
          <div className="data-servico">
            <ul type="none">
              <li>
                <input
                  type="checkbox"
                  placeholder="data-servico"
                  onChange={formik.handleChange}
                />
                <LabelServ id="data-servico" label="Urgente" />
              </li>
              <li>
                <input
                  type="checkbox"
                  placeholder="data-servico"
                  onChange={formik.handleChange}
                />
                <LabelServ id="data-servico" label="Na próxima semana" />
              </li>
              <li>
                <input
                  type="checkbox"
                  placeholder="data-servico"
                  onChange={formik.handleChange}
                />
                <LabelServ id="data-servico" label="Daqui a um mês" />
              </li>
              <li>
                <input
                  type="checkbox"
                  placeholder="data-servico"
                  onChange={formik.handleChange}
                />
                <LabelServ id="data-servico" label="6 meses ou mais" />
              </li>
            </ul>
            <p className="error-message">{formik.errors.dataServico}</p>
          </div>
          <h3 className="pergunta-label">
            Há alguma observação sobre o ambiente (norma, restrição ou
            necessidade especial)?
          </h3>
          <Label id="observacao" />
          <textarea
            placeholder="Digite aqui...."
            id="textbox"
            cols="30"
            rows="10"
          ></textarea>
          <h3 className="pergunta-label">
            Qual é a sua prioridade para contratar este serviço?
          </h3>
          <br></br>
          <div
            id="checklistServicos"
            className={`dropdown-check-list ${
              isCheckListVisible ? "visible" : ""
            }`}
            tabIndex="100"
          >
            <span className="anchor" onClick={toggleCheckList}>
              Marque quantas opções desejar
            </span>
            <ul className="items">
              <li>
                <input
                  type="checkbox"
                  id="pagamentoFacilitado"
                  value="pagamentoFacilitado"
                  onChange={formik.handleChange}
                />
                <LabelServ
                  id="pagamentoFacilitado"
                  label="Pagamento facilitado"
                />
              </li>
              <li>
                <input
                  type="checkbox"
                  id="obraEspecializada"
                  value="obraEspecializada"
                  onChange={formik.handleChange}
                />
                <LabelServ
                  id="obraEspecializada"
                  label="Mão de obra especializada"
                />
              </li>
              <li>
                <input
                  type="checkbox"
                  id="obraFeminina"
                  value="obraFeminina"
                  onChange={formik.handleChange}
                />
                <LabelServ id="obraFeminina" label="Mão de obra feminina" />
              </li>
              <li>
                <input
                  type="checkbox"
                  id="qualidadeAcabamento"
                  value="qualidadeAcabamento"
                  onChange={formik.handleChange}
                />
                <LabelServ
                  id="qualidadeAcabamento"
                  label="Qualidade no acabamento"
                />
              </li>
              <li>
                <input
                  type="checkbox"
                  id="melhorPreco"
                  value="melhorPreco"
                  onChange={formik.handleChange}
                />
                <LabelServ id="melhorPreco" label="Melhor preço" />
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
                <input
                  type="checkbox"
                  placeholder="indicacao"
                  onChange={formik.handleChange}
                />
                <LabelServ id="indicacao" label="Amigos" />
              </li>
              <li>
                <input
                  type="checkbox"
                  placeholder="indicacao"
                  onChange={formik.handleChange}
                />
                <LabelServ id="indicacao" label="Projeto Social Parceiro" />
              </li>
              <li>
                <input
                  type="checkbox"
                  placeholder="indicacao"
                  onChange={formik.handleChange}
                />
                <LabelServ id="indicacao" label="Profissional Parceiro" />
              </li>
              <li>
                <input
                  type="checkbox"
                  placeholder="indicacao"
                  onChange={formik.handleChange}
                />
                <LabelServ id="indicacao" label="Estabelecimento conveniado" />
              </li>
              <li>
                <input
                  type="checkbox"
                  placeholder="indicacao"
                  onChange={formik.handleChange}
                />
                <LabelServ id="indicacao" label="Instagram" />
              </li>
              <li>
                <input
                  type="checkbox"
                  placeholder="indicacao"
                  onChange={formik.handleChange}
                />
                <LabelServ id="indicacao" label="Facebook" />
              </li>
              <li>
                <input
                  type="checkbox"
                  placeholder="indicacao"
                  onChange={formik.handleChange}
                />
                <LabelServ id="indicacao" label="Outro" />
              </li>
              <p className="error-message">{formik.errors.indicacao}</p>
            </ul>
          </div>
          <br></br>
          <Label id="codigo-indicacao" label="Código de indicação:" />
          <input
            type="text"
            id="codigo-indicacao"
            onChange={formik.handleChange}
            value={formik.values.codigoIndicacao}
          />
          <p className="error-message">{formik.errors.codigoIndicacao}</p>
        </section>
        <button type="submit">Enviar</button>
      </form>
    </main>
  );
}

export default ClientForm;
