import React from "react";

import { Container } from "../styles/components/AboutUsSectionPageHome";

const AboutUsSectionPageHome: React.FC = () => {
  return (
    <Container>
      <section className="left">
        <img src="/svg/team_image.svg" alt="Imagem que representa o time de colaboradores da Companhia" />
      </section>
      <section className="right">
        <h1>Sobre nosso time </h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero blanditiis asperiores commodi nam, magni adipisci alias odit cumque fuga ipsa
          distinctio excepturi ipsam atque dolore dignissimos mollitia deleniti quibusdam quo. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Assumenda quae, minus ullam quasi, omnis itaque aut saepe iste sit repudiandae totam, optio dicta! Qui, quam voluptates rerum nobis maxime voluptatum!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, natus. Repellendus, quia dolorum amet unde aliquid illum debitis praesentium
          labore consectetur veritatis magnam possimus esse, aspernatur eum earum, rerum ex.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, vitae nulla! A non aut nobis quasi. Aut, atque asperiores fuga dolores sunt magni
          quis quas dolorum assumenda illum quibusdam aliquid. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem error facere, quas eius
          consequatur aperiam itaque voluptate perferendis maiores quibusdam, ullam, quia enim amet temporibus eveniet. Nam nisi ipsum officiis!
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo molestias reiciendis et velit impedit. Corrupti vel quae magnam a error
          consequuntur. Architecto, laudantium odit omnis numquam ipsum ut? Accusantium, corrupti.
        </p>
      </section>
    </Container>
  );
};

export default AboutUsSectionPageHome;
