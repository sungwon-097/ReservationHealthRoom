import React, { useState, useEffect } from "react";
import { Clock } from "./ServerTime.styles";

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

  return <Clock>{serverTime.toLocaleString()}</Clock>;
};

export default ServerTimeComponent;
