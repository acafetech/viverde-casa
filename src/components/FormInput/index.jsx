import "./styles.css";

function FormInput({ id, label, examples, type, name }) {
    <div>
        <label for={ id }>
        <h3 className="pergunta-label"> { label }</h3>
        </label>
        <p className="caracteres"> { examples }</p>
        <input type= { type } name= { name } id= { id }> </input>
    </div>
}

export default FormInput;