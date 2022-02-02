import React from "react";

import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import WhatsappOutlinedIcon from "@mui/icons-material/WhatsappOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

import { Container } from "../styles/components/ContactUsSectionPageHome";

const ContactUsSectionPageHome: React.FC = () => {
  return (
    <Container>
      <section className="left">
        <h1>Entre em contato com a gente!</h1>
        <p>Entre em contato com a Prisma, queremos tirar suas dúvidas, ouvir suas críticas e sugestões.</p>
        <button type="button" title="Entrar em contato agora via WhatsApp">
          <WhatsappOutlinedIcon sx={{ fontSize: 32, color: "#F9F6F7" }} />
          &nbsp;<h3>Entrar em contato</h3>
        </button>
      </section>
      <section className="right">
        <span className="phone">
          <LocalPhoneOutlinedIcon sx={{ fontSize: 32, color: "#FE6401" }} />
          &nbsp;38 9 9924-0369
        </span>
        <span className="location">
          <LocationOnOutlinedIcon sx={{ fontSize: 32, color: "#FE6401" }} />
          &nbsp;Montes Claros - MG, Brasil
        </span>
        <span className="mail">
          <EmailOutlinedIcon sx={{ fontSize: 32, color: "#FE6401" }} />
          &nbsp;contato@prismasystems.com.br
        </span>
      </section>
    </Container>
  );
};

export default ContactUsSectionPageHome;
