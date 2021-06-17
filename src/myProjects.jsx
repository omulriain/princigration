import React from "react";

function MyProjects(){
    return (
        <>
        <hr className="my-5"/>
            <section id="projects">
                <h3 className="text-center mb-5 green-font">Our Projects</h3>

                <p className="text-center mb-5 mx-auto w-responsive green-font">
                    Princigration has a coveted collection of top-tier projects implementing our Principles, while achieving real world success.
                </p>

                <div className="lightbox basic-padding">
                    <div className="row">
                        <div className="col-md-4 mb-4">
                            <img src="Screenshot-153207.png"
                                 data-mdb-img="Screenshot-153207png"
                                 alt="Lightbox image 1"
                                 className="w-100 shadow-1-strong rounded"/>
                        </div>
                        <div className="col-md-4 mb-4">
                            <img src="Screenshot-152001.png"
                                 data-mdb-img="Screenshot-152001.png"
                                 alt="Lightbox image 2"
                                 className="w-100 shadow-1-strong rounded"/>
                        </div>
                        <div className="col-md-4 mb-4">
                            <img src="Screenshot-153504.png"
                                 data-mdb-img="Screenshot-153504.png"
                                 alt="Lightbox image 3"
                                 className="w-100 shadow-1-strong rounded"/>
                        </div>
                    </div>
                </div>
            </section>


        </>
    );
}

export default MyProjects;