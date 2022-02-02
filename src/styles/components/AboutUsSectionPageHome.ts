import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 64px);

  display: flex;
  align-items: center;
  flex-direction: row;

  //padding: 5rem 0;

  section.right {
    flex: 1;
    cursor: default;

    h1 {
      font-size: 2rem;
      padding: 1.5rem 0;
      line-height: 1.5;

      text-align: justify;
    }

    p {
      font-size: 1rem;
      line-height: 1.5;
      font-weight: 500;
      text-align: justify;

      padding: 0.5rem 0;
    }
  }

  section.left {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    cursor: default;

    flex: 1;

    > img {
      width: 80%;
    }
  }
`;
