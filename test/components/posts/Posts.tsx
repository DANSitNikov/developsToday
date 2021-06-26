import React from 'react';
import Post from './post';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { getPosts } from '../../selectors/selectors';

const Container = styled.main`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
    padding: 20px 5px;
`;

const Posts: React.FC = () => {
    const posts = useSelector(getPosts);

    console.log(posts);

    return (
        <>
            {posts.length === 0 && <div>loading...</div>}
            {posts.length !== 0 && (
                <Container>
                    {posts.map((post) => (
                        <Post key={post.id} id={post.id} title={post.title} description={post.body} />
                    ))}
                </Container>
            )}
        </>
    );
};

export default Posts;
