import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { publishNewPost } from '../../actions/postsAction';
import { useRouter } from 'next/router';

const Form = styled.form`
    max-width: 800px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 10px;
`;

const FormItem = styled.div`
    text-align: left;
    position: relative;
`;

const Warning = styled.span`
    position: absolute;
    top: 0;
    left: 150px;
    color: red;
    font-size: 22px;
`;

const Title = styled.input`
    width: 100%;
    height: 50px;
    font-size: 25px;
    font-weight: 500;
    border: 3px solid #d5d3d3;
    padding-left: 10px;
    outline: none;
    color: #727272;
`;

export const Content = styled.textarea`
    width: 100%;
    color: #727272;
    padding: 10px;
    outline: none;
    border: 3px solid #d5d3d3;
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
    const [isTitleOk, setIsTitleOk] = useState(true);
    const [isContentOk, setIsContentOk] = useState(true);
    const router = useRouter();
    const dispatch = useDispatch();

    const submitPost = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (isTitleOk && isContentOk) {
            dispatch(publishNewPost(title, content));
            router.push('/');
        }
    };

    return (
        <Form>
            <FormItem>
                <Label htmlFor="title">Title</Label>
                {!isTitleOk && <Warning>Title is required!</Warning>}
                <Title
                    onChange={(e) => {
                        const targetValue = e.target.value;
                        setTitle(targetValue);
                        if (targetValue.length === 0) {
                            setIsTitleOk(false);
                        } else {
                            setIsTitleOk(true);
                        }
                    }}
                    id="title"
                    type="text"
                />
            </FormItem>
            <br />
            <br />
            <FormItem>
                <Label htmlFor="content">Content</Label>
                {!isContentOk && <Warning>To short!</Warning>}
                <Content
                    onChange={(e) => {
                        const targetValue = e.target.value;
                        setContent(targetValue);
                        if (targetValue.length <= 10) {
                            setIsContentOk(false);
                        } else {
                            setIsContentOk(true);
                        }
                    }}
                    id="content"
                />
            </FormItem>
            <PublishPost onClick={submitPost} type="submit">
                Publish new post
            </PublishPost>
        </Form>
    );
};

export default CreatePost;
