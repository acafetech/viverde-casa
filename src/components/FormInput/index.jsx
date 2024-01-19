import "./styles.css";

function FormInput({ id, label, examples, type, name }) {
    <div>
        <label for={ id }>
        <h3 class="pergunta-label"> { label }</h3>
        </label>
        <p class="caracteres"> { examples }</p>
        <input type= { type } name= { name } id= { id }> </input>
    </div>
}

export default FormInput;