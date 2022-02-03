import React from "react";

import MenuNavBar from "../components/MenuNavBar";
import InitialSectionHome from "../components/InitialSectionPageHome";
import FooterSectionPageHome from "../components/FooterSectionPageHome";
import AboutUsSectionPageHome from "../components/AboutUsSectionPageHome";
import ServicesSectionPageHome from "../components/ServicesSectionPageHome";
import ContactUsSectionPageHome from "../components/ContactUsSectionPageHome";
import TestimonialsSectionPageHome from "../components/TestimonialsSectionPageHome";

import { Container, Content } from "../styles/pages/Home";

const Home: React.FC = () => {
  return (
    <Container>
      <MenuNavBar />
      <div id="home" />

      <Content>
        <InitialSectionHome />
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
