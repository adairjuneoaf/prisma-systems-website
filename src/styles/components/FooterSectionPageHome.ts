import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;

  padding: 5rem 0;

  background: ${(props) => props.theme.colors.orange_prisma};
  color: ${(props) => props.theme.colors.text};
`;

export const Content = styled.div`
  width: calc(100% - 30rem);
  height: 100%;

  margin: 0 auto;

  //padding: 3rem 0;

  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;

  .left {
    flex: 2;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    > img {
      width: 96px;
      padding-bottom: 1rem;
    }

    h3 {
      font-size: 0.875rem;
      line-height: 1.8;
      font-weight: 400;
      color: ${(props) => props.theme.colors.background};
    }
  }

  .right {
    flex: 1;

    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: flex-end;

    gap: 1rem;

    a {
      font-size: 0;
    }
  }

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column-reverse;

    gap: 3rem;

    .left {
      align-items: center;
      justify-content: center;
    }
    .right {
      gap: 3rem;
    }
  }

  @media (max-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column-reverse;

    gap: 4rem;

    .left {
      align-items: center;
      justify-content: center;
    }
    .right {
      gap: 3rem;
    }
  }
`;
