import React from 'react';
import styled from 'styled-components';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import descriptionMaxLength from '../../../utils/descriptionMaxLength';
import Link from 'next/link';

const Root = styled(Card)`
    position: relative;
    width: 310px;
    height: 350px;
    box-shadow: none;
    cursor: pointer;
    transition: 0.5s !important;

    &:hover {
        background-color: whitesmoke;
    }
`;

const Media = styled(CardMedia)`
    height: 140px;
`;

interface Props {
    title: string;
    description: string;
    id: number;
}

const Post: React.FC<Props> = (props) => {
    const { title, description, id } = props;

    return (
        <Link href={`posts/${id}`}>
            <Root>
                <Media image="http://placehold.it/310x140" title="Contemplative Reptile" />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {descriptionMaxLength(description)}
                    </Typography>
                </CardContent>
            </Root>
        </Link>
    );
};

export default Post;
