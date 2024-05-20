import './styles.css'
import Label from '../../../components/Label';
import LabelCheck from '../../../components/LabelCheck';
import LabelServ from '../../../components/LabelServices';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

/*import { yupResolver } from "@hookform/resolvers/yup";*/
import { useFormik } from "formik";
import * as Yup from "yup";
import HeaderForm from '../../../components/HeaderForm';
import Footer from '../../../components/Footer'


export default function WorkerForm() {
    const [isCheckListVisible, setCheckListVisible] = useState(false);
    //deixar visível a esteira de serviços
    const toggleCheckList = () => {
      setCheckListVisible(!isCheckListVisible);
    };
    const workerSchema = Yup.object().shape({
        nomeCompleto: Yup.string()
                    .required("O nome completo é obrigatório")
                    .min(10, "Você precisa inserir pelo menos 10 caracteres."),
        dataNascimento: Yup.string()
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
        email: Yup.string()
                .required("O e-mail é obrigatório") //falta validar
                .email("E-mail inválido."),
        rg: Yup.string()
            .required("O RG é obrigatório")
            .matches(/^[0-9]+$/, "O campo RG pode conter apenas dígitos.")
            .max(18, "Número de caracteres inválido."),
        cpf: Yup.string()
            .required("O CPF é obrigatório.")
            .matches(/^[0-9]+$/, "O campo CPF pode conter apenas dígitos.")
            .min(11, "O CPF deve conter 11 dígitos.")
            .max(11, "O CPF deve conter 11 dígitos."),
        telefone: Yup.string()
                .min(11, 'O telefone deve ter no mínimo 11 caracteres')
                .max(11, 'O telefone deve ter no máximo 11 caracteres')
                .matches(/[0-9]/, 'Formato de telefone inválido'),
        endereco: Yup.string()
                .required("O logadouro é obrigatório."),
        bairro:  Yup.string()
                .required("O bairro é obrigatório."),
        cidade:  Yup.string()
                .required("A cidade é obrigatória."),
        cep: Yup.string() 
            .matches(/[0-9]/, "O campo CEP pode conter apenas dígitos.")
            .min(8, "O CEP deve conter 8 dígitos.")
            .max(8, "O CEP deve conter 8 dígitos.")
            .required('CEP é obrigatório'),
        numero: Yup.string()
                .required("O número é obrigatório.")
                .max(10, "Número máximo de 10 dígitos."),
        estado: Yup.string()
                .required("O estado é obrigatório.")
                .min(2, "Número mínimo de 2 caracteres.")
                .max(20, "Número máximo de 20 caracteres."),
        portDeficiencia: Yup.string()
                        .required("Selecione uma opção."),
        tipoDeficiencia: Yup.array(),
        possuiCnpj: Yup.string()
                    .required("Selecione uma opção."),
        cnpjProfissional: Yup.string()
                        .matches(/^[0-9]+$/, "O CNPJ pode conter apenas dígitos.")
                        .min(14, "Número de caracteres inválido.")
                        .max(14, "Número de caracteres inválido."),
        areaAtuacao:  Yup.string()
                    .required("Resposta obrigatória."),
        servicos: Yup.array("Selecione, no mínimo, uma opção.")
                .min(1).of(Yup.string().required())
                .required("Selecione, no mínimo, uma opção."),
        horarios: Yup.array()
                .min(1).of(Yup.string().required())
                .required("Selecione, no mínimo, uma opção."),
        fimSemana: Yup.string()
                .required("Selecione uma opção."),
        cartAssinada: Yup.string()
                    .required("Selecione uma opção."),
        cobraServico: Yup.string()
                    .required("Selecione uma opção."),
        precoMedio:  Yup.string()
                    .required("Informe o preço médio do serviço."),
        contato1: Yup.string()
                .required("Telefone é obrigatório")
                .min(11, 'O telefone deve ter no mínimo 11 caracteres')
                .max(11, 'O telefone deve ter no máximo 11 caracteres')
                .matches(/[0-9]{11}/, 'Formato de telefone inválido'),
        contato2: Yup.string()
                .min(11, 'O telefone deve ter no mínimo 11 caracteres')
                .max(11, 'O telefone deve ter no máximo 11 caracteres')
                .matches(/[0-9]{11}/, 'Formato de telefone inválido'),
        certificacoes: Yup.string(),

        PoliticaPrivacidade: Yup.string()
                .required("Campo obrigatório"),
        });
    
        const formik = useFormik({
            validationSchema: workerSchema,
            validateOnBlur: false,
            validateOnChange: false,
            initialValues: { 
                nomeCompleto: '',
                dataNascimento: '',
                email: '',
                rg: '',
                cpf: '',
                telefone: '',
                endereco: '',
                bairro: '',
                cidade: '',
                cep: '',
                numero: '',
                estado: '',
                portDeficiencia: '', 
                tipoDeficiencia: [],
                possuiCnpj: '',
                cpnjProfissional: '',
                areaAtuacao: '',
                servicos: [],
                horarios: [],
                fimSemana: '',
                cartAssinada: '',
                cobraServico: '',
                precoMedio:  '', 
                contato1: '',
                contato2: '', 
                certificacoes: '', 
                PoliticaPrivacidade:'',
            },
            onSubmit: values => {
                alert(JSON.stringify(values, null, 2));
                console.log(values)
            }
        })
    
    const { 
        register, 
    } = useForm({
    });

  return (
    <main id="worker-form">
        <HeaderForm/>
        <form id="form-container" onSubmit={formik.handleSubmit}>

            <section className="Dadospessoas">
                <h1>Dados Pessoais</h1>
                <div className="box-line"></div>
                <section className="left-right">
                    <div className="left">
                        <h3 className="pergunta-label"><Label id="nome-completo" label="Nome Completo"/> </h3>
                        <p className='caracteres'>Conforme consta nos seus documentos</p>
                        <input type="text" id="nome-completo" {...register("nomeCompleto")}  onChange={formik.handleChange} value={formik.values.nomeCompleto} />
                        <p className="error-message">{formik.errors.nomeCompleto}</p>

                        <Label id="data-nascimento" label="Data de Nascimento"/>
                        <p className='caracteres'>Ex.: 06/09/1975</p>
                        <input type="date" id="data-nascimento" {...register("dataNascimento")} onChange={formik.handleChange} value={formik.values.dataNascimento} />
                        <p className="error-message">{formik.errors.dataNascimento}</p>

                        <Label id="e-mail" label="E-mail"/>
                        <input type="email" id="e-mail" {...register("email")}  onChange={formik.handleChange} value={formik.values.email} />
                        <p className="error-message">{formik.errors.email}</p>

                    </div>

                    <div className="right">
                        <Label id="RG" label="RG"/> 
                        <p className='caracteres'>Apenas números</p>
                        <input type="text" id="RG" {...register("rg")} onChange={formik.handleChange} value={formik.values.rg} />
                        <p className="error-message">{formik.errors.rg }</p>

                        <Label id="CPF" label="CPF"/>
                        <p className='caracteres'>Apenas números</p>
                        <input type="text" id="CPF" {...register("cpf")} onChange={formik.handleChange} value={formik.values.cpf} />
                        <p className="error-message">{formik.errors.cpf }</p>
                        <Label id="telefone" label="Telefone"/>
                        <p className='caracteres'>Insira também o seu DDD. </p>
                        <input type="tel" id="telefone" {...register("telefone")} onChange={formik.handleChange} value={formik.values.telefone}/>
                        <p className="error-message">{formik.errors.telefone }</p>
                    </div>
                </section> 

                <div className="endereco-pessoal">
                    <h1>Endereço</h1>
                    <div className="box-line"></div>
                        <div className="left-right">
                            <div className="left">
                            <Label id="endereco" label="Logadouro"/>
                            <input type="text" id="endereco" {...register("endereco")} onChange={formik.handleChange} value={formik.values.endereco}/>
                            <p className="error-message">{formik.errors.endereco }</p>
                            <Label id="bairro" label="Bairro"/>
                            <input type="text" id="bairro" {...register("bairro" )} onChange={formik.handleChange} value={formik.values.bairro}/>
                            <p className="error-message">{formik.errors.bairro }</p>
                            <Label id="cidade" label="Cidade"/>
                            <input type="text" id="cidade" {...register("cidade")} onChange={formik.handleChange} value={formik.values.cidade}/>
                            <p className="error-message">{formik.errors.cidade }</p>
                        </div>
                            
                        <div className="right">
                        <Label id="cep" label="CEP"/>
                            <input type="number" id="cep" {...register("cep")} onChange={formik.handleChange} value={formik.values.cep} />  
                            <p className="error-message">{formik.errors.cep }</p>
                            <Label id="numero" label="Número"/>
                            <input type="number" id="numero" {...register("numero")} onChange={formik.handleChange} value={formik.values.numero}/>
                            <p className="error-message">{formik.errors.numero }</p>
                            <Label id="estado" label="Estado"/>
                            <input type="text" id="estado" {...register("estado")} onChange={formik.handleChange} value={formik.values.estado}/>
                            <p className="error-message">{formik.errors.estado }</p>
                        </div>
                        </div>
                    </div>

                    <div className="port-deficiencia">
                        <h3 className="pergunta-label">Você é uma pessoa com deficiência?</h3>

                        
                        <input type="radio" id="sim-deficiencia" value="Sim" {...register("portDeficiencia")} onChange={formik.handleChange} />
                        <LabelCheck id="sim-deficiencia" label="Sim"/>  
                        
                        <input type="radio" id="nao-deficiencia" value="Nao" {...register("portDeficiencia")}  onChange={formik.handleChange}/>
                     
                        <LabelCheck id="nao-deficiencia" label="Não" />
                        <p className="error-message">{formik.errors.portDeficiencia }</p>
                        
                        <h3 className="pergunta-label">Se sim, qual o tipo de deficiência?</h3>

                        <input type="checkbox" id="defic-fisica" value="Deficiência Física" {...register("tipoDeficiencia")} onChange={formik.handleChange}/>
                        <LabelCheck id="defic-fisica" label="Deficiência Física"/>

                        <input type="checkbox" id="defic-intelectual" value="Deficiência Intelectual" {...register("tipoDeficiencia")} onChange={formik.handleChange} />
                        <LabelCheck id="defic-intelectual" label="Deficiência Intelectual"/>

                        <input type="checkbox" id="defic-motora" value="Deficiência Motora"{...register("tipoDeficiencia")} onChange={formik.handleChange}/>
                        <LabelCheck id="defic-motora" label="Deficiência Motora"/> 

                        <input type="checkbox" id="defic-visual" value="Deficiência Visual" {...register("tipoDeficiencia")} onChange={formik.handleChange}/>
                        <LabelCheck id="defic-visual" label="Deficiência Visual"/>

                        <input type="checkbox" id="defic-auditiva" value="Deficiência Auditiva"{...register("tipoDeficiencia")} onChange={formik.handleChange}/>
                        <LabelCheck id="defic-auditiva" label="Deficiência Auditiva"/>

                        <input type="checkbox" id="defic-outras" value="Outras"{...register("tipoDeficiencia")} onChange={formik.handleChange}/>
                        <LabelCheck id="defic-outras" label="Outras"/>
                        <p className="error-message">{formik.errors.tipoDeficiencia }</p>
                    </div>
                </section>
        <section className="dadosProfissionais">

            <h1>Dados Profissionais</h1>
            <div className="box-line"></div>

            <div className="cnpj">
                <h3 className="pergunta-label">Possui CNPJ?</h3>
                
                <input id="sim-cnpj" {...register("possuiCnpj")} type="radio" value="Sim" onChange={formik.handleChange}/> 
                <LabelCheck id="sim-cnpj" label="Sim"/>
                
                <input id="nao-cnpj" {...register("possuiCnpj")} type="radio" value=" Não" onChange={formik.handleChange}/> 
                <LabelCheck id="nao-cnpj" label="Não"/>
                <p className="error-message">{formik.errors.possuiCnpj }</p>

                <h3 className="pergunta-label">CNPJ <em>(opcional)</em></h3>
                <p className="caracteres">Caso possua, informe apenas números</p>
                <Label id="cnpj" />
                <input id="cnpj" type="text" {...register("cpnjProfissional" )} onChange={formik.handleChange} value={formik.values.cnpjProfissional}/>
                <p className="error-message">{formik.errors.cnpjProfissional }</p>

                <h3 className="pergunta-label">Qual sua área de atuação?</h3>
                <Label id="area-atuacao" />
                <input id="area-atuacao" type="text" {...register("areaAtuacao")} onChange={formik.handleChange} value={formik.values.areaAtuacao}/>
                <p className="error-message">{formik.errors.areaAtuacao }</p>
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
                                <input type="checkbox" id="arquitetura" value="arquitetura" {...register("servicos")} onChange={formik.handleChange}/>
                                <LabelServ id="arquitetura" label="Arquitetura" />
                            </li>
                            <li>
                                <input type="checkbox" id="assentamento" value="assentamento" {...register("servicos")} onChange={formik.handleChange}/>
                                <LabelServ  id="assentamento" label="Assentamento de piso e revestimento" />
                            </li>
                            <li>
                                <input type="checkbox" id="consertos" value="consertos" {...register("servicos")}  onChange={formik.handleChange}/>
                                <LabelServ  id="consertos" label="Consertos de portas e janelas" />
                            </li>
                            <li>
                                <input type="checkbox" id="construcao" value="construcao" {...register("servicos")} onChange={formik.handleChange}/>
                                <LabelServ  id="construcao" label="Construção" />
                            </li>
                            <li>
                                <input type="checkbox" id="design" value="design" {...register("servicos")} onChange={formik.handleChange}/>
                                <LabelServ  id="design" label="Design de interiores" />
                            </li>
                            <li>
                                <input type="checkbox" id="engenharia" value="engenharia" {...register("servicos")} onChange={formik.handleChange}/>
                                <LabelServ  id="engenharia" label="Engenharia" />
                            </li>
                            <li>
                                <input type="checkbox" id="instalacaoBancadas" value="instalacaoBancadas" {...register("servicos")} onChange={formik.handleChange}/>
                                <LabelServ  id="instalacaoBancadas" label="Instalação de bancadas em Mármore, Quartzo e Granito" />
                            </li>

                            <li>
                                <input type="checkbox" id="instalacaoCameras" value="instalacaoCameras" {...register("servicos")} onChange={formik.handleChange}/>
                                <LabelServ  id="instalacaoCameras" label="Instalação de câmeras e sensores de monitoramento e segurança" />
                            </li>

                            <li>
                                <input type="checkbox" id="instalacaoEsquadrias" value="instalacaoEsquadrias" {...register("servicos")} onChange={formik.handleChange}/>
                                <LabelServ  id="instalacaoEsquadrias" label="Instalação de esquadrias" />
                            </li>

                            <li>
                                <input type="checkbox" id="instalacaoGesso" value="instalacaoGesso" {...register("servicos")} onChange={formik.handleChange}/>
                                <LabelServ  id="instalacaoGesso" label="Instalação de gesso" />
                            </li>
                            <li>
                                <input type="checkbox" id="instalacaoDrywallGesso" value="instalacaoDrywallGesso" {...register("servicos")} onChange={formik.handleChange}/>
                                <LabelServ  id="instalacaoDrywallGesso" label="Instalação em drywall e gesso acartonado" />
                            </li>
                            <li>
                                <input type="checkbox" id="instalacaoPapel" value="instalacaoPapel" {...register("servicos")} onChange={formik.handleChange}/>
                                <LabelServ  id="instalacaoPapel" label="Instalação de papel de parede" />
                            </li>
                            <li>
                                <input type="checkbox" id="limpeza" value="limpeza" {...register("servicos")} onChange={formik.handleChange}/>
                                <LabelServ  id="limpeza" label="Limpeza pós obra" />
                            </li>
                            <li>
                                <input type="checkbox" id="marcenaria" value="marcenaria" {...register("servicos")} onChange={formik.handleChange}/>
                                <LabelServ  id="marcenaria" label="Marcenaria" />
                            </li>
                            <li>
                                <input type="checkbox" id="pedreiro" value="pedreiro" {...register("servicos")} onChange={formik.handleChange}/>
                                <LabelServ  id="pedreiro" label="Pedreiro de alvenaria" />
                            </li>
                            <li>
                                <input type="checkbox" id="pequenosReparos" value="pequenosReparos" {...register("servicos")} onChange={formik.handleChange}/>
                                <LabelServ  id="pequenosReparos" label="Pequenos Reparos" />
                            </li>
                            <li>
                                <input type="checkbox" id="pinturaFerragens" value="pinturaFerragens" {...register("servicos")} onChange={formik.handleChange}/>
                                <LabelServ  id="pinturaFerragens" label="Pintura de ferragens" />
                            </li>
                            <li>
                                <input type="checkbox" id="pinturaGeral" value="pinturaGeral" {...register("servicos")} onChange={formik.handleChange}/>
                                <LabelServ  id="pinturaGeral" label="Pintura Geral" />
                            </li>
                            <li>
                                <input type="checkbox" id="reformaCompleta" value="reformaCompleta" {...register("servicos")} onChange={formik.handleChange}/>
                                <LabelServ  id="reformaCompleta" label="Reforma completa" />
                            </li>
                            <li>
                                <input type="checkbox" id="servicosAcabamento" value="servicosAcabamento" {...register("servicos")} onChange={formik.handleChange}/>
                                <LabelServ  id="servicosAcabamento" label="Serviços de acabamento geral" />
                            </li>
                            <li>
                                <input type="checkbox" id="servicosJardinagem" value="servicosJardinagem" {...register("servicos")} onChange={formik.handleChange}/>
                                <LabelServ  id="servicosJardinagem" label="Serviços de Jardinagem" />
                            </li>
                            <li>
                                <input type="checkbox" id="servicosEletricos" value="servicosEletricos" {...register("servicos")} onChange={formik.handleChange}/>
                                <LabelServ  id="servicosEletricos" label="Serviços elétricos" />
                            </li>
                            <li>
                                <input type="checkbox" id="servicosHidraulicos" value="servicosHidraulicos" {...register("servicos")} onChange={formik.handleChange}/>
                                <LabelServ  id="servicosHidraulicos" label="Serviços hidráulicos" />
                            </li>
                            <li>
                                <input type="checkbox" id="vidracarias" value="vidracarias" {...register("servicos")} onChange={formik.handleChange}/>
                                <LabelServ  id="vidracarias" label="Vidraçarias" />
                            </li>
                            <li>
                                <input type="checkbox" id="outros" value="outros" {...register("servicos")} onChange={formik.handleChange}/>
                                <LabelServ  id="outros" label="Outros" />
                                <p className="error-message">{formik.errors.servicos }</p>
                            </li>
                            </ul>
                        </div>
                    </section>

        <section id="agenda">

            <h1>Agenda</h1>
            <div className="box-line"></div>

            <div className="horarios">
               <h3 className="pergunta-label">Qual sua disponibilidade de horário?</h3>
                <input id="manha" {...register("horarios")} type="checkbox" value="Manhã" onChange={formik.handleChange} />
                <LabelCheck id="manha" label="Manhã"/>

                <input id="tarde" {...register("horarios")} type="checkbox" value=" Tarde" onChange={formik.handleChange}/> 
                <LabelCheck id="tarde" label="Tarde"/>

                <input id="noite" {...register("horarios")} type="checkbox" value=" Noite" onChange={formik.handleChange}/> 
                <LabelCheck id="noite" label="Noite"/>
                
                <p className="error-message">{formik.errors.horarios }</p>

               <h3 className="pergunta-label">Aceita prestar serviços nos finais de semana?</h3>
                
                <input id="sim-fimsemana" {...register("fimSemana")} type="radio" value="Sim" onChange={formik.handleChange}/> 
                <LabelCheck id="sim-fimsemana" label="Sim"/>
                
                <input id="nao-fimsemana" {...register("fimSemana")} type="radio" value=" Não" onChange={formik.handleChange}/> 
                <LabelCheck id="nao-fimsemana" label="Não"/>
                <p className="error-message">{formik.errors.fimSemana }</p>

               <h3 className="pergunta-label">Você está trabalhando de carteira assinada?</h3>
                
                <input id="sim-cart-assinada"{...register("cartAssinada")} type="radio" value="Sim" onChange={formik.handleChange}/>
                <LabelCheck id="sim-cart-assinada" label="Sim"/>

                <input id="nao-cart-assinada"{...register("cartAssinada")} type="radio" value=" Não" onChange={formik.handleChange}/> 
                <LabelCheck id="nao-cart-assinada" label="Não"/>
                <p className="error-message">{formik.errors.cartAssinada }</p>
            </div>

        </section>

        <section id="financeiro">

            <h1>Financeiro</h1>
            <div className="box-line"></div>

            <div className="financeiro-servico">
                <h3 className="pergunta-label">Como você costuma cobrar pelo serviço?</h3>

                
                <input id="por-hora" type="radio" value="Por Hora"  {...register("cobraServico")} onChange={formik.handleChange}/>
                <LabelCheck id="por-hora" label="Por Hora"/>

                <input id="por-diaria" type="radio" value="Por Diária" {...register("cobraServico")}  onChange={formik.handleChange}/>
                <LabelCheck  id="por-diaria" label="Por Diária"/>
                
                <input id="por-metro" type="radio" value="Por Metro" {...register("cobraServico")} onChange={formik.handleChange}/>
                <LabelCheck id="por-metro" label="Por Metro"/>
                
                <input id="por-empreitada"  type="radio" value="Por Empreitada" {...register("cobraServico")} onChange={formik.handleChange}/>
                <LabelCheck  id="por-empreitada" label="Por Empreitada"/>
                <p className="error-message">{formik.errors.cobraServico }</p>

                <h3 className="pergunta-label">Quanto você costuma cobrar, em média, pelo serviço?</h3>

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

                    <input type="tel" id="contato1" placeholder="(DDD) + número" 
                    {...register("contato1")} onChange={formik.handleChange} value={formik.values.contato1} />
                    <p className="error-message">{formik.errors.contato1 }</p>
                    <input type="tel" id="contato2" placeholder="(DDD) + número" 
                    {...register("contato2")} onChange={formik.handleChange} value={formik.values.contato2}/>
                    <p className="error-message">{formik.errors.contato2 }</p>

                    <h3><Label id="certificado" label="Possui certifições complementares? Quais? (opcional)" /></h3>
                    <input id="certificado" type="text"  
                    {...register("certificacoes")} onChange={formik.handleChange} value={formik.values.certificacoes}/>

            </section>

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
        <div id="button">            
            <button type="submit">Enviar</button>
        </div>
        </form>
        <Footer/>
    </main>

  );
}