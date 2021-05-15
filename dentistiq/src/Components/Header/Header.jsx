import { NavLink, Link } from "react-router-dom";
import { Logo } from "../Logo/Logo";
import "./Header.css";


export function Header(){
    return(
        <div className="header-menu">
            <div className="header-logo">
                <Logo >
                <Link to="/"/>
                </Logo>
            </div>
            <div className="header-buttons">
                <NavLink to="/" activeClassName="selected-link" exact>Acasa</NavLink>
                <NavLink to="/services" activeClassName="selected-link" exact>Servicii</NavLink>
                <NavLink to="/about" activeClassName="selected-link" exact>Despre noi</NavLink>
                <NavLink to="/gallery" activeClassName="selected-link" exact>Galerie Foto</NavLink>
                <NavLink to="/team" activeClassName="selected-link" exact>Echipa</NavLink>
                <NavLink to="/contact" activeClassName="selected-link" exact>Contact</NavLink>
            </div>
        </div>
    );
}