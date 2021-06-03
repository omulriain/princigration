import React from "react";

function CreativeProcess(){
    return (
        <>
            <hr className="my-5"/>


            <section>


                <h3 className="text-center mb-5">Process of creating</h3>

                <p className="text-center mb-5 mx-auto w-responsive">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum quas, eos officia
                    maiores ipsam ipsum dolores reiciendis ad voluptas, animi obcaecati adipisci sapiente
                    mollitia? Autem delectus quod accusamus tempora, aperiam minima assumenda deleniti.
                </p>

                <div className="row">
                    <div className="col-12">

                        <ul className="nav nav-pills nav-justified mb-3 mx-n2 mt-n2" id="issuesTabs"
                            role="tablist">
                            <li className="nav-item" role="presentation">
                                <a className="nav-link active" id="construction-tab" data-mdb-toggle="pill"
                                   href="#construction" role="tab"
                                   aria-controls="construction" aria-selected="true">01. Research</a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="nav-link" id="painting-tab" data-mdb-toggle="pill"
                                   href="#painting" role="tab"
                                   aria-controls="painting" aria-selected="false">02. Design</a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="nav-link" id="architecture-tab" data-mdb-toggle="pill"
                                   href="#architecture" role="tab"
                                   aria-controls="architecture" aria-selected="false">03. Development</a>
                            </li>
                        </ul>

                        <div className="tab-content pt-3" id="servicesContent">
                            <div className="tab-pane fade show active" id="construction" role="tabpanel"
                                 aria-labelledby="construction-tab">
                                <div className="card">
                                    <div className="card-body d-flex p-5">
                                        <i className="fas fa-search fa-3x pe-4 pe-md-5" aria-hidden="true"></i>
                                        <p className="mb-0">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit
                                            magnam
                                            minima, soluta doloribus reiciendis molestiae placeat unde eos
                                            molestias.
                                            Quisquam aperiam, pariatur. Tempora, placeat ratione porro voluptate
                                            odit
                                            minima.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="painting" role="tabpanel"
                                 aria-labelledby="painting-tab">
                                <div className="card">
                                    <div className="card-body d-flex p-5">
                                        <i className="fas fa-pencil-alt fa-3x pe-4 pe-md-5"
                                           aria-hidden="true"></i>
                                        <p className="mb-0">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit
                                            magnam
                                            minima, soluta doloribus reiciendis molestiae placeat unde eos
                                            molestias.
                                            Quisquam aperiam, pariatur. Tempora, placeat ratione porro voluptate
                                            odit
                                            minima. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="architecture" role="tabpanel"
                                 aria-labelledby="architecture-tab">
                                <div className="card">
                                    <div className="card-body d-flex p-5">
                                        <i className="fas fa-code fa-3x pe-4 pe-md-5" aria-hidden="true"></i>
                                        <p className="mb-0">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit
                                            magnam
                                            minima, soluta doloribus reiciendis molestiae placeat unde eos
                                            molestias.
                                            Quisquam aperiam, pariatur. Tempora, placeat ratione porro voluptate
                                            odit
                                            minima. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </>
    );
}
export default CreativeProcess;