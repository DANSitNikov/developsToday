import React from 'react';
import { useSelector } from 'react-redux';
import { getAddCommentStatus, getAddPostStatus } from '../../selectors/selectors';
import { AddStatus } from '../../reducers/postsReducer';
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

interface Props {
    type: string;
}

const Notification: React.FC<Props> = (props) => {
    const { type } = props;
    const addPostStatus = useSelector(getAddPostStatus);
    const addCommentStatus = useSelector(getAddCommentStatus);

    console.log(type, addCommentStatus);

    return (
        <>
            {((type === 'post' && addPostStatus === AddStatus.ERROR) || addPostStatus === AddStatus.OK) && (
                <NotificationContainer>
                    {addPostStatus === AddStatus.ERROR && <ErrorMessage>The post was not publish!</ErrorMessage>}
                    {addPostStatus === AddStatus.OK && (
                        <SuccessMessage>The post was successfully publish!</SuccessMessage>
                    )}
                </NotificationContainer>
            )}
            {type === 'comment' && addCommentStatus === AddStatus.ERROR && (
                <NotificationContainer>
                    {addCommentStatus === AddStatus.ERROR && <ErrorMessage>The comment was not send!</ErrorMessage>}
                </NotificationContainer>
            )}
        </>
    );
};

export default Notification;
