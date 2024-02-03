import React, { useEffect, useState } from "react";
import { Typography, Grid } from "@mui/material";
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

const truncatedData = data.slice(0, 5);

const lineChartsData = [
  { title: "Haemoglobin", data: truncatedData, org: data },
  { title: "Systolic Blood Pressure", data: truncatedData, org: data },
  { title: "Diastolic Blood Pressure", data: truncatedData, org: data },
  { title: "Blood Sugar", data: truncatedData, org: data },
  { title: "Thyroid", data: truncatedData, org: data },
  { title: "Fetal Movement", data: truncatedData, org: data },
];

const LineChartsPage = () => {
  const [drawerStates, setDrawerStates] = useState(false);
  const [modalStates, setModalStates] = useState(
    lineChartsData.map(() => false)
  );
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedChartData, setSelectedChartData] = useState(null);
  const [date, setDate] = useState(null);
  const [isCurrentDate, setIsCurrentDate] = useState('0');
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
    setIsCurrentDate('0')
  };

  return (
    <>
      <Typography
        variant="h4"
        gutterBottom
        style={{ fontWeight: "bold", color: "#f2518f" }}
      ></Typography>

      <Grid container spacing={4} justifyContent="center">
        {lineChartsData.map((chart, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <ChartCard elevation={5}>
              <Typography
                variant="h6"
                gutterBottom
                style={{
                  marginBottom: "20px",
                  textAlign: "center",
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                {chart.title}
              </Typography>
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
        isCurrentDate={isCurrentDate}
        setIsCurrentDate={setIsCurrentDate}
      />
    </>
  );
};

export default LineChartsPage;
