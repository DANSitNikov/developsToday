import Link from 'next/link';
import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';

const Container = styled.div`
    max-width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 100px auto;
`;

const Custom404: React.FC = () => {
    return (
        <Container>
            <Head>
                <title>404</title>
                <meta name="description" content="error" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h2>404 - Page Not Found</h2>
            <Link href="/">
                <a>Go to posts</a>
            </Link>
        </Container>
    );
};

export default Custom404;
