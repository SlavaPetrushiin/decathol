import React, { FC } from 'react'
import OverlayPopup from '../OverlayPopup/OverlayPopup';
import './MainPopup.scss';

interface IMainPopupProps {
    isOpened: boolean;
    title: string;
    onClose: () => void;
    className?: string;
    children: any;
}

const MainPopup: FC<IMainPopupProps> = ({ isOpened, title, onClose, className, children }) => {
    return (
        <OverlayPopup isOpened={isOpened} onClose={onClose}>
            <div className={`container ${className}`}>
                <header>
                    {title}
                </header>
                {children}
            </div>
        </OverlayPopup>
    )
}

export default MainPopup;