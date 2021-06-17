import React from "react";
import {
    MDBNavbar,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBContainer,
    MDBIcon,
    MDBNavbarToggler} from 'mdb-react-ui-kit';
import * as https from "https";


function Header() {
    return (
        <>
            <header>

                <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-green navbar-scroll">
                    <div className="container">

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#intro">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#about_princigration">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#experience">Experience</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#projects">Projects</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#contact">Contact</a>
                                </li>
                            </ul>

                        </div>
                    </div>
                </nav>

                <section>

                    <div id="intro" className="text-center bg-image vh-100"
                         style={{backgroundImage: 'url(IMG_2441.jpg)'}}>
                        <div className="mask" style={{backgroundColor: "rgba(255, 255, 255, 0.65)"}}>
                            <div className="d-flex justify-content-center align-items-center h-100 mt-4">
                                <div className="">
                                    <h1 className="display-2 mb-4 green-font"><strong>Princigration</strong></h1>
                                    <h5 className="text-uppercase mb-5">
                                        <mark style={{backgroundColor: "rgb(115,248,67)"}}>Principle &#8747; Integration
                                        </mark>
                                    </h5>
                                    <a href="/about#about_princigration" className="btn btn-floating btn-lg btn-dark"><i
                                        className="fas fa-angle-down"
                                        aria-hidden="true"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>

            </header>




        </>
    );
}

export default Header;