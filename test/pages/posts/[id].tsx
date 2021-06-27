import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Menu from '../../components/menu';
import axios from 'axios';
import { Post } from '../../reducers/postsReducer';
import styled from 'styled-components';
import Loader from '../../components/loader';
import Error from '../../components/error';
import Comments from '../../components/comment';

const PostContainer = styled.div`
    max-width: 900px;
    margin: 0 auto;
`;

const PostContent = styled.div`
    width: 100%;
    padding-bottom: 20px;
    border-bottom: 2px solid whitesmoke;
`;

const PostHeader = styled.h1`
    text-align: center;
`;

const PostBodyWrapper = styled.div`
    padding: 10px;
`;

const PostBody = styled.p`
    text-align: justify;
    color: #727272;
    font-size: 20px;
    margin: 0;
`;

const PostComponent: React.FC = () => {
    const [post, setPost] = useState<Post>();
    const [error, setError] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const id = router.query.id;

        if (id !== undefined) {
            (async function () {
                try {
                    const response = await axios.get(`https://simple-blog-api.crew.red/posts/${id}`);
                    setPost(response.data);
                } catch (err) {
                    console.log(err);
                    setError(true);
                }
            })();
        }
    }, [router]);

    return (
        <>
            <Menu />
            {post !== undefined && !error && (
                <PostContainer>
                    <PostContent>
                        <PostHeader>{post?.title}</PostHeader>
                        <PostBodyWrapper>
                            <PostBody>{post?.body}</PostBody>
                        </PostBodyWrapper>
                    </PostContent>
                    <Comments />
                </PostContainer>
            )}
            {post === undefined && !error && <Loader />}
            {error && <Error />}
        </>
    );
};

export default PostComponent;
