import './styles.css'
import Label from '../../../components/Label';
import LabelCheck from '../../../components/LabelCheck';
import LabelServ from '../../../components/LabelServices';
import { Controller, useForm } from 'react-hook-form';
import { useState } from 'react';
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string, number, array } from 'yup';

const workerSchema = object().shape({
    //dados pessoais
    nomeCompleto: string()
                .required("O nome completo é obrigatório")
                .min(10, "Você precisa inserir pelo menos 10 caracteres."),
    dataNascimento: string()
                    .required('Data de nascimento é obrigatória')
                    .test('is-adult', 'Deve ser maior de idade', function (value) {
                    if (!value) return true; // Se a data de nascimento não foi fornecida, considere válida.
                    // converte a string da data para um objeto Date
                    const birthDate = new Date(value);
                    // calcula a data de 18 anos atrás
                    const eighteenYearsAgo = new Date();
                    eighteenYearsAgo.setFullYear(eighteenYearsAgo.getFullYear() - 18);
                    // verifica se a pessoa é maior de idade
                    return birthDate <= eighteenYearsAgo;
                }),
    email: string()
            .required("O e-mail é obrigatório") //falta validar
            .email("E-mail inválido."),
    rg: string()
        .required("O RG é obrigatório")
        .matches(/^[0-9]+$/, "O campo RG pode conter apenas dígitos.")
        .max(18, "Número de caracteres inválido."),
    cpf: string()
        .required("O CPF é obrigatório.")
        .matches(/^[0-9]+$/, "O campo CPF pode conter apenas dígitos.")
        .min(11, "O CPF deve conter 11 dígitos.")
        .max(11, "O CPF deve conter 11 dígitos."),
    telefone:string()
            .min(11, 'O telefone deve ter no mínimo 11 caracteres')
            .max(11, 'O telefone deve ter no máximo 11 caracteres')
            .matches(/[0-9]{11}/, 'Formato de telefone inválido'),
///endereço
    endereco: string()
            .required("O logadouro é obrigatório."),
    bairro:  string()
            .required("O bairro é obrigatório."),
    cidade:  string()
            .required("A cidade é obrigatória."),
    cep: number("O campo CEP pode conter apenas dígitos.") 
        .typeError('CEP deve ser um número')
        .positive('CEP deve ser um número positivo')
        .integer('CEP deve ser um número inteiro')
        .required('CEP é obrigatório'),
    numero: string()
            .required("O número é obrigatório.")
            .max(10, "Número máximo de 10 dígitos."),
    estado: string()
            .required("O estado é obrigatório.")
            .min(2, "Número mínimo de 2 caracteres.")
            .max(20, "Número máximo de 20 caracteres."),
    portDeficiencia: string()
                    .required("Selecione uma opção."),
    tipoDeficiencia: array("Selecione, no mínimo, uma opção.")
                    .required("Campo obrigatório.")
                    .min(1, "Selecione, no mínimo, uma opção."),
    cpnjEscolha: string()
                .required("Selecione uma opção."),
    cnpjProfissional: string()
                    .matches(/^[0-9]+$/, "O CNPJ pode conter apenas dígitos.")
                    .min(14, "Número de caracteres inválido.")
                    .max(14, "Número de caracteres inválido."),
    areaAtuacao:  string()
                .required("Resposta obrigatória."),
    servicos: array("Selecione, no mínimo, uma opção.")
            .required("Campo obrigatório.")
            .min(1, "Selecione, no mínimo, uma opção."),
    horarios: array()
            .required("Campo obrigatório.")
            .min(1, "Selecione, no mínimo, uma opção."),
    fimSemana: string()
            .required("Selecione uma opção."),
    cartAssinada: string()
                .required("Selecione uma opção."),
    cobraServico: string()
                .required("Selecione uma opção."),
    precoMedio:  string()
                .required("Informe o preço médio do serviço."),
    contato1: string()
            .required("Telefone é obrigatório")
            .min(11, 'O telefone deve ter no mínimo 11 caracteres')
            .max(11, 'O telefone deve ter no máximo 11 caracteres')
            .matches(/[0-9]{11}/, 'Formato de telefone inválido'),
    contato2: string()
            .min(11, 'O telefone deve ter no mínimo 11 caracteres')
            .max(11, 'O telefone deve ter no máximo 11 caracteres')
            .matches(/[0-9]{11}/, 'Formato de telefone inválido'),
    });

