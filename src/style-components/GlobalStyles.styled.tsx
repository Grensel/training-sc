import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`

    *,
    *::before,
    *::after{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: "Inter", cursive;
        font-size: 12px;
        font-weight: 500;
        line-height: 19px;
    }

    h2 {
        font-family: "Inter", sans-serif;
        font-size: 17px;
        font-weight: 700;
        line-height: 20px;
    }
    
`;
