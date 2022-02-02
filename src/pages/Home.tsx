import React from "react";

import MenuNavBar from "../components/MenuNavBar";
import InitialSectionHome from "../components/InitialSectionPageHome";
import AboutUsSectionPageHome from "../components/AboutUsSectionPageHome";
import ServicesSectionPageHome from "../components/ServicesSectionPageHome";
import ContactUsSectionPageHome from "../components/ContactUsSectionPageHome";
import TestimonialsSectionPageHome from "../components/TestimonialsSectionPageHome";

import { Container, Content } from "../styles/pages/Home";

const Home: React.FC = () => {
  return (
    <Container>
      <MenuNavBar />

      <Content>
        <InitialSectionHome />
        <div className="dividerSections" />
        <AboutUsSectionPageHome />
        <div className="dividerSections" />
        <ServicesSectionPageHome />
        <div className="dividerSections" />
        <TestimonialsSectionPageHome />
        <div className="dividerSections" />
        <ContactUsSectionPageHome />
      </Content>
    </Container>
  );
};

export default Home;
