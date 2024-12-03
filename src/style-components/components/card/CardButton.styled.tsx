import styled, { css } from "styled-components";
import { myTheme } from "../../Theme.styled";

type StyleBtnPropsType = {
    color?: string
    btnType?: "primary"|"outline"
}

export const CardButton = styled.button<StyleBtnPropsType>`
    width: 86px;
    height: 30px;
    border-radius: 5px;
    border: solid ${props => props.color ||myTheme.colors.blue };

    ${props => props.btnType === "primary" && css<StyleBtnPropsType>`
        background-color: ${props => props.color ||myTheme.colors.blue };
    `}

    ${props => props.btnType === "outline" && css<StyleBtnPropsType>`
        border: 2px solid ${props => props.color || myTheme.colors.blue};
        color: ${props => props.color || myTheme.colors.blue};
        border-radius: 5px;
        background-color: transparent;
    `}
`