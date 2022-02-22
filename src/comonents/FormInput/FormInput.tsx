import React, { FC, useState } from 'react';
import './FormInput.scss';

interface IFormInputProps {
    id?: number;
    name?: string;
    type?: string;
    placeholder?: string;
    errorMessage?: string;
    label?: string;
    required?: boolean;
    onChange: (name: string, value: string) => void;
}

const FormInput: FC<IFormInputProps> = (props) => {
    const [focused, setFocused] = useState(false);
    const { label, errorMessage, onChange, id, ...inputProps } = props;

    const handleFocus = () => {
        setFocused(true);
    };

    return (
        <div className="formInput">
            <label>{label}</label>
            <input
                {...inputProps}
                onChange={(e: React.FormEvent<HTMLInputElement>) => onChange(e.currentTarget.name, e.currentTarget.value)}
                onBlur={handleFocus}
                onFocus={() =>
                    inputProps.name === "confirmPassword" && setFocused(true)
                }
            />
            <span>{errorMessage}</span>
        </div>
    );
};

export default FormInput;