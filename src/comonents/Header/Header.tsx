import React, { FC } from 'react';
import './Header.scss'

const Header: FC = () => {
    return (
        <header className='header'>
            <div className="logo">
                <a href='#' className="logo_link">
                    decathlon
                </a>
            </div>
        </header>
    )
}

export default Header;