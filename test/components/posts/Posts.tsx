import React, { useEffect, useState } from 'react';
import PostComponent from './post';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { getComments, getPosts, getPostsStatus } from '../../selectors/selectors';
import { getPostsRequest } from '../../actions/postsAction';
import Loader from '../loader';
import { Status } from '../../reducers/postsReducer';
import Error from '../error';
import { getCommentsRequest } from '../../actions/commentsAction';

const Container = styled.main`
    display: flex;
    justify-content: left;
    flex: 1;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
    padding: 20px 5px;
    max-width: 900px;
    margin: 0 auto;

    @media (max-width: 920px) {
        justify-content: center;
    }
`;

const Posts: React.FC = () => {
    const posts = useSelector(getPosts);
    const comments = useSelector(getComments);
    const status = useSelector(getPostsStatus);
    const [error, setError] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        if (posts.length === 0) {
            dispatch(getPostsRequest());
        }
        if (comments.length === 0) {
            dispatch(getCommentsRequest());
        }
    }, []);

    useEffect(() => {
        if (status === Status.ERROR) {
            setError(true);
        }
    }, [status]);

    return (
        <>
            {posts.length === 0 && !error && <Loader />}
            {posts.length !== 0 && !error && (
                <Container>
                    {posts.map((post, i) => (
                        <PostComponent index={i} key={post.id} id={post.id} title={post.title} body={post.body} />
                    ))}
                </Container>
            )}
            {error && <Error />}
        </>
    );
};

export default Posts;
