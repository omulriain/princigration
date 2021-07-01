import React from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

function AdminLogin() {
    return (
        <>
            <section className="basic-padding">
                <h1 className="basic-padding-top">Princigration Administrator Login</h1>
                <Form className="basic-padding-top">
                    <Form.Group controlId="formAdminLogin">
                        <Form.Label className="text-dark"><h5>Email address:</h5></Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            Any Princigration email is safe for use.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formAdminPassword">
                        <Form.Label className="text-dark small-padding-top"><h5>Password:</h5></Form.Label>
                        <Form.Control type="password" placeholder="Enter password" />
                    </Form.Group>
                    <Form.Group controlId="formVerifyCheckbox">
                        <Form.Check className="small-padding-top" type="checkbox" label="I agree that I am a Princigiration administrator." />
                    </Form.Group>
                    <div className="small-padding-top">
                        <Button variant="success" type="submit">
                            Submit
                        </Button>
                    </div>
                    <div className="small-padding-top">
                    <Link to="">
                        <Button variant="warning">
                            Return to Public Site
                        </Button>
                        </Link>
                    </div>
                </Form>
            </section>
        </>
    );
}
export default AdminLogin;