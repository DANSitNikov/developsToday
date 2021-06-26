import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Container = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 10px 15px;
    border-bottom: 2px solid whitesmoke;
`;

const Menu: React.FC = () => {
    return (
        <Container>
            <Link href="/">
                <a>SUPER blog</a>
            </Link>
            <div>search post</div>
            <div>add new post</div>
        </Container>
    );
};

export default Menu;
