import React from "react";
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
    height:60px;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    align-items: center;
`;

const RightIcon = styled.img`
    width : 24px;
    height: 24px;
`;

const Title = styled.img`
    width: 120px;
    height:32px;
`;

function MainStatusTopBar(props){
    return(
        <Wrapper>
            <StatusBar src="Android Big Status Bar.png"/>
            <Topbar>
                <Title src="logo.png"/><RightIcon src="./Icon/bell.png"/>
            </Topbar>
        </Wrapper>
    )
}

export default MainStatusTopBar;