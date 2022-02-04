import React from "react";

import { motion } from "framer-motion";

import { Button } from "react-scroll";

import { Container } from "../styles/components/InitialSectionPageHome";

const varAnimationLeftFramerMotion = {
  visible: { x: 0, opacity: 1 },
  hidden: { x: -300, opacity: 0 },
};

const varAnimationRightFramerMotion = {
  visible: { x: 0, opacity: 1 },
  hidden: { x: 300, opacity: 0 },
};

const InitialSectionHome: React.FC = () => {
  return (
    <Container>
      <motion.section
        className="left"
        initial="hidden"
        animate="visible"
        variants={varAnimationLeftFramerMotion}
        transition={{ ease: "easeOut", duration: 1, delay: 0.1 }}
      >
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
      </motion.section>

      <motion.section
        className="right"
        initial="hidden"
        animate="visible"
        variants={varAnimationRightFramerMotion}
        transition={{ ease: "easeOut", duration: 1, delay: 0.2 }}
      >
        <img src="/svg/initial_image.svg" alt="Imagem sobre tecnologia da sessão de início da página Home" />
      </motion.section>
    </Container>
  );
};

export default InitialSectionHome;
