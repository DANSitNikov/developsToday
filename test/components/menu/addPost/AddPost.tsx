import React from 'react';
import { Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Link from 'next/link';
import styled from 'styled-components';

const CreateNewPost = styled(Button)`
    display: flex;
    color: #727272 !important;
    font-size: 13px !important;
`;

const AddPost: React.FC = () => {
    return (
        <Link href="/posts/new">
            <CreateNewPost>
                create new post
                <AddIcon />
            </CreateNewPost>
        </Link>
    );
};

export default AddPost;
