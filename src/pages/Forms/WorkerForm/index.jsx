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
                 <Label id="sim-cnpj" />
                    <label> Sim <input {...register("sim-cnpj", { required: true })} type="radio" value="Sim" /></label>
                 <Label id="nao-cnpj" />
                    <label> Não <input {...register("nao-cnpj", { required: true })} type="radio" value="Não" /></label>

                <h3 className="pergunta-label">CNPJ (opcional)</h3>
                  <p>Caso possua, informe apenas números</p>
                  <Label id="cnpj" />
                    <input type="text" {...register("cpnj", {})} />

                <h3 className="pergunta-label">Qual sua área de atuação?</h3>
                <Label id="sim-cnpj" />
                    <input type="text" {...register("", {})} />

        </section>

        <section id="agenda">

                <h1>Agenda</h1>

               <h3 className="pergunta-label">Qual sua disponibilidade de horário?</h3>
                 <Label id="sim-cnpj" />
                    <label> Manhã <input {...register("Qual sua disponibilidade de horário?", { required: true })} type="radio" value="Manhã" /> </label>
                 <Label id="sim-cnpj" />
                    <label> Tarde <input {...register("Qual sua disponibilidade de horário?", { required: true })} type="radio" value=" Tarde" /> </label>
                 <Label id="sim-cnpj" />
                    <label> Noite <input {...register("Qual sua disponibilidade de horário?", { required: true })} type="radio" value=" Noite" /> </label>

               <h3 className="pergunta-label">Aceita prestar serviços nos finais de semana?</h3>
                 <Label id="sim-cnpj" />
                    <label> Sim <input {...register("Aceita prestar serviços nos finais de semana?", { required: true })} type="radio" value="Sim" /> </label>
                 <Label id="sim-cnpj" />   
                    <label> Não <input {...register("Aceita prestar serviços nos finais de semana?", { required: true })} type="radio" value=" Não" /> </label>

               <h3 className="pergunta-label">Você está trabalhando de carteira assinada?</h3>
                 <Label id="sim-cnpj" />
                    <label> Sim <input {...register("Você está trabalhando de carteira assinada?", { required: true })} type="radio" value="Sim" /> </label>
                 <Label id="sim-cnpj" />
                    <label> Não  <input {...register("Você está trabalhando de carteira assinada?", { required: true })} type="radio" value=" Não" /> </label>

        </section>

        <section id="financeiro">

            <h1>Financeiro</h1>

                <h3 className="pergunta-label">Como você costuma cobrar pelo serviço?</h3>

               <Label id="sim-cnpj" />
                  <label>Por Hora</label><input {...register("Como você costuma cobrar pelo serviço?", { required: true })} type="radio" value="Por Hora" />
               <Label id="sim-cnpj" />
                  <label>Por Diária</label><input {...register("Como você costuma cobrar pelo serviço?", { required: true })} type="radio" value=" Por Diária" />
               <Label id="sim-cnpj" />
                  <label>Por Metro</label><input {...register("Como você costuma cobrar pelo serviço?", { required: true })} type="radio" value=" Por Metro" />
               <Label id="sim-cnpj" />
                  <label>Por Empreitada</label><input {...register("Como você costuma cobrar pelo serviço?", { required: true })} type="radio" value=" Por Empreitada" />

                    <h3 className="pergunta-label">Campo a ser alterado para inputs de dados</h3>

                    <Label id="sim-cnpj" />
                <input type="text" {...register("Quanto você costuma cobrar em média pelo seu serviço ? ", {required: true})} />

        </section>

        <section id="experiencia-profissional">
            <h1>Experiência Profissional</h1>

           <Label id="sim-cnpj" />
            <input type="tel" placeholder="(DDD) + número" 
            {...register("Informe pelo menos dois contatos de referência profissional: (opcional)", 
            {required: true, max: 11, min: 11, maxLength: 11, pattern: /[0-9]{11}/i})} />

           <Label id="sim-cnpj" />
            <input type="tel" placeholder="(DDD) + número" 
            {...register("Informe pelo menos dois contatos de referência profissional: (opcional)", 
            {max: 11, min: 11, maxLength: 11, pattern: /[0-9]{11}/i})} />

           <Label id="sim-cnpj" />
            <h3>Possui certifições complementares? Quais? (opcional)</h3>
            <input type="text" placeholder="Possui certificações complementares? Quais? (opcional)" 
            {...register("Possui certificações complementares? Quais? (opcional)", {})} />

        </section>
      <input type="submit" />
    </form>
  );
}
