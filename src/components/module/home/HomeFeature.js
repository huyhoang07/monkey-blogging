import React from 'react';
import PostFeatureItem from '../post/PostFeatureItem';
import styled from 'styled-components';
import Heading from '../../layout/Heading';

const HomeFeatureStyles = styled.div`
    
`;

const HomeFeature = () => {
    return (
        <HomeFeatureStyles className='home-block'>
            <div className='container'>
                <Heading>Bài Viết Nổi Bật</Heading>
                <div className='grid-layout'>
                    <PostFeatureItem></PostFeatureItem>
                    <PostFeatureItem></PostFeatureItem>
                    <PostFeatureItem></PostFeatureItem>
                </div>
            </div>
        </HomeFeatureStyles>
    );
};

export default HomeFeature;