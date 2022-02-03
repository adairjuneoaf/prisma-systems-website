import React from "react";

import { Button } from "react-scroll";

import { Container } from "../styles/components/InitialSectionPageHome";

const InitialSectionHome: React.FC = () => {
  return (
    <Container>
      <section className="left">
        <h1>O melhor da tecnologia ao seu dispor!</h1>
        <p>
          Uma StartUp cujo core é a tecnologia, nosso objetivo é solucionar problemas com as melhores ferramentas disponíveis no mercado. Não há problema sem
          solução, a Prisma une pontos e arestas para resolver o seu problema. Conheça nossos serviços e soluções, vamos alcançar o seu objetivo juntos!
        </p>

        <Button
          className="buttonContact"
          type="submit"
          value="Entrar em contato"
          to="footer"
          spy={true}
          smooth="easeOutQuart"
          duration={1500}
          title="Ir até os dados de contato da Prisma Systems"
        />
      </section>
      <section className="right">
        <img src="/svg/initial_image.svg" alt="Imagem sobre tecnologia da sessão de início da página Home" />
      </section>
    </Container>
  );
};

export default InitialSectionHome;
