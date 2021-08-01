import React from "react";

function Main() {
    return (
        <>
            <main>
                <div className="container my-5" id={"about_princigration"}>
                    <section className="text-center">
                        <h3 className="mb-5 green-font">About Princigration</h3>
                        <p className="text-center mb-5 mx-auto w-responsive green-font">
                            We believe that Principles are important. They have to be measurable and visible.
                            We build them into your business systems.
                            We provide systems architecture, design, implementation, integration, testing and maintenance solutions.
                            Our process focuses on your core Principles.
                            They are first class citizens in the software implementation allowing for measuring, tracking and improving the reasons you are in business in the first place.
                        </p>
                        <div className="row">
                            <div className="col-md-4 mb-4 mb-md-0">
                                <div className="card hover-shadow-light">
                                    <div className="card-body">
                                        <i className="fas fa-database fa-3x mt-3 text-dark"></i>
                                        <h5 className="card-title my-4 green-font">Data-Centric</h5>
                                        <p className="card-text mb-3 green-font">
                                            Beyond Data-Driven, we are Data Centric
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-4 mb-md-0">
                                <div className="card hover-shadow-light" style={{ backgroundColor: "#82f77e" }}>
                                    <div className="card-body">
                                        <i className="fas fa-code-branch fa-3x mt-3 text-dark"></i>
                                        <h5 className="card-title my-4 text-dark">Implementation Specialists</h5>
                                        <p className="card-text mb-3">
                                            Our consultants are experts, with ground up development and integration experience.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-0">
                                <div className="card hover-shadow-light">
                                    <div className="card-body">
                                        <i className="fas fa-list-ol fa-3x mt-3 text-dark"></i>
                                        <h5 className="card-title my-4 green-font">Test Driven</h5>
                                        <p className="card-text mb-3 green-font">
                                            After defining the data, scenarios and use cases feed tests.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
}

export default Main;