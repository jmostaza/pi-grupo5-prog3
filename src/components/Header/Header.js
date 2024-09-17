import "../Header/Header.css"
import { Link } from "react-router-dom"
import HomeForm from "../HomeForm/HomeForm"

const Header = () => {

    return (
        <div className="header">
            <img src="./img/logo.png" alt="Logo" className="logo" />
            <HomeForm/>
            <nav>
                <ul className="main-nav">
                    <li><Link className="linkClass" to="/"> Home </Link></li>
                    <li><Link className="linkClass" to="/favoritos"> Favoritos </Link></li>
                    <li><Link className="linkClass" to="/populares"> Populares </Link></li>
                    <li><Link className="linkClass" to="/cartelera"> Cartelera </Link></li>
                </ul>
            </nav>
        </div>

    )
}

export default Header

