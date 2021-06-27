import React from 'react';
import Menu from '../../components/menu';
import styled from 'styled-components';
import CreatePost from '../../components/createPost';
import Head from 'next/head';
import { Container } from '../index';

const CreatePostContainer = styled.div`
    text-align: center;
`;

const New: React.FC = () => {
    return (
        <Container>
            <Head>
                <title>Create new post</title>
                <meta name="description" content="Create new post" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Menu />
            <CreatePostContainer>
                <h1>Create new post</h1>
                <CreatePost />
            </CreatePostContainer>
        </Container>
    );
};

export default New;
