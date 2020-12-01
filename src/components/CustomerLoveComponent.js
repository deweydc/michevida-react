import React from 'react';
import img1 from '../img/Img/kal-visuals--3Le1lY8yTg-unsplash.jpg';
import img2 from '../img/Img/kats-weil-CLD1i8hp008-unsplash.jpg';
import img3 from '../img/Img/elevate-vofmJUVScDE-unsplash.jpg';
import CarouselSlide from './CarouselComponent';


export default function CustomerLove(props) {

    return (
        <div className="container">
            <div className="customer-love" id="customer-love">
                <div className="customer-love-bg">
                    <h3 className="">Customer Love</h3>
                </div>
            </div>

            <div class="row row-content">
                <div class="col-xs-12 mx-auto">
                    <div id="customerLoveCarousel" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#customerLoveCarousel" data-slide-to="0" class="active"></li>
                            <li data-target="#customerLoveCarousel" data-slide-to="1"></li>
                            <li data-target="#customerLoveCarousel" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item min-vh-100 active">
                                <img class="d-block w-100" src={img1} alt="First"></img>
                            </div>
                            <div className="carousel-item min-vh-100">
                                <img className="d-block w-100" src={img2} alt="Second"></img>
                            </div>
                            <div className="carousel-item min-vh-100">
                                <img className="d-block w-100" src={img3} alt=""></img>
                            </div>
                        </div>
                        <a href="#customerLoveCarousel" className="carousel-control-prev" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a href="#customerLoveCarousel" className="carousel-control-next" role="button" data-slide="next">
                            <span className="carousel-control-next-icon"></span>
                            <span className="sr-only">Next</span>
                        </a>
                        <button className="btn btn-danger btn-sm" id="carouselButton">
                            <i className="fa fa-pause"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}