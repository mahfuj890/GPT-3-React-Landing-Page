import React from "react";

function CTASection() {
  return (
    <section className="cta_wrapper">
      <div className="my-container">
        <div className="cta_content_area d-flex align-items-center justify-content-between ">
          <div>
            <h5>Request Early Access to Get Started</h5>
            <h4>Register today & start exploring the endless possiblities.</h4>
          </div>
          <div>
            <button type="button" className="cta_btn">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
