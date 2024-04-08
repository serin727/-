import React from "react";
import styled from "styled-components"

const  User = styled.div`
    display : flex;
    height: 24px;
    align-items: center;
    box-sizing: border-box;
    // border-bottom: 1px solid #757575;
    // padding-bottom:12px;
    // margin-bottom:12px;
`;

const UserImg = styled.img`
    width: 24px;
    height: 24px;
    margin: 0px 0px;
    box-sizing: border-box;
`;

const UserInfo = styled.div`
    display: flex;
    flex-direction:column;
    justify-content:center;
`;

const UserName = styled.p`
    font-size: 12px;
    color:#fff;
    box-sizing: border-box;
    margin : 0px;
`;

const PostDate = styled.p`
    font-size: 10px;
    color : #757575;
    margin : 0px;
`;
function UserId(props){
    const{userImg, userId, date}=props;

    return(
        <User>
            <UserImg src={userImg} alt="icon"/>
            <UserInfo>
                <UserName>{userId}456</UserName>
                {/* <PostDate>{date}2024</PostDate> */}
            </UserInfo>
        </User>
    )
}

export default UserId;