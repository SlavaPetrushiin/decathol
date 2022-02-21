import React, { FC, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

interface IPortalProps {
    children: any
}

const Portal: FC<IPortalProps> = ({ children }) => {
    const [container] = useState(document.createElement('div'));

    useEffect(() => {
        document.body.appendChild(container);
        return () => {
            document.body.removeChild(container)
        };
    }, [])

    return ReactDOM.createPortal(children, container);
}

export default Portal;