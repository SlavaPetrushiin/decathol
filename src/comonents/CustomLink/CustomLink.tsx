import React, { FC } from 'react';
import { Link, useMatch } from 'react-router-dom';
import './CustomLink';

interface ICustomLinkProps {
    to: string;
    className?: string;
}

const CustomLink: FC<ICustomLinkProps> = ({ children, to, ...props }) => {
    const match = useMatch(to);
    return (
        <Link
            to={to}
            style={{
                background: match ? 'var(--clr-nav-active)' : '',
            }}
            {...props}
        >
            {children}
        </Link>
    )
}

export default CustomLink;
