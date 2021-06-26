import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: center;
    border: 2px solid whitesmoke;
    width: 300px;
    height: 30px;
`;

const Input = styled.input`
    outline: none;
    border: none;
    width: 90%;
    font-size: 17px;
    color: #727272;
`;

const Magnifier = styled(SearchIcon)`
    color: #bbbbbb;
`;

const Search: React.FC = () => {
    return (
        <Container>
            <Input placeholder="search post" />
            <Magnifier />
        </Container>
    );
};

export default Search;
