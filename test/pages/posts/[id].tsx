import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Menu from '../../components/menu';
import axios from 'axios';
import { Post } from '../../reducers/postsReducer';
import styled from 'styled-components';

const PostContainer = styled.div``;

const PostHeader = styled.h1`
    text-align: center;
`;

const PostBodyWrapper = styled.div`
    max-width: 800px;
    margin: 0 auto;
`;

const PostBody = styled.p`
    text-align: justify;
    color: #727272;
    font-size: 20px;
`;

const PostComponent: React.FC = () => {
    const [post, setPost] = useState<Post>();
    const router = useRouter();

    useEffect(() => {
        const id = router.query.id;

        (async function () {
            const response = await axios.get(`https://simple-blog-api.crew.red/posts/${id}`);
            setPost(response.data);
        })();
    }, []);

    return (
        <>
            <Menu />
            {post !== undefined && (
                <PostContainer>
                    <PostHeader>{post?.title}</PostHeader>
                    <PostBodyWrapper>
                        <PostBody>{post?.body}</PostBody>
                    </PostBodyWrapper>
                </PostContainer>
            )}
            {post === undefined && <div>loading...</div>}
        </>
    );
};

export default PostComponent;
