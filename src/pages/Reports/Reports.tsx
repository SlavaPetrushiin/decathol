import React, { useState } from 'react'
import MainPopup from '../../comonents/ui/modals/MainPopup/MainPopup'

export default function Reports() {
    const [isShow, setIsShow] = useState(true);


    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Parcel</th>
                        <th>EAN</th>
                        <th>Rate</th>
                        <th>Type</th>
                        <th>Date</th>
                        <th>Heure</th>
                        <th>Article</th>
                        <th>Scanned</th>
                        <th>Residual</th>
                    </tr>
                </thead>
                <tbody>
                    {DATA_REPORT.map(item => {
                        return (
                            <tr key={item.Parcel}>
                                <td>{item.Parcel}</td>
                                <td>{item.EAN}</td>
                                <td>{item.Rate}</td>
                                <td>{item.Type}</td>
                                <td>{item.Date}</td>
                                <td>{item.Heure}</td>
                                <td>{item.Article}</td>
                                <td>{item.Scanned}</td>
                                <td>{item.Residual}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}


const DATA_REPORT = [
    {
        Parcel: '00324523523',
        EAN: 'DHFKSF02',
        Rate: 50,
        Type: 'A',
        Date: new Date(2021, 1, 10).toISOString(),
        Heure: 9841,
        Article: 405568,
        Scanned: 1,
        Residual: -1
    },
    {
        Parcel: '0234543523',
        EAN: 'DHFDSKSF02',
        Rate: 6567,
        Type: 'N',
        Date: new Date(2020, 1, 1).toISOString(),
        Heure: 841,
        Article: 4568,
        Scanned: 1,
        Residual: 1
    },
    {
        Parcel: '003897543523',
        EAN: 'DHFKAA02',
        Rate: 25,
        Type: 'P',
        Date: new Date(1999, 4, 5).toISOString(),
        Heure: 3441,
        Article: 4044568,
        Scanned: 1,
        Residual: 0
    },
    {
        Parcel: '00004543523',
        EAN: 'DHRFKSF02',
        Rate: 451,
        Type: 'C',
        Date: new Date(2020, 1, 10).toISOString(),
        Heure: 3841,
        Article: 400068,
        Scanned: 1,
        Residual: 0
    },
    {
        Parcel: '0044545523',
        EAN: 'AAAASF02',
        Rate: 50,
        Type: 'A',
        Date: new Date(2022, 1, 10).toISOString(),
        Heure: 9841,
        Article: 405568,
        Scanned: 1,
        Residual: -1
    },
    {
        Parcel: '00334543523',
        EAN: 'DHFKSF02',
        Rate: 50,
        Type: 'A',
        Date: new Date(2021, 1, 10).toISOString(),
        Heure: 9841,
        Article: 405568,
        Scanned: 1,
        Residual: -1
    },
    {
        Parcel: '003355523',
        EAN: 'AAAKSF02',
        Rate: 3,
        Type: 'A',
        Date: new Date(2021, 1, 10).toISOString(),
        Heure: 9841,
        Article: 405568,
        Scanned: 1,
        Residual: 0
    }
]