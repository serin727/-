import React from "react";
import styled from "styled-components"

const StyledButton = styled.button`
    padding: 4px 4px;
    color : #fff;
    // line-height: 20px;
    background-color: #01C859;
    border: none;
    border-radius:100px;
    box-sizing: border-box;

    font-weight:700;
    font-size: 16px;
    display: flex;
    align-items: center;
`;

// const ButtonTitle = styled.p`
//     box-sizing: border-box;
//     margin : 0px 8px;
// `;

const ButtonImg = styled.img`
    display : flex;
    width: 24px;
    height: 24px;
    margin-left: 4px;
    background-color: red;
`

function Button(props){
    const {title, onClick, icon} = props;

    return(
        <StyledButton onClick={onClick}>{title || "Button"}<ButtonImg src={icon} alt="icon"/></StyledButton>
    )
}

export default Button;