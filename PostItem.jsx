import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    box-sizing : border-box;
    width: 320px;
    padding: 0px 12px;
    display: flex;
    flex-direction: column;
    aligin-items: flex-start;
    justify-content: center;
    border-bottom: 1px solid rgba(117, 117, 117, 0.5);
    cusor: pointer;
    background: #39393B;
`;

const TitleText = styled.p`
    font-size: 16px;
    font-weight: 500;
    margin-top: 20px;
    margin-bottom: 12px;
    color: #fff;
    font-weight: 700;
`;

const TextsBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 11px;
    height: 16px;
`;

const DateText = styled.p`
    font-size: 12px;
    color: #757575;
`;

const ChatText = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: #757575;
    font-size: 12px;
`;

const ChatIcon = styled.img`
  margin-right: 4px;
`;

// post = {title:"제목"}

function PostItem(p){
    const{post, onClick} = p;
    return(
        <Wrapper onClick={onClick}>
            <TitleText>{post.title}</TitleText>
            <TextsBox>
                <DateText>{post.date}</DateText>
                <ChatText><ChatIcon src="./public/icon_chat" alt="ChatIcon" />{post.chatnum}</ChatText>
            </TextsBox>
        </Wrapper>
    )
}

export default PostItem;