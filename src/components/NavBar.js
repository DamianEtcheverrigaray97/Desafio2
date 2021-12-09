import React from "react";
import './../components/NavBar.css';
import CartWidget from './../components/CartWidget';
import ItemListContainer from "./ItemListContainer";

function Navbar() {
    return(
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark navbarPrincipal">
            <div class="container-fluid">
                <a class="navbar-brand title_nav" href="#"> <ItemListContainer /> </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Categorias
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a class="dropdown-item" href="#">COMPONENTES</a></li>
                                <li><a class="dropdown-item" href="#">COMPUTADORAS</a></li>
                                <li><a class="dropdown-item" href="#">ELECTRONICA</a></li>
                                <li><a class="dropdown-item" href="#">GAMERS</a></li>
                                <li><a class="dropdown-item" href="#">OFICINA/HOGAR</a></li>
                                <li><a class="dropdown-item" href="#">OPORTUNIDADES</a></li>
                                <li><a class="dropdown-item" href="#">REDES/ADAPTADORES</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Nosotros</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Cambios y garantias</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Centro de ayuda</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Contacto</a>
                        </li>
                    </ul>
                    <span class="navbar-text">
                        <CartWidget />
                    </span>
                </div>
            </div>
        </nav>
    ) 
}

export default Navbar;