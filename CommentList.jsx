import React from "react";
import styled from "styled-components";
import CommentItem from "../page/CommentItem";

const Wrapper =styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-top:16px;
    // &>*{
    //     :not(:last-child){
    //         margin-bottom: 0px;
    //     }
    // }
`

function CommentList(props){
    const {comments} =props;

    return(
        <Wrapper>
            {comments.map((comment, index)=>{
                return(
                    <CommentItem key={comment.id} comment={comment}></CommentItem>
                )
            })}
        </Wrapper>
    )
}

export default CommentList;