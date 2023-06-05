import imgLogo from "../assets/Logo.png"
import { Link } from "react-router-dom"
import "./Header.css"

const Header = (props) =>{
    return <section className="C_Header"><header className="header">
        <Link to="/"><img src={imgLogo} alt="Logo"/></Link>
        {props.extra}
    </header></section>
}

export default Header;