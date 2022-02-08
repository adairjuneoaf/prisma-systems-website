import styled from "styled-components";

import { lighten } from "polished";

export const Container = styled.section`
  width: 100%
  height: auto;

  margin: 0 auto;
`;

export const Content = styled.section`
  width: calc(100% - 30rem);
  height: auto;

  margin: 0 auto;

  .dividerSections {
    width: 100%;
    height: 1px;

    background: ${lighten(0.7, "#313131")};
  }

  @media only screen and (max-width: 600px) {
    width: calc(100% - 10rem);
  }

  @media only screen and (min-width: 600px) {
    width: calc(100% - 10rem);
  }

  @media only screen and (min-width: 768px) {
    width: calc(100% - 10rem);
  }

  @media only screen and (min-width: 992px) {
    width: calc(100% - 15rem);
  }

  @media only screen and (min-width: 1200px) {
    width: calc(100% - 25rem);
  }
`;
