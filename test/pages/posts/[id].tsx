import React from 'react';
import { useRouter } from 'next/router';
import Menu from '../../components/menu';

const Post: React.FC = () => {
    const router = useRouter();

    return (
        <>
            <Menu />
            <div>{router.query.id}</div>
        </>
    );
};

export default Post;