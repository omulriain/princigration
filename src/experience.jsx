import React from "react";

// component
function Experience() {
    // render component
    return (
        <>
            {/* experience list with progress bars */}
            <hr className="my-5" id="experience"/>
            <section>
                <h3 className="mb-5 text-center font-weight-bold green-font text-shadow2">Experience</h3>
                <div className="row px-5 text-center">
                    <div className="col-md-4 mb-4 mb-md-0 basic-padding-top">
                        <h5 className="text-uppercase mb-5 green-font">Data</h5>
                        <p className="font-weight-bold pt-4 mt-3 mb-2">SQL</p>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar"
                                style={{ backgroundColor: "#73F843", width: "98%" }}
                                aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <p className="font-weight-bold pt-4 mt-3 mb-2">Python and Spark Data</p>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar"
                                style={{ backgroundColor: "#73F843", width: "100%" }}
                                aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <p className="font-weight-bold pt-4 mt-3 mb-2">Relational and NOSQL</p>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar"
                                style={{ backgroundColor: "#73F843", width: "95%" }}
                                aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <p className="font-weight-bold pt-4 mt-3 mb-2">Data Governance</p>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar"
                                style={{ backgroundColor: "#73F843", width: "97%" }}
                                aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <p className="font-weight-bold pt-4 mt-3 mb-2">Meta-data Management</p>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar"
                                style={{ backgroundColor: "#73F843", width: "100%" }}
                                aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4 mb-md-0 basic-padding-top">
                        <h5 className="text-uppercase mb-5 green-font">Front End</h5>
                        <p className="font-weight-bold pt-4 mt-3 mb-2">C#</p>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar"
                                style={{ backgroundColor: "#73F843", width: "90%" }}
                                aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <p className="font-weight-bold pt-4 mt-3 mb-2">React</p>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar"
                                style={{ backgroundColor: "#73F843", width: "95%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <p className="font-weight-bold pt-4 mt-3 mb-2">Material Design</p>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar"
                                style={{ backgroundColor: "#73F843", width: "83%" }}
                                aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <p className="font-weight-bold pt-4 mt-3 mb-2">HTML5</p>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar"
                                style={{ backgroundColor: "#73F843", width: "89%" }}
                                aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <p className="font-weight-bold pt-4 mt-3 mb-2">Bootstrap</p>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar"
                                style={{ backgroundColor: "#73F843", width: "83%" }}
                                aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-0 basic-padding-top">
                        <h5 className="text-uppercase mb-5 green-font">Cloud</h5>
                        <p className="font-weight-bold pt-4 mt-3 mb-2">Amazon Web Services</p>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar"
                                style={{ backgroundColor: "#73F843", width: "88%" }}
                                aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>

                        </div>
                        <p className="font-weight-bold pt-4 mt-3 mb-2">Google Cloud Platform</p>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar"
                                style={{ backgroundColor: "#73F843", width: "92%" }}
                                aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <p className="font-weight-bold pt-4 mt-3 mb-2">Container Management</p>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar"
                                style={{ backgroundColor: "#73F843", width: "90%" }}
                                aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <p className="font-weight-bold pt-4 mt-3 mb-2">Kubernetes</p>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar"
                                style={{ backgroundColor: "#73F843", width: "95%" }}
                                aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <p className="font-weight-bold pt-4 mt-3 mb-2">Continuous Integration and Delivery</p>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar"
                                style={{ backgroundColor: "#73F843", width: "93%" }}
                                aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Experience;