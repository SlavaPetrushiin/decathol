import React, { FC, useState } from 'react'
import FormInput from '../FormInput/FormInput';
import './LoginInSettings.scss';

const INPUTS = [
    {
        id: 1,
        name: "username",
        type: "text",
        placeholder: "Имя",
        errorMessage: "Не правильно указано имя",
        label: "Введите имя",
        required: true,
    },
    {
        id: 2,
        name: "password",
        type: "password",
        placeholder: "Password",
        errorMessage: "Не правильно указан пароль",
        label: "Введите пароль",
        required: true,
    },
];

const LoginInSettings: FC = () => {
    const [values, setValues] = useState({
        username: '',
        password: ''
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return (
        <form className='settings-login' onSubmit={handleSubmit}>
            <h2 className='title'>Войти</h2>
            {INPUTS.map(input => (
                <FormInput
                    {...input}
                    key={input.id}
                    onChange={() => { }}
                />)
            )}
            <button className='btn'>Войти</button>
        </form>
    )
}

export default LoginInSettings;