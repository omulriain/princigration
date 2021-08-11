import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import { MDBCollapse, MDBBtn, MDBChart } from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";
import { AmplifySignOut, withAuthenticator } from "@aws-amplify/ui-react";

function AdminTraffic() {

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
                        <Nav className="flex-column" variant="tabs" activeKey="2">
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
            <main className="basic-margin-top">
                <div class="container text-center">
                    <h1 class="h3 text-center py-5 mb-0 font-weight-bold">Traffic Dashboard</h1>
                    <section class="mb-4">
                    <div class="row d-flex justify-content-center">
                        <div class="col-md-6 mb-4 mb-md-0">
                            <div class="card">
                                <div class="card-body p-4">
                                        <select class="select">
                                            <option value="1">Today</option>
                                            <option value="2">Yesterday</option>
                                            <option value="3" selected>Last 7 days</option>
                                            <option value="4">Last 28 days</option>
                                            <option value="5">Last 90 days</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div class="row d-flex justify-content-center">
                            <div class="col-lg-3 mb-4">
                                <div class="card">
                                    <div class="card-body">
                                        <p class="text-uppercase small mb-2">
                                            <strong>PAGE VIEWS</strong>
                                        </p>
                                        <h5 class="mb-0">
                                            <strong>51 354 </strong>
                                            <small class="text-success ms-2">
                                                <i class="fas fa-arrow-up fa-sm pe-1"></i>23,58%</small>
                                        </h5>
                                        <hr />
                                        <p class="text-uppercase text-muted small mb-2">
                                            Previous period
                                        </p>
                                        <h5 class="text-muted mb-0">38 454</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 mb-4">
                                <div class="card">
                                    <div class="card-body">
                                        <p class="text-uppercase small mb-2">
                                            <strong>AVERAGE TIME</strong>
                                        </p>
                                        <h5 class="mb-0">
                                            <strong>00:04:20</strong>
                                            <small class="text-danger ms-2">
                                                <i class="fas fa-arrow-down fa-sm pe-1"></i>23,58%</small>
                                        </h5>
                                        <hr />
                                        <p class="text-uppercase text-muted small mb-2">
                                            Previous period
                                        </p>
                                        <h5 class="text-muted mb-0">00:05:20</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row d-flex justify-content-center">
                            <div class="col-lg-6 mb-4">
                                <div class="card">
                                    <div class="card-body">
                                        <MDBChart
                                            type='bar'
                                            options={{
                                                scales: {
                                                    x: {
                                                        ticks: {
                                                            color: '#4285F4',
                                                        },
                                                    },
                                                    y: {
                                                        ticks: {
                                                            color: '#f44242',
                                                        },
                                                    },
                                                },
                                            }}
                                            data={{
                                                labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                                                datasets: [
                                                    {
                                                        label: 'Traffic',
                                                        data: [30, 15, 62, 65, 61, 6],
                                                        backgroundColor: [
                                                            'rgba(255, 99, 132, 0.2)',
                                                            'rgba(54, 162, 235, 0.2)',
                                                            'rgba(255, 206, 86, 0.2)',
                                                            'rgba(75, 192, 192, 0.2)',
                                                            'rgba(153, 102, 255, 0.2)',
                                                            'rgba(255, 159, 64, 0.2)',
                                                        ],
                                                        borderColor: [
                                                            'rgba(255,99,132,1)',
                                                            'rgba(54, 162, 235, 1)',
                                                            'rgba(255, 206, 86, 1)',
                                                            'rgba(75, 192, 192, 1)',
                                                            'rgba(153, 102, 255, 1)',
                                                            'rgba(255, 159, 64, 1)',
                                                        ],
                                                        borderWidth: 1,
                                                    },
                                                ],
                                            }}
                                        />
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

export default withAuthenticator(AdminTraffic);