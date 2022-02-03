import React, { useEffect, useState } from "react";

import { Link } from "react-scroll";

import { Container } from "../styles/components/MenuNavBar";

const MenuNavBar: React.FC = () => {
  const [positionScroll, setPositionScroll] = useState<boolean>(false);

  function handleScroll() {
    const position = window.pageYOffset;

    if (position > 96) {
      setPositionScroll(true);
    } else {
      setPositionScroll(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container style={{ boxShadow: positionScroll ? "0px 2px 1px -1px rgba(0, 0, 0, 0.1)" : "" }}>
      <div className="logo" title="Prisma Systems">
        <img src="/svg/icon_prisma_systems.svg" alt="Icone/Logo da empresa." />
        <h2>
          <span className="primaryText">prisma</span>&nbsp;
          <span className="secondaryText">systems</span>
        </h2>
      </div>

      <nav>
        <ul>
          <li className="li">
            <Link to="home" spy={true} smooth={true} offset={-63} duration={1000} title="Ir até o Início">
              Início
            </Link>
          </li>
          <li className="li">
            <Link to="about-us" spy={true} smooth={true} offset={-63} duration={1000} title="Ir até a sessão Sobre">
              Sobre
            </Link>
          </li>
          <li className="li">
            <Link to="services" spy={true} smooth={true} offset={-63} duration={1000} title="Ir até a sessão de Serviços ">
              Serviços
            </Link>
          </li>
          <li className="li">
            <Link to="testimonials" spy={true} smooth={true} offset={-63} duration={1000} title="Ir até a sessão de Depoimentos ">
              Depoimentos
            </Link>
          </li>
          <li className="li">
            <Link to="contact" spy={true} smooth={true} offset={-63} duration={1000} title="Ir até a sessão de Contatos ">
              Contato
            </Link>
          </li>
        </ul>
      </nav>
    </Container>
  );
};

export default MenuNavBar;
