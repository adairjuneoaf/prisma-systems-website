import styled from "styled-components";

import { darken } from "polished";

export const Container = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;

  padding: 5rem 0;

  gap: 4rem;

  cursor: default;

  .left {
    flex: 2;
    > h1 {
      // font-size: 2rem;
      line-height: 1.4;

      padding: 1rem 0;
    }

    > p {
      // font-size: 1rem;
      line-height: 1.4;
      font-weight: 500;
      padding-bottom: 1rem;
    }

    > button {
      display: flex;
      align-items: center;
      flex-direction: row;

      gap: 0.25rem;

      padding: 1rem 1.5rem;

      font-size: 0;
      border: 0;
      border-radius: 1rem;
      background: ${(props) => props.theme.colors.orange_prisma};

      cursor: pointer;

      transition: background-color 0.2s ease-in-out;

      &:hover {
        background: ${darken(0.1, "#FE6401")};
      }

      > h3 {
        font-size: 1rem;
        font-weight: 700;
        color: ${(props) => props.theme.colors.background};
      }
    }
  }

  .right {
    flex: 1;

    margin: 0 auto;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    gap: 1rem;

    .phone,
    .location,
    .mail {
      display: flex;
      align-items: center;
      flex-direction: row;

      font-size: 0.875rem;
      font-weight: 500;
    }
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;

    .left {
      p {
        text-align: justify;
      }

      > button {
        width: 100%;

        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
`;
