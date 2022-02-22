import React, { FC, useState } from 'react';
import LoginInSettings from '../../comonents/LoginInSettings/LoginInSettings';
import SettingsData from '../../comonents/SettingsData/SettingsData';
import './Settings.scss';

export default function Settings() {
    const [isAuth, setIsAuth] = useState(false);

    return (
        <div className='settings'>
            {
                isAuth
                    ? <SettingsData />
                    : <LoginInSettings setIsAuth={setIsAuth} />
            }
        </div>
    )
}

