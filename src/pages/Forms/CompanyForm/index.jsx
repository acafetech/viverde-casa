
import Label from '../../../components/Label';
import LabelCheck from '../../../components/LabelCheck';
import LabelServ from '../../../components/LabelServices';

import { useForm } from 'react-hook-form';
import { useState } from 'react';

export default function CompanyForm() {
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
    <main id="company-form">
        <form id="form-container" onSubmit={handleSubmit(onSubmit) }>
            <section className='dadosEmpresa'>
                <h1>Dados da Empresa</h1>
                <div className="box-line"></div>
                <Label id="razao-social" label="Razão Social" />
                <input type="text" id="razao-social" {...register("razaoSocial", {required: true, minLength: 10, maxLength: 50})} />

                <Label id="nome-fantasia" label="Nome Fantasia" />
                <input type="text" id="nome-fantasia" {...register("nomeFantasia", {required: true, minLength: 10, maxLength: 50})} />

            </section>

            <section className="Veiculos-Que">
              <h1>Vínculos, questões éticas e morais</h1>
              <div class="box-line"></div>

              <p>Gostaríamos de conhecer um pouco mais sobre você e os 
                representantes da sua organização.</p>
                <h3>Sua empresa ou algum de seus representantes tem ou teve envolvimento
                com campanhas políticas ou partidárias nos últimos 20 anos?</h3>
                
                <input {...register("CampanhasPoliticas", { required: true })} 
                type="radio" value="Sim" />
                <LabelCheck id="CampanhasSim" label="Sim"/>
                  
                 <input {...register("CampanhasPoliticas", { required: true })} 
                 type="radio" value=" Não" />
                 <LabelCheck id="CampanhasNao" label="Não"/>

                 <h3>Você ou algum outro dirigente da empresa tem ou teve algum parente de 
                  até 2º ocupando cargo publico nos últimos 20 anos?</h3>
                  <input {...register("CargoPublic", { required: true })} 
                  type="radio" value="Sim" />
                  <LabelCheck id="CargoSim" label="Sim"/>

                  <input {...register("CargoPublic", { required: true })} 
                  type="radio" value=" Não" />
                  <LabelCheck id="CargoNao" label="Não"/>


                  <Label id="VinculoPolitico" label="Se a sua resposta para as perguntas anteriores for sim; 
                  por gentileza, especifique aqui o vinculo político partidário,
                   e o período a que se refere:"/>
                   <input type="text" {...register("VinculoPolitico", {required: true})} />

                   <div class="box-line"></div>

                   <h3>Sua empresa ou algum de seus representantes tem ou teve envolvimento em algum 
                    escândalo envolvendo questões de trabalho escravo desde a sua fundação?</h3>

                   <input {...register("escandalo", { required: true })} type="radio" value="Sim" />
                   <LabelCheck id="EscandaloSim" label="Sim"/>

                    <input {...register("escandalo", { required: true })} type="radio" value=" Não" />
                    <LabelCheck id="EscandaloNao" label="Não"/>

                    
                    <h3>Sua empresa ou algum de seus representantes tem ou teve envolvimento em algum escândalo
                       envolvendo questões de assédio físico ou moral desde a sua fundação?</h3>

                       <input {...register("escandaloAssedio", { required: true })} 
                       type="radio" value="Sim" />
                       <LabelCheck id="EscandaloSim" label="Sim"/>
                       
                       <input {...register("escandaloAssedio", { required: true })} 
                       type="radio" value=" Não" />
                       <LabelCheck id="EscandaloNao" label="Não"/>

                    <h3>Sua empresa ou organização já possui um plano de impacto positivo, 
                      com parâmetros claros e definidos,que esteja em prática? </h3>

                      <input {...register("PlanoImpacto", { required: true })} 
                      type="radio" value="Sim" />
                        <LabelCheck id="PlanoSim" label="Sim"/>

                      <input {...register("PlanoImpacto", { required: true })}
                      type="radio" value=" Não" />
                        <LabelCheck id="PlanoNão" label="Não"/>

                        <div class="box-line"></div>

                        <Label id="ImpactoPositivo" label="O que você enxerga de possível melhoria para ampliar 
                      o impacto positivo gerando por sua empresa ou organização?"/>
                      <input type="text" {...register("ImpactoPositivo", {required: true})} />

                      <Label id="ImpactoSocial" label="Quais os setores da sua organização que investem em 
                      impacto social ou ambiental positivo?"/>
                      <input type="text" {...register("ImpactoSocial", {required: true})} />

                      <h3>Sua organização já possui uma política de diversidade implantada em algum 
                      setor?</h3>

                      <input {...register("PoliticaDiversidade", { required: true })}
                       type="radio" value="Sim" />
                      <LabelCheck id="DiversidadeSim" label="Sim"/>

                      <input {...register("PoliticaDiversidade", { required: true })} 
                      type="radio" value=" Não" />
                      <LabelCheck id="DiversidadeNão" label="Não"/>

            </section>

            <input type="submit" />

        </form>
    </main>
  )}