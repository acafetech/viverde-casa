import "./styles.css"
import { userState } from "react";
import FormInput from "../../../components/FormInput";

const WorkerForm  = () => {
    const [values, setValues] = userState ({
        username:"",
        endereco:"",
        rg:"",
        aniversario:"",
        cpf:"",
        email:"",
    });

    const inputs = [
        {
            id:1,
            name:"Nome-Completo",
            type:"text",
            errorMessage:"",
            placeholder:"",
            label:"Nome do Usuário"
            //pattern: "", < validação de nome 
            // required: true, < = validação
        },

        {
            id:2,
            name:"Endereco",
            type:"text",
            errorMessage:"",
            placeholder:"Siga o Exemplo na descrição",
            label:"Endereço Completo"
            // required: true,
        },

        {
            id:3,
            name:"rg",
            type:"number",
            errorMessage:"RG invalido",
            placeholder:"000.000-00",
            label:"RG"
            // required: true,
        },

        {
            id:4,
            name:"cpf",
            type:"number",
            errorMessage:"CPF invalido",
            placeholder:"000.000.000-00",
            label:"CPF"
            // required: true,
            
        },

        {
            id:5,
            name:"birthday",
            type:"data",
            placeholder:"birthday",
            label:"Data de Nascimento"
            // required: true,
        },

        {
            id:6,
            name:"email",
            type:"text",
            errorMessage:"",
            placeholder:"",
            label:"Email"
            // required: true,
        },

        {
            id:7,
            name:"telefone",
            type:"tel",
            errorMessage:"",
            placeholder:"(DDD) + Número",
            label:"Telefone"
            // required: true,
            
        },

        {
            id:8,
            name:"cnpf",
            type:"number",
            errorMessage:"CNPJ invalido",
            placeholder:"000.000.000-00",
            label:"CNPJ"
            // required: true,
            
        },

        {
            id:9,
            name:"telefone",
            type:"tel",
            errorMessage:"",
            placeholder:"(DDD) + Número",
            label:"Telefone"
            // required: true,
            
        },

        {
            id:10,
            name:"telefone",
            type:"tel",
            errorMessage:"",
            placeholder:"(DDD) + Número",
            label:"Telefone"
            // required: true,
            
        }
    ]
   

    const handleSubmit = (e) => {
        e.preventDefault();
        
    };

    const onChange = (e)=> {
        setValues({...values, [e.target.name]: e.target.value })
    };

    console.log(values);

    return (
      <div className="WorkerForm">
        <form onSubmit={handleSubmit}>
            {inputs.map((inputs) => (
                <FormInput key={input.id} {...inputs} value={values [input.name]}
                onChange={onChange}
                />
            ))}
            
            <button>Enviar</button>
        </form>
      </div>
    );
};

export default WorkerForm;