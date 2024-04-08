import React, { useState } from "react";
import styled from "styled-components";

import CommentList from "../list/CommentList";
import Button from "../ui/button";
import TextInput from "../ui/TextInput";
import UserId from "../ui/userId";
import StatusTopBar from "../ui/statustopbar";

import data from '../../data.json'; //질문하기
import { useNavigate, useParams } from "react-router-dom";


const Wrapper = styled.div`
    padding: 0px 20px;
    width: 360px;
    height: 800px;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #39393B;
    color: #fff;
`;

const Container = styled.div`
    width: 100%;
    max-width: 360px;
`
const PostContainer = styled.div`
    background-color: #48484A;
    padding: 20px 12px;
    border-radius: 12px;
    box-sizing: border-box;
    margin-bottom: 12px;
`
const TitleText = styled.p`
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 12px;
`
const ContentText = styled.p`
    fonr-size: 12px;
    white-space: pre-wrap;
    margin: 0px;
`

const CommentLabel = styled.p`
    font-size: 16px;
    font-weight: 500;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    margin:0;
    margin-bottom: 8px;
`
const CommentLabelCount = styled.p`
    box-sizing: border-box;
    font-size: 12px;
    margin: 0px;
    margin-left:4px;
`;

const styles = {
    PostUserId:{
        borderBottom: "1px solid #757575",
        paddingBottom:12,
        marginBottom:12
    }
}

function PostViewPage(props){
    // const postId = 1; //임시로 부여한 번호
    const navigate = useNavigate();
    const postId = useParams().id;

    const post = data.find((item)=>{
        return item.id == postId; //데이터의 id와 postId가 같은 데이터를 찾기
    })

    const [comment, setComment] = useState('');

    return (
        <Wrapper>
            <StatusTopBar/>
            <Container>
                {/* <Button title="뒤로가기" onClick={()=>{alert('뒤로가기!')}}><img src="#"/></Button> */}

                    <PostContainer>
                        {/* 컴포넌트에 따로 스타일링 어떻게 하는지 */}
                        <UserId style={styles.PostUserId}></UserId>
                        <TitleText>{post.title}</TitleText>
                        <ContentText>{post.content}</ContentText>
                    </PostContainer>

                    <CommentLabel>댓글<CommentLabelCount>5</CommentLabelCount></CommentLabel>
                    <TextInput height={48} margin-bottom={16} value={comment} onChange={(e)=> setComment(e.target.value)}></TextInput>
                    <Button title="댓글 작성하기" onClick={()=>{alert('댓글 작성하기!')}}></Button>
                    <CommentList comments={post.comments}></CommentList>
                    
            </Container>
        </Wrapper>
    )
}

export default PostViewPage;