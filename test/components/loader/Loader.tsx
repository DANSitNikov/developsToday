import React from 'react';
import styled from 'styled-components';
import loader from '../../assets/images/loader.gif';

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Loader: React.FC = () => {
    return (
        <Container>
            <img src={loader.src} alt="loading" />
        </Container>
    );
};

export default Loader;
