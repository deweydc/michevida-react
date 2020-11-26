import React, { Component } from 'react';
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';

export default class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar sticky="top" className='bg-white my-style'>
                    <div className="container">
                        <h1 className="my-font" href="/">MicheVida</h1>
                        <div className="navbar navbar-expand-lg justify-content-end" id="menu">
                            <ul className="navbar-nav">
                                <li className="nav-item nav-item-animation active">
                                    <a href="#" className="nav-link">Home</a>
                                </li>
                                <li className="nav-item nav-item-animation">
                                    <a href="about.html" className="nav-link">About</a>
                                </li>
                                <li className="nav-item nav-item-animation">
                                    <a href="#contactUsModal" id="contactUsButton" className="nav-link" role="button">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Navbar>
                <Jumbotron fluid>
                    <div className="container-fluid d-flex">
                        <div className="row">
                            <div className="col-sm-5 hero-body">
                                <p className="hero-text">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident cumque vitae illo veniam error. Praesentium.
                                </p>
                                <button className="btn hero-btn">View All</button>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </React.Fragment>
        );
    }
}