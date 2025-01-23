import React from "react";

// component
function Contact() {
  return (
    <>
      {/* contact list */}
      <hr className="my-5" id="contact" />
      <section className="text-center">
        <h3 className="mb-5 font-weight-bold green-font text-shadow2">
          Contact Us
        </h3>
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
            <p>contact@princigration.com</p>
          </li>
        </ul>
      </section>
    </>
  );
}

export default Contact;
