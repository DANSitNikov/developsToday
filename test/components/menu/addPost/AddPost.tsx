import React from 'react';
import { IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Link from 'next/link';
import styled from 'styled-components';

const Button = styled(IconButton)`
    visibility: ${(props: { status: string }) => (props.status === 'true' ? 'visible' : 'hidden')};
`;

interface Props {
    addVisibility: boolean;
}

const AddPost: React.FC<Props> = (props) => {
    const { addVisibility } = props;

    return (
        <Link href="posts/new">
            <Button status={addVisibility.toString()} aria-label="add new post">
                <AddIcon />
            </Button>
        </Link>
    );
};

export default AddPost;
