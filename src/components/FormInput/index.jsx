import "./styles.css";

const FormInput = (props) => {
    const {label, errorMessage, onChange, id, ...inputProps} = props; 
    return (

        <form>
            <label> {label} </label>
            <input  {...inputProps} onChange={onChange} />
            <span>{errorMessage}</span>
        </form>

    );
};

export default FormInput