import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import { MDBCollapse, MDBBtn } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

// component
function AdminHome() {
  // constants

  // used to toggle visibility state
  const [showShow, setShowShow] = useState(false);
  const toggleShow = () => setShowShow(!showShow);
  // todo app styles
  const styles = {
    container: {
      width: 500,
      marginTop: 75,
      marginLeft: "auto",
      marginRight: "auto",
      display: "flex",
      flex: 1,
      flexDirection: "column",
      justifyContent: "center",
      padding: 20,
    },
    todo: { marginBottom: 15, marginTop: 5 },
    input: {
      border: "none",
      backgroundColor: "#ddd",
      marginBottom: 10,
      padding: 8,
      fontSize: 18,
    },
    todoID: { marginBottom: 15, fontWeight: "bold" },
    todoName: { fontSize: 20, fontWeight: "bold" },
    todoDescription: { marginBottom: 0 },
    button: {
      backgroundColor: "black",
      color: "white",
      outline: "none",
      fontSize: 18,
      padding: "12px 0px",
    },
    buttondel: { backgroundColor: "black", color: "white", float: "right" },
  };

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
              src="princigration logo sapphire blue Vfinal2 no back.png"
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
                <container>Return to Public Site</container>
              </MDBBtn>
            </Link>
            <Nav className="flex-column" variant="tabs" activeKey="1">
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
      {/* todo app (frontend/UI only) */}
      <div class="container2" style={styles.container}>
        <h2 class="text-shadow3">Princigration Todos - DEMO</h2>
        <input style={styles.input} placeholder="Name" />
        <input style={styles.input} placeholder="Description" />
        <button style={styles.button}>Create Todo</button>
        {() => (
          <div style={styles.todo}>
            <button style={styles.buttondel}>Delete</button>
            <p style={styles.todoID}>Todo ID: </p>
            <p style={styles.todoName}></p>
            <p style={styles.todoDescription}></p>
          </div>
        )}
      </div>
    </>
  );
}

export default AdminHome;
