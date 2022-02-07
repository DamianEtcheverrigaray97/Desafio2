import React from "react";
import './../components/NavBar.css';
import CartWidget from './../components/CartWidget';
import logo_header from './../img/logo_header.png';
import {NavLink} from "react-router-dom"

function Navbar() {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark navbarPrincipal">
            <div className="container-fluid">
                <a className="navbar-brand title_nav" href="#"> 
                <NavLink to="/">
                    <img class="logo_header" src={logo_header}></img>
                </NavLink>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">
                            <NavLink to="/category/Computadoras">
                                COMPUTADORAS DE ESCRITORIO
                            </NavLink>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">
                            <NavLink to="/category/Almacenamiento">
                                ALMACENAMIENTO
                            </NavLink>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">
                            <NavLink to="/category/Gabinetes">
                                GABINETES
                            </NavLink>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">
                            <NavLink to="/category/Procesadores">
                                PROCESADORES
                            </NavLink>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">
                            <NavLink to="/category/videoCards">
                                TARJETAS GRAFICAS
                            </NavLink>
                            </a>
                        </li>
                    </ul>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="information_navbar">
                                <a className="nav-link active" aria-current="page" href="#">
                                <NavLink to="/we">
                                    NOSOTROS
                                </NavLink>
                                </a>
                                <a className="nav-link active" aria-current="page" href="#">
                                <NavLink to="/warranty">
                                    CAMBIOS Y GARANTIAS
                                </NavLink>
                                </a>
                        </li>
                    </ul>
                    <span className="navbar-text">
                        <CartWidget />
                    </span>
                </div>
            </div>
        </nav>
    ) 
}

export default Navbar;