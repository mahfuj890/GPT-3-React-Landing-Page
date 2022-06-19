import React from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import Titile from "../Shared/Titile";
import aboutData from "../Data/AboutData.js";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";

function About() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <section className="about_wrapper">
      <div className="my-container">
        <div className="about_content_area">
          <div className="about_title_grid">
            <Titile title="What is GPT-3" />
            <p>
              We so opinion friends me message as delight. Whole front do of
              plate heard oh ought. His defective nor convinced residence own.
              Connection has put impossible own apartments boisterous. At
              jointure ladyship an insisted so humanity he. Friendly bachelor
              entrance to on by.
            </p>
          </div>
          <div className="about_main_title_grid">
            <h3>The possibilities are beyond your imagination</h3>
            <div className="title_right_area">
              <h4>Explore The Library</h4>
              <div className="slider_button_area d-flex align-items-center g-lg">
                <button type="button" ref={prevRef}>
                  <GrPrevious size={20} />
                </button>
                <button type="button" ref={nextRef}>
                  <GrNext size={20} />
                </button>
              </div>
            </div>
          </div>
          <div className="about_slider_area">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={10}
              slidesPerView={1}
              speed={1050}
              pagination={{ clickable: true,
                dynamicBullets:true,
               }}
              onInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                922: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                1200: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
            >
              {aboutData.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="about_slider_card">
                      <Titile title={item.aboutTtile} />
                      <p>{item.aboutPara}</p>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <div className="about_right_shape"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
