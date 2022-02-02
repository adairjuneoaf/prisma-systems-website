import React from "react";

import { ThemeProvider } from "styled-components";
import { /* ThemeDark ,*/ ThemePrisma } from "./styles/theme"; //Tema Dark será incrementado ao final do projeto.

import Home from "./pages/Home";

import { Container } from "./styles/app";
import GlobalStyles from "./styles/GlobalStyles";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={ThemePrisma}>
      <Container>
        <Home />
        <GlobalStyles />
      </Container>
    </ThemeProvider>
  );
};

export default App;
