import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 64px;

  position: fixed;
  z-index: 1000;

  padding: 0 5rem;

  color: ${(props) => props.theme.colors.text};
  background: ${(props) => props.theme.colors.background};

  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.1);

  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;

  cursor: default;

  .logo {
    flex: 2;

    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: flex-start;

    gap: 0.5rem;

    > img {
      width: 3rem;
      height: auto;
    }

    > h2 {
      font-size: 1.125rem;
      text-transform: uppercase;
      color: ${(props) => props.theme.colors.text};

      .primaryText {
        font-weight: 300;
      }

      .secondaryText {
        font-weight: 700;
      }
    }
  }

  > nav {
    flex: 3;
    max-width: 50rem;

    ul {
      display: flex;
      align-items: center;
      flex-direction: row;
      justify-content: space-around;

      height: 100%;

      li {
        display: flex;
        align-items: center;

        height: 64px;

        list-style-type: none;

        border-bottom: 3px solid transparent;

        transition: border-bottom 0.3s;

        &:hover {
          border-bottom: 3px solid ${(props) => props.theme.colors.orange_prisma};
        }

        a {
          display: flex;
          align-items: center;

          height: 100%;

          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
        }
      }
    }
  }
`;
