import React from 'react';
import { useSelector } from 'react-redux';
import { getAddPostStatus } from '../../selectors/selectors';
import { AddPostStatus } from '../../reducers/postsReducer';
import styled from 'styled-components';

const NotificationContainer = styled.div`
    position: fixed;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);
    width: 300px;
    height: 100px;
    background-color: whitesmoke;
    border: 2px solid grey;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ErrorMessage = styled.h3`
    text-align: center;
    color: red;
`;

const SuccessMessage = styled.h3`
    text-align: center;
    color: #0eac0e;
`;

const Notification: React.FC = () => {
    const addPostStatus = useSelector(getAddPostStatus);

    console.log(addPostStatus);

    return (
        <>
            {(addPostStatus === AddPostStatus.ERROR || addPostStatus === AddPostStatus.OK) && (
                <NotificationContainer>
                    {addPostStatus === AddPostStatus.ERROR && <ErrorMessage>The post was not publish!</ErrorMessage>}
                    {addPostStatus === AddPostStatus.OK && (
                        <SuccessMessage>The post was successfully publish!</SuccessMessage>
                    )}
                </NotificationContainer>
            )}
        </>
    );
};

export default Notification;
