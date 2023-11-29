import React from "react";
import "./Contactus.css";
import Footer from '../app/Footer';

export default function Contactus() {
  return (
    <>
      <div className="contact-container">
        <p>Contact Us</p>
      </div>
      <div className="contactFeatures">
        <form class="needs-validation form" novalidate>
          <div class="form-row">
            <div class="col-md-4 mb-3">
              <label for="validationTooltip01">First name</label>
              <input
                type="text"
                class="form-control"
                id="validationTooltip01"
                placeholder="First name"
                required
              />
              <div class="valid-tooltip">Looks good!</div>
            </div>
            <div class="col-md-4 mb-3">
              <label for="validationTooltip02">Last name</label>
              <input
                type="text"
                class="form-control"
                id="validationTooltip02"
                placeholder="Last name"
                required
              />
              <div class="valid-tooltip">Looks good!</div>
            </div>
          </div>
          <div class="form-row">
            <div class="col-md-6 mb-3">
              <label for="validationTooltip03">City</label>
              <input
                type="text"
                class="form-control"
                id="validationTooltip03"
                placeholder="City"
                required
              />
              <div class="invalid-tooltip">Please provide a valid city.</div>
            </div>
          </div>
          <label for="validationTooltip05" style={{marginTop:'25px'}}>Report here</label>
          <textarea class="form-control" placeholder="Text here" ></textarea>
          <button class="btn btn-primary" type="submit" style={{marginTop:'25px'}}>
            Submit form
          </button>
        </form>
        <div className="googlmap">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3819.439449833141!2d96.13490537492085!3d16.80454158398666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1eb44170adf1b%3A0x4be1f7384cc20c2b!2sDagon%20Center%202!5e0!3m2!1sen!2smm!4v1700801013865!5m2!1sen!2smm" width="680" height="400" style={{border:'0px'}}/>
        </div>
      </div>
      <Footer />
    </>
  );
}
