import React from 'react';
import styled from 'styled-components';
import PostCategory from './PostCategory';
import PostTitle from './PostTitle';
import PostMeta from './PostMeta';
import PostImage from './PostImage';

const PostItemStyles = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    .post-image{
        display: block;
        height: 202px;
        margin-bottom: 20px;
        width: 100%;
        border-radius: 16px;
    }
    .post-category{
        margin-bottom: 10px;
    }
    .post-title{
        margin-bottom: 10px;
    }
    @media screen and (max-width: 1023.98px) {
    .post {
      &-image {
        aspect-ratio: 16/9;
        height: auto;
      }
    }}
`;

const PostItem = () => {
    return (
        <PostItemStyles>
            <PostImage
                url="https://images.unsplash.com/photo-1570993492881-25240ce854f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2290&q=80"
                alt=''
            ></PostImage>
            <PostCategory>Kiến thức</PostCategory>
            <PostTitle size='normal'>
                Hướng dẫn setup phòng cực chill dành cho người mới toàn tập 
            </PostTitle>
            <PostMeta></PostMeta>
        </PostItemStyles>
    );
};

export default PostItem;