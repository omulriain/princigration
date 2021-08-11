import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import { MDBCollapse, MDBBtn, MDBChart } from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";
import { AmplifySignOut, withAuthenticator } from "@aws-amplify/ui-react";

function AdminSEO() {

    const [showShow, setShowShow] = useState(false);
    const toggleShow = () => setShowShow(!showShow);

    return (
        <>

            <header>
                <div className="toggle-nav-box fixed-top"><MDBBtn className="pos-nav-toggle-2" onClick={toggleShow}><h6 className="text-dark">Open Nav</h6></MDBBtn></div>
                <div className="signout-button fixed-top"><AmplifySignOut /></div>
                <MDBCollapse show={showShow}>
                    <section className="sidenav-width-border bg-blue fixed-top">
                        <img
                            className="admin-logo"
                            src="princigration logo sapphire blue Vfinal2 no back.png"
                            width="100"
                            height="61"
                            alt="company logo"
                        />
                        <h4 className="text-dark fw-bold">Admin Dashboard</h4>
                        <MDBBtn className="pos-nav-toggle text-dark" onClick={toggleShow}><h6>Close Nav</h6></MDBBtn>
                        <Link to="">
                            <MDBBtn className="text-dark public-button" color="warning">
                                Return to Public Site
                            </MDBBtn>
                        </Link>
                        <Nav className="flex-column" variant="tabs" activeKey="3">
                            <Nav.Item>
                                <Nav.Link eventKey="1">
                                    <Link to="/adminHome"><h6 className="text-dark">Home</h6></Link>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="2">
                                    <Link to="/adminTraffic">
                                        <h6 className="text-dark">Traffic</h6>
                                    </Link>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="3">
                                    <Link to="/adminSEO"><h6 className="text-dark">SEO</h6></Link>
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </section>
                </MDBCollapse>
            </header>
            <div class="container" style={{ marginTop: "58px" }}>
                <h1 class="h3 text-center py-5 mb-0 font-weight-bold">SEO Dashboard</h1>
                <section>
                    <div class="row d-flex justify-content-center">
                    <div class="col-lg-6 mb-4 mb-lg-0">
                        <div class="row">
                            <div class="col-lg-6 mb-4">
                                <div class="card text-center">
                                    <div class="card-header bg-light border-0">
                                        <strong>Indexed Pages on Google</strong>
                                    </div>
                                    <div class="card-body">
                                        <p class="mb-2">Unique pages</p>
                                        <h5>34</h5>
                                        <hr />
                                        <div class="d-flex justify-content-between">
                                            <div>
                                                <p class="mb-2"><small>Percentage change</small></p>
                                                <p class="mb-2 text-success">
                                                    <i class="fas fa-caret-up me-1"></i><span>3.0%</span>
                                                </p>
                                            </div>
                                            <div>
                                                <p class="mb-2"><small>Absolute change</small></p>
                                                <p class="mb-2 text-success">
                                                    <i class="fas fa-caret-up me-1"></i><span>1</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 mb-4">
                                <div class="card text-center">
                                    <div class="card-header bg-light border-0">
                                        <strong>Indexed Queries on Google</strong>
                                    </div>
                                    <div class="card-body">
                                        <p class="mb-2">Unique Keywords</p>
                                        <h5>860</h5>
                                        <hr />
                                        <div class="d-flex justify-content-between">
                                            <div>
                                                <p class="mb-2"><small>Percentage change</small></p>
                                                <p class="mb-2 text-danger">
                                                    <i class="fas fa-caret-down me-1"></i><span>-12.7%</span>
                                                </p>
                                            </div>
                                            <div>
                                                <p class="mb-2"><small>Absolute change</small></p>
                                                <p class="mb-2 text-danger">
                                                    <i class="fas fa-caret-down me-1"></i><span>-125</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-6 mb-4">
                                <div class="card">
                                    <div class="card-body">
                                        <MDBChart
                                            type='pie'
                                            data={{
                                                labels: ['Desktop', 'Mobile', 'Tablet'],
                                                datasets: [
                                                    {
                                                        label: 'Devices',
                                                        data: [2112, 2343, 2545],
                                                        backgroundColor: [
                                                            'rgba(63, 81, 181, 0.5)',
                                                            'rgba(77, 182, 172, 0.5)',
                                                            'rgba(66, 133, 244, 0.5)'
                                                        ],
                                                    },
                                                ],
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="card">
                                    <div class="card-body">
                                        <MDBChart
                                            type='pie'
                                            data={{
                                                labels: ['Desktop', 'Mobile', 'Tablet'],
                                                datasets: [
                                                    {
                                                        label: 'Devices',
                                                        data: [2112, 2343, 2545],
                                                        backgroundColor: [
                                                            'rgba(63, 81, 181, 0.5)',
                                                            'rgba(77, 182, 172, 0.5)',
                                                            'rgba(66, 133, 244, 0.5)'
                                                        ],
                                                    },
                                                ],
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default withAuthenticator(AdminSEO);