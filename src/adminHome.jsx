import React, { useState } from "react";
import { Nav, NavDropdown } from "react-bootstrap";
import { MDBCollapse, MDBBtn } from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";

function AdminHome() {
    const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
    const [showShow, setShowShow] = useState(false);
    const toggleShow = () => setShowShow(!showShow);
    return (
        <>
            <header>
                <div className="toggle-nav-box fixed-top"><MDBBtn className="pos-nav-toggle-2" onClick={toggleShow}><h6 className="text-dark">Toggle Navigation</h6></MDBBtn></div>
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
                        <MDBBtn className="pos-nav-toggle" onClick={toggleShow}><h6 className="text-dark">Toggle Navigation</h6></MDBBtn>
                        <Link to="">
                            <MDBBtn className="text-dark basic-margin" color="warning">
                                Return to Public Site
                            </MDBBtn>
                        </Link>
                        <Nav className="flex-column" variant="tabs" activeKey="1" onSelect={handleSelect}>
                            <Nav.Item>
                                <Nav.Link eventKey="1">
                                    <h6>Home</h6>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="2">
                                    <h6>NavLink 2</h6>
                                </Nav.Link>
                            </Nav.Item>
                            <NavDropdown title={<h6>Dropdown</h6>} id="nav-dropdown">
                                <NavDropdown.Item eventKey="3.1">Action</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item eventKey="3.2">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </section>
                </MDBCollapse>
            </header>
        </>
    );
}
export default AdminHome;