import React, { useState } from 'react';
import { RadioGroup } from './../RadioGroup/RadioGroup';
import './SettingsData.scss';

export const COUNT_LINES = [
    { label: 'одна линия', value: '1' },
    { label: 'две линии', value: '2' }
];
export const COUNT_PERCENT = [
    { label: '10%', value: '10' },
    { label: '20%', value: '20' },
    { label: '30%', value: '30' },
    { label: '40%', value: '40' },
    { label: '50%', value: '50' },
    { label: '60%', value: '60' },
    { label: '70%', value: '70' },
    { label: '80%', value: '80' },
    { label: '90%', value: '90' },
    { label: '100%', value: '100' }
];

const SettingsData = () => {
    const [selectedLine, setSelectedLine] = useState(COUNT_LINES[0].value);
    const [selectedPercent, setSelectedPercent] = useState(COUNT_PERCENT[5].value);

    const handleChangeLines = (value: string) => { setSelectedLine(value) };
    const handleChangePercent = (value: string) => { setSelectedPercent(value) };

    return (
        <form className='settings-data' onSubmit={(e) => e.preventDefault()}>
            <div className='field-wrapper'>
                <h3 className='caption'>Количество линий:</h3>
                <RadioGroup
                    name='line'
                    value={selectedLine}
                    options={COUNT_LINES}
                    handleChange={value => handleChangeLines(value)}
                />
            </div>
            <div className='field-wrapper'>
                <h3 className='caption'>Порог считывания RFID:</h3>
                <RadioGroup
                    name='percent'
                    value={selectedPercent}
                    options={COUNT_PERCENT}
                    handleChange={value => handleChangePercent(value)}
                />
            </div>
            <button className='btn btn-save-settings'>Сохранить</button>
        </form>
    )
}

export default SettingsData;