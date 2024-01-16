
import "./styles.css";

export const WorkForms = (props) => {

    return (
        <div>
                <form className="formInputs">
                    
                    <input type={props.type} name={props.name} placeholder={props.placeholder} id={props.id} />
                </form>
        </div>

    )
}
export default WorkForms; 