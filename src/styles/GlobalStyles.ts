import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root{
    --white-prisma: #F9F6F7;
    --black-gray-prisma: #313131;
    --yellow-medium-prisma: #FEA82F;
    --orange-medium-prisma: #FE6401;
    
    --swiper-theme-color: #FE6401;
}

* {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
}

html{
    @media(max-width: 1080px){
        font-size: 93.75%;
    }

    @media(max-width: 720px){
        font-size: 87.5%;
    }
}

body {
    -webkit-font-smoothing: antialiased;
    color: ${(props) => props.theme.colors.text};
    background: ${(props) => props.theme.colors.background};
}

body, input, textarea, button{
    font-size: 1rem;
    font-weight: 300;
    font-family: 'Poppins', sans-serif;
}

p{
    font-weight: 300;
    font-size: 0.875rem;
    font-family: 'Inter', sans-serif;
}

a{ 
    text-decoration: none;
    color: ${(props) => props.theme.colors.orange_prisma};
}

h1, h2, h3, h4, h5, h6, strong{
    font-weight: 700;
    font-family: 'Poppins', sans-serif;
    color: ${(props) => props.theme.colors.orange_prisma};
}

button {
    cursor: pointer;
}

[disable] {
    opacity: 0.6;
    cursor: not-allowed;
}

&::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-track {
    background: ${(props) => props.theme.colors.background};
  }

  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors.text};
  }

  &::-webkit-scrollbar-thumb:active {
    background: ${(props) => props.theme.colors.orange_prisma};
  }
`;
