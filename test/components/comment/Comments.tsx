import React from 'react';
import { Button } from '@material-ui/core';
import Comment from './allComments';
import styled from 'styled-components';

const Container = styled.div`
    margin: 30px 0;
`;

const NewComment = styled.textarea`
    width: 100%;
    color: #727272;
    padding: 10px;
    outline: none;
    border: 3px solid whitesmoke;
    resize: none;
    font-size: 18px;
    height: 100px;
    margin-top: 20px;
`;

const Form = styled.form`
    display: grid;
    grid-template-columns: 3fr 1fr;
    column-gap: 20px;
    align-items: flex-end;
`;

const Label = styled.label`
    font-size: 18px;
    text-align: left;
    font-weight: 500;
`;

const AllComments = styled.div`
    margin: 20px 0;
`;

const Comments: React.FC = () => {
    const submitComment = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
    };

    return (
        <Container>
            <Form action="">
                <div>
                    <Label htmlFor="leaveComment">Leave your comment</Label>
                    <NewComment id="leaveComment" style={{ minHeight: '150px !important' }} />
                </div>
                <Button onClick={submitComment} type="submit">
                    Send
                </Button>
            </Form>
            <AllComments>
                <Comment />
                <Comment />
                <Comment />
            </AllComments>
        </Container>
    );
};

export default Comments;
