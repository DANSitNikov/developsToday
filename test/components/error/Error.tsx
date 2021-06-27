import React from 'react';
import error from '../../assets/images/error.png';
import styled from 'styled-components';

const ErrorContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: -1;
`;

const ErrorImage = styled.img`
    @media (max-width: 800px) {
        width: 500px;
        height: auto;
    }

    @media (max-width: 500px) {
        width: 300px;
        height: auto;
    }
`;

const Error: React.FC = () => {
    return (
        <ErrorContainer>
            <ErrorImage src={error.src} alt="something went wrong!" />
        </ErrorContainer>
    );
};

export default Error;
