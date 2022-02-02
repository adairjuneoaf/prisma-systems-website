import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 64px);

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  cursor: default;

  h1 {
    font-size: 2rem;
    font-weight: 700;
    line-height: 1.5;
    padding: 1rem 0;
  }

  > p {
    max-width: 50%;
    padding: 1rem 0;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.5;
    text-align: justify;

    span.highlight {
      color: ${(props) => props.theme.colors.orange_prisma};
    }
  }

  div.cards {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;

    gap: 2rem;
    padding: 4rem 0;

    .card {
      width: 22rem;
      height: 22rem;

      border-radius: 4px 4px 0 0;
      box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.06);

      border-bottom: 5px inset ${(props) => props.theme.colors.orange_prisma};

      .content {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-around;

        width: 100%;
        height: 100%;

        padding: 1rem 1rem;

        > h3 {
          font-weight: 700;
          font-size: 1.5rem;
          color: ${(props) => props.theme.colors.text};
        }

        > p {
          width: 100%;
          font-weight: 500;
          line-height: 1.4;
          min-height: 8rem;
          text-align: center;
        }
      }
    }
  }
`;
