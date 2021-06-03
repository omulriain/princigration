import React from "react";

function ContactMe(){
    return (
        <>

            <hr className="my-5"/>

            <section className="text-center mb-5" id={"contact"}>
                <h3 className="mb-5 green-font">Contact Us</h3>

                <p className="mb-5 mx-auto w-responsive">
                </p>
                           <ul className="list-unstyled mb-0">
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
                                    <p className="mb-0">john@princigration.com</p>
                                </li>
                            </ul>
           </section>

        </>
    );
}

export default ContactMe;