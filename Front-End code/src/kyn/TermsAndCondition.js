import React from "react";
import "./TermsAndCondition.css";
import img from "../img/TermsImg.jpg";
import Footer from '../app/Footer'

export default function TermsAndCondition() {
  return (
    <>
      <div className="term-container">
        <p>Terms and Conditions</p>
      </div>
      <div className="termFeature">
        <p>
          <span style={{ fontWeight: "600" }}>
            Privacy and Data Usage:
            <br />
          </span>
          KYN respects user privacy; refer to our Privacy Policy for details.
          User data may be used to enhance the app experience but will not be
          shared without consent.
          <br />
          <br />
          <span style={{ fontWeight: "600" }}>
            Social Login:
            <br />
          </span>
          Social login integration allows access to basic user information.
          Users are encouraged to review and adjust privacy settings on
          connected social platforms.
          <br />
          <br />
          <span style={{ fontWeight: "600" }}>
            Updates and Modifications:
            <br />
          </span>
          Terms may be updated; users will be notified of changes. Continued use
          post-update indicates acceptance of revised terms.
          <br />
          <br />
          <span style={{ fontWeight: "600" }}>Last updated:</span>{" "}
          <span style={{ fontWeight: "600", color: "#33BBC5" }}>
            24 Nov 2024
          </span>
        </p>
        <img src={img} alt="3D ppl"></img>
      </div>
      <Footer />
    </>
  );
}
