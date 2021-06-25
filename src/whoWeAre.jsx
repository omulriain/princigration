import React from "react";
import { Accordion, Card, Button } from "react-bootstrap";

function WhoWeAre() {
    return (
        <>
            <hr className="my-5" />
            <section className="text-center" id="people">
                <h3 className="mb-5 green-font">People</h3>
                <p className="text-center mb-5 mx-auto w-responsive green-font">
                    Princigration is a team of dedicated and professional developers having the technical skills to suit any of your needs.
                </p>
                <Accordion defaultActiveKey="0">
                    <Card className="green-font">
                        <Card.Header>
                            <Accordion.Toggle as={Button} className="width-fixed" variant="light" eventKey="0">
                                John Ryan - Chief Data Officer
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <ul class="list-group-flush invis-bullet-compensation">
                                    <li class="list-group-item"><img className="rounded-4 border border-success basic-margin-bottom"
                                        src="john_ryan.jpg"
                                        height="250"
                                        alt="john ryan"
                                        loading="lazy"
                                    /></li>
                                    <li class="list-group-item"><container className="green-font"><h3>Description</h3><p>Contrary to popular belief, Lorem Ipsum is not simply random text.
                                        It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p></container></li>
                                    <li class="list-group-item"><container className="green-font"><h3>Skills</h3><p>&bull;</p><p>&bull;</p><p>&bull;</p></container></li>
                                    <li class="list-group-item"><div className="fixed-action-button"><button type="button" className="btn">
                                        <a href="resume_ryan.pdf" className="green-font"><h3>
                                            Resume</h3></a></button></div></li>
                                </ul>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} className="width-fixed" variant="light" eventKey="1">
                                Jesse Sites - Web Developer
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                <ul class="list-group-flush invis-bullet-compensation">
                                    <li class="list-group-item"><img className="rounded-4 border border-success basic-margin-bottom"
                                        src="jesse_sites.jpg"
                                        height="250"
                                        alt="jesse sites"
                                        loading="lazy"
                                    /></li>
                                    <li class="list-group-item"><container className="green-font"><h3>Description</h3><p>
                                        I am a computer programming student with 3 years of experience in the field of information technology as a student worker
                                        at Tarleton State University,
                                        where I have developed my skills as a computer software and programming specialist.
                                        I interned at TIAER (A Tarleton State University research facility) for 2 years,
                                        and was a Student Tech for Classroom and Lab Support for 1 year.
                                        I have also had about 2 years of experience in the service industry before I started college,
                                        where I have fostered my ability to connect with people in the field.
                                        I now create web development solutions for my clients utilizing my knowledge gained from Texas State Technical College,
                                        my new place of study, and from Princigration itself.
                                    </p></container></li>
                                    <li class="list-group-item"><container className="green-font"><h3>Skills</h3><p>&bull; HTML</p><p>&bull; CSS</p><p>&bull; JS</p>
                                        <p>&bull; MDB</p><p>&bull; React</p><p>&bull; Node.js</p><p>&bull; Git/GitHub</p></container></li>
                                    <li class="list-group-item"><div className="fixed-action-button"><button type="button" className="btn">
                                        <a href="resume_sites.pdf" className="green-font"><h3>
                                            Resume</h3></a></button></div></li>
                                </ul>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card className="green-font">
                        <Card.Header>
                            <Accordion.Toggle as={Button} className="width-fixed" variant="light" eventKey="2">
                                Sam Dawson - Graphic and Digital Media Artist
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="2">
                            <Card.Body>
                                <ul class="list-group-flush invis-bullet-compensation">
                                    <li class="list-group-item"><img className="rounded-4 border border-success basic-margin-bottom"
                                        src="sam_dawnson.jpg"
                                        height="250"
                                        alt="sam dawson"
                                        loading="lazy"
                                    /></li>
                                    <li class="list-group-item"><container className="green-font"><h3>Description</h3><p>Contrary to popular belief, Lorem Ipsum is not simply random text.
                                        It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p></container></li>
                                    <li class="list-group-item"><container className="green-font"><h3>Skills</h3><p>&bull;</p><p>&bull;</p><p>&bull;</p></container></li>
                                    <li class="list-group-item"><div className="fixed-action-button"><button type="button" className="btn">
                                        <a href="resume_dawson.pdf" className="green-font"><h3>
                                            Resume</h3></a></button></div></li>
                                </ul>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </section>
        </>
    );
}
export default WhoWeAre;