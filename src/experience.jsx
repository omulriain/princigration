import React from "react";

function Experience(){
    return (
        <>


            <hr className="my-5"/>


            <section>


                <div className="row">
                    <div className="col-lg-6 mb-4 mb-lg-0 pb-2 pb-lg-0 pb-xl-2">
                        <h5 className="text-uppercase mb-5">My experience</h5>
                        <figure className="border-left border-primary ps-3 py-2 mb-4">
                            <blockquote className="blockquote">
                                <h5 className="pb-3">
                                    <i className="fas fa-briefcase me-3" aria-hidden="true"></i>Senior developer
                                </h5>
                            </blockquote>
                            <figcaption className="blockquote-footer mb-0">
                                <p className="font-weight-bold text-body mb-2">July, 2013 - Present (4
                                    years)</p>
                                <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </figcaption>
                        </figure>
                        <figure className="border-left border-primary ps-3 py-2 mb-4">
                            <blockquote className="blockquote">
                                <h5 className="pb-3">
                                    <i className="fas fa-briefcase me-3" aria-hidden="true"></i>JavaScript
                                    developer
                                </h5>
                            </blockquote>
                            <figcaption className="blockquote-footer mb-0">
                                <p className="font-weight-bold text-body mb-2">
                                    March 2011 - June 2012 (1 year, 3 Month)
                                </p>
                                <p className="mb-0">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum quas, eos
                                    officia maiores ipsam ipsum dolores.
                                </p>
                            </figcaption>
                        </figure>
                        <figure className="border-left border-primary ps-3 py-2">
                            <blockquote className="blockquote">
                                <h5 className="pb-3">
                                    <i className="fas fa-briefcase me-3" aria-hidden="true"></i>Web developer
                                </h5>
                            </blockquote>
                            <figcaption className="blockquote-footer mb-0">
                                <p className="font-weight-bold text-body mb-2">
                                    March 2005 - May 2011 (6 years, 2 Month)
                                </p>
                                <p className="mb-0">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit integer posuere.
                                </p>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="col-lg-6 text-uppercase">
                        <h5 className="text-uppercase mb-5">Development Skills</h5>
                        <p className="font-weight-bold mb-2">JavaScript</p>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar"
                                 style={{backgroundColor: "#facc62", width: "90%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <p className="font-weight-bold pt-4 mt-3 mb-2">Css3</p>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar"
                                 style={{backgroundColor: "#facc62", width: "65%"}}
                                 aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <p className="font-weight-bold pt-4 mt-3 mb-2">HTML5</p>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar"
                                 style={{backgroundColor: "#facc62", width: "75%"}}
                                 aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <p className="font-weight-bold pt-4 mt-3 mb-2">Bootstrap</p>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar"
                                 style={{backgroundColor: "#facc62", width: "45%" }}
                                 aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <p className="font-weight-bold pt-4 mt-3 mb-2">PHP</p>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar"
                                 style={{backgroundColor: "#facc62", width: "53%"}}
                                 aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Experience;