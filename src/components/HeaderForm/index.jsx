import "./styles.css";
import { NavLink } from "react-router-dom";
import Home from "../../pages/Home"

function HeaderForm() {
    return (      
    <header>
        
            <NavLink to="/">
                <a href={Home}> 
                    <img src="src\assets\Seta.png" alt="" /> 
                </a>
            </NavLink>
            
            <NavLink className="logoNav" to="/">
                <a href={Home}>
                    <img className="logo" src="src\assets\LogoNavbar.png" alt="" />
                </a>
            </NavLink>
            

    </header>

    )
}

export default HeaderForm;