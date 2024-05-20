import "./styles.css";
import Home from "../../pages/Home"

function HeaderForm() {
    return (
        
    <header>
        <div className="Seta">

        <a href="src\pages\Home"><img src="src\assets\Seta.png" class="Seta-Voltar-Home"/></a>
        </div>
        
        <img className="logo" src="src\assets\LogoNavbar.png" alt="logo da Viverde Casa" />
    </header>

    
    )
}

export default HeaderForm;