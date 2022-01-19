import React from "react";
import banner1 from './../img/banner1.jpg';
import banner2 from './../img/banner2.jpg';
import banner3 from './../img/banner3.jpg';
import banner4 from './../img/banner4.jpg';
import banner5 from './../img/banner5.jpg';
import banner6 from './../img/banner6.jpg';
import banner7 from './../img/banner7.jpg';
import banner8 from './../img/banner8.jpg';

function Banner() {
    return(
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
            <div class="carousel-item">
                <img class="d-block w-100" src={banner1} alt="Primera slide"></img>
            </div>
            <div class="carousel-item active">
                <img class="d-block w-100" src={banner2} alt="Segunda slide"></img>
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" src={banner3} alt="Tercera slide"></img>
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" src={banner4} alt="Cuarta slide"></img>
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" src={banner5} alt="Quinta slide"></img>
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" src={banner6} alt="Sexta slide"></img>
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" src={banner7} alt="Septima slide"></img>
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" src={banner8} alt="Octaba slide"></img>
            </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
            </a>
        </div>
    )
}

export default Banner;