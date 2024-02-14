import './style.css';
import Label from '../../../components/Label';
import LabelCheck from '../../../components/LabelCheck';
import LabelServ from '../../../components/LabelServices';
import { useFormik } from "formik";

//React hook form import
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useState } from 'react';


// Yup import
import { string, number, object} from 'yup';



export default function CompanyForm() {

    const schema = object().shape({
        //Dados da Empresa
        
        razaoSocial: string()
            .required("Razão Social obrigatório.")
            .max(40, "Quantidade de caracteres excedida."),
        
        cnpj: string() // bugado 
            .required("O CNPJ é obrigatório.")
            .matches(/[0-9]{14}/, "O campo CNPJ pode conter apenas digitos.")
            .max(14, "CNPJ invalido")
            .min(14,  "CNPJ inválido."),
        
        telefoneEmpresa: string()
            .required("Número Obrigatório")
            .matches(/[0-9]{11}/, "Formato de telefone invalido.")
            .min(11, "O telefone deve ter no mínimo 11 caracteres.")
            .max(11,"O telefone deve ter no máximo 11 caracteres."),
        
        nomeFantasia: string()
            .required("Nome Fantasia obrigatório.")
            .max(40, "Quantidade de caracteres excedida."),
        
        
        qtdColaboradores: string()
            .required("Quantidade de colaboradores obrigatório."),
        
        enderecoEletronico: string()
            .required("O endereço eletronico é obrigatório.")
            .email('Endereço Eletrônico Inválido.'),
        
        //Endereço
        
        endereco: string()
            .required("O logradouro é obrigatório.")
            .max(60, "quantidade máxima de caracteres atingida para o Endereço."),
        
        bairro: string()
            .required("O bairro é obrigatório.")
            .max(60, "quantidade máxima de caracteres atingida para o Bairro."),
        
        cidade: string()
            .required("A cicade é obrigatória.")
            .max(60, "quantidade máxima de caracteres atingida para a Cidade."),
        
        cep: string("O campo CEP pode conter apenas dígitos.") //BUGADO
            .typeError('CEP deve ser um número')
            .positive('CEP deve ser um número positivo')
            .integer('CEP deve ser um número inteiro')
            .required('CEP é obrigatório')
            .max(8, "CEP invalido"),
        
        numero: string()
            .required("O Número é obrigatório.")
            .max(5, "Número não pode conter mais de 5 dígitos."),
        
        estado: string()
            .required("O estado é obrigatória.")
            .max(16, "quantidade máxima de caracteres atingida para o Estado."),
        
        //Dados da(o) representante 
        
        nomeCompleto: string()
            .required("Nome completo obrigatório")
            .min(10, "Nome precisa ter no mínimo 10 caracteres")
            .max(50, "quantidade máxima de caracteres atingida"),
        
        telefoneRepresentante: string()
            .required("O número do telefone é obrigatório")
            .matches(/[0-9]{11}/, "Formato de telefone invalido.")
            .min(11, "O telefone deve ter no mínimo 11 caracteres.")
            .max(11,"O telefone deve ter no máximo 11 caracteres."),
        
        cargoEmpresa: string()
            .required("Nome do cargo Obrigatório")
            .max(20, "quantidade máxima de caracteres atingida"),
        
        emailRepresentante: string()
            .required("O endereço eletronico é obrigatório.")
            .email('Endereço Eletrônico Inválido.'),
        
        indicacao: string()
            .required("Nome do cargo Obrigatório")
            .max(40, "quantidade máxima de caracteres atingida"),
        
        codigoIndicaco: string() // BUGADO
            .required("Código de incação obrigatório")
            .min(10, "Código invalido")
            .max(40, "Código invalido"),
        
         // Informações da Solicitação
        
        servicoInfo: string(),
        
        servicoOutro: string()
            .max(14, "Máximo de caracters excedido")
            .min(14, "Mínimo de caracters 14"),
        
        iniciativaInfo: string()
            .required("Campo obrigatório"), // mensagem de erro do bugada/ esse campo não pode ser string
            
        
        comentarioSolicitacao: string()
            .min(10, "Nó mínimo 10 caracteres")
            .max(50, "Máximo de caracteres escedido"),
        
         // Vínculos, questôes éticas e morais 
        
         CampanhasPoliticas: string()
            .required("Campo obrigatório"),
        
         CargoPublic: string()
            .required("Campo obrigatório"),
        
         VinculoPolitico: string(),
        
         escandalo: string()
            .required("Campo obrigatório"),
        
         escandaloAssedio: string()
            .required("Campo obrigatório"),
        
         PlanoImpacto: string()
            .required("Campo obrigatório"),
        
         ImpactoPositivo: string()
            .required("Campo obrigatório"),
        
         ImpactoSocial: string()
            .required("Campo obrigatório"),
        
         PoliticaDiversidade: string()
            .required("Campo obrigatório"),
        
        })//TODOS OS DADOS DO PORTIFOLIO SERAM ASDICIONADOS AQUI DENTRO
        
        //
        
        const formik = useFormik ({
            initialValues: { 
                razaoSocial:'', 
                cnpj:'',  
                telefoneEmpresa:'', 
                nomeFantasia:'', 
                qtdColaboradores:'', 
                enderecoEletronico:'', 
                endereco:'', bairro:'', 
                cidade:'', cep:'', 
                numero:'', 
                estado:'', 
                nomeCompleto:'', 
                telefoneRepresentante:'', 
                cargoEmpresa:'', 
                emailRepresentante:'', 
                indicacao:'', 
                codigoIndicaco:'', 
                servicoInfo:'', 
                servicoOutro:'', 
                iniciativaInfo:'', 
                comentarioSolicitacao:'', 
                CampanhasPoliticas:'', 
                CargoPublic:'', 
                VinculoPolitico:'', 
                escandalo:'',  
                escandaloAssedio:'',  
                PlanoImpacto:'',  
                ImpactoPositivo:'', 
                ImpactoSocial:[], 
                PoliticaDiversidade:'',},
            //validationSchema: schema,
            onSubmit: values => {
                console.log(values)
            }
        })
        
    const [isCheckListVisible, setCheckListVisible] = useState(false);
    const toggleCheckList = () => {
      setCheckListVisible(!isCheckListVisible);
    };

  const { 
    register, 
    handleSubmit, 
    formState: { errors } } = useForm({resolver: yupResolver(schema)});

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
                        <input type="text" id="razao-social" {...register("razaoSocial",)} onChange={formik.handleChange} value={formik.values.razaoSocial} />
                        <p className="error-message">{errors?.razaoSocial?.message}</p>
                       

                        <Label id="cnpj" label="CNPJ" />
                        <p className="caracteres">Apenas números</p>
                        <input id="cnpj" type="text" {...register("cnpj",)} onChange={formik.handleChange} value={formik.values.cnpj}/>
                        <p className="error-message">{errors?.cnpj?.message}</p>

                        <Label id="telefone-empresa" label="Telefone"/>
                        <p className='caracteres'>Apenas números</p>
                        <input type="tel" id="telefone-empresa" {...register("telefoneEmpresa",)} onChange={formik.handleChange} value={formik.values.telefoneEmpresa}/>
                        <p className="error-message">{errors?.telefoneEmpresa?.message}</p>
                        
                    </div>
                    <div className='right'>
                        <Label id="nome-fantasia" label="Nome Fantasia" />
                        <input type="text" id="nome-fantasia" {...register("nomeFantasia",)} onChange={formik.handleChange} value={formik.values.nomeFantasia}/>
                        <p className="error-message">{errors?.nomeFantasia?.message}</p>

                        <h3 className='pergunta-label'> Quantos colaboradores?</h3>
                        <p className='caracteres'>Escolha uma opção</p>

                        <div id="checklistServicos" className={`dropdown-check-list ${isCheckListVisible ? 'visible' : ''}`} tabIndex="100">
                        <span className="anchor" onClick={toggleCheckList}>Selecione</span>
                        <ul className="items">
                            <li>
                                <input type="radio" id="1a5" value="Entre 1 e 5" {...register("qtdColaboradores")} onChange={formik.handleChange} />
                                <LabelServ id="1a5" label="1-5" />
                            </li>
                            <li>
                                <input type="radio" id="5a20" value="Entre 5 e 20" {...register("qtdColaboradores")} onChange={formik.handleChange}/>
                                <LabelServ id="5a20" label="5-20" />
                            </li>
                            <li>
                                <input type="radio" id="20a50" value="Entre 20 e 50" {...register("qtdColaboradores")} onChange={formik.handleChange}/>
                                <LabelServ id="20a50" label="20-50" />
                            </li>
                            <li>
                                <input type="radio" id="acima50" value="mais de 50" {...register("qtdColaboradores")} onChange={formik.handleChange}/>
                                <LabelServ id="acima50" label="Mais de 50" />
                            </li>
                        </ul>
                        <p className="error-message">{errors?.qtdColaboradores?.message}</p>
                        </div>

                        <Label id="endereco-eletronico" label="Endereço Eletrônico" />
                        <p className='caracteres'>E-mail ou link de rede social</p>
                        <input type="text" id="endereco-eletronico" {...register("enderecoEletronico",)} onChange={formik.handleChange} value={formik.values.enderecoEletronico}/>
                        <p className="error-message">{errors?.enderecoEletronico?.message}</p>

                    </div>
                    </section>
                    <div className="endereco-pessoal">
                        <h1>Endereço</h1>
                        <div className="box-line"></div>
                            <div className="left-right">
                                <div className="left">
                                <Label id="endereco" label="Logadouro"/>
                                <input type="text" id="endereco" {...register("endereco")} onChange={formik.handleChange} value={formik.values.endereco}/>
                                <p className="error-message">{errors?.endereco?.message}</p>

                                <Label id="bairro" label="Bairro"/>
                                <input type="text" id="bairro" {...register("bairro")} onChange={formik.handleChange} value={formik.values.bairro}/>
                                <p className="error-message">{errors?.bairro?.message}</p>
                              
                                
                                <Label id="cidade" label="Cidade"/>
                                <input type="text" id="cidade" {...register("cidade")} onChange={formik.handleChange} value={formik.values.cidade}/>
                                <p className="error-message">{errors?.cidade?.message}</p>
                            
                            </div>
                                
                            <div className="right">
                            <Label id="cep" label="CEP"/>
                                <input type="number" id="cep" {...register("cep")} onChange={formik.handleChange} value={formik.values.cep}/>  
                                <p className="error-message">{errors?.cep?.message}</p>
                                   

                                <Label id="numero" label="Número"/>
                                <input type="number" id="numero" {...register("numero")} onChange={formik.handleChange} value={formik.values.numero}/>
                                <p className="error-message">{errors?.numero?.message}</p>
                           
                                
                                <Label id="estado" label="Estado"/>
                                <input type="text" id="estado" {...register("estado")} onChange={formik.handleChange} value={formik.values.estado}/>
                                <p className="error-message">{errors?.estado?.message}</p>

                                
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
                        <input type="text" id="nome-completo" {...register("nomeCompleto")} onChange={formik.handleChange} value={formik.values.nomeCompleto}/>
                        <p className="error-message">{errors?.nomeCompleto?.message}</p>
                    
                    </div> 
                    <div className="right">              
                    <Label id="telefone-representante" label="Telefone"/>
                        <input type="tel" id="telefone-representante" {...register("telefoneRepresentante")} onChange={formik.handleChange} value={formik.values.telefoneRepresentante}/>
                        <p className="error-message">{errors?.telefoneRepresentante?.message}</p>
                     
                    </div>
                </section>

                <Label id="cargo-empresa" label="Cargo que ocupa na empresa" />
                <input type="text" id="cargo-empresa" {...register("cargoEmpresa")} onChange={formik.handleChange} value={formik.values.cargoEmpresa}/>
                <p className="error-message">{errors?.cargoEmpresa?.message}</p>
             
                
                <Label id="email-representante" label="Informe seu melhor e-mail" />
                <input type="email" id="email-representante" {...register("emailRepresentante")} onChange={formik.handleChange} value={formik.values.emailRepresentante}/>
                <p className="error-message">{errors?.emailRepresentante?.message}</p>
             

                <section className="left-right">
                    <div className="left">
                        <Label id="indicacao" label="Quem lhe indicou à Viverde Casa?" />
                        <input type="text" id="indicacao" {...register("indicacao")} onChange={formik.handleChange} value={formik.values.indicacao}/>
                        <p className="error-message">{errors?.indicacao?.message}</p>
                        
                    </div>
                    <div className='right'>
                        <Label id="indicacao" label="Cód. de Indicação" />
                        <input type="text" id="codigo-indicacao" {...register("codigoIndicacao")} onChange={formik.handleChange} value={formik.values.codigoIndicaco}/>
                        <p className="error-message">{errors?.codigoIndicaco?.message}</p>
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
                            <input type="radio" id="parceria-comercial" value="Parceria comercial" {...register("servicoInfo")} onChange={formik.handleChange}/>
                            <LabelServ id="parceria-comercial" label="Parceria comercial (Quero fazer parte do programa de descontos e conquistar novos clientes)" />
                        </li>
                        <li>
                            <input type="radio" id="intermediacao" value="Intermediação" {...register("servicoInfo")} onChange={formik.handleChange}/>
                            <LabelServ id="intermediacao" label="Intermediação de mão de obra (Busco contratação de mão de obra qualificada para reforma e construção)" />
                        </li>
                        <li>
                            <input type="radio" id="qualificacao-profissional" value="Qualificação profissional" {...register("servicoInfo")} onChange={formik.handleChange}/>
                            <LabelServ id="qualificacao-profissional" label="Qualificação profissional (Quero contratar um pacote de qualificação de mão de obra para minha equipe) " />
                        </li>
                        <li>
                            <input type="radio" id="apoio-acoes" value="Apoio a ações ESG" {...register("servicoInfo")} onChange={formik.handleChange}/>
                            <LabelServ id="apoio-acoes" label="Apoio a ações ESG (Quero investir em ações de impacto social e ambiental com a Viverde Casa) " />
                        </li>
                    </ul>
                    </div>

                    <Label id="servicoOutro" label="Outro" />
                    <input id="servicoOutro" type="text" {...register("servicoOutro")} onChange={formik.handleChange} value={formik.values.servicoOutro}/>
                    
                    
                    <p className='questions'>Que iniciativa de impacto gostaria de apoiar?</p>
                    <div id="checklistServicos" className={`dropdown-check-list ${isCheckListVisible ? 'visible' : ''}`} tabIndex="100">
                    <span className="anchor" onClick={toggleCheckList}>
                                Selecione uma opção</span> 
                    <ul className="items">
                        <li>
                            <input type="checkbox" id="viverde-capacita" value="viverdeCapacita" {...register("iniciativaInfo")} onChange={formik.handleChange}/>
                            <LabelServ id="viverde-capacita" label="Viverde Capacita (Programa de qualificação profissional)" />
                        </li>
                        <li>
                            <input type="checkbox" id="viverde-athis" value="viverdeATHIS" {...register("iniciativaInfo")} onChange={formik.handleChange}/>
                            <LabelServ id="viverde-athis" label="Viverde ATHIS (Programa de melhorias habitacionais de interesse social) " />
                        </li>
                        <li>
                            <input type="checkbox" id="viverde-hub" value="viverdeHub" {...register("iniciativaInfo")} onChange={formik.handleChange}/>
                            <LabelServ id="viverde-hub" label="Viverde HUB (Programa de incentivo a pesquisa, desenvolvimento e inovação) " />
                        </li>          
                    </ul>
                  
                </div>

                <Label id="comentarioSolicitacao" label="Comentário" />
                    <textarea id="comentarioSolicitacao" {...register("comentarioSolicitacao")} onChange={formik.handleChange} value={formik.values.comentarioSolicitacao}/>
                    
                    <p className="error-message">{errors?.comentarioSolicitacao?.message}</p>
            </section>

            <section className="Veiculos-Que">
              <h1>Vínculos, questões éticas e morais</h1>
              <div className="box-line"></div>

              <p className='caracteres'>Gostaríamos de conhecer um pouco mais sobre você e os 
                representantes da sua organização.</p>
                <p className='questions'>Sua empresa ou algum de seus representantes tem ou teve envolvimento
                com campanhas políticas ou partidárias nos últimos 20 anos?</p>

                <div className="inputs-escolha">
                    <input id="CampanhasSim" {...register("CampanhasPoliticas")} 
                    type="radio" value="Sim" />
                    <LabelCheck id="CampanhasSim" label="Sim"/>

                    <input id="CampanhasNao" {...register("CampanhasPoliticas")} 
                    type="radio" value=" Não" />
                    <LabelCheck id="CampanhasNao" label="Não"/>

                    <p className="error-message">{errors?.CampanhasPoliticas?.message}</p>
                 </div>
                 <p className='questions'>Você ou algum outro dirigente da empresa tem ou teve algum parente de 
                  até 2º ocupando cargo publico nos últimos 20 anos?</p>

                  <div className="inputs-escolha">
                    <input id="CargoSim" {...register("CargoPublic")} 
                    type="radio" value="Sim" />
                    <LabelCheck id="CargoSim" label="Sim"/>

                    <input id="CargoNao" {...register("CargoPublic")} 
                    type="radio" value=" Não" />
                    <LabelCheck id="CargoNao" label="Não"/>

                    <p className="error-message">{errors?.CargoPublic?.message}</p>
                  </div>

                  <Label id="VinculoPolitico" label="Se a sua resposta para as perguntas anteriores for sim; 
                  por gentileza, especifique aqui o vinculo político partidário,
                   e o período a que se refere:"/>
                   <input id="VinculoPolitico" type="text" {...register("VinculoPolitico")} onChange={formik.handleChange} value={formik.values.VinculoPolitico}/>

                   <p className='questions'>Sua empresa ou algum de seus representantes tem ou teve envolvimento em algum 
                    escândalo envolvendo questões de trabalho escravo desde a sua fundação?</p>
                    <div className="inputs-escolha">
                        <input id="EscandaloSim" {...register("escandalo")} type="radio" value="Sim" />
                        <LabelCheck id="EscandaloSim" label="Sim"/>

                        <input id="EscandaloNao" {...register("escandalo")} type="radio" value=" Não" />
                        <LabelCheck id="EscandaloNao" label="Não"/>

                        <p className="error-message">{errors?.escandalo?.message}</p>
                    </div>

                    <p className='questions'>Sua empresa ou algum de seus representantes tem ou teve envolvimento em algum escândalo
                       envolvendo questões de assédio físico ou moral desde a sua fundação?</p>
                    <div className="inputs-escolha">
                       <input id="AssedioSim" {...register("escandaloAssedio")} 
                       type="radio" value="Sim" />
                       <LabelCheck id="AssedioSim" label="Sim"/>

                       <input id="AssedioNao" {...register("escandaloAssedio")} 
                       type="radio" value=" Não" />
                       <LabelCheck id="AssedioNao" label="Não"/>

                       <p className="error-message">{errors?.escandaloAssedio?.message}</p>
                    </div>

                    <p className='questions'>Sua empresa ou organização já possui um plano de impacto positivo, 
                      com parâmetros claros e definidos,que esteja em prática? </p>
                      <div className="inputs-escolha">
                        <input id="PlanoSim" {...register("PlanoImpacto")} 
                        type="radio" value="Sim" />
                            <LabelCheck id="PlanoSim" label="Sim"/>

                        <input id="PlanoNão" {...register("PlanoImpacto")}
                        type="radio" value=" Não" />
                            <LabelCheck id="PlanoNão" label="Não"/>

                        <p className="error-message">{errors?.PlanoImpacto?.message}</p>
                    </div>

                    <Label id="ImpactoPositivo" label="O que você enxerga de possível melhoria para ampliar 
                      o impacto positivo gerando por sua empresa ou organização?"/>
                      <input type="text" id="ImpactoPositivo" {...register("ImpactoPositivo")} />
                      <p className="error-message">{errors?.ImpactoPositivo?.message}</p>

                      <Label id="ImpactoSocial" label="Quais os setores da sua organização que investem em 
                      impacto social ou ambiental positivo?"/>
                      <input type="text" id="ImpactoSocial" {...register("ImpactoSocial")} />
                      <p className="error-message">{errors?.ImpactoSocial?.message}</p>

                      <p className='questions'>Sua organização já possui uma política de diversidade implantada em algum 
                      setor?</p>
                      <div className="inputs-escolha">
                        <input id="DiversidadeSim" {...register("PoliticaDiversidade")}
                        type="radio" value="Sim" />
                        <LabelCheck id="DiversidadeSim" label="Sim"/>

                        <input id="DiversidadeNão" {...register("PoliticaDiversidade")} 
                        type="radio" value=" Não" />
                        <LabelCheck id="DiversidadeNão" label="Não"/>

                        <p className="error-message">{errors?.PoliticaDiversidade?.message}</p>
                    </div>
            </section>

            <div id="button">            
                <button type="submit">Enviar</button>
            </div>
        </form>
    </main>
  )}