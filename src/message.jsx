import React from "react";
import { Link } from 'react-router-dom';

function Message() {
    return (
        <>
            <section>
                <div style={{ backgroundColor: "green" }}>
                    <Link to="/adminLogin"><button type="button" class="btn btn-success btn-lg btn-position">Administrator Login</button></Link>
                    <div className="d-flex align-items-center justify-content-center h-100 py-5">
                        <div className="text-center text-white my-3">
                            <h2 className="mb-4">Want to learn how we can help?</h2>
                            <h5 className="mb-0">Just send us an email:</h5>
                            <p></p>
                            <h5 className="mb-0">contact@princigration.com</h5>
                            <img
                                src="princigration logo emerald green Vfinal2 no back.png"
                                height="75"
                                alt="company logo"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Message;