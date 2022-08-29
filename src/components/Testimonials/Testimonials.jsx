import React from "react";
import "./Testimonials.css"; // import css file
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


function Testimonials() {
  const data = [
    {
      avatar: AVTR1,
      name: "Ayomide Victor",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, corrupti! Magnam quis nesciunt laboriosam fuga explicabo, consequatur, distinctio quisquam, velit quaerat fugiat repudiandae illo. Architecto sint odit ratione amet autem.",
    },

    {
      avatar: AVTR2,
      name: "Ayodeji Victor",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, corrupti! Magnam quis nesciunt laboriosam fuga explicabo, consequatur, distinctio quisquam, velit quaerat fugiat repudiandae illo. Architecto sint odit ratione amet autem.",
    },

    {
      avatar: AVTR3,
      name: "Ayomide Victor",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, corrupti! Magnam quis nesciunt laboriosam fuga explicabo, consequatur, distinctio quisquam, velit quaerat fugiat repudiandae illo. Architecto sint odit ratione amet autem.",
    },
    {
      avatar: AVTR4,
      name: "Ayomide Victor",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, corrupti! Magnam quis nesciunt laboriosam fuga explicabo, consequatur, distinctio quisquam, velit quaerat fugiat repudiandae illo. Architecto sint odit ratione amet autem.",
    },
  ];
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials_container"
      
      modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      >
        
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client_avatar">
                <img src={avatar} alt="Avatar 1" />
              </div>
              <h5 className="client_name">{name}</h5>
              <small className="client-review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default Testimonials;
