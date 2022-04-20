import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
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
`;
