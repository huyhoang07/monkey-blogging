import React from 'react';
import styled from 'styled-components';
import PostCategory from './PostCategory';
import PostTitle from './PostTitle';
import PostMeta from './PostMeta';
import PostImage from './PostImage';

const PostFeatureItemStyles = styled.div`
    width: 100%;
    border-radius: 16px;
    position: relative;
    height: 169px;
    .post-overlay{
        position: absolute;
        inset: 0;
        border-radius: 16px;
        background: linear-gradient(
            179.77deg,
            #6b6b6b 36.45%,
            rgba(163, 163, 163, 0.622265) 63.98%,
            rgba(255, 255, 255, 0) 99.8%
        );
        mix-blend-mode: multiply;
        opacity: 0.6;
    }
    .post-content{
        position: absolute;
        inset: 0;
        z-index: 10;
        padding: 20px;
        color: white;
    }
    .post-top{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 16px;
    }

    @media screen and (min-width: 1024px) {
    height: 272px;
    }
    @media screen and (max-width: 1023.98px) {
        .post {
        &-content {
            padding: 15px;
        }
        }
    }
`;

const PostFeatureItem = () => {
    return (
        <PostFeatureItemStyles>
            <PostImage
                url="https://images.unsplash.com/photo-1614624532983-4ce03382d63d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2662&q=80"
                alt='unsplash'
                to="/"
            ></PostImage>
            <div className='post-overlay'></div>
            <div className='post-content'>
                <div className='post-top'>
                    <PostCategory>Kiến thức</PostCategory>
                    <PostMeta></PostMeta>
                </div>
                <PostTitle size='big'>
                    Hướng dẫn setup phòng cực chill dành cho người mới toàn tập
                </PostTitle>
            </div>
        </PostFeatureItemStyles>
    );
};

export default PostFeatureItem;