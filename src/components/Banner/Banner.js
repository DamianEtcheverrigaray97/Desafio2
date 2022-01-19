
import React from "react";
import './../Banner/Banner.css';

function Banner() {
    return(
        <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
            <img src="../../img/asus-rog-6900xt-1920.jpg" class="d-block w-100" alt="asdasd"/>
            </div>
            <div class="carousel-item">
            <img src="../../img/asus-rog-6900xt-1920.jpg" class="d-block w-100" alt="asdasd"/>
            </div>
            <div class="carousel-item">
            <img src="../../img/asus-rog-6900xt-1920.jpg" class="d-block w-100" alt="aaa"/>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
        </div>
    );
}

export default Banner;