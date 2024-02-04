import React, { useState, useRef, useEffect } from "react";
import { LineChart } from "./Charts";
import { Stats } from "./sTracker.styles";
import { showToastMessage } from "../../../utils"; 
import { useAuth } from "../../common/hooks/useAuth";

const Statistics = () => {
  const {stats , user , Profile, severity} = useAuth()
  useEffect(() => {
    const xyz = async () => {
      await Profile("/statistics");
    };
      if (user) {
      xyz();
    } else {
      navigate("/login");
    }
    showToastMessage("warn","Please update your profile for accurate results",3000,7)
  }, []);
  return (
    < Stats  style={{ textAlign: 'center', paddingLeft: '10px', paddingRight: '10px' }}>
    <LineChart />
    </Stats>
  );
};

export default Statistics;
