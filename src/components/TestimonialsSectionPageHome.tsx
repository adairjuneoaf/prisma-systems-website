import React from "react";

import { Container } from "../styles/components/TestimonialsSectionPageHome";

const TestimonialsSectionPageHome: React.FC = () => {
  return (
    <Container>
      <h1>Depoimentos de quem faz parte da nossa história</h1>
      <div className="testimonials">
        <div className="testimonial">
          <p>
            <span className="highlightedTestimonial">&ldquo;</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima praesentium dolor quaerat ad
            adipisci officiis quasi, earum quam numquam assumenda. Velit provident illum soluta earum aliquam dolor fuga ex reprehenderit?
          </p>
          <span className="footerTestimonial">
            <img src="/svg/profile_image.svg" alt="Imagem referente a testemunha do depoimento" />
            <p>Nome da Testemunha</p>
          </span>
        </div>

        <div className="testimonial">
          <p>
            <span className="highlightedTestimonial">&ldquo;</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima praesentium dolor quaerat ad
            adipisci officiis quasi, earum quam numquam assumenda. Velit provident illum soluta earum aliquam dolor fuga ex reprehenderit?
          </p>
          <span className="footerTestimonial">
            <img src="/svg/profile_image.svg" alt="Imagem referente a testemunha do depoimento" />
            <p>Nome da Testemunha</p>
          </span>
        </div>
      </div>
    </Container>
  );
};

export default TestimonialsSectionPageHome;
