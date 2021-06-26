import React from 'react';
import { IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Link from 'next/link';

const AddPost: React.FC = () => {
    return (
        <Link href="posts/new">
            <IconButton aria-label="add new post">
                <AddIcon />
            </IconButton>
        </Link>
    );
};

export default AddPost;
