import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import Menu from '../components/menu';
import Posts from '../components/posts';
import Notification from '../components/notification';

export const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
`;

export default function Home(): JSX.Element {
    return (
        <Container>
            <Head>
                <title>Posts</title>
                <meta name="description" content="All posts" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Menu />
            <Posts />
            <Notification type="post" />
        </Container>
    );
}
