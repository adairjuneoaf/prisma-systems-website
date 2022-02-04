import React from "react";

import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Container, Content } from "../styles/components/TestimonialsSectionPageHome";

const TestimonialsSectionPageHome: React.FC = () => {
  return (
    <Container>
      <h1>Depoimentos de quem faz parte da nossa história</h1>
      <Content>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={32}
          slidesPerView={2}
          className="testimonials"
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
        >
          {/* <div className="testimonials"> */}

          <SwiperSlide className="testimonial">
            <p>
              <span className="highlightedTestimonial">&ldquo;</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima praesentium dolor quaerat
              ad adipisci officiis quasi, earum quam numquam assumenda. Velit provident illum soluta earum aliquam dolor fuga ex reprehenderit?
            </p>
            <span className="footerTestimonial">
              <img src="/svg/profile_image.svg" alt="Imagem referente a testemunha do depoimento" />
              <p>Nome da Testemunha</p>
            </span>
          </SwiperSlide>

          <SwiperSlide className="testimonial">
            <p>
              <span className="highlightedTestimonial">&ldquo;</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima praesentium dolor quaerat
              ad adipisci officiis quasi, earum quam numquam assumenda. Velit provident illum soluta earum aliquam dolor fuga ex reprehenderit?
            </p>
            <span className="footerTestimonial">
              <img src="/svg/profile_image.svg" alt="Imagem referente a testemunha do depoimento" />
              <p>Nome da Testemunha</p>
            </span>
          </SwiperSlide>

          <SwiperSlide className="testimonial">
            <p>
              <span className="highlightedTestimonial">&ldquo;</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima praesentium dolor quaerat
              ad adipisci officiis quasi, earum quam numquam assumenda. Velit provident illum soluta earum aliquam dolor fuga ex reprehenderit?
            </p>
            <span className="footerTestimonial">
              <img src="/svg/profile_image.svg" alt="Imagem referente a testemunha do depoimento" />
              <p>Nome da Testemunha</p>
            </span>
          </SwiperSlide>

          <SwiperSlide className="testimonial">
            <p>
              <span className="highlightedTestimonial">&ldquo;</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima praesentium dolor quaerat
              ad adipisci officiis quasi, earum quam numquam assumenda. Velit provident illum soluta earum aliquam dolor fuga ex reprehenderit?
            </p>
            <span className="footerTestimonial">
              <img src="/svg/profile_image.svg" alt="Imagem referente a testemunha do depoimento" />
              <p>Nome da Testemunha</p>
            </span>
          </SwiperSlide>

          {/* </div> */}
        </Swiper>
      </Content>
    </Container>
  );
};

export default TestimonialsSectionPageHome;
