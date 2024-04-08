import React from "react";
import styled from "styled-components"

const StyledTextArea = styled.textarea`
// styled.뒤에 오는것은 html태그
    height: ${props => props.height}px;
    width: 320px;
    font-size: 16px;
    line-height: 20px;
    box-sizing: border-box;
    padding: 12px;
    border-radius:12px;
    border : 2px solid #757575;
    display: flex;
    align-items: center;

    &:focus {
        border-color: #01C859; /* 포커스를 받았을 때의 테두리 색상 */
        outline: none; /* 포커스 테두리 제거 */
      }
`;

function TextInput(props){
    const {height, value, onChange, placeholder} = props;

    return(
        <StyledTextArea
            placeholder={placeholder}
            height={height}
            value={value}
            onChange={onChange}
            >
        </StyledTextArea>
    )
}

export default TextInput;