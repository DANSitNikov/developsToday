import React, { useEffect, useState } from 'react';
import { Button } from '@material-ui/core';
import Comment from './allComments';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { getComments } from '../../selectors/selectors';
import { useRouter } from 'next/router';
import { getCommentsRequest, publishNewComment } from '../../actions/commentsAction';

const Container = styled.div`
    margin: 30px 0;
    padding: 0 10px;
`;

const NewComment = styled.textarea`
    width: 100%;
    color: #727272;
    padding: 10px;
    outline: none;
    border: 3px solid #d5d3d3;
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
    const router = useRouter();
    const postId = Number(router?.query?.id);
    const comments = useSelector(getComments).filter((comment) => comment.postId === postId);
    const [commentBody, setCommentBody] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        if (comments.length === 0) {
            dispatch(getCommentsRequest());
        }
    }, []);

    const submitComment = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        dispatch(publishNewComment(commentBody, postId));
        setCommentBody('');
    };

    return (
        <Container>
            <Form action="">
                <div>
                    <Label htmlFor="leaveComment">Leave your comment</Label>
                    <NewComment
                        onChange={(e) => setCommentBody(e.target.value)}
                        id="leaveComment"
                        value={commentBody}
                        style={{ minHeight: '150px !important' }}
                    />
                </div>
                <Button onClick={submitComment} type="submit">
                    Send
                </Button>
            </Form>
            <AllComments>
                {comments.length === 0 && <div>There is no comments yet</div>}
                {comments.length !== 0 && comments.map((comment) => <Comment body={comment.body} key={comment.id} />)}
            </AllComments>
        </Container>
    );
};

export default Comments;
