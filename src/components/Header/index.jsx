//componente de header/area de contrate/trabalhe
import Button from "../../components/Button";
import "./styles.css";

function Header() {
    return (
        <header className="header-container">
            <div className="logo-container">
               <img src="src/assets/viverde-logo.svg" />
            </div>

            <nav className="nav-options">
                <a>Como funciona</a>
                <a>Serviços</a>
            </nav>

            <div className="nav-buttons">
                <Button link="/form" title="Encontre um profissional" type="find-pro"/>
                <Button link="/form" title="Ofereça seus serviços" type="offer-serv"/>
            </div>
        </header>
    )
}

export default Header;