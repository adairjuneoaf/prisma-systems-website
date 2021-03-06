import styled from "styled-components";

import { lighten } from "polished";

export const Container = styled.section`
  width: 100%;
  height: auto;

  padding: 5rem 0;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  cursor: default;

  > h1 {
    // font-size: 2rem;
    font-weight: 700;
    line-height: 1.5;
    padding: 5rem 0;
  }
`;

export const Content = styled.section`
  width: 100%;

  .testimonials {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-around;

    gap: 2rem;

    .testimonial {
      display: flex;
      flex-direction: column;

      gap: 1.5rem;
      padding: 1.5rem;
      border-radius: 16px;

      // box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.08);

      // border: 1px solid rgba(0, 0, 0, 0.04);

      > p {
        // font-size: 0.875rem;
        font-weight: 300;
        line-height: 1.5;
        text-align: justify;
        font-style: italic;

        span.highlight {
          color: ${(props) => props.theme.colors.orange_prisma};
        }

        .highlightedTestimonial {
          font-size: 1.875rem;
          line-height: 0;
          font-weight: 500;
          color: ${(props) => props.theme.colors.orange_prisma};
        }
      }

      .footerTestimonial {
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: flex-start;

        padding-bottom: 2rem;

        gap: 1rem;

        > img {
          width: 48px;
          clip-path: circle();
        }

        > p {
          font-weight: 500;
          color: ${lighten(0.4, "#313131")};
        }
      }
    }
  }
`;
