import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: center;
    border: 2px solid whitesmoke;
    width: 300px;
    height: 30px;
    visibility: ${(props: { status: boolean }) => (props.status ? 'visible' : 'hidden')};
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

interface Props {
    searchVisibility: boolean;
}

const Search: React.FC<Props> = (props) => {
    const { searchVisibility } = props;

    return (
        <Container status={searchVisibility}>
            <Input placeholder="search post" />
            <Magnifier />
        </Container>
    );
};

export default Search;
