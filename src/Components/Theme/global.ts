import { createGlobalStyle } from "styled-components";
import { normalize } from "polished";

export const GlobalStyled = createGlobalStyle`
${normalize()}
html{
    font-size: 16px;
    box-shadow: box-sizing;
    background-color: ${({ theme }) => theme.slate["50"]}
}
*,*:before,*:after{
    box-sizing: inherit;
}
 body{
    margin: 0;
    font-family: 'Courier New', Courier, monospace;
    font-size: 20px;
 }
`;
