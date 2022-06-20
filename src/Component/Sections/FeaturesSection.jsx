import FeaturesData from "../Data/FeaturesData.js";
import Titile from "../Shared/Titile";

function FeaturesSection() {
  return (
    <section className="features_wrapper">
      <div className="my-container">
        <div className="features_title_grid">
          <div className="features_left_content">
            <h3>
              The Future is Now and You Just Need To Realize It. Step into
              Future Today & Make it Happen.
            </h3>
            <h5>Request Early Access to Get Started</h5>
          </div>
          <div className="features_right_area">
            {FeaturesData.map((item, index) => {
              return (
                <div className="features_item_grid" key={index}>
                  <Titile title={item.featuresTitle} fontSize={true} />
                  <p>{item.featuresDes}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
