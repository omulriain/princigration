import React from "react";

function ContactMe() {
    return (
        <>
            <hr className="my-5" />
            <section className="text-center mb-5" id={"contact"}>
                <h3 className="mb-5 green-font">Contact Us</h3>
                <ul className="list-unstyled">
                    <li>
                        <i className="fas fa-map-marker-alt fa-2x text-dark"></i>
                        <p>Granbury, TX USA</p>
                    </li>
                    <li>
                        <i className="fas fa-phone fa-2x text-dark"></i>
                        <p>+719.337.7285</p>
                    </li>
                    <li>
                        <i className="fas fa-envelope fa-2x text-dark"></i>
                        <p>john@princigration.com</p>
                    </li>
                </ul>
            </section>
        </>
    );
}
export default ContactMe;