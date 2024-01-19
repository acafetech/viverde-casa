function Label({ id, label }){
    return (
        <label htmlFor={id}>
            <h3 className="pergunta-label">
            {label} 
            </h3>
        </label>
    );
}

export default Label;