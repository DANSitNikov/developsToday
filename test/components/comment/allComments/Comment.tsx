import React from 'react';
import { Avatar } from '@material-ui/core';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    column-gap: 30px;
    border: 2px solid whitesmoke;
    padding: 5px;
    margin-bottom: 20px;
`;

const Paragraph = styled.p`
    margin: 0;
`;

interface Props {
    body: string;
}

const Comment: React.FC<Props> = (props) => {
    const { body } = props;

    return (
        <Container>
            <Avatar />
            <Paragraph>{body}</Paragraph>
        </Container>
    );
};

export default Comment;
