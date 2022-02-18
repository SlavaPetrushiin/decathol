import React, { FC, useState } from 'react';
import CustomLink from './../CustomLink/CustomLink';
import './Sidebar.scss';

const Sidebar: FC = () => {
    const [isView, setIsView] = useState(true);
    const isActive = isView ? 'active' : '';

    return (
        <nav className={`nav ${isActive}`}>
            <CustomLink className='nav_link' to="/">
                <span className="nav_icon nav_icon__report" />
                <span className='nav_name'>Отчёты</span>
            </CustomLink>
            <CustomLink className='nav_link' to="/processing">
                <span className="nav_icon nav_icon__processing" />
                <span className='nav_name'>Процессы</span>
            </CustomLink>
            <CustomLink className='nav_link' to="/settings">
                <span className="nav_icon nav_icon__settings" />
                <span className='nav_name'>Настройки</span>
            </CustomLink>
            <div className='nav_control' onClick={() => setIsView(!isView)}>
                <span className='control__item' />
                <span className='control__item' />
                <span className='control__item' />
            </div>
        </nav >
    )
}

export default Sidebar;
