import React from "react";

import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";

import { Container, Content } from "../styles/components/FooterSectionPageHome";

const FooterSectionPageHome: React.FC = () => {
  return (
    <Container>
      <Content>
        <div className="left">
          <img src="/svg/logo_white_prisma_systems.svg" alt="Logo da empresa." />
          <h3>&copy; 2021 Prisma Systems</h3>
          <h3>Todos os direitos reservados.</h3>
        </div>
        <div className="right">
          <a href="/" title="Navegar até o Instagram da Prisma Systems.">
            <InstagramIcon sx={{ fontSize: 32, color: "#F2F7F9" }} />
          </a>
          <a href="/" title="Navegar até a página no Facebook da Prisma Systems.">
            <FacebookOutlinedIcon sx={{ fontSize: 32, color: "#F2F7F9" }} />
          </a>
          <a href="/" title="Navegar até o canal no YouTube da Prisma Systems.">
            <YouTubeIcon sx={{ fontSize: 32, color: "#F2F7F9" }} />
          </a>
        </div>
      </Content>
    </Container>
  );
};

export default FooterSectionPageHome;
