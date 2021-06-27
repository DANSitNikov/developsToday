import React from 'react';
import Menu from '../../components/menu';
import styled from 'styled-components';
import CreatePost from '../../components/createPost';

const CreatePostContainer = styled.div`
    text-align: center;
`;

const New: React.FC = () => {
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
