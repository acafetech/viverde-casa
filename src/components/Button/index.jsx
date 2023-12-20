//componente de botões
import "./styles.css";

//as props podem ser muito uteis para estilizar. por exemplo, temos como passar uma propriedade do tipo 'type' para o componente e usar isso como o className que estilizamos no css
function Button({ link, title, type }) {
  return (
    <a href={link}>
      <p className={type}>{title}</p>
    </a>
  );
}

export default Button;
