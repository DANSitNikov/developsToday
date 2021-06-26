import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { publishNewPost } from '../../actions/postsAction';

const Form = styled.form`
    max-width: 800px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 10px;
`;

const Title = styled.input`
    width: 100%;
    height: 50px;
    font-size: 25px;
    font-weight: 500;
    border: 3px solid whitesmoke;
    padding-left: 10px;
    outline: none;
    color: #727272;
`;

const Content = styled.textarea`
    width: 100%;
    color: #727272;
    padding: 10px;
    outline: none;
    border: 3px solid whitesmoke;
    resize: vertical;
    font-size: 22px;
    min-height: 250px !important;
`;

const PublishPost = styled(Button)`
    margin: 20px 0 !important;
`;

const Label = styled.label`
    font-size: 25px;
    text-align: left;
    margin-bottom: 15px;
    font-weight: 500;
`;

const CreatePost: React.FC = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const dispatch = useDispatch();

    const submitPost = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();

        dispatch(publishNewPost(title, content));
    };

    return (
        <Form>
            <Label htmlFor="title">Title</Label>
            <Title onChange={(e) => setTitle(e.target.value)} id="title" type="text" />
            <br />
            <br />
            <Label htmlFor="content">Content</Label>
            <Content onChange={(e) => setContent(e.target.value)} id="content" />
            <PublishPost onClick={submitPost} type="submit">
                Publish new post
            </PublishPost>
        </Form>
    );
};

export default CreatePost;
