import { useState } from "react";

const useNumber = (date) => {
    const [day, setDay] = useState()
    const [hour, setHour] = useState()
    const [minute, setMinute] = useState()
    const [second, setSecond] = useState()
    
    const countDown = () => {
        const countDate = new Date(date).getTime();
        const dateNow = new Date().getTime();
        
        const interval = countDate - dateNow;
        
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;
        
        const dayCount = Math.floor(interval / day);
        const hourCount = Math.floor(((interval % day) / hour).toFixed(0));
        const minuteCount = Math.floor(((interval % hour) / minute).toFixed(0));
        const secondCount = Math.floor(((interval % minute) / second).toFixed(0));
        
        setDay(dayCount)
        setHour(hourCount)
        setMinute(minuteCount)
        setSecond(secondCount)
    };

    setInterval(countDown, 1000);
    
    return [day, hour, minute, second]
};

export default useNumber;
