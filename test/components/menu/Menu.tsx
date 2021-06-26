import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Search from '../search';
import AddPost from './addPost';

const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 15px;
    border-bottom: 2px solid whitesmoke;
`;

const SuperBlog = styled.a`
    font-family: 'Dancing Script', cursive;
    font-size: 20px;
    color: #727272;
    cursor: pointer;
`;

interface Props {
    searchVisibility: boolean;
    addVisibility: boolean;
}

const Menu: React.FC<Props> = (props) => {
    const { searchVisibility, addVisibility } = props;

    return (
        <Container>
            <Link href="/">
                <SuperBlog>SUPER blog</SuperBlog>
            </Link>
            {/*<Search searchVisibility={searchVisibility} />*/}
            <AddPost addVisibility={addVisibility} />
        </Container>
    );
};

export default Menu;
