import { styled } from "styled-components";
import { myTheme } from "../../Theme.styled";

export const Card = styled.div `
    max-width: 300px;
    max-height: 350px;
    padding: 10px;
    box-shadow: 0px 4px 20px 5px rgba(0, 0, 0, 0.1);
    background-color: ${myTheme.colors.white};
    border-radius: 15px;
`