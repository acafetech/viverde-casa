
function LabelType({ id, label }){

    return (
        <label htmlFor={id} className="escolha-horario sim-nao">
            {label} 
        </label>
    );
}

export default LabelType;