import React from "react";

const base = process.env.PUBLIC_URL;

// component
function Footer() {
  // render component
  return (
    <>
      {/* email banner */}
      <section>
        <div style={{ backgroundColor: "green" }}>
          <div className="d-flex align-items-center justify-content-center h-100 py-5">
            <div className="text-center text-white my-3">
              <h2 className="mb-4 font-weight-bold text-shadow2">
                Want to learn how we can help?
              </h2>
              <h5 className="mb-0">Just send us an email:</h5>
              <p></p>
              <h5 className="mb-0">contact@princigration.com</h5>
              <img
                className="png-shadow"
                src={`${base}/princigration logo emerald green Vfinal2 no back.png`}
                width="122"
                height="75"
                alt="company logo"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
