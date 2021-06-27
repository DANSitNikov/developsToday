import React from 'react';
import styled from 'styled-components';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import descriptionMaxLength from '../../../utils/descriptionMaxLength';
import Link from 'next/link';
import { Post } from '../../../reducers/postsReducer';

const Root = styled(Card)`
    position: relative;
    width: ${(props: { index: number }) => ((props.index + 3) % 3 === 0 ? 890 : 435)}px;
    display: ${(props: { index: number }) => ((props.index + 3) % 3 === 0 ? 'flex' : 'block')};
    height: 350px;
    box-shadow: none;
    cursor: pointer;
    transition: 0.5s !important;

    &:hover {
        background-color: whitesmoke;
    }

    @media (max-width: 920px) {
        width: 310px;
        display: block;
    }
`;

const Media = styled(CardMedia)`
    width: ${(props: { index: number }) => ((props.index + 3) % 3 === 0 ? '600px' : '100%')};
    height: ${(props: { index: number }) => ((props.index + 3) % 3 === 0 ? '100%' : '165px')};

    @media (max-width: 920px) {
        width: 100%;
        height: 165px;
    }
`;

const ContentWrapper = styled(CardContent)`
    width: ${(props: { index: number }) => ((props.index + 3) % 3 === 0 ? '390px' : '100%')};

    @media (max-width: 920px) {
        width: 100%;
    }
`;

interface Index {
    index: number;
}

const PostComponent: React.FC<Post & Index> = (props) => {
    const { title, body, id, index } = props;

    return (
        <Link href={`/posts/${id}`}>
            <Root index={index}>
                <Media index={index} image="http://placehold.it/300" title="Contemplative Reptile" />
                <ContentWrapper index={index}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {descriptionMaxLength(body)}
                    </Typography>
                </ContentWrapper>
            </Root>
        </Link>
    );
};

export default PostComponent;
