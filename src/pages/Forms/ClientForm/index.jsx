import React from 'react';
import { useForm } from 'react-hook-form';
import Label from '../../../components/FormInput';
export default function ClientForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>

    <section>
        <h1>Serviço</h1>

         <p>Que tipo de serviço deseja realizar?</p>

         <h3 className="pergunta-label">Outros: </h3>
         <Label id="outros-servicos"/>
         <input type="text" placeholder="Descreva qual serviço você deseja?" 
         {...register("outros-servicos", {required: true})} />

         <h3>Queremos entender exatamente qual é sua necessidade.</h3>
         <p>Informe nesse espaço os detalhes do serviço que deseja contratar.
         (Ex: Aplicação de revestimento cerâmico em parede de banheiro que mede 2m x 3m).</p>

         <Label id="detalhes"/>
            <input type="text" placeholder="Digite aqui...." 
         {...register("detalhes", {required: true})} />

    </section>

    <section id="agendamento">
        <h1>Agendamento</h1>

          <h3 className="pergunta-label">Melhor horário para você ser atendido</h3>

          <Label id="horario-manha" label="Manhã"/>
              <input {...register("agendamento")} type="radio" value="Manhã" />
          <Label id="horario-tarde" label="Tarde"/>
              <input {...register("agendamento")} type="radio" value=" Tarde" />
          <Label id="horario-noite" label="Noite"/>
              <input {...register("agendamento")} type="radio" value=" Noite" />         


           <h3 className="pergunta-label">Aceita que o serviço seja realizado durante o final de semana?</h3>
           <Label id="agendamento-sim" label="Sim"/>
              <input {...register("finaldesemana", { required: true })} type="radio" value="Sim" />
           <Label id="agendamento-nao" label="Não"/>
              <input {...register("finaldesemana", { required: true })} type="radio" value=" Não" />

           <h3 className="pergunta-label">Pra quando precisa do serviço?</h3>
           
            <input type="checkbox" placeholder="data-servico" 
           {...register("data-servico", {required: true})} />
            <Label id="servico-urgente" label="Urgente"/>
           
           <input type="checkbox" placeholder="data-servico" 
           {...register("data-servic", {required: true})} />
            <Label id="servico-prox-semana" label="Na próxima semana"/>

            <input type="checkbox" placeholder="data-servi" 
           {...register("data-servico", {required: true})} />
            <Label id="servico-um-mes" label="Daqui a um mês"/>


           
            <input type="checkbox" placeholder="data-servico" 
           {...register("data-serv", {required: true})} />
            <Label id="servico-seis-meses" label="6 meses ou mais"/>

           <h3 className="pergunta-label">Há alguma observação sobre o ambiente 
            (norma, restrição ou necessidade especial)?</h3>

            <Label id="observacao" />
              <input type="text" placeholder="observacao" 
            {...register("observacao", {})} />

            <h3 className="pergunta-label">Qual é a sua prioridade para contratar este serviço?</h3>
      </section>

            <Label id="observacao" />

      <section id="pesquisa">
              <h1>Pesquisa</h1>
                <h3 className="pergunta-label">Quem indicou a Viverde Casa</h3>

                  <input type="checkbox" placeholder="indicacao" 
                {...register("indicacao", {required: true})} />
                <Label id="indicacaoAmigos" label="Amigos"/>

                  <input type="checkbox" placeholder="indicaca" 
                {...register("indicacao", {required: true})} />
                <Label id="indicacaoProjeto" label="Projeto Social parceiro"/>
                
                  <input type="checkbox" placeholder="indicac" 
                {...register("indicacao", {required: true})} />
                <Label id="indicacaoProfissional" label="Profissional Parceiro"/>
                
                  <input type="checkbox" placeholder="indica" 
                {...register("indicacao", {required: true})} />
                <Label id="indicacaoEstabelecimento" label="Estabelecimento conveniado"/>
                
                  <input type="checkbox" placeholder="indic" 
                {...register("indicacao", {required: true})} />
                <Label id="indicacaoInstagram" label="Instagram"/>

                  <input type="checkbox" placeholder="indi" 
                {...register("indicacao", {required: true})} />
                <Label id="indicacaoFacebook" label="Facebook"/>

                  <input type="checkbox" placeholder="ind" 
                {...register("indicacao", {required: true})} />
                <Label id="indicacaoOutro" label="Outros"/>

                <h3 className="pergunta-label">Código de indicação:</h3>

                <Label id="codigo" />
                <input type="text" placeholder="codigo" {...register("codigo", {required: true})} />

           
      </section>

      <input type="submit" />
    </form>
  );
}
