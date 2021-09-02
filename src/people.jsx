import React from "react";
import { Accordion, Card, Button } from "react-bootstrap";

// component
function People() {
    return (
        <>
            {/* people opening */}
            <hr className="my-5" />
            <section className="text-center" id="people">
                <h3 className="mb-5 font-weight-bold green-font text-shadow2">People</h3>
                <p className="text-center mb-5 mx-auto w-responsive green-font">
                    Princigration is a team of dedicated and professional developers having the technical skills to suit any of your needs.
                </p>
                {/* people accordion */}
                <Accordion className="pb-3">
                    <Card className="green-font">
                        <Card.Header>
                            <Accordion.Toggle as={Button} className="btn-sml" variant="light" eventKey="0">
                                <h6 class="font-weight-bold">John Ryan - Chief Data Officer</h6>
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <ul class="list-group-flush invis-bullet-compensation">
                                    <li class="list-group-item"><img className="rounded-4 border border-success mb-3"
                                        src="13_lb_striper.webp"
                                        width="190"
                                        height="253"
                                        alt="john ryan"
                                        loading="lazy"
                                    /></li>
                                    <li class="list-group-item"><container className="green-font"><h3>John J. Ryan III</h3><p>John Ryan has 20 years in Software and Data Engineering. </p></container></li>
                                    <li class="list-group-item"><div className="fixed-action-button"><button type="button" className="btn">
                                        <a href="https://princigration.s3.us-west-2.amazonaws.com/website/John_Ryan_2021-06-22.pdf" className="green-font"><h3>
                                            Resume</h3></a></button></div></li>
                                </ul>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} className="btn-sml" variant="light" eventKey="1">
                                <h6 class="font-weight-bold">Jesse Sites - Independent Web Developer</h6>
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                <ul class="list-group-flush invis-bullet-compensation">
                                    <li class="list-group-item"><img className="rounded-4 border border-success mb-3"
                                        src="jesse_sites.webp"
                                        width="141"
                                        height="250"
                                        alt="jesse sites"
                                        loading="lazy"
                                    /></li>
                                    <li class="list-group-item"><container className="green-font"><h3>Jesse S. Sites</h3><p>
                                        I am a computer programming student with 3 years of experience in the field of information technology at Tarleton State University.
                                        I now create web development solutions for my clients utilizing my knowledge gained from Texas State Technical College,
                                        my new place of study, and from Princigration itself.
                                    </p></container></li>
                                    <li class="list-group-item"><div className="fixed-action-button"><button type="button" className="btn">
                                        <a href="https://princigration.s3.us-west-2.amazonaws.com/website/resume_sites.pdf" className="green-font"><h3>
                                            Resume</h3></a></button></div></li>
                                </ul>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card className="green-font">
                        <Card.Header>
                            <Accordion.Toggle as={Button} className="btn-sm" variant="light" eventKey="2">
                                <h6 class="font-weight-bold">Sam Dawson - Graphic and Digital Media Artist</h6>
                            </Accordion.Toggle>
                        </Card.Header>
                    </Card>
                </Accordion>
            </section>
        </>
    );
}

export default People;