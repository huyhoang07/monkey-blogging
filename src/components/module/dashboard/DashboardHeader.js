import React from 'react';
import styled from 'styled-components';
import Button from '../../button/Button';

const DashboardHeaderStyles = styled.div`
    background-color: white;
    padding: 20px;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: flex-end;
    gap: 20px;
    .header-avata{
        width: 52px;
        height: 52px;
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 100rem;
        }
    }
`;

const DashboardHeader = () => {
    return (
        <DashboardHeaderStyles>
            <Button to='/dashboard' className= 'header-button' height= '52px'>
                Write new post
            </Button>
            <div className='header-avata'>
                <img
                    src='/hoang.jpeg'
                    alt=''
                />
            </div>
        </DashboardHeaderStyles>
    );
};

export default DashboardHeader;