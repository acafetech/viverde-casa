import Label from '../../../components/Label';
import { useForm } from 'react-hook-form';

function ClientForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  return (
    <main id="client-form">
      <form id="form-container" onSubmit={handleSubmit(onSubmit)}>
        <section id="dados-pessoais">
          <h1>Dados Pessoais</h1>
          <div className="box-line"></div>
          <div className="primeiros-dados">
            <Label id="e-mail" label="Informe o seu melhor e-mail"/>
            <input type="email" id="e-mail" {...register("e-mail", {required: true, maxLength: 40})} />

            <Label id="nome-completo" label="Nome Completo"/> 
            <input type="text" id="nome-completo" {...register("Nome completo", {required: true, min: 10, maxLength: 50})} />

            <Label id="nome-social" label="Nome Social"/> 
            <p className='caracteres'>Como podemos te chamar?</p>
            <input type="text" id="nome-social" {...register("Nome completo", {required: false, min: 10, maxLength: 50})} />

            <Label id="telefone" label="Telefones para contato"/> 
            <input type="tel" id="telefone" {...register("telefone", {required: true, maxLength: 11, pattern: /[0-9]{11}/i })} />
            <input type="tel" id="telefone" {...register("telefone", {required: true, maxLength: 11, pattern: /[0-9]{11}/i })} />
          </div>

          <div className="dados-pcd">
            <h3>Você é uma pessoa com deficiência?</h3>
            <Label id="sim-deficiencia" label="Sim" />
            <input type="radio" id="sim-deficiencia" value="Sim" {...register("dados-pcd", { required: true })}   />
            <Label id="nao-deficiencia" label="Não" />
            <input type="radio" id="nao-deficiencia"  value="Nao"{...register("dados-pcd", { required: true })}   />

            <h3>Se sim, qual tipo de deficiência?</h3>
            <input type="radio" id="pcd-tipo"  value="fisica"{...register("dados-pcd", { required: true })}   />
            <Label id="pcd-tipo" label="Física" />
            <input type="radio" id="pcd-tipo"  value="intelectual"{...register("dados-pcd", { required: true })}   />
            <Label id="pcd-tipo" label="Intelectual" />
            <input type="radio" id="pcd-tipo"  value="motora"{...register("dados-pcd", { required: true })}   />
            <Label id="pcd-tipo" label="Motora" />
            <input type="radio" id="pcd-tipo"  value="visual"{...register("dados-pcd", { required: true })}   />
            <Label id="pcd-tipo" label="Visual" />
            <input type="radio" id="pcd-tipo"  value="auditiva"{...register("dados-pcd", { required: true })}   />
            <Label id="pcd-tipo" label="Auditiva" />
            <input type="radio" id="pcd-tipo"  value="outra"{...register("dados-pcd", { required: true })}   />
            <Label id="pcd-tipo" label="Outra" />
          </div>

          <div className="endereco-pessoal">
            <h2>Seu endereço</h2>
            <div className="box-line"></div>
              <div>
                <Label id="cep" label="CEP"/>
                <input type="number" id="cep" {...register("cep", {required: true, maxLength: 8})} />       

                <Label id="numero" label="Número"/>
                <input type="number" id="numero" {...register("numero", {required: true, maxLength: 20})} />

                <Label id="cidade" label="Cidade"/>
                <input type="text" id="cidade" {...register("cidade", {required: true, maxLength: 100})} />
            </div>
            
            <div>
              <Label id="endereco" label="Rua"/>
              <input type="text" id="endereco" {...register("endereco", {required: true, maxLength: 100})} />

              <Label id="bairro" label="Bairro"/>
              <input type="text" id="bairro" {...register("bairro", {required: true, maxLength: 100})} />

              <Label id="estado" label="Estado"/>
              <input type="text" id="estado" {...register("estado", {required: true, maxLength: 100})} />
            </div>
          </div>

          <div className="endereco-obra">
            <h2>Endereço da obra</h2>
            <div className="box-line"></div>

            <div>
              <Label id="cep" label="CEP"/>
              <input type="number" id="cep" {...register("cep", {required: true, maxLength: 8})} />

              <Label id="numero" label="Número"/>
              <input type="number" id="numero" {...register("numero", {required: true, maxLength: 20})} />

              <Label id="cidade" label="Cidade"/>
              <input type="text" id="cidade" {...register("cidade", {required: true, maxLength: 100})} />
            </div>

            <div>
              <Label id="endereco" label="Rua"/>
              <input type="text" id="endereco" {...register("endereco", {required: true, maxLength: 100})} />

              <Label id="bairro" label="Bairro"/>
              <input type="text" id="bairro" {...register("bairro", {required: true, maxLength: 100})} />

              <Label id="estado" label="Estado"/>
              <input type="text" id="estado" {...register("estado", {required: true, maxLength: 100})} />
            </div>
          </div>
        </section>

        <section>
          <h1>Serviço</h1>
          <div className="box-line"></div>
          <p>Que tipo de serviço deseja realizar?</p>
          

          <h3 className="pergunta-label">Outros: </h3>
          <Label id="outros-servicos"/>
          <input type="text" placeholder="Descreva qual serviço você deseja?" {...register("outros-servicos", {required: true})} />

          <h3>Queremos entender exatamente qual é sua necessidade.</h3>
          <p>Informe nesse espaço os detalhes do serviço que deseja contratar. (Ex: Aplicação de revestimento cerâmico em parede de banheiro que mede 2m x 3m).</p>
          <Label id="detalhes"/>
          <input type="text" placeholder="Digite aqui...." {...register("detalhes", {required: true})} />
          <h3>Precisa de ajuda para medir os espaços? Assista nosso tutorial</h3>
        </section>

        <section id="agendamento">
          <h1>Agendamento</h1>
          <div className="box-line"></div>
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
          <input type="checkbox" placeholder="data-servico" {...register("data-servico", {required: true})} />
          <Label id="servico-urgente" label="Urgente"/>
          <input type="checkbox" placeholder="data-servico" {...register("data-servic", {required: true})} />
          <Label id="servico-prox-semana" label="Na próxima semana"/>
          <input type="checkbox" placeholder="data-servico" {...register("data-servico", {required: true})} />
          <Label id="servico-um-mes" label="Daqui a um mês"/>
          <input type="checkbox" placeholder="data-servico" {...register("data-servico", {required: true})} />
          <Label id="servico-seis-meses" label="6 meses ou mais"/>

          <h3 className="pergunta-label">Há alguma observação sobre o ambiente (norma, restrição ou necessidade especial)?</h3>
          <Label id="observacao" />
          <input type="text" placeholder="observacao" {...register("observacao", {})} />

          <h3 className="pergunta-label">Qual é a sua prioridade para contratar este serviço?</h3>
        </section>

        <section>
          <h1>Pesquisa</h1>
          <div className="box-line"></div>
          <h3 className="pergunta-label">Quem indicou a Viverde Casa</h3>

          <input type="checkbox" placeholder="indicacao" {...register("indicacao", {required: true})} />
          <Label id="indicacao" label="Amigos"/>

          <input type="checkbox" placeholder="indicacao" {...register("indicacao", {required: true})} />
          <Label id="indicacao" label="Projeto Social Parceiro"/>

          <input type="checkbox" placeholder="indicacao" {...register("indicacao", {required: true})} />
          <Label id="indicacao" label="Profissional Parceiro"/>

          <input type="checkbox" placeholder="indicacao" {...register("indicacao", {required: true})} />
          <Label id="indicacao" label="Estabelecimento conveniado"/>

          <input type="checkbox" placeholder="indicacao" {...register("indicacao", {required: true})} />
          <Label id="indicacao" label="Instagram"/>

          <input type="checkbox" placeholder="indicacao" {...register("indicacao", {required: true})} />
          <Label id="indicacao" label="Facebook"/>

          <input type="checkbox" placeholder="indicacao" {...register("indicacao", {required: true})} />
          <Label id="indicacao" label="Outro"/>

          <Label id="codigo-indicacao" label="Código de indicação:"/>
          <input type="text" id="codigo-indicacao" {...register("codigo-indicacao", {required: false, min: 10, maxLength: 50})} />
        </section>

        <input type="submit" />
      </form>
    </main>
  )
}

export default ClientForm;
