import React from "react";

import MicNoneOutlinedIcon from "@mui/icons-material/MicNoneOutlined";
import CottageOutlinedIcon from "@mui/icons-material/CottageOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

import { Container } from "../styles/components/ServicesSectionPageHome";

const ServicesSectionPageHome: React.FC = () => {
  return (
    <Container>
      <h1>Serviços e Soluções</h1>
      <p>
        Lorem ipsum dolor sit amet <span className="highlight">consectetur</span> adipisicing elit. Labore debitis esse maiores quo nostrum laboriosam, magnam
        asperiores iusto unde ex. Labore quisquam dignissimos magni hic? Suscipit <span className="highlight">excepturi</span> minus iusto voluptatem. Lorem
        ipsum dolor sit amet, consectetur adipisicing elit. Nisi nulla excepturi <span className="highlight">dolore</span> minus fuga porro, obcaecati dolorum,
        voluptatum commodi quae exercitationem, quidem quia eveniet fugiat. Fugiat qui <span className="highlight">ratione</span> libero possimus!
      </p>
      <div className="cards">
        <div className="card">
          <span className="content">
            <CottageOutlinedIcon sx={{ fontSize: 80, color: "#FE6401", marginBottom: 1 }} />
            <h3>Prisma Home</h3>
            <p>
              Plataforma de marketplace para venda e compra de imóveis... completo, prático e rápido. Ambiente simples com diversas funcionalidades para você
              anunciar ou encontrar o seu imóvel gratuitamente.
            </p>
          </span>
        </div>
        <div className="card">
          <span className="content">
            <MonetizationOnOutlinedIcon sx={{ fontSize: 80, color: "#FE6401", marginBottom: 1 }} />
            <h3>Prisma Sale</h3>
            <p>
              Serviço voltado para atendimento das necessidades de consultores, vendedores ou representantes remotos que trabalham com diversos catálogos de
              produtos e empresas. Contamos com uma plataforma recheada dashboards, funcionalidades e ferramentas para auxiliar no seu trabalho do dia a dia.
            </p>
          </span>
        </div>
        <div className="card">
          <span className="content">
            <MicNoneOutlinedIcon sx={{ fontSize: 80, color: "#FE6401", marginBottom: 1 }} />
            <h3>Prisma Cast</h3>
            <p>
              Tenha o seu próprio aplicativo de Músicas ou Podcasts. Um App desenvolvido para Desktop e Mobile com todas as funcionalidades que você precisa
              para distrubuir seu contéudo.
            </p>
          </span>
        </div>
      </div>
    </Container>
  );
};

export default ServicesSectionPageHome;
