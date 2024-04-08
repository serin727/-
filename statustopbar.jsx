import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components"

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 360px;
    height: 84px;
    box-sizing: border-box;
    margin-bottom: 20px;
`;

const StatusBar = styled.img`
    width: 360px;
    height : 24px;
`;

const Topbar = styled.div`
    height: 60px;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    align-items: center;
`;

const RightIcon = styled.div`
    width : 24px;
    height: 24px;
    border: 0px;
`;

const Title = styled.p`
    font-size: 24px;
    color : #fff;

`;

const Button = styled.button`
    background-color: #39393B;
    width: 24px;
    height: 24px;
    border: none;
`;

function StatusTopBar(props){

    const navigate = useNavigate();
    return(
        <Wrapper>
            <StatusBar src="Android Big Status Bar.png"/>
            <Topbar>
                {/* 버튼 이미지 보였다 안보였다 하게 할 것 */}
                <Button onClick={()=>{navigate('/')} }><img src="./public/back.png"/></Button> 
                <Title></Title>
                <RightIcon/>
            </Topbar>
        </Wrapper>
    )
}

export default StatusTopBar;