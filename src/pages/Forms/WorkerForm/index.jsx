import WorkForms from "../../../components/FormInput"
import { DevTool } from "@hookform/devtools";
import { useForm } from 'react-hook-form'

const WorkerForm  = () => {
    const form = useForm();
    const { register, control } = form;


    return (
        <div>
            <form>
                    <label htmlFor="">Nome</label>
                    <WorkForms type="text" id="nome-completo" {...register("nome-completo")} />
                    <label htmlFor="">RG</label>
                    <WorkForms id="rg" {...register("rg")}/>
                    <label htmlFor="">Endereço Completo</label>
                    <WorkForms id="endereco" {...register("endereco")}/>
                    <label htmlFor="">CPF</label>
                    <WorkForms id="cpf" {...register("cpf")}/>
                    <label htmlFor="">Telefone</label>
                    <WorkForms id="telefone" {...register("telefone")}/>
                    <label htmlFor="">Email</label>
                    <WorkForms id="e-mail" {...register("e-mail")}/>
            </form>
            <DevTool control={control} />
       </div>
    )
}

export default WorkerForm;