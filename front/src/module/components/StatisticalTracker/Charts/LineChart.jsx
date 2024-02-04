import React, { useEffect, useState } from "react";
import { Typography, Grid, Paper } from "@mui/material";
import Drawr from "../Drawer";
import ModalB from "../Modal";
import ChartCard, {
  Overlay,
  ButtonContainer,
  ChartButton,
} from "./Chart.styles";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import ModalComponent from "../../../common/Calendar/ModalComponent";

const severityColors = {
  0: "#DAF7A6",
  1: "#FFC300",
  2: "#EC5800",
  3: "#D70040",
  4: "#7F00FF",
};

const getColor = (value) => {
  if (value == 0) return severityColors["0"];
  else if (value == 1) return severityColors["1"];
  else if (value == 2) return severityColors["2"];
  else if (value == 3) return severityColors["3"];
  else if (value == 4) return severityColors["4"];
};

const data = [
  { name: "1", uv: 400, pv: 2400, amt: 2400 },
  { name: "2", uv: 300, pv: 1398, amt: 2210 },
  { name: "3", uv: 200, pv: 9800, amt: 2290 },
  { name: "4", uv: 500, pv: 3908, amt: 2000 },
  { name: "5", uv: 700, pv: 4800, amt: 2181 },
  { name: "6", uv: 600, pv: 3800, amt: 2500 },
  { name: "7", uv: 800, pv: 4300, amt: 2100 },
  { name: "8", uv: 400, pv: 2400, amt: 2400 },
  { name: "9", uv: 300, pv: 1398, amt: 2210 },
  { name: "10", uv: 200, pv: 9800, amt: 2290 },
];


