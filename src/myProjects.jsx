import React from "react";

function MyProjects() {
    return (
        <>
            <hr className="my-5" />
            <section id="projects">
                <h3 className="text-center mb-5 green-font">Recent Projects</h3>
                <p className="text-center mb-5 mx-auto w-responsive green-font">
                    Princigration has a coveted collection of top-tier projects implementing our Principles, while achieving real world success.
                </p>
                <div className="row basic-padding text-center">
                    <div className="col-md-4 mb-4 mb-md-0">
                        <div className="card hover-shadow-light">
                            <div className="card-body">
                                <h5 className="card-title my-4 text-dark">Data Governance</h5>
                                <p className="card-text mb-3 green-font">
                                    Created Data Governance Plan for medium sized internet company. Defined MasterData and Metadata repository and Defined the path to Data-Centricity.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4 mb-md-0">
                        <div className="card hover-shadow-light">
                            <div className="card-body">
                                <h5 className="card-title my-4 text-dark">GranburyFresh.org</h5>
                                <p className="card-text mb-3 green-font">
                                    Setup easy to follow instructions to aid citizens in submitting their concerns to TCEQ. Created Website on Wordpress and trained admin. on how to administrate the site.
                                    The project resulted in over 500 concerns being submitted 20 times more than they have ever received.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-0">
                        <div className="card hover-shadow-light">
                            <div className="card-body">
                                <h5 className="card-title my-4 text-dark">Data-Centric Data Flow</h5>
                                <p className="card-text mb-3 green-font">
                                    Working on Amazon Cloud solution utilizing Airflow, Kafka, Python and Spark to scrape data from the internet and aggregate bias metrics. Utilizing Fluree as the data store.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default MyProjects;