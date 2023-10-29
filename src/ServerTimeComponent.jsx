import React, { useState, useEffect } from 'react';

const ServerTimeComponent = () => {
    const [serverTime, setServerTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setServerTime(new Date());
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div>{serverTime.toLocaleString()}</div>
    );
};

export default ServerTimeComponent;
