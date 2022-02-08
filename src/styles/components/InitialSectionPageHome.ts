import styled from "styled-components";

import { darken } from "polished";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  flex-direction: row;

  padding: 5rem 0;

  section.left {
    flex: 1;
    cursor: default;

    h1 {
      //font-size: 2rem;
      padding: 1rem 0;
      line-height: 1.5;

      text-align: justify;
    }

    p {
      //font-size: 1rem;
      line-height: 1.5;
      font-weight: 500;
      text-align: justify;

      padding: 2rem 0 3rem 0;
    }

    .buttonContact {
      border: 0;
      border-radius: 1rem;
      padding: 1rem 1.5rem;

      //font-size: 1rem;
      font-weight: 700;

      color: ${(props) => props.theme.colors.background};
      background: ${(props) => props.theme.colors.orange_prisma};

      transition: background-color 0.2s ease-in-out;

      cursor: pointer;

      &:hover {
        background: ${darken(0.1, "#FE6401")};
      }
    }
  }

  section.right {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    cursor: default;

    flex: 1;

    > img {
      width: 80%;
    }
  }

  @media (max-width: 1024px) {
    display: flex;
    align-items: center;
    flex-direction: column;

    gap: 3rem;

    section.left {
      display: flex;
      flex-direction: column;
      align-items: center;

      > h1 {
        text-align: center;
      }

      .buttonContact {
        width: 100%;
      }
    }

    section.right {
      > img {
        margin: 0 auto;
        width: 70%;
      }
    }
  }

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    flex-direction: column;

    gap: 3rem;

    section.left {
      display: flex;
      flex-direction: column;
      align-items: center;

      > h1 {
        text-align: center;
      }

      .buttonContact {
        width: 100%;
      }
    }

    section.right {
      > img {
        margin: 0 auto;
        width: 80%;
      }
    }
  }
`;
