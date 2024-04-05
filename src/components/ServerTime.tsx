import React, { useState, useEffect } from "react";
import styled from "styled-components";

const List = styled.div`
  padding: 1rem;
  justify-content: center;
`;

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

  return <List style={{fontSize:"20px"}}>{serverTime.toLocaleString()}</List>;
};

export default ServerTimeComponent;
