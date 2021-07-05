import React from "react";

function Header() {
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-green">
                    <div className="container">
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <a class="navbar-brand mt-2 mt-lg-0" href="#intro">
                                <img
                                    src="princigration logo emerald green Vfinal2 no back.png"
                                    height="50"
                                    alt="company logo"
                                    loading="lazy"
                                />
                            </a>
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
                                <li className="nav-item">
                                    <a className="nav-link" href="#people">People</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <section>
                    <div id="intro" className="text-center bg-image vh-100"
                        style={{ backgroundImage: 'url(IMG_2440.jpg)' }}>
                        <div className="mask" style={{ backgroundColor: "rgba(230, 255, 230, 0.65)" }}>
                            <div className="d-flex justify-content-center align-items-center h-100 mt-4">
                                <div className="">
                                    <h1 className="display-2 mb-4 green-font fw-bold"><strong>Princigration</strong></h1>
                                    <h5 className="text-uppercase mb-5">
                                        <mark style={{ backgroundColor: "rgb(115,248,67)" }}>Principle &#8747; Integration
                                        </mark>
                                    </h5>
                                    <a href="/#about_princigration" className="btn btn-floating btn-lg btn-dark"> <i
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