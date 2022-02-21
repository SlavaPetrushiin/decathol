import React, { FC } from 'react';
import Portal from './../../Portal/Portal';
import './OverlayPopup.scss';

interface IOverlayPopupProps {
    children: any;
    onClose: () => void;
    isOpened: boolean;
}

const OverlayPopup: FC<IOverlayPopupProps> = ({ isOpened, onClose, children }) => {
    if (!isOpened) {
        return null;
    }

    return (
        <Portal>
            <div className="container-overlay" role="dialog">
                <div
                    className="overlay"
                    role="button"
                    tabIndex={0}
                    onClick={onClose}
                />
                {children}
            </div>
        </Portal>
    )
}


export default OverlayPopup;
