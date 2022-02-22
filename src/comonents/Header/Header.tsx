import React, { FC } from 'react';
import './Header.scss'
import { Link } from 'react-router-dom';

const Header: FC = () => {
    return (
        <header className='header'>
            <div className="logo">
                <Link to='/' className="logo_link">
                    decathlon
                </Link>
            </div>
        </header>
    )
}

export default Header;