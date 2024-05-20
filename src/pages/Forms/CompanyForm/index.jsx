import './style.css';
import Label from '../../../components/Label';
import LabelCheck from '../../../components/LabelCheck';
import LabelServ from '../../../components/LabelServices';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import HeaderForm from '../../../components/HeaderForm';
import Footer from '../../../components/Footer'

/* Dados da empresa */ /*Não ta pengando os dados nem o botão de enviar*/ 

//React hook form import
import { useFormik } from "formik";
import * as Yup from "yup";


export default function CompanyForm() {
    const [isCheckListVisible, setCheckListVisible] = useState(false);
    //deixa visivel a checkbox

    const toggleCheckList = () => {  
     setCheckListVisible(!isCheckListVisible);
    };

    //validationSchema: schema//
    const workerSchema = Yup.object().shape({
        //Dados da Empresa
        
        razaoSocial: Yup.string()
            .required("Razão Social obrigatório.")
            .min(3, "A razão social deve conter no mínimo 3 caracteres.")
            .max(40, "Quantidade de caracteres excedida."),
        
        cnpj: Yup.string()
            .required("O CNPJ é obrigatório.")
            .matches(/[0-9]{14}/, "O campo CNPJ pode conter apenas digitos.")
            .max(14, "CNPJ invalido")
            .min(14, "CNPJ inválido."),
        
        telefoneEmpresa: Yup.string()
            .required("Número Obrigatório")
            .matches(/[0-9]{11}/, "Formato de telefone invalido.")
            .min(11, "O telefone deve ter no mínimo 11 caracteres.")
            .max(11,"O telefone deve ter no máximo 11 caracteres."),
        
        nomeFantasia: Yup.string()
            .required("Nome Fantasia obrigatório.")
            .min(3, "A razão social deve conter no mínimo 3 caracteres.")
            .max(40, "Quantidade de caracteres excedida."),
        
        
        qtdColaboradores: Yup.string()
            .required("Quantidade de colaboradores obrigatório."),
        
        enderecoEletronico: Yup.string()
            .required("O endereço eletronico é obrigatório.")
            .email('Endereço Eletrônico Inválido.'),
        
        //Endereço
        
        endereco: Yup.string()
            .required("O logradouro é obrigatório.")
            .max(60, "quantidade máxima de caracteres atingida para o Endereço."),
        
        bairro: Yup.string()
            .required("O bairro é obrigatório.")
            .max(60, "quantidade máxima de caracteres atingida para o Bairro."),
        
        cidade: Yup.string()
            .required("A cicade é obrigatória.")
            .max(60, "quantidade máxima de caracteres atingida para a Cidade."),
        
        cep: Yup.string("O campo CEP pode conter apenas dígitos.")
            .typeError('CEP deve ser um número')
            .required('CEP é obrigatório')
            .max(8, "CEP invalido"),
        
        numero: Yup.string()
            .required("O Número é obrigatório.")
            .max(5, "Número não pode conter mais de 5 dígitos."),
        
        estado: Yup.string()
            .required("O estado é obrigatória.")
            .max(16, "quantidade máxima de caracteres atingida para o Estado."),
        
        //Dados da(o) representante 
        
        nomeCompleto: Yup.string()
            .required("Nome completo obrigatório")
            .min(10, "Nome precisa ter no mínimo 10 caracteres")
            .max(50, "quantidade máxima de caracteres atingida"),
        
        telefoneRepresentante: Yup.string()
            .required("O número do telefone é obrigatório")
            .matches(/[0-9]{11}/, "Formato de telefone invalido.")
            .min(11, "O telefone deve ter no mínimo 11 caracteres.")
            .max(11,"O telefone deve ter no máximo 11 caracteres."),
        
        cargoEmpresa: Yup.string()
            .required("Nome do cargo Obrigatório")
            .max(20, "quantidade máxima de caracteres atingida"),
        
        emailRepresentante: Yup.string()
            .required("O endereço eletronico é obrigatório.")
            .email('Endereço Eletrônico Inválido.'),
        
        indicacao: Yup.string()
            .required("Nome do cargo Obrigatório")
            .max(40, "quantidade máxima de caracteres atingida"),
        
        codigoIndicacao: Yup.string()
            .max(20, "Código invalido"),
        
         // Informações da Solicitação
        
        servicoInfo: Yup.string()
        .required("Selecione uma opção"),
        
        servicoOutro: Yup.string()
            .max(30, "Máximo de caracters excedido")
            .min(14, "Mínimo de caracters 14"),
        
        iniciativaInfo: Yup.array("Selecione, no mínimo, uma opção.") //Mensagem de erro bugada
        .min(1).of(Yup.string().required())
        .required("Selecione, no mínimo, uma opção."),
            
        
        comentarioSolicitacao: Yup.string()
            .min(10, "Nó mínimo 10 caracteres"),
        
         // Vínculos, questôes éticas e morais 
        
         CampanhasPoliticas: Yup.string()
            .required("Campo obrigatório"),
        
         CargoPublico: Yup.string()
            .required("Campo obrigatório"),
        
         VinculoPolitico: Yup.string(),
        
         escandalo: Yup.string()
            .required("Campo obrigatório"),
        
         escandaloAssedio: Yup.string()
            .required("Campo obrigatório"),
        
         PlanoImpacto: Yup.string()
            .required("Campo obrigatório"),
        
         ImpactoPositivo: Yup.string()
            .required("Campo obrigatório"),
        
         ImpactoSocial: Yup.string()
            .required("Campo obrigatório"),
        
         PoliticaDiversidade: Yup.string()
            .required("Campo obrigatório"),

        PoliticaPrivacidade: Yup.string()
            .required("Campo obrigatório")

        
        });
        //TODOS OS DADOS DO PORTIFOLIO SERAM ASDICIONADOS AQUI DENTRO//
        
        const formik = useFormik ({ 
            validationSchema: workerSchema,
            validateOnBlur: false,
            validateOnChange: false,   
            initialValues: { 
                razaoSocial: '', 
                cnpj: '',  
                telefoneEmpresa: '', 
                nomeFantasia: '', 
                qtdColaboradores: '', 
                enderecoEletronico: '', 
                endereco: '', 
                bairro: '', 
                cidade: '', 
                cep: '', 
                numero: '', 
                estado: '', 
                nomeCompleto: '', 
                telefoneRepresentante: '', 
                cargoEmpresa: '', 
                emailRepresentante: '', 
                indicacao: '', 
                codigoIndicacao: '', 
                servicoInfo: '', 
                servicoOutro: '', 
                iniciativaInfo: [], //Mensagem de erro bugada
                comentarioSolicitacao: '', 
                CampanhasPoliticas: '', 
                CargoPublico: '', 
                VinculoPolitico: '', 
                escandalo:'',  
                escandaloAssedio: '',  
                PlanoImpacto: '',  
                ImpactoPositivo: '', 
                ImpactoSocial: '', 
                PoliticaDiversidade: '',
                PoliticaPrivacidade:'',

            },
            
            onSubmit: values => { // BUGUE Os dados não estão sendo armazendados e nem mostrados no console. 
                alert(JSON.stringify(values, null, 2));
                console.log(values)
            }
        })
        
        const {
            register, 
        } = useForm({
        });


  return ( 
    <main id="company-form">
        <HeaderForm/>
        <form id="form-container" onSubmit={formik.handleSubmit}>
            <section className='dadosEmpresa'>
                <h1>Dados da Empresa</h1>
                <div className="box-line"></div>
                <section className="left-right">
                    <div className="left">
                        <Label id="razao-social" label="Razão Social" />
                        <input type="text" id="razao-social" {...register("razaoSocial",)} onChange={formik.handleChange} value={formik.values.razaoSocial} />
                        <p className="error-message">{formik.errors.razaoSocial}</p>
                       

                        <Label id="cnpj" label="CNPJ" />
                        <p className="caracteres">Apenas números</p>
                        <input id="cnpj" type="text" {...register("cnpj",)} onChange={formik.handleChange} value={formik.values.cnpj} />
                        <p className="error-message">{formik.errors.cnpj}</p>

                        <Label id="telefone-empresa" label="Telefone"/>
                        <p className='caracteres'>Apenas números</p>
                        <input type="tel" id="telefone-empresa" {...register("telefoneEmpresa",)} onChange={formik.handleChange} value={formik.values.telefoneEmpresa} />
                        <p className="error-message">{formik.errors.telefoneEmpresa}</p>
                        
                    </div>
                    <div className='right'>
                        <Label id="nome-fantasia" label="Nome Fantasia" />
                        <input type="text" id="nome-fantasia" {...register("nomeFantasia",)} onChange={formik.handleChange} value={formik.values.nomeFantasia} />
                        <p className="error-message">{formik.errors.nomeFantasia}</p>

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
                        <p className="error-message">{formik.errors.qtdColaboradores}</p>

                        </div>

                        <Label id="endereco-eletronico" label="Endereço Eletrônico" />
                        <p className='caracteres'>E-mail ou link de rede social</p>
                        <input type="text" id="endereco-eletronico" {...register("enderecoEletronico",)} onChange={formik.handleChange} value={formik.values.enderecoEletronico} />
                        <p className="error-message">{formik.errors?.enderecoEletronico}</p>

                    </div>
                    </section>
                    <div className="endereco-pessoal">
                        <h1>Endereço</h1>
                        <div className="box-line"></div>
                            <div className="left-right">
                                <div className="left">
                                <Label id="endereco" label="Logadouro"/>
                                <input type="text" id="endereco" {...register("endereco")} onChange={formik.handleChange} value={formik.values.endereco} />
                                <p className="error-message">{formik.errors.endereco}</p>

                                <Label id="bairro" label="Bairro"/>
                                <input type="text" id="bairro" {...register("bairro")} onChange={formik.handleChange} value={formik.values.bairro} />
                                <p className="error-message">{formik.errors.bairro}</p>
                              
                                
                                <Label id="cidade" label="Cidade"/>
                                <input type="text" id="cidade" {...register("cidade")} onChange={formik.handleChange} value={formik.values.cidade} />
                                <p className="error-message">{formik.errors.cidade}</p>
                            

                            </div>
                                
                            <div className="right">
                            <Label id="cep" label="CEP"/>
                                <input type="number" id="cep" {...register("cep")} onChange={formik.handleChange} value={formik.values.cep} />  
                                <p className="error-message">{formik.errors.cep}</p>
                                   

                                <Label id="numero" label="Número"/>
                                <input type="number" id="numero" {...register("numero")} onChange={formik.handleChange} value={formik.values.numero} />
                                <p className="error-message">{formik.errors.numero}</p>
                           
                                
                                <Label id="estado" label="Estado"/>
                                <input type="text" id="estado" {...register("estado")} onChange={formik.handleChange} value={formik.values.estado} />
                                <p className="error-message">{formik.errors.estado}</p>

                                
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
                        <input type="text" id="nome-completo" {...register("nomeCompleto")} onChange={formik.handleChange} value={formik.values.nomeCompleto} />
                        <p className="error-message">{formik.errors.nomeCompleto}</p>
                    
                    </div> 
                    <div className="right">              
                    <Label id="telefone-representante" label="Telefone"/>
                        <input type="tel" id="telefone-representante" {...register("telefoneRepresentante")} onChange={formik.handleChange} value={formik.values.telefoneRepresentante} />
                        <p className="error-message">{formik.errors.telefoneRepresentante}</p>
                     
                    </div>
                </section>

                <Label id="cargo-empresa" label="Cargo que ocupa na empresa" />
                <input type="text" id="cargo-empresa" {...register("cargoEmpresa")} onChange={formik.handleChange} value={formik.values.cargoEmpresa} />
                <p className="error-message">{formik.errors.cargoEmpresa}</p>
             
                
                <Label id="email-representante" label="Informe seu melhor e-mail" />
                <input type="email" id="email-representante" {...register("emailRepresentante")} onChange={formik.handleChange} value={formik.values.emailRepresentante} />
                <p className="error-message">{formik.errors.emailRepresentante}</p>
             

                <section className="left-right">
                    <div className="left">
                        <Label id="indicacao" label="Quem lhe indicou à Viverde Casa?" />
                        <input type="text" id="indicacao" {...register("indicacao")} onChange={formik.handleChange} value={formik.values.indicacao} />
                        <p className="error-message">{formik.errors.indicacao}</p>
                        
                    </div>
                    <div className='right'>
                        <Label id="indicacao" label="Cód. de Indicação" />
                        <input type="text" id="codigo-indicacao" {...register("codigoIndicacao")} onChange={formik.handleChange} value={formik.values.codigoIndicacao} />
                        <p className="error-message">{formik.errors.codigoIndicacao}</p>
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
                            <input type="radio" id="parceria-comercial" value="Parceria comercial" {...register("servicoInfo")} onChange={formik.handleChange} />
                            <LabelServ id="parceria-comercial" label="Parceria comercial (Quero fazer parte do programa de descontos e conquistar novos clientes)" />
                        </li>
                        <li>
                            <input type="radio" id="intermediacao" value="Intermediação" {...register("servicoInfo")} onChange={formik.handleChange} />
                            <LabelServ id="intermediacao" label="Intermediação de mão de obra (Busco contratação de mão de obra qualificada para reforma e construção)" />
                        </li>
                        <li>
                            <input type="radio" id="qualificacao-profissional" value="Qualificação profissional" {...register("servicoInfo")} onChange={formik.handleChange} />
                            <LabelServ id="qualificacao-profissional" label="Qualificação profissional (Quero contratar um pacote de qualificação de mão de obra para minha equipe) " />
                        </li>
                        <li>
                            <input type="radio" id="apoio-acoes" value="Apoio a ações ESG" {...register("servicoInfo")} onChange={formik.handleChange} />
                            <LabelServ id="apoio-acoes" label="Apoio a ações ESG (Quero investir em ações de impacto social e ambiental com a Viverde Casa) " />
                        </li>
                    </ul>
                    <p className="error-message">{formik.errors.servicoInfo}</p>
                    </div>

                    <Label id="servicoOutro" label="Outro" />
                    <input id="servicoOutro" type="text" {...register("servicoOutro")} onChange={formik.handleChange} value={formik.values.servicoOutro} />

                    
                    
                    <p className='questions'>Que iniciativa de impacto gostaria de apoiar?</p>
                    <div id="checklistServicos" className={`dropdown-check-list ${isCheckListVisible ? 'visible' : ''}`} tabIndex="100">
                    <span className="anchor" onClick={toggleCheckList}>Selecione uma opção</span> 
                    
                    <ul className="items">
                        <li>
                            <input type="checkbox" id="viverde-capacita" value="viverdeCapacita" {...register("iniciativaInfo")} onChange={formik.handleChange} />
                            <LabelServ id="viverde-capacita" label="Viverde Capacita (Programa de qualificação profissional)" />
                        </li>
                        <li>
                            <input type="checkbox" id="viverde-athis" value="viverdeATHIS" {...register("iniciativaInfo")} onChange={formik.handleChange} />
                            <LabelServ id="viverde-athis" label="Viverde ATHIS (Programa de melhorias habitacionais de interesse social)" />
                        </li>
                        <li>
                            <input type="checkbox" id="viverde-hub" value="viverdeHub" {...register("iniciativaInfo")} onChange={formik.handleChange} />
                            <LabelServ id="viverde-hub" label="Viverde HUB (Programa de incentivo a pesquisa, desenvolvimento e inovação)" />
                        </li>        
                    </ul>
                    <p className="error-message">{formik.errors.iniciativaInfo}</p>  
                </div>

                <Label id="comentarioSolicitacao" label="Comentário" />
                    <textarea id="comentarioSolicitacao" {...register("comentarioSolicitacao")} onChange={formik.handleChange} value={formik.values.comentarioSolicitacao} />
                    
                    <p className="error-message">{formik.errors.comentarioSolicitacao}</p>
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
                    type="radio" value="Sim"  onChange={formik.handleChange} />
                    <LabelCheck id="CampanhasSim" label="Sim"/>

                    <input id="CampanhasNao" {...register("CampanhasPoliticas")} 
                    type="radio" value=" Não" onChange={formik.handleChange} />
                    <LabelCheck id="CampanhasNao" label="Não"/>

                    <p className="error-message">{formik.errors.CampanhasPoliticas}</p>

                 </div>
                 <p className='questions'>Você ou algum outro dirigente da empresa tem ou teve algum parente de 
                  até 2º ocupando cargo publico nos últimos 20 anos?</p>

                  <div className="inputs-escolha">
                    <input id="CargoSim" {...register("CargoPublico")} 
                    type="radio" value="Sim" onChange={formik.handleChange} />
                    <LabelCheck id="CargoSim" label="Sim"/>

                    <input id="CargoNao" {...register("CargoPublico")} 
                    type="radio" value=" Não" onChange={formik.handleChange} />
                    <LabelCheck id="CargoNao" label="Não" />

                    <p className="error-message">{formik.errors.CargoPublico}</p>

                  </div>

                  <Label id="VinculoPolitico" label="Se a sua resposta para as perguntas anteriores for sim; 
                  por gentileza, especifique aqui o vinculo político partidário,
                   e o período a que se refere:"/>
                   <input id="VinculoPolitico" type="text" {...register("VinculoPolitico")} onChange={formik.handleChange} value={formik.values.VinculoPolitico} />

                   <p className='questions'>Sua empresa ou algum de seus representantes tem ou teve envolvimento em algum 
                    escândalo envolvendo questões de trabalho escravo desde a sua fundação?</p>
                    <div className="inputs-escolha">
                        <input id="EscandaloSim" {...register("escandalo")} type="radio" value="Sim" onChange={formik.handleChange} />
                        <LabelCheck id="EscandaloSim" label="Sim"/>

                        <input id="EscandaloNao" {...register("escandalo")} type="radio" value=" Não" onChange={formik.handleChange} />
                        <LabelCheck id="EscandaloNao" label="Não"/>

                        <p className="error-message">{formik.errors.escandalo}</p>

                    </div>

                    <p className='questions'>Sua empresa ou algum de seus representantes tem ou teve envolvimento em algum escândalo
                       envolvendo questões de assédio físico ou moral desde a sua fundação?</p>
                    <div className="inputs-escolha">
                       <input id="AssedioSim" {...register("escandaloAssedio")} 
                       type="radio" value="Sim" onChange={formik.handleChange} />
                       <LabelCheck id="AssedioSim" label="Sim"/>

                       <input id="AssedioNao" {...register("escandaloAssedio")} 
                       type="radio" value=" Não" onChange={formik.handleChange} />
                       <LabelCheck id="AssedioNao" label="Não"/>

                       <p className="error-message">{formik.errors.escandaloAssedio}</p>

                    </div>

                    <p className='questions'>Sua empresa ou organização já possui um plano de impacto positivo, 
                      com parâmetros claros e definidos,que esteja em prática? </p>
                      <div className="inputs-escolha">
                        <input id="PlanoSim" {...register("PlanoImpacto")} 
                        type="radio" value="Sim" onChange={formik.handleChange} />
                            <LabelCheck id="PlanoSim" label="Sim"/>

                        <input id="PlanoNão" {...register("PlanoImpacto")}
                        type="radio" value=" Não" onChange={formik.handleChange} />
                            <LabelCheck id="PlanoNão" label="Não"/>

                        <p className="error-message">{formik.errors.PlanoImpacto}</p>

                    </div>

                    <Label id="ImpactoPositivo" label="O que você enxerga de possível melhoria para ampliar 
                      o impacto positivo gerando por sua empresa ou organização?"/>

                      <input type="text" id="ImpactoPositivo" {...register("ImpactoPositivo")} onChange={formik.handleChange} value={formik.values.ImpactoPositivo} />
                      <p className="error-message">{formik.errors.ImpactoPositivo}</p>

                      <Label id="ImpactoSocial" label="Quais os setores da sua organização que investem em 
                      impacto social ou ambiental positivo?"/>
                      <input type="text" id="ImpactoSocial" {...register("ImpactoSocial")} onChange={formik.handleChange} value={formik.values.ImpactoSocial} />
                      <p className="error-message">{formik.errors.ImpactoSocial}</p>


                      <p className='questions'>Sua organização já possui uma política de diversidade implantada em algum 
                      setor?</p>
                      <div className="inputs-escolha">
                        <input id="DiversidadeSim" {...register("PoliticaDiversidade")}
                        type="radio" value="Sim" onChange={formik.handleChange} />
                        <LabelCheck id="DiversidadeSim" label="Sim"/>

                        <input id="DiversidadeNao" {...register("PoliticaDiversidade")} 
                        type="radio" value=" Não" onChange={formik.handleChange} />
                        <LabelCheck id="DiversidadeNao" label="Não"/>

                        <p className="error-message">{formik.errors.PoliticaDiversidade}</p>

                    </div>
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