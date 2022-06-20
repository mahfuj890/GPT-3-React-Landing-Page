import possibilityImg from "../../assets/images/possibility.png";

function PossibilitySection() {
  return (
    <section className="possibility_wrapper">
      <div className="my-container">
        <div className="possibility_grid">
          <div className="possibility_img text-center">
            <img src={possibilityImg} alt="possibility img" />
          </div>
          <div className="possibility_content">
            <h4>Request Early Access to Get Started</h4>
            <h3>The possibilities are beyond your imagination</h3>
            <p>
              Yet bed any for travelling assistance indulgence unpleasing. Not
              thoughts all exercise blessing. Indulgence way everything joy
              alteration boisterous the attachment. Party we years to order
              allow asked of.
            </p>
            <h5>Request Early Access to Get Started</h5>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PossibilitySection;
