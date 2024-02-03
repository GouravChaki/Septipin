import React, { useState, useRef, useEffect } from "react";
import { LineChart } from "./Charts";
import { Stats } from "./sTracker.styles";
import { showToastMessage } from "../../../utils"; 
import { useAuth } from "../../common/hooks/useAuth";

const Statistics = () => {
  const {stats , severity} = useAuth()
  useEffect(() => {
    console.log('stats')
    console.log(stats)
    console.log('severity')
    console.log(severity)
    showToastMessage("warn","Please update your profile for accurate results",3000,7)
  }, []);
  return (
    < Stats  style={{ textAlign: 'center', paddingLeft: '10px', paddingRight: '10px' }}>
    <LineChart />
    </Stats>
  );
};

export default Statistics;
