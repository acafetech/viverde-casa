import React from 'react';
import { useForm } from 'react-hook-form';

export default function ClientForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <section id="detalhes">
          <h3 className="pergunta-label"> Queremos entender exatamente qual é sua necessidade. </h3>
          <p className="caracteres"> Informe nesse espaço os detalhes do serviço que deseja contratar.
          (Ex: Aplicação de revestimento cerâmico em parede de banheiro que mede 2m x 3m). </p>
  
          <input type="text"
          {...register("detalhes", {required: true})} /> 
  
          <h3 className="pergunta-label">Precisa de ajuda para medir os espaços? Assista nosso tutorial</p>   
      
      </section>

      <input type="submit" />
    </form>
  );
}
