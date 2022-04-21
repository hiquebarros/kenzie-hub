import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    outline: 0;
}

:root{
    --pink: #FF577F;
    --black: #121214;
}

body{
    background: var(--black);
}
body, input, button{
    font-family: 'Inter';
    font-weight: 500;
}
button{
    cursor: pointer;
}
span{
    color: #868E96;
}
`;
