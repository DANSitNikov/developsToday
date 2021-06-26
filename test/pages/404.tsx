import Link from 'next/link';
import React from 'react';

const Custom404: React.FC = () => {
    return (
        <div>
            <h1>404 - Page Not Found</h1>
            <Link href="/">
                <a>Go to posts</a>
            </Link>
        </div>
    );
};

export default Custom404;
