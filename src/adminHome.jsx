import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import { MDBCollapse, MDBBtn } from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";
import { AmplifySignOut, withAuthenticator} from "@aws-amplify/ui-react";

function AdminHome() {
    const [showShow, setShowShow] = useState(false);
    const toggleShow = () => setShowShow(!showShow);
    return (
        <>
            <header>
                <div className="toggle-nav-box fixed-top"><MDBBtn className="pos-nav-toggle-2" onClick={toggleShow}><h6 className="text-dark">Open Nav</h6></MDBBtn></div>
                <MDBCollapse show={showShow}>
                    <section className="sidenav-width-border bg-blue fixed-top">
                        <img
                            className="admin-logo"
                            src="princigration logo sapphire blue Vfinal2 no back.png"
                            height="50"
                            alt="company logo"
                            loading="lazy"
                        />
                        <h4 className="text-dark fw-bold">Admin Dashboard</h4>
                        <MDBBtn className="pos-nav-toggle" onClick={toggleShow}><h6 className="text-dark">Close Nav</h6></MDBBtn>
                        <Link to="">
                            <MDBBtn className="text-dark basic-margin" color="warning">
                                Return to Public Site
                            </MDBBtn>
                        </Link>
                        <div className="signout-button"><AmplifySignOut /></div>
                        <Nav className="flex-column" variant="tabs" activeKey="1">
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
                                    <Link to="/adminHome"><h6 className="text-dark">Analytics</h6></Link>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="4">
                                    <Link to="/adminHome"><h6 className="text-dark">SEO</h6></Link>
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </section>
                </MDBCollapse>
            </header>
        </>
    );
}

export default withAuthenticator(AdminHome);