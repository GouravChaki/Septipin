import React, { useState, useRef, useEffect } from "react";
import { LineChart } from "./Charts";
import { Stats } from "./sTracker.styles";
import { showToastMessage } from "../../../utils";
import { useAuth } from "../../common/hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Statistics = () => {
  const { stats, user, Profile, severity } = useAuth();
  const [res, setRes] = useState();
  useEffect(() => {
    const xyz = async () => {
      const a = await Profile();
      setRes(a);
    };
    xyz();
    showToastMessage(
      "warn",
      "Please update your profile for accurate results",
      3000,
      7
    );
  }, []);
  return (
    <Stats
      style={{ textAlign: "center", paddingLeft: "10px", paddingRight: "10px" }}
    >
      {res && <LineChart resSeverity={res.data.disease.severity} patientId={res.data.patient._id}/>}
    </Stats>
  );
};

export default Statistics;
