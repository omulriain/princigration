import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import { MDBCollapse, MDBBtn } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

const base = process.env.PUBLIC_URL;

// component
function AdminTraffic() {
  // used to toggle visibility state
  const [showShow, setShowShow] = useState(false);
  const toggleShow = () => setShowShow(!showShow);

  // render component
  return (
    <>
      <header>
        {/* custom nav */}
        <div className="toggle-nav-box fixed-top">
          <MDBBtn className="pos-nav-toggle-2" onClick={toggleShow}>
            <h6 className="text-dark fw-bold text-shadow4">Open Nav</h6>
          </MDBBtn>
        </div>
        {/* custom nav sidebar */}
        <MDBCollapse show={showShow}>
          <section className="sidenav-width-border bg-blue fixed-top">
            <img
              className="admin-logo"
              src={`${base}/princigration logo sapphire blue Vfinal2 no back.png`}
              width="100"
              height="61"
              alt="company logo"
            />
            <h4 className="text-dark fw-bold text-shadow4">
              Admin Dashboard - DEMO
            </h4>
            <MDBBtn
              className="pos-nav-toggle text-dark fw-bold text-shadow4"
              onClick={toggleShow}
            >
              <h6>Close Nav</h6>
            </MDBBtn>
            <Link to="">
              <MDBBtn className="text-dark public-button" color="warning">
                Return to Public Site
              </MDBBtn>
            </Link>
            <Nav className="flex-column" variant="tabs" activeKey="2">
              <Nav.Item>
                <Nav.Link eventKey="1">
                  <Link to="/adminHome">
                    <h6 className="text-dark font-weight-bold text-shadow4">
                      Home
                    </h6>
                  </Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="2">
                  <Link to="/adminTraffic">
                    <h6 className="text-dark font-weight-bold text-shadow4">
                      Traffic
                    </h6>
                  </Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="3">
                  <Link to="/adminSEO">
                    <h6 className="text-dark font-weight-bold text-shadow4">
                      SEO
                    </h6>
                  </Link>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </section>
        </MDBCollapse>
      </header>
      {/* traffic list */}
      <main className="basic-margin-top">
        <div class="container text-center">
          <h1 class="h3 text-center py-5 mb-0 font-weight-bold text-shadow3">
            Traffic Dashboard - DEMO
          </h1>
          <section class="mb-4">
            <div class="row d-flex justify-content-center">
              <div class="col-md-6 mb-4 mb-md-0">
                <div class="card">
                  <div class="card-body p-4">
                    <select class="select">
                      <option value="1">Today</option>
                      <option value="2">Yesterday</option>
                      <option value="3" selected>
                        Last 7 days
                      </option>
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
                        <i class="fas fa-arrow-up fa-sm pe-1"></i>23,58%
                      </small>
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
                        <i class="fas fa-arrow-down fa-sm pe-1"></i>23,58%
                      </small>
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
            {/* traffic graphs section */}
            <div class="row d-flex justify-content-center">
              <div class="col-lg-6 mb-4">
                <div class="card">
                  <div class="card-body"></div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default AdminTraffic;
