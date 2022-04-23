import React from "react";
import Avatar1 from "../../assets/avatar1.jpg";
import Avatar2 from "../../assets/avatar2.jpeg";
import Avatar3 from "../../assets/avatar3.jpg";
import Avatar4 from "../../assets/avatar4.jpg";
import "./testimonial.css";

import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
// import "swiper/css/navigation";
import "swiper/css/pagination";
// import "swiper/css/scrollbar";

const data = [
  {
    avatar: Avatar2,
    name: "shatta walle",
    review:
      "lLorem ipsum dolor sit amet consectetur, adipisicing elit.corporis itaque facere reprehenderit iusto, ipsa et optio qui eos illo non ratione laboriosam tempora sunt accusantium ducimus cupiditate. Beatae, vero! ",
  },
  {
    avatar: Avatar1,
    name: "tina snow",
    review:
      "lLorem ipsum dolor sit amet consectetur, adipisicing elit.corporis itaque facere reprehenderit iusto, ipsa et optio qui eos illo non ratione laboriosam tempora sunt accusantium ducimus cupiditate. Beatae, vero! ",
  },
  {
    avatar: Avatar3,
    name: "imma",
    review:
      "lLorem ipsum dolor sit amet consectetur, adipisicing elit.corporis itaque facere reprehenderit iusto, ipsa et optio qui eos illo non ratione laboriosam tempora sunt accusantium ducimus cupiditate. Beatae, vero! ",
  },
  {
    avatar: Avatar4,
    name: "tina snow",
    review:
      "lLorem ipsum dolor sit amet consectetur, adipisicing elit.corporis itaque facere reprehenderit iusto, ipsa et optio qui eos illo non ratione laboriosam tempora sunt accusantium ducimus cupiditate. Beatae, vero! ",
  },
];
const Testimonial = () => {
  return (
    <section id="testimonial">
      <h4>Review from clients</h4>
      <h1>Testimonials</h1>

      <Swiper
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className="container testimonial__container"
      >
        {data.map(({ avatar, name, review }) => {
          return (
            <SwiperSlide className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonial;

// export default () => {
//   return (
//     <Swiper
//       // install Swiper modules

//     >
//       <SwiperSlide>Slide 1</SwiperSlide>
//       <SwiperSlide>Slide 2</SwiperSlide>
//       <SwiperSlide>Slide 3</SwiperSlide>
//       <SwiperSlide>Slide 4</SwiperSlide>
//       ...
//     </Swiper>
//   );
// };
