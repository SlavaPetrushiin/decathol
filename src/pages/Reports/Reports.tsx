import React, { useState } from 'react'
import MainPopup from '../../comonents/ui/modals/MainPopup/MainPopup'

export default function Reports() {
    const [isShow, setIsShow] = useState(true);


    return (
        <div>Reports
            <MainPopup isOpened={isShow} onClose={() => setIsShow(false)} title="Window">
                <div>
                    Window
                </div>
            </MainPopup>
        </div>
    )
}
