import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MDBCollapse } from 'mdb-react-ui-kit';

function Header() {

    const [showShow, setShowShow] = useState(true);
    const toggleShow = () => setShowShow(!showShow);

    return (
        <>
            <header>
                <MDBCollapse show={showShow}>
                    <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-green">
                        <div className="container">
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <a class="navbar-brand mt-2 mt-lg-0" href="#home">
                                    <img
                                        class="png-shadow"
                                        src="princigration logo emerald green Vfinal2 no back.png"
                                        width="122"
                                        height="75"
                                        alt="company logo"
                                    />
                                </a>
                                <ul className="navbar-nav me-auto text-shadow">
                                    <li className="nav-item">
                                        <a className="nav-link active" href="#home">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active" href="#about">About</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active" href="#experience">Experience</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active" href="#projects">Projects</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active" href="#contact">Contact</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active" href="#people">People</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <Link to="/adminHome"><button type="button" class="btn btn-success btn-lg mx-3 text-shadow">Admin</button></Link>
                        <i class="fas fa-toggle-on px-5 fa-3x hide-toggle-nav" onClick={toggleShow}></i>
                    </nav>
                </MDBCollapse>
                <MDBCollapse show={!showShow}>
                    <i class="fas fa-toggle-off px-5 pt-2 fa-3x fixed-top" onClick={toggleShow}></i>
                </MDBCollapse>
                <section>
                    <div id="home" className="text-center bg-image vh-100"
                        style={{ backgroundImage: 'url(background_photo.webp)',
                        height: "1100px" }}>
                        <div className="mask" style={{ backgroundColor: "rgba(230, 255, 230, 0.65)" }}>
                            <div className="d-flex justify-content-center align-items-center h-100 mt-4">
                                <div className="">
                                    <h1 className="display-2 mb-4 fw-bold green-font text-shadow"><strong>Princigration</strong></h1>
                                    <h5 className="text-uppercase mb-5">
                                        <mark style={{ backgroundColor: "rgb(115,248,67)" }}>Principle &#8747; Integration
                                        </mark>
                                    </h5>
                                    <a href="/#about" className="btn btn-floating btn-lg btn-dark"> <i
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