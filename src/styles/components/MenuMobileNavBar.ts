import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 64px;

  position: fixed;

  padding: 0 5rem;

  color: ${(props) => props.theme.colors.text};
  background: ${(props) => props.theme.colors.background};

  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;

  cursor: default;

  transition: box-shadow 0.3s ease-in-out;

  z-index: 1000;

  .logo {
    flex: 2;

    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: flex-start;

    gap: 0.5rem;

    z-index: 10000;

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

  .buttonMobileMenu {
    border: 0;
    font-size: 0;
    background: ${(props) => props.theme.colors.background};

    padding: 0;
    margin: 0;
    z-index: 10000;
  }

  > nav {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    justify-content: center;

    background: ${(props) => props.theme.colors.background};

    -webkit-font-smoothing: antialiased;

    ul {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;

      gap: 5rem;

      height: 100%;

      li {
        display: flex;
        align-items: center;

        list-style-type: none;

        border-bottom: 3px solid transparent;

        transition: border-bottom 0.3s;

        a {
          display: flex;
          align-items: center;

          height: 100%;

          font-size: 2rem;
          font-weight: 700;
          cursor: pointer;
        }
      }
    }
  }

  /* > nav {
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
  } */
`;
