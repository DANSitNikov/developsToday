import React from 'react';
import Menu from '../../components/menu';
import styled from 'styled-components';
import CreatePost from '../../components/createPost';
import { useSelector } from 'react-redux';
import { getAddPostStatus } from '../../selectors/selectors';

const CreatePostContainer = styled.div`
    text-align: center;
`;

const New: React.FC = () => {
    const addPostStatus = useSelector(getAddPostStatus);
    console.log(addPostStatus, 'post status');
    return (
        <>
            <Menu />
            <CreatePostContainer>
                <h1>Create new post</h1>
                <CreatePost />
            </CreatePostContainer>
        </>
    );
};

export default New;
