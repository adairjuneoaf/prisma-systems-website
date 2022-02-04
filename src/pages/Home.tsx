import React from "react";

import { motion } from "framer-motion";

import MenuNavBar from "../components/MenuNavBar";
import InitialSectionHome from "../components/InitialSectionPageHome";
import FooterSectionPageHome from "../components/FooterSectionPageHome";
import AboutUsSectionPageHome from "../components/AboutUsSectionPageHome";
import ServicesSectionPageHome from "../components/ServicesSectionPageHome";
import ContactUsSectionPageHome from "../components/ContactUsSectionPageHome";
import TestimonialsSectionPageHome from "../components/TestimonialsSectionPageHome";

import { Container, Content } from "../styles/pages/Home";

const Home: React.FC = () => {
  const varAnimationAxleYFramerMotion = {
    visible: { y: 0, opacity: 1 },
    hidden: { y: -100, opacity: 0 },
  };

  return (
    <Container>
      <motion.div initial="hidden" animate="visible" variants={varAnimationAxleYFramerMotion} transition={{ ease: "easeInOut", duration: 0.8 }}>
        <MenuNavBar />
      </motion.div>
      <div id="home" />

      <Content>
        {/* <motion.div initial="hidden" animate="visible" variants={varAnimationAxleXFramerMotion} transition={{ ease: "easeOut", duration: 1, delay: 0.2 }}> */}
        <InitialSectionHome />
        {/* </motion.div> */}
        <div className="dividerSections" id="about-us" />
        <AboutUsSectionPageHome />
        <div className="dividerSections" id="services" />
        <ServicesSectionPageHome />
        <div className="dividerSections" id="testimonials" />
        <TestimonialsSectionPageHome />
        <div className="dividerSections" id="contact" />
        <ContactUsSectionPageHome />
      </Content>

      <FooterSectionPageHome />
      <div id="footer" />
    </Container>
  );
};

export default Home;
