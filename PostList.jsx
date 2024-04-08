import React from "react";
import styled from "styled-components";
import PostItem from "../page/PostItem";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    // &>*{
    //     :not(:last-child){
    //         margin-bottom: 0px;
    //     }
    }
`;

const TopName = styled.div`
    box-sizing : border-box;
    background-color : #48484A;
    width:320px;
    color : #fff;
    font-size: 16px;
    display : flex;
    align-items: center;
    padding-left: 12px;
    height: 32px;
    border-radius : 8px 8px 0px 0px;
    margin-bottom: 8px;
`;
// 카드 간격이 좁혀지지 않음

function PostList(props){
    //posts: 전체 글 데이터 //onClickItem : 아이템을 클릭했을 때 작동할 함수
    const{posts, onClickItem} = props;

    return(
        <Wrapper>
            <TopName>오늘의 새 글 </TopName>
            {posts.map((post, index)=>{
                return(
                    <PostItem key={post.id} post={post} onClick={()=>onClickItem(post)}></PostItem> //여기서 매개변수가 결정
                )
            })}
        </Wrapper>
    )
}

export default PostList;