import React, { useEffect } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import Menu from '../components/menu';
import Posts from '../components/posts';
import { useDispatch } from 'react-redux';
import { getPostsRequest } from '../actions/postsAction';

const Container = styled.div`
    max-width: 1500px;
    margin: 0 auto;
`;

export default function Home() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPostsRequest());
    }, []);

    return (
        <Container>
            <Head>
                <title>Posts</title>
                <meta name="description" content="All posts" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Menu searchVisibility={true} addVisibility={true} />
            <Posts />
        </Container>
    );
}

// export const getStaticProps: GetStaticProps = async () => {
//     const response = await axios.get('https://simple-blog-api.crew.red/posts');
//     console.log(response);
//     return 'sdf';
// };
