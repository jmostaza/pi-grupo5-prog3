import "../Header/Header.css"
import { Link } from "react-router-dom"

const Header = () => {

    return (
        <div className="header">
            <Link to="/"> <img src="./img/logo.png" alt="Logo" className="logo" /> </Link>
            <nav>
                <ul className="main-nav">
                    <li><Link className="linkClass" to="/"> Home </Link></li>
                    <li><Link className="linkClass" to="/favorite"> Favoritos </Link></li>
                    <li><Link className="linkClass" to="/populares"> Populares </Link></li>
                    <li><Link className="linkClass" to="/cartelera"> Cartelera </Link></li>
                </ul>
            </nav>
        </div>

    )
}

export default Header

