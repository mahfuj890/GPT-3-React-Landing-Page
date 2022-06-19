import BrandData from "../Data/BrandData";

function BrandSection() {
  console.log(BrandData);

  return (
    <section className="brand_wrapper">
      <div className="my-container">
        <ul className="brand_list d-flex align-items-center justify-content-center flex-wrap-wrap g-lg">
          {BrandData.map((item, index) => {
            return (
              <li key={index}>
                <img src={item.imgUrl} alt={item.imgAlter} />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default BrandSection;
