import BlogData from "../Data/BlogData.js";

function BlogSection() {
  return (
    <section className="blog_wrapper">
      <div className="my-container">
        <h3 className="hero_title">
          A lot is happening, We are blogging about it.
        </h3>
        <div className="blog_grid">
          {BlogData.map((item, index) => {
            return (
              <div className="blog_item" key={index}>
                <div className="blog_img">
                  <img src={item.blogImg} alt={item.blogImgAlt} />
                </div>
                <div className="blog_content">
                  <div>
                    <h5>{item.blogDate} </h5>
                    <h3>{item.blogTitle} </h3>
                  </div>
                  <div>
                    <button type="button" className="read_more_btn">
                      {item.blogButton}{" "}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default BlogSection;
