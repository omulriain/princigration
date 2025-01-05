import React from "react";
import { Accordion, Card, Button } from "react-bootstrap";

const base = process.env.PUBLIC_URL;

// component
function People() {
  return (
    <>
      {/* people description */}
      <hr className="my-5" id="people" />
      <section className="text-center">
        <h3 className="mb-5 font-weight-bold green-font text-shadow2">
          People
        </h3>
        <p className="text-center mb-5 mx-auto w-responsive green-font">
          Princigration is a team of dedicated and professional developers
          having the technical skills to suit any of your needs.
        </p>
        {/* people accordion */}
        <Accordion className="pb-3">
          <Card className="green-font">
            <Card.Header>
              <Accordion.Toggle
                as={Button}
                className="btn-sml"
                variant="light"
                eventKey="0"
              >
                <h6 className="font-weight-bold">
                  John Ryan - Chief Data Officer
                </h6>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <ul className="list-group-flush invis-bullet-compensation">
                  <li className="list-group-item">
                    <img
                      className="rounded-4 border border-success mb-3"
                      src={`${base}/13_lb_striper.webp`}
                      width="190"
                      height="253"
                      alt="john ryan"
                      loading="lazy"
                    />
                  </li>
                  <li className="list-group-item">
                    <div className="green-font">
                      <h3 className="text-shadow2">John J. Ryan III</h3>
                      <p>
                        John Ryan has over 20 years in Software and Data
                        Engineering.
                      </p>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className="fixed-action-button">
                      <button type="button" className="btn">
                        <a
                          href="https://princigration.s3.us-west-2.amazonaws.com/website/John_Ryan_2021-06-22.pdf"
                          className="green-font"
                        >
                          <h4>Resume</h4>
                        </a>
                      </button>
                    </div>
                  </li>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle
                as={Button}
                className="btn-sml"
                variant="light"
                eventKey="1"
              >
                <h6 className="font-weight-bold">
                  Jesse Sites - Programmer/Web Developer
                </h6>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <ul className="list-group-flush invis-bullet-compensation">
                  <li className="list-group-item">
                    <img
                      className="rounded-4 border border-success mb-3"
                      src={`${base}/jesse_sites.webp`}
                      width="200px"
                      height="200px"
                      alt="jesse sites"
                      loading="lazy"
                    />
                  </li>
                  <li className="list-group-item">
                    <div className="green-font">
                      <h3 className="text-shadow2">Jesse S. Sites</h3>
                      <p>
                        I'm passionate about programming and learning new
                        technologies. I have three years of industry experience
                        in developing software using Python, HTML/CSS,
                        JavaScript, Java, SQL, and MongoDB. I've successfully
                        delivered solutions that improved capabilities, reduced
                        costs, and increased efficiency for various clients and
                        sectors. I'm always eager to take on new challenges and
                        explore new possibilities.
                      </p>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className="fixed-action-button">
                      <button type="button" className="btn">
                        <a
                          href="https://www.linkedin.com/in/jesse-sites/"
                          className="green-font"
                        >
                          <h4>Resume</h4>
                        </a>
                      </button>
                    </div>
                  </li>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </section>
    </>
  );
}

export default People;
