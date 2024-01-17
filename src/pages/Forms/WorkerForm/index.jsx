import Label from '../../../components/Label';
import { useForm } from 'react-hook-form';



export default function App() {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form id="form-container" onSubmit={handleSubmit(onSubmit) }>
        <section class="Dadospessoas">
            <h1>Dados Pessoais</h1>
            <div class="box-line"></div>
            <section class="left-right">
                <div class="left">
                    <Label id="nome-completo" label="Nome Completo"/> 
                    <p className='caracteres'>Conforme consta nos seus documentos</p>
                    <input type="text" id="nome-completo" {...register("Nome completo", {required: true, min: 10, maxLength: 50})} />

                    <Label id="endereco" label="Endereço"/>
                    <p className='caracteres'>Conforme consta nos seus documentos</p>
                    <input type="text" id="endereco" {...register("endereco", {required: true, maxLength: 100})} />

                    <Label id="data-nascimento" label="Data de Nascimento"/>
                    <p className='caracteres'>Ex.: 06/09/1975</p>
                    <input type="datetime" id="data-nascimento" {...register("Data de Nascimento", {required: true, pattern: /^\S+@\S+$/i})} />

                    <Label id="e-mail" label="E-mail"/>
                    <input type="email" id="e-mail" {...register("e-mail", {required: true, maxLength: 40})} />
                </div>

                <div class="right">
                    <Label id="RG" label="RG"/> 
                    <p className='caracteres'>Apenas números</p>
                    <input type="text" id="RG" {...register("RG", {required: true, maxLength: 14})} />

                    <Label id="CPF" label="CPF"/> 
                    <p className='caracteres'>Apenas números</p>
                    <input type="text" id="CPF" {...register("CPF", {required: true, maxLength: 11})} />

                    <Label id="telefone" label="Telefone"/> 
                    <p className='caracteres'>Apenas números</p>
                    <input type="tel" id="telefone" {...register("telefone", {required: true, maxLength: 11, pattern: /[0-9]{11}/i })} />
                </div>

                <div class="port-deficiencia">
                    <h3 className="pergunta-label">Você é uma pessoa com deficiência?</h3>
                    <Label id="sim-deficiencia" label="Sim" />
                    <input type="radio" id="sim-deficiencia" value="Sim" {...register("port-deficiencia", { required: true })}   />

                    <Label id="nao-deficiencia" label="Não" />
                    <input type="radio" id="nao-deficiencia"  value="Nao"{...register("port-deficiencia", { required: true })}   />

                </div>

                </section>
        </section>
        <input type="submit" />
    </form>
  );
}
