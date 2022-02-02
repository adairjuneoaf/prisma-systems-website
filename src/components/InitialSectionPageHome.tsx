import React from "react";

import { Container } from "../styles/components/InitialSectionPageHome";

const InitialSectionHome: React.FC = () => {
  return (
    <Container>
      <section className="left">
        <h1>O melhor da tecnologia atual ao seu dispor! </h1>
        <p>
          Uma StartUp cujo core é a tecnologia, nosso objetivo é solucionar problemas com as melhores alternativas disponíveis no mercado. Não há problema sem
          solução, a Prisma une pontos e arestas para resolver o seu problema. Conheça nossos serviços e soluções, vamos alcançar o seu objetivo juntos!
        </p>
        <button type="button">Entrar em contato</button>
      </section>
      <section className="right">
        <img src="/svg/initial_image.svg" alt="Imagem sobre tecnologia da sessão de início da página Home" />
      </section>
    </Container>
  );
};

export default InitialSectionHome;
