//componente de header/area de contrate/trabalhe
import Button from "../../components/Button";
import { useState } from 'react';
import "./styles.css";

function Header() {

    const [ showMenu, setShowMenu ] = useState(false)
    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }

    return (
        <header className="header-container">
            <div className="logo-container">
                <img src="src/assets/viverde-logo.svg" />
            </div>

            <nav 
            className={`nav-options ${showMenu ? 'show' : ''}`}
            onClick={toggleMenu}
            >       
                <div className="nav-texts">
                    <a href="" className="nav-text hover">Como funciona</a>
                    <a href="" className="nav-text hover">Serviços</a>
                </div>

                <div className="nav-button">
                    <a href="" className="find-pro">Encontre um profissional</a>
                    <a href="" className="offer-serv">Ofereça seus serviços</a>
                </div>
            </nav>

            <div 
            className="menuButton"
            onClick={toggleMenu}
            >
                <span className="linha"></span>
                <span className="linha"></span>
                <span className="linha"></span>
            </div>
            
        </header>
    )
}

export default Header;