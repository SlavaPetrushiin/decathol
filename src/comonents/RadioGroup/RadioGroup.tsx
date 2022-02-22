import React, { FunctionComponent } from "react";
import './RadioGroup.scss';

interface IRadioOptions {
    label: string;
    value: string;
}

interface IRadioGroup {
    name: string;
    value: string;
    options: IRadioOptions[];
    handleChange: (value: string) => void;
}

export const RadioGroup: FunctionComponent<IRadioGroup> = ({ name, value, options, handleChange }) => {
    return (
        <div className='radio-group'>
            {options.map((option, index) => (
                <React.Fragment key={index}>
                    <input
                        className='radio'
                        type='radio'
                        id={`${name}-${option.label}`}
                        name={name}
                        checked={value == option.value}
                        value={option.value}
                        onChange={e => handleChange(e.currentTarget.value)}
                    />
                    <label htmlFor={`${name}-${option.label}`}>
                        {option.label}
                    </label>
                </React.Fragment>
            ))}
        </div >
    )
}