import React, { useEffect } from 'react';
import PostComponent from './post';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../selectors/selectors';
import { getPostsRequest } from '../../actions/postsAction';

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
    const dispatch = useDispatch();

    useEffect(() => {
        if (posts.length === 0) {
            dispatch(getPostsRequest());
        }
    }, []);

    return (
        <>
            {posts.length === 0 && <div>loading...</div>}
            {posts.length !== 0 && (
                <Container>
                    {posts.map((post) => (
                        <PostComponent key={post.id} id={post.id} title={post.title} body={post.body} />
                    ))}
                </Container>
            )}
        </>
    );
};

export default Posts;
