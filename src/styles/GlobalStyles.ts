import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root{
    --white-prisma: #F9F6F7;
    --black-gray-prisma: #313131;
    --yellow-medium-prisma: #FEA82F;
    --orange-medium-prisma: #FE6401;
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
    background: var(--white-prisma);
    color: var(--black-gray-prisma);
}

body, input, textarea, button{
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    font-weight: 300;
}

p{
    font-family: 'Inter', sans-serif;
    font-size: 0.875rem;
    font-weight: 300;
}

a{ 
    text-decoration: none;
    color: var(--black-gray-prisma);
}

h1, h2, h3, h4, h5, h6, strong{
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    color: var(--orange-medium-prisma);
}

button {
    cursor: pointer;
}

[disable] {
    opacity: 0.6;
    cursor: not-allowed;
}
`;
