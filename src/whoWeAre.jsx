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
                            <Accordion.Toggle as={Button} variant="light" eventKey="0">
                                Employee
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>Description</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card className="green-font">
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="light" eventKey="1">
                                Employee
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>Description</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card className="green-font">
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="light" eventKey="2">
                                Employee
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="2">
                            <Card.Body>Description</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </section>
        </>
    );
}
export default WhoWeAre;