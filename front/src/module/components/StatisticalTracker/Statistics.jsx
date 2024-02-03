import React, { useState, useRef, useEffect } from "react";
import { LineChart } from "./Charts";
import { Stats } from "./sTracker.styles";
import { showToastMessage } from "../../../utils";
const Statistics = () => {
  useEffect(() => {
    showToastMessage("warn","Please update your profile for accurate results",3000,7)
  }, []);
  return (
    < Stats  style={{ textAlign: 'center', paddingLeft: '10px', paddingRight: '10px' }}>
    <LineChart />
    </Stats>
  );
};

export default Statistics;
