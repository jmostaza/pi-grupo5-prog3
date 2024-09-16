import "../Header/Header.css"
import { Link } from "react-router-dom"

const Header = () => {

    return (
        <div className="header">
            <img src="./img/logo.png" alt="Logo" className="logo" />
            <nav>
                <ul className="main-nav">
                    <li><Link className="linkClass" to="/"> Home </Link></li>
                    <li> Home </li>

        
                </ul>
            </nav>

        </div>

    )
}

export default Header
