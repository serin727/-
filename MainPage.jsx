import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import PostList from "../list/PostList";
import Button from "../ui/button";
import StatusTopBar from "../ui/mainstatustopbar";

import data from '../../data.json';

const Wrapper = styled.div`
    width: 360px;
    height: 800px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #39393B;
    color: #fff;
`;

const Container = styled.div`
    width: 100%;
    max-width: 320px;
`;

function MainPage(props){

    const navigate = useNavigate( );

    return(
        <Wrapper>
            <StatusTopBar></StatusTopBar>
            <Container>
                <PostList posts={data} onClickItem={(p)=>{navigate('/post/'+p.id)}}></PostList>
                <Button title="글 작성하기" onCllick={()=>{navigate('/write')}}></Button>
            </Container>
        </Wrapper>
    )
}

export default MainPage;