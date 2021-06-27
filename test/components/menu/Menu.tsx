import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import AddPost from './addPost';

const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between !important;
    padding: 10px 15px;
    border-bottom: 2px solid whitesmoke;
    z-index: 100;
`;

const SuperBlog = styled.a`
    font-family: 'Dancing Script', cursive !important;
    font-size: 20px;
    color: #727272;
    cursor: pointer;
    text-decoration: underline;
`;

const Menu: React.FC = () => {
    return (
        <Container>
            <Link href="/">
                <SuperBlog>SUPER blog</SuperBlog>
            </Link>
            <AddPost />
        </Container>
    );
};

export default Menu;
