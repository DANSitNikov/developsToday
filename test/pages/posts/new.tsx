import React from 'react';
import Menu from '../../components/menu';

const New: React.FC = () => {
    return (
        <>
            <Menu searchVisibility={false} addVisibility={false} />
            <div>new post create here</div>;
        </>
    );
};

export default New;
