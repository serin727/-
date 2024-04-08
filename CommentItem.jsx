import React from "react";
import styled from "styled-components";
import UserId from "../ui/userId";

const Wrapper = styled.div`
    width: 320px;
    padding: 10px 12px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid grey;
    cursor: pointer;
`;

const ContentText = styled.p`
    font-size: 12px;
    white-space: pre-wrap;
    width : 174px;
`;

const HeartButton = styled.button`
    width : 24px;
    height :24px;
    background-color: #39393B;
    border: none;
`;
function CommentItem(p){
    const {comment} = p;
    return(
        <Wrapper>
            <UserId></UserId>
            <ContentText>{comment.content}</ContentText>
            <HeartButton><img src="./Icon/Heart/unfill.png"/></HeartButton>
        </Wrapper>
    )
}

export default CommentItem;