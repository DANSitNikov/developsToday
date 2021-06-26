import React from 'react';
import styled from 'styled-components';
import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    makeStyles,
    Typography,
} from '@material-ui/core';
import descriptionMaxLength from '../../../utils/descriptionMaxLength';
import Link from 'next/link';

const Root = styled(Card)`
    max-width: 330px;
    box-shadow: none;
`;

const Media = styled(CardMedia)`
    height: 140px;
`;

interface Props {
    title: string;
    description: string;
    id: any;
}

const Post: React.FC<Props> = (props) => {
    const { title, description, id } = props;

    return (
        <Link href={`posts/${id}`}>
            <Root>
                <CardActionArea>
                    <Media image="/static/images/cards/contemplative-reptile.jpg" title="Contemplative Reptile" />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {descriptionMaxLength(description)}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Learn More
                    </Button>
                </CardActions>
            </Root>
        </Link>
    );
};

export default Post;