export default function WorkerForm() {
    const [isCheckListVisible, setCheckListVisible] = useState(false);
    //deixar visível a esteira de serviços
    const toggleCheckList = () => {
      setCheckListVisible(!isCheckListVisible);
    };


    const [checkedValues, setValues] = useState([])
    function handleChange(e) {
        const { value, checked } = e.target;
        if (checked) {
            setValues(horario => [...horario, value]);
        } else {
            setValues(horario => horario.filter(disp => disp !== value));
        }
    }
    console.log(checkedValues)



  const { 

    register, 
    handleSubmit, 
    formState: { errors }
 } = useForm({
    defaultValues: {
        horarios: [],
    },
    resolver: yupResolver(workerSchema)
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
                        <p className="error-message">{errors?.nomeCompleto?.message}</p>

                        <Label id="data-nascimento" label="Data de Nascimento"/>
                        <p className='caracteres'>Ex.: 06/09/1975</p>
                        <input type="date" id="data-nascimento" {...register("dataNascimento", {required: true })} />
                        <p className="error-message">{errors?.dataNascimento?.message}</p>

                        <Label id="e-mail" label="E-mail"/>
                        <input type="email" id="e-mail" {...register("email", {required: true, maxLength: 40})} />
                        <p className="error-message">{errors?.email?.message}</p>

                    </div>

                    <div className="right">
                        <Label id="RG" label="RG"/> 
                        <p className='caracteres'>Apenas números</p>
                        <input type="text" id="RG" {...register("rg", {required: true, maxLength: 18})} />
                        <p className="error-message">{errors?.rg?.message}</p>

                        <Label id="CPF" label="CPF"/>
                        <p className='caracteres'>Apenas números</p>
                        <input type="text" id="CPF" {...register("cpf", {required: true, maxLength: 11})} />
                        <p className="error-message">{errors?.cpf?.message}</p>
                        <Label id="telefone" label="Telefone"/>
                        <p className='caracteres'>Insira também o seu DDD. </p>
                        <input type="tel" id="telefone" {...register("telefone", {required: true, maxLength: 11, pattern: /[0-9]{11}/i })} />
                        <p className="error-message">{errors?.telefone?.message}</p>
                    </div>
                </section> 

                <div className="endereco-pessoal">
                    <h1>Endereço</h1>
                    <div className="box-line"></div>
                        <div className="left-right">
                            <div className="left">
                            <Label id="endereco" label="Logadouro"/>
                            <input type="text" id="endereco" {...register("endereco", {required: true, maxLength: 100})} />
                            <p className="error-message">{errors?.endereco?.message}</p>
                            <Label id="bairro" label="Bairro"/>
                            <input type="text" id="bairro" {...register("bairro", {required: true, maxLength: 100})} />
                            <p className="error-message">{errors?.bairro?.message}</p>
                            <Label id="cidade" label="Cidade"/>
                            <input type="text" id="cidade" {...register("cidade", {required: true, maxLength: 100})} />
                            <p className="error-message">{errors?.cidade?.message}</p>
                        </div>
                            
                        <div className="right">
                        <Label id="cep" label="CEP"/>
                            <input type="number" id="cep" {...register("cep", {required: true, maxLength: 8})} />  
                            <p className="error-message">{errors?.cep?.message}</p>
                            <Label id="numero" label="Número"/>
                            <input type="number" id="numero" {...register("numero", {required: true, maxLength: 5})} />
                            <p className="error-message">{errors?.numero?.message}</p>
                            <Label id="estado" label="Estado"/>
                            <input type="text" id="estado" {...register("estado", {required: true, maxLength: 20})} />
                            <p className="error-message">{errors?.estado?.message}</p>
                        </div>
                        </div>
                    </div>

                    <div className="port-deficiencia">
                        <h3 className="pergunta-label">Você é uma pessoa com deficiência?</h3>

                        
                        <input type="radio" id="sim-deficiencia" value="Sim" {...register("portDeficiencia", { required: true  })} onChange={() => {
                        setMostrarTipoDeficiencia(true);
                        }} />
                        <LabelCheck id="sim-deficiencia" label="Sim"/>  
                        
                        <input type="radio" id="nao-deficiencia" value="Nao" {...register("portDeficiencia", { required: true })}  onChange={() => {
                        setMostrarTipoDeficiencia(false);
                        <p className="error-message">{errors?.portDeficiencia?.message}</p>
                     }} />
                        <LabelCheck id="nao-deficiencia" label="Não" />
                        
                        <h3 className="pergunta-label">Se sim, qual o tipo de deficiência?</h3>

                        <input type="checkbox" id="defic-fisica" {...register("tipoDeficiencia", {required: true})} />
                        <LabelCheck id="defic-fisica" label="Deficiência Física"/>

                        <input type="checkbox" id="defic-intelectual" {...register("tipoDeficiencia", {required: true})} />
                        <LabelCheck id="defic-intelectual" label="Deficiência Intelectual"/>

                        <input type="checkbox" id="defic-motora" {...register("tipoDeficiencia", {required: true})} />
                        <LabelCheck id="defic-motora" label="Deficiência Motora"/> 

                        <input type="checkbox" id="defic-visual" {...register("tipoDeficiencia", {required: true})} />
                        <LabelCheck id="defic-visual" label="Deficiência Visual"/>

                        <input type="checkbox" id="defic-auditiva" {...register("tipoDeficiencia", {required: true})} />
                        <LabelCheck id="defic-auditiva" label="Deficiência Auditiva"/>

                        <input type="checkbox" id="defic-outras" {...register("tipoDeficiencia", {required: true})} />
                        <LabelCheck id="defic-outras" label="Outras"/>
                        <p className="error-message">{errors?.tipoDeficiencia?.message}</p>
                    </div>
                </section>
        <section className="dadosProfissionais">

            <h1>Dados Profissionais</h1>
            <div className="box-line"></div>

            <div className="cnpj">
                <h3 className="pergunta-label">Possui CNPJ?</h3>
                
                <input id="sim-cnpj" {...register("cnpjEscolha", { required: true })} type="radio" value="Sim" />
                <LabelCheck id="sim-cnpj" label="Sim" />
                <input id="nao-cnpj" {...register("cnpjEscolha", { required: true })} type="radio" value="Não" />
                <LabelCheck id="nao-cnpj" label="Não"/> 
                <p className="error-message">{errors?.cpnjEscolha?.message}</p>

                <h3 className="pergunta-label">CNPJ <em>(opcional)</em></h3>
                <p className="caracteres">Caso possua, informe apenas números</p>
                <Label id="cnpj" />
                <input id="cnpj" type="text" {...register("cpnjProfissional", {})} />
                <p className="error-message">{errors?.cnpjProfissional?.message}</p>

                <h3 className="pergunta-label">Qual sua área de atuação?</h3>
                <Label id="area-atuacao" />
                <input id="area-atuacao" type="text" {...register("areaAtuacao", {})} />
                <p className="error-message">{errors?.areaAtuacao?.message}</p>
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
                                <p className="error-message">{errors?.servicos?.message}</p>
                            </li>
                            </ul>
                        </div>
                    </section>

        <section id="agenda">

            <h1>Agenda</h1>
            <div className="box-line"></div>

            <div className="horarios">
               <h3 className="pergunta-label">Qual sua disponibilidade de horário?</h3>
                <input id="manha" {...register("horarios")} type="checkbox" value="Manhã" onChange={handleChange} />
                <LabelCheck id="manha" label="Manhã"/>

                <input id="tarde" {...register("horarios")} type="checkbox" value=" Tarde" onChange={handleChange}/> 
                <LabelCheck id="tarde" label="Tarde"/>

                <input id="noite" {...register("horarios")} type="checkbox" value=" Noite" onChange={handleChange}/> 
                <LabelCheck id="noite" label="Noite"/>
                
                <p className="error-message">{errors?.horarios?.message}</p>

               <h3 className="pergunta-label">Aceita prestar serviços nos finais de semana?</h3>
                
                <input id="sim-fimsemana" {...register("fimSemana", { required: true })} type="radio" value="Sim" /> 
                <LabelCheck id="sim-fimsemana" label="Sim"/>
                
                <input id="nao-fimsemana" {...register("fimSemana", { required: true })} type="radio" value=" Não" /> 
                <LabelCheck id="nao-fimsemana" label="Não"/>
                <p className="error-message">{errors?.fimSemana?.message}</p>

               <h3 className="pergunta-label">Você está trabalhando de carteira assinada?</h3>
                
                <input id="sim-cart-assinada"{...register("cartAssinada", { required: true })} type="radio" value="Sim" />
                <LabelCheck id="sim-cart-assinada" label="Sim"/>

                <input id="nao-cart-assinada"{...register("cartAssinada", { required: true })} type="radio" value=" Não" /> 
                <LabelCheck id="nao-cart-assinada" label="Não"/>
                <p className="error-message">{errors?.cartAssinada?.message}</p>
            </div>
        </section>

        <section id="financeiro">

            <h1>Financeiro</h1>
            <div className="box-line"></div>

            <div className="financeiro-servico">
                <h3 className="pergunta-label">Como você costuma cobrar pelo serviço?</h3>

                
                <input id="por-hora" type="radio" value="Por Hora"  {...register("cobraServico", { required: true })} />
                <LabelCheck id="por-hora" label="Por Hora"/>

                <input id="por-diaria" type="radio" value="Por Diária" {...register("cobraServico", { required: true })}  />
                <LabelCheck  id="por-diaria" label="Por Diária"/>
                
                <input id="por-metro" type="radio" value="Por Metro" {...register("cobraServico", { required: true })} />
                <LabelCheck id="por-metro" label="Por Metro"/>
                
                <input id="por-empreitada"  type="radio" value="Por Empreitada" {...register("cobraServico", { required: true })} />
                <LabelCheck  id="por-empreitada" label="Por Empreitada"/>
                <p className="error-message">{errors?.cobraServico?.message}</p>

                <h3 className="pergunta-label">Quanto você costuma cobrar, em média, pelo serviço?</h3>

               <Label id="preco-medio" />
                <p className="caracteres">  Ex.: Se cobrar por diária, quanto custa sua diária? </p>
                <input type="text" id="preco-medio" {...register("precoMedio", {required: true})} />
                <p className="error-message">{errors?.precoMedio?.message}</p>
            </div>
        </section>

        <section id="experiencia-profissional">
            <h1>Experiência Profissional</h1>
            <div className="box-line"></div>
            <section className="informe">
                <h3 className="pergunta-label"> Informe pelo menos um contato de  referência profissional:
                </h3>

                    <input type="tel" id="contato1" placeholder="(DDD) + número" 
                    {...register("contato1", 
                    {required: true, max: 11, min: 11, maxLength: 11, pattern: /[0-9]{11}/i})} />
                    <p className="error-message">{errors?.contato1?.message}</p>
                    <input type="tel" id="contato2" placeholder="(DDD) + número" 
                    {...register("contato2", 
                    {max: 11, min: 11, maxLength: 11, pattern: /[0-9]{11}/i})} />
                    <p className="error-message">{errors?.contato2?.message}</p>

                    <h3><Label id="certificado" label="Possui certifições complementares? Quais? (opcional)" /></h3>
                    <input id="certificado" type="text"  
                    {...register("certificacoes", {})} />

            </section>

                

        </section>    
        <div id="button">            
            <button type="submit">Enviar</button>
        </div>
        </form>
        
    </main>
  );
}
