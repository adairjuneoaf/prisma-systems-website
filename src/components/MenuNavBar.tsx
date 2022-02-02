import React from "react";

import { Container } from "../styles/components/MenuNavBar";

const MenuNavBar: React.FC = () => {
  return (
    <Container>
      <div className="logo" title="Prisma Systems">
        <img src="/svg/icon_prisma_systems.svg" alt="Icone/Logo da empresa." />
        <h2>
          <span className="primaryText">prisma</span>&nbsp;
          <span className="secondaryText">systems</span>
        </h2>
      </div>
      <nav>
        <ul>
          <li>
            <a href="/" title="Ir até o Início">
              Início
            </a>
          </li>
          <li>
            <a href="/" title="Ir até a sessão Sobre">
              Sobre
            </a>
          </li>
          <li>
            <a href="/" title="Ir até a sessão de Serviços ">
              Serviços
            </a>
          </li>
          <li>
            <a href="/" title="Ir até a sessão de Depoimentos ">
              Depoimentos
            </a>
          </li>
          <li>
            <a href="/" title="Ir até a sessão de Contatos ">
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </Container>
  );
};

export default MenuNavBar;
