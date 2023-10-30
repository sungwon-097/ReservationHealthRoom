import React, { useEffect, useState } from 'react';

export function CreateEventByClock(props) {
    const [isToggleOn, setIsToggleOn] = useState(false);

    const handleToggle = () => {
        setIsToggleOn(!isToggleOn);
    };

    useEffect(() => {
        let intervalId;

        if (isToggleOn) {
            intervalId = setInterval(() => {
                const currentDate = new Date();
                const targetDate = new Date(
                    currentDate.getFullYear(),
                    currentDate.getMonth(),
                    currentDate.getDate(),
                    9,
                    0,
                    0
                );

                if (currentDate >= targetDate) {
                    props.event()
                    clearInterval(intervalId);
                }
            }, 1000);
        }

        return () => {
            clearInterval(intervalId);
        };
    }, [isToggleOn, props]);

    return (
        <div>
            <label>
                <input type="checkbox" checked={isToggleOn} onChange={handleToggle} />
                9시 예약 ({isToggleOn ? 'On' : 'Off'})
            </label>
        </div>
    );
}
