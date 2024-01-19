function LabelType({ id, label, classe }){
    return (
        <label htmlFor={id} className="escolha-horario sim-nao">
            {label} 
        </label>
    );
}

export default LabelType;