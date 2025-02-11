import React from 'react';
import styled from 'styled-components';
import PostCategory from './PostCategory';
import PostTitle from './PostTitle';
import PostMeta from './PostMeta';
import PostImage from './PostImage';

const PostNewestLargeStyles = styled.div`
    .post-image{
        display: block;
        margin-bottom: 16px;
        height: 433px;
        border-radius: 16px;
    }
    .post-category{
        margin-bottom: 10px;
    }
    .post-title{
        margin-bottom: 10px;
    }
    .post-info{
        display: flex;
        align-items: center;
        gap: 12px;
        font-size: 14px;
        font-weight: 600;
        margin-left: auto;
    }
    .post-dot{
        display: inline-block;
        width: 4px;
        height: 4px;
        background-color: currentColor;
        border-radius: 100rem;
    }
`;

const PostNewestLarge = () => {
    return (
        <PostNewestLargeStyles>
            <PostImage
                url="https://images.unsplash.com/photo-1510519138101-570d1dca3d66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2294&q=80"
                alt=''
            ></PostImage>
            <PostCategory>Kiến Thức</PostCategory>
            <PostTitle size='big'>
                Hướng dẫn setup phòng cực chill dành cho người mới toàn tập 
            </PostTitle>
            <PostMeta></PostMeta>
        </PostNewestLargeStyles>
    );
};

export default PostNewestLarge;