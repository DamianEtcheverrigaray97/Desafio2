import React from "react";
import { Carousel } from "react-bootstrap";

function Banner() {
    return(
        <Carousel fade>
            <Carousel.Item interval={2500}>
                <img
                className="d-block w-100"
                src="https://i.imgur.com/veI8d5E.jpeg"
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={2500}>
                <img
                className="d-block w-100"
                src="https://i.imgur.com/xc4Fh8P.jpeg"
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={2500}>
                <img
                className="d-block w-100"
                src="https://i.imgur.com/EnCaKpj.jpeg"
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={2500}>
                <img
                className="d-block w-100"
                src="https://i.imgur.com/hhZpzMt.jpeg"
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={2500}>
                <img
                className="d-block w-100"
                src="https://i.imgur.com/MeV09OO.jpeg"
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={2500}>
                <img
                className="d-block w-100"
                src="https://i.imgur.com/QIrNzRb.jpeg"
                alt="Third slide"
                />
            </Carousel.Item>
            </Carousel>
    )
}

export default Banner;