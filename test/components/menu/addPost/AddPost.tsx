import React from 'react';
import { IconButton, Tooltip } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Link from 'next/link';

const AddPost: React.FC = () => {
    console.log('waht worng');

    return (
        <Link href="posts/new">
            <Tooltip title="add new post">
                <IconButton aria-label="add new post">
                    <AddIcon />
                </IconButton>
            </Tooltip>
        </Link>
    );
};

export default AddPost;
