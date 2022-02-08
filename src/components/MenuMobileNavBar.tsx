import React, { useEffect, useState } from "react";

import { Link } from "react-scroll";

import { motion } from "framer-motion";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import { Container } from "../styles/components/MenuMobileNavBar";

const variantsAnimationMobileMenu = {
  open: { opacity: 1, y: 0 },
  close: { opacity: 0, y: "100%" },
};

const MenuMobileNavBar: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);

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

      <button type="button" className="buttonMobileMenu" onClick={() => setShowMenu((showMenu) => !showMenu)}>
        {showMenu ? <CloseIcon sx={{ color: "#FE6401", fontSize: 40 }} /> : <MenuIcon sx={{ color: "#FE6401", fontSize: 40 }} />}
      </button>

      <motion.nav animate={showMenu ? "open" : "close"} variants={variantsAnimationMobileMenu} transition={{ duration: 0.6 }}>
        <ul>
          <li className="li">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-63}
              duration={1000}
              ignoreCancelEvents={true}
              onClick={() => setShowMenu((showMenu) => !showMenu)}
              title="Ir até o Início"
            >
              Início
            </Link>
          </li>
          <li className="li">
            <Link
              to="about-us"
              spy={true}
              smooth={true}
              offset={-63}
              duration={1000}
              ignoreCancelEvents={true}
              onClick={() => setShowMenu((showMenu) => !showMenu)}
              title="Ir até a sessão Sobre"
            >
              Sobre
            </Link>
          </li>
          <li className="li">
            <Link
              to="services"
              spy={true}
              smooth={true}
              offset={-63}
              duration={1000}
              ignoreCancelEvents={true}
              onClick={() => setShowMenu((showMenu) => !showMenu)}
              title="Ir até a sessão de Serviços "
            >
              Serviços
            </Link>
          </li>
          <li className="li">
            <Link
              to="testimonials"
              spy={true}
              smooth={true}
              offset={-63}
              duration={1000}
              ignoreCancelEvents={true}
              onClick={() => setShowMenu((showMenu) => !showMenu)}
              title="Ir até a sessão de Depoimentos "
            >
              Depoimentos
            </Link>
          </li>
          <li className="li">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-63}
              duration={1000}
              ignoreCancelEvents={true}
              onClick={() => setShowMenu((showMenu) => !showMenu)}
              title="Ir até a sessão de Contatos "
            >
              Contato
            </Link>
          </li>
        </ul>
      </motion.nav>
    </Container>
  );
};

export default MenuMobileNavBar;