const LineChartsPage = ({ resStatus , resSeverity, patientId }) => {
  console.log(resStatus)
  const haemoglobin = resStatus.map(
    (entry, index) => ({
      name: (index + 1).toString(),
      uv: entry?.haemoglobin || 0,
      pv: index ,  // You can replace this logic with your specific calculation
      amt: index, // You can replace this logic with your specific calculation
    })
  ).filter(entry => entry.uv !== 0);
  
  const systolic =resStatus.map(
    (entry, index) => ({
      name: (index + 1).toString(),
      uv: entry?.systolic || 0,
      pv: index ,  // You can replace this logic with your specific calculation
      amt: index, // You can replace this logic with your specific calculation
    })
  ).filter(entry => entry.uv !== 0);
  
  const diastolic = resStatus.map(
    (entry, index) => ({
      name: (index + 1).toString(),
      uv: entry?.diastolic || 0,
      pv: index ,  // You can replace this logic with your specific calculation
      amt: index, // You can replace this logic with your specific calculation
    })
  ).filter(entry => entry.uv !== 0);
  
  
  const blood_sugar = resStatus.map(
    (entry, index) => ({
      name: (index + 1).toString(),
      uv: entry?.blood_sugar || 0,
      pv: index ,  // You can replace this logic with your specific calculation
      amt: index, // You can replace this logic with your specific calculation
    })
  ).filter(entry => entry.uv !== 0);
  
  const thyroid = resStatus.map(
    (entry, index) => ({
      name: (index + 1).toString(),
      uv: entry?.thyroid || 0,
      pv: index ,  // You can replace this logic with your specific calculation
      amt: index, // You can replace this logic with your specific calculation
    })
  ).filter(entry => entry.uv !== 0);
  
  
  const fetal_movement = resStatus.map(
    (entry, index) => ({
      name: (index + 1).toString(),
      uv: entry?.fetal_movement || 0,
      pv: index ,  // You can replace this logic with your specific calculation
      amt: index, // You can replace this logic with your specific calculation
    })
  ).filter(entry => entry.uv !== 0);
  ;

  const lineChartsData = [
    {
      title: "Haemoglobin",
      value: "haemoglobin",
      data: haemoglobin.slice(0,haemoglobin.length /2),
      org: haemoglobin,
    },
    {
      title: "Systolic Blood Pressure",
      value: "systolic",
      data: systolic.slice(0,systolic.length /2),
      org: systolic,
    },
    {
      title: "Diastolic Blood Pressure",
      value: "diastolic",
      data: diastolic.slice(0,diastolic.length /2),
      org: diastolic,
    },
    {
      title: "Blood Sugar",
      value: "blood_sugar",
      data: blood_sugar.slice(0,blood_sugar.length /2),
      org: blood_sugar,
    },
    { title: "Thyroid", 
    value: "thyroid", 
    data: thyroid.slice(0,thyroid.length /2), 
    org:thyroid 
  },
    {
      title: "Fetal Movement",
      value: "fetal_movement",
      data: fetal_movement.slice(0,fetal_movement.length /2),
      org: fetal_movement,
    },
  ];
  
  const [drawerStates, setDrawerStates] = useState(false);
  const [modalStates, setModalStates] = useState(
    lineChartsData.map(() => false)
  );
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedChartData, setSelectedChartData] = useState(null);
  const [date, setDate] = useState(null);
  const [isCurrentDate, setIsCurrentDate] = useState("0");

  const toggleDrawer = () => {
    setDrawerStates(!drawerStates);
  };

  const toggleModal = (index) => {
    setModalStates((prev) => {
      const newStates = [...prev];
      newStates[index] = !newStates[index];
      return newStates;
    });
    setSelectedChartData(lineChartsData[index].org);
  };

  const openModal = () => {
    setModalIsOpen(true);
    toggleDrawer();
  };

  const onRequestClose = () => {
    setModalIsOpen(false);
    setIsCurrentDate("0");
  };

  const getChartValue = (chart) => {
    if (resSeverity && resSeverity[chart.value]) {
      return resSeverity[chart.value];
    }
    return null;
  };

  return (
    <>
      <Typography
        variant="h4"
        gutterBottom
        style={{ fontWeight: "bold", color: "#f2518f", textAlign: "center" }}
      >
        Health Statistics Overview
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {lineChartsData.map((chart, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <ChartCard elevation={5}>
              <Paper
                style={{
                  backgroundColor: getColor(getChartValue(chart)) || '#DAF7A6',
                  padding: "20px",
                  borderRadius: "8px",
                  marginBottom: "20px",
                }}
              >
                <Typography
                  variant="h6"
                  gutterBottom
                  style={{
                    color: "#fff",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  {chart.title}
                </Typography>
              </Paper>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={chart.data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="uv"
                    stroke="#ff6e6e"
                    strokeWidth={5}
                  />
                </LineChart>
              </ResponsiveContainer>
              <Overlay className="overlay">
                <ButtonContainer>
                  <ChartButton
                    variant="contained"
                    color="primary"
                    onClick={() => toggleDrawer(index)}
                  >
                    Enter Details
                  </ChartButton>
                  <ChartButton
                    variant="contained"
                    color="secondary"
                    onClick={() => toggleModal(index)}
                  >
                    Maximize
                  </ChartButton>
                </ButtonContainer>
              </Overlay>
            </ChartCard>
            <ModalB
              isOpen={modalStates[index]}
              onClose={() => toggleModal(index)}
              chartData={selectedChartData}
              chartIndex={index}
            />
          </Grid>
        ))}
      </Grid>
      <Drawr
        isDrawerOpen={drawerStates}
        toggleDrawer={() => toggleDrawer()}
        openModal={openModal}
        date={date}
        setDate={setDate}
        isCurrentDate={isCurrentDate}
        setIsCurrentDate={setIsCurrentDate}
      />
      <ModalComponent
        isOpen={modalIsOpen}
        onRequestClose={onRequestClose}
        date={date}
        patientId={patientId}
        isCurrentDate={isCurrentDate}
        setIsCurrentDate={setIsCurrentDate}
      />
    </>
  );
};

export default LineChartsPage;
