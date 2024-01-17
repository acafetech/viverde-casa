import "./styles.css";

function Label ({id, label}) {
    return(
        <label htmlFor={id} >{label}</label>
    );
};
export default Label