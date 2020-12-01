import React from 'react';
import { Carousel } from 'reactstrap';
import img1 from '../img/Img/kal-visuals--3Le1lY8yTg-unsplash.jpg';
import img2 from '../img/Img/kats-weil-CLD1i8hp008-unsplash.jpg';
import img3 from '../img/Img/elevate-vofmJUVScDE-unsplash.jpg';



export default function CarouselSlide(props) {


    return (
        <Carousel className="carousel-fluid">
            <Carousel.Item className='min-vh-100 active'>
                <img class="d-block w-100" src={img1} alt="First"></img>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={img2} alt="Second"></img>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={img3} alt=""></img>
            </Carousel.Item>
        </Carousel>
    );
}