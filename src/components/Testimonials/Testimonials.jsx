import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
import "./Testimonials.css";
import data from "../../utils/testimonials";

SwiperCore.use([Autoplay]);

const Testimonials = () => {
  const [slidesPerView, setSlidesPerView] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 768) {
        setSlidesPerView(1);
      } else {
        setSlidesPerView(2);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="paddings t-wrapper">
      <div className="innerWidth flexColCenter t-container">
        <div className="orangeText">Client Testimonials</div>
        <div className="primaryText">The Way we Operate</div>
      </div>

      <div className="innerWidth swiper-container">
        <Swiper
          slidesPerView={slidesPerView}
          spaceBetween={30}
          autoplay={{
            delay: 4000,
          }}
          className="mySwiper"
        >
          {data.map((testimonial, i) => (
            <SwiperSlide key={i}>
              <div className="testimonial-card">
                <img
                  src="./apostrophe.png"
                  className="apostrophe apostrophe-left"
                  alt="apostrophe"
                />
                <div className="testimonial-content">
                  <div className="testimonial-text">{testimonial.testimonial}</div>
                  <div className="testimonial-info">
                    <div className="testimonial-name">{testimonial.name}</div>
                    <div className="testimonial-location">
                      {testimonial.location}
                    </div>
                  </div>
                </div>
                <img
                  src="./apostrophe.png"
                  className="apostrophe apostrophe-right"
                  alt="apostrophe"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
