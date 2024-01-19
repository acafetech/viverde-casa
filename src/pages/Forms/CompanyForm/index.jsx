
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
        </form>
    </main>
  )}