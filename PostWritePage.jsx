import React, {useState} from "react";
import styled from "styled-components";

import Button from "../ui/button";
import TextInput from "../ui/TextInput";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`

`;

const Container = styled.div`

`;

function PostWritePage(props){
    const  [title, setTitle] = useState('');
    const  [content, setContent] = useState('');

    const navigate = useNavigate();

    return(
        <Wrapper>
            <Container>
                <TextInput height={48} placeholder="제목을 입력하세요." value={title} onChange={(e)=> setTitle(e.target.value)}></TextInput>
                <TextInput height={480} placeholder="제목을 입력하세요." value={content} onChange={(e)=> setContent(e.target.value)}></TextInput>

                <Button title='글 작성하기' onClick={()=> {navigate('/')}}></Button>
            </Container>
        </Wrapper>
    )
}

export default PostWritePage;