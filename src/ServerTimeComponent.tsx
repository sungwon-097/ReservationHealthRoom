import React, { useState, useEffect } from "react";
import { List } from "./App.styles";

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

  return <List>{serverTime.toLocaleString()}</List>;
};

export default ServerTimeComponent;
