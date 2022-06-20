import React from "react";
import peopleImg from "../../assets/images/people.png";
import heroImg from "../../assets/images/ai.png";
function HeroSection() {
  return (
    <section className="hero_wrapper">
      <div className="my-container">
        <div className="hero_grid">
          <div className="hero_content">
            <h1 className="hero_title">Let’s Build Something amazing with GPT-3 OpenAI</h1>
            <p>
              Yet bed any for travelling assistance indulgence unpleasing. Not
              thoughts all exercise blessing. Indulgence way everything joy
              alteration boisterous the attachment. Party we years to order
              allow asked of.
            </p>
            <form action="" className="hero_form">
              <input type="text" placeholder="Your Email Address" />
              <button type="submit" className="default_btn">
                Get Started{" "}
              </button>
            </form>
            <div className="hero_people_area d-flex align-items-center flex-wrap-wrap g-sm">
              <img src={peopleImg} alt=" people img" />
              <p>1,600 people requested access a visit in last 24 hours</p>
            </div>
          </div>
          <div className="hero_img">
            <img src={heroImg} alt="hero img" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
