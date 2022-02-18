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
    onChange: () => void;
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
                onChange={onChange}
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