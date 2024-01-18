import "./styles.css"
import React from 'react';
import { useForm } from 'react-hook-form';
import Label from "../../../components/FormInput";

export default function WorkerForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <section class="dadosProfissionais">

            <h1>Dados Profissionais</h1>

                <h3 className="pergunta-label">Possui CNPJ</h3>
                 <Label id="sim-cnpj" label="Sim"/>
                    <input {...register("cnpj-sim-nao", { required: true })} type="radio" value="Sim" />
                 <Label id="nao-cnpj" label="Não"/>
                    <input {...register("cnpj-sim-nao", { required: true })} type="radio" value="Não" />

                <h3 className="pergunta-label">CNPJ <em>(opcional)</em></h3>
                  <p class="caracteres">Caso possua, informe apenas números</p>
                  <Label id="cnpj" />
                    <input type="text" {...register("cpnj", {})} />

                <h3 className="pergunta-label">Qual sua área de atuação?</h3>
                <Label id="area-atuacao" />
                    <input type="text" {...register("area-atuacao", {})} />

        </section>

        <section id="agenda">

                <h1>Agenda</h1>

               <h3 className="pergunta-label">Qual sua disponibilidade de horário?</h3>
                 <Label id="escolha-horario" label="Manhã"/>
                    <input {...register("horarios", { required: true })} type="radio" value="Manhã" />
                 <Label id="escolha-horario" label="Tarde"/>
                    <input {...register("horarios", { required: true })} type="radio" value=" Tarde" /> 
                 <Label id="escolha-horario" label="Noite"/>
                    <input {...register("horarios", { required: true })} type="radio" value=" Noite" /> 

               <h3 className="pergunta-label">Aceita prestar serviços nos finais de semana?</h3>
                 <Label id="sim-nao" label="Sim"/>
                    <input {...register("fim-semana", { required: true })} type="radio" value="Sim" /> 
                 <Label id="sim-nao" label="Não"/>   
                    <input {...register("fim-semana", { required: true })} type="radio" value=" Não" /> 

               <h3 className="pergunta-label">Você está trabalhando de carteira assinada?</h3>
                 <Label id="sim-nao" label="Sim"/>
                    <input {...register("cart-assinada", { required: true })} type="radio" value="Sim" />
                 <Label id="sim-nao" label="Não"/>
                    <input {...register("cart-assinada", { required: true })} type="radio" value=" Não" /> 

        </section>

        <section id="financeiro">

            <h1>Financeiro</h1>

                <h3 className="pergunta-label">Como você costuma cobrar pelo serviço?</h3>

               <Label id="escolha-horario" label="Por Hora"/>
                  <input {...register("cobrar-servico", { required: true })} type="radio" value="Por Hora" />
               <Label id="escolha-horario" label="Por Diária"/>
                  <input {...register("cobrar-servico", { required: true })} type="radio" value=" Por Diária" />
               <Label id="escolha-horario" label="Por Metro"/>
                  <input {...register("cobrar-servico", { required: true })} type="radio" value=" Por Metro" />
               <Label id="escolha-horario" label="Por Empreitada"/>
                  <input {...register("cobrar-servico", { required: true })} type="radio" value=" Por Empreitada" />

                    <h3 className="pergunta-label">Campo a ser alterado para inputs de dados</h3>

               <Label id="preco-medio" />
                  <p className="caracteres">  Ex.: Se cobrar por diária, quanto custa sua diária? </p>
                    <input type="text" {...register("preco-medio", {required: true})} />

        </section>

        <section id="experiencia-profissional">
            <h1>Experiência Profissional</h1>

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
      <input type="submit" />
    </form>
  );
}
