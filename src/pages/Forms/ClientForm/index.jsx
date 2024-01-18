import Label from '../../../components/Label';
import { useForm } from 'react-hook-form';

function ClientForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  return (
    <form id="form-container" onSubmit={handleSubmit(onSubmit)}>
      <section id="dados-pessoais">
        <h1>Dados Pessoais</h1>
        <div class="box-line"></div>
        <div className="primeiros-dados">
          <Label id="e-mail" label="E-mail"/>
          <p className='caracteres'>Informe o seu melhor e-mail</p>
          <input type="email" id="e-mail" {...register("e-mail", {required: true, maxLength: 40})} />

          <Label id="nome-completo" label="Nome Completo"/> 
          <p className='caracteres'>Nome Completo</p>
          <input type="text" id="nome-completo" {...register("Nome completo", {required: true, min: 10, maxLength: 50})} />

          <Label id="nome-social" label="Nome Social"/> 
          <p className='caracteres'>Como podemos te chamar?</p>
          <input type="text" id="nome-social" {...register("Nome completo", {required: false, min: 10, maxLength: 50})} />

          <Label id="telefone" label="Telefone"/> 
          <p className='caracteres'>Telefones para contato</p>
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
          <div class="box-line"></div>
          <div>
            <Label id="cep" label="CEP"/>
            <p className='caracteres'>CEP</p>
            <input type="number" id="cep" {...register("cep", {required: true, maxLength: 8})} />       

            <Label id="numero" label="Número"/>
            <p className='caracteres'>Número</p>
            <input type="number" id="numero" {...register("numero", {required: true, maxLength: 20})} />

            <Label id="cidade" label="Cidade"/>
            <p className='caracteres'>Cidade</p>
            <input type="text" id="cidade" {...register("cidade", {required: true, maxLength: 100})} />
          </div>
            
          <div>
            <Label id="endereco" label="Endereço"/>
            <p className='caracteres'>Rua</p>
            <input type="text" id="endereco" {...register("endereco", {required: true, maxLength: 100})} />

            <Label id="bairro" label="Bairro"/>
            <p className='caracteres'>Bairro</p>
            <input type="text" id="bairro" {...register("bairro", {required: true, maxLength: 100})} />

            <Label id="estado" label="Estado"/>
            <p className='caracteres'>Estado</p>
            <input type="text" id="estado" {...register("estado", {required: true, maxLength: 100})} />
          </div>
        </div>

        <div className="endereco-obra">
          <h2>Endereço da obra</h2>
          <div class="box-line"></div>

          <div>
            <Label id="cep" label="CEP"/>
            <p className='caracteres'>CEP</p>
            <input type="number" id="cep" {...register("cep", {required: true, maxLength: 8})} />

            <Label id="numero" label="Número"/>
            <p className='caracteres'>Número</p>
            <input type="number" id="numero" {...register("numero", {required: true, maxLength: 20})} />

            <Label id="cidade" label="Cidade"/>
            <p className='caracteres'>Cidade</p>
            <input type="text" id="cidade" {...register("cidade", {required: true, maxLength: 100})} />
          </div>

          <div>
            <Label id="endereco" label="Endereço"/>
            <p className='caracteres'>Rua</p>
            <input type="text" id="endereco" {...register("endereco", {required: true, maxLength: 100})} />

            <Label id="bairro" label="Bairro"/>
            <p className='caracteres'>Bairro</p>
            <input type="text" id="bairro" {...register("bairro", {required: true, maxLength: 100})} />

            <Label id="estado" label="Estado"/>
            <p className='caracteres'>Estado</p>
            <input type="text" id="estado" {...register("estado", {required: true, maxLength: 100})} />
          </div>
        </div>
      </section>

      <input type="submit" />
    </form>
  )
}

export default ClientForm;
