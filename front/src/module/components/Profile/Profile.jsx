// material-ui
import {
  Avatar,
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import styled from "styled-components";
import axios from "axios";
import process from "process";
// project imports
// import useAuth from 'hooks/useAuth';
const gridSpacing = 3;
// assets

import Avatar1 from "./Components/Images/Avatar.svg";
import React, { useEffect, useState } from "react";
import { HashLoader } from "react-spinners";
import { Navigate } from "react-router-dom";
import { showToastMessage } from "../../../utils";
import { useNavigate } from "react-router-dom";

// ==============================|| PROFILE 3 - PROFILE ||============================== //
const CenteredSpinner = styled.div`
  display: flex;
  margin: auto;
  z-index: 2000;
`;
const backendUrl = "http://localhost:3000";

const Profile = () => {
  // const { user } = useAuth();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    contact: "",
    gestational_age: "",
    bmi: "",
    trimester: "",
    doctor_name: "",
    doctor_email: "",
    profile_status: false,
  });
  const handleChange = (event, field) => {
    setFormData({
      ...formData,
      [field]: event.target.value,
    });
  };

  const pushData = async () => {
    try {
      setIsLoading(true);
      setFormData({
        ...formData,
        ["profile_status"]: true,
      });
      const apiEndpoint = `${backendUrl}/profile_update`;
      console.log(formData);
      await axios.post(apiEndpoint, formData);
      setIsLoading(false);
      showToastMessage("success", "Profile Successfully Added", 3000, 4);
      navigate("/");
    } catch (error) {
      console.log(error);
      showToastMessage(
        "error",
        "Error Updating Profile:  Please Try Again!",
        3000,
        2
      );
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading ? (
        <CenteredSpinner>
          <HashLoader color="#c2185b" size={90} />
        </CenteredSpinner>
      ) : (
        <Grid container spacing={gridSpacing} sx={{ mt: 10, pl: 3, pr: 3 }}>
          <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Avatar
                  alt="User 1"
                  src={Avatar1}
                  sx={{ width: 100, height: 100, margin: "0 auto" }}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h4" align="center">
                  Hey User
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm={12} md={8}>
            <Grid container spacing={gridSpacing}>
              <Grid item xs={12}>
                <TextField
                  id="outlined-basic1"
                  fullWidth
                  label="Name"
                  value={formData.name}
                  placeholder="Enter your full name"
                  onChange={(e) => handleChange(e, "name")}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="outlined-basic6"
                  fullWidth
                  label="Email address"
                  value={formData.email}
                  placeholder="name@example.com"
                  onChange={(e) => handleChange(e, "email")}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  id="outlined-basic7"
                  fullWidth
                  label="Phone number"
                  value={formData.contact}
                  placeholder="+91 1234567890"
                  onChange={(e) => handleChange(e, "contact")}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Gender
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={formData.gender}
                      label="Gender"
                      onChange={(e) => handleChange(e, "gender")}
                    >
                      <MenuItem value={"Female"}>Female</MenuItem>
                      <MenuItem value={"Others"}>Others</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
              <Grid item md={4} xs={12}>
                <TextField
                  id="outlined-basic7"
                  fullWidth
                  label="Gestational Age"
                  value={formData.gestational_age}
                  placeholder="Enter Age"
                  onChange={(e) => handleChange(e, "gestational_age")}
                />
              </Grid>
              <Grid item md={4} xs={12}>
                <TextField
                  id="outlined-basic8"
                  fullWidth
                  label="BMI"
                  value={formData.bmi}
                  placeholder="Enter BMI"
                  onChange={(e) => handleChange(e, "bmi")}
                />
              </Grid>
              <Grid item md={4} xs={12}>
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Trimester
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={formData.trimester}
                      label="Trimester"
                      onChange={(e) => handleChange(e, "trimester")}
                    >
                      <MenuItem value={"1"}>1</MenuItem>
                      <MenuItem value={"2"}>2</MenuItem>
                      <MenuItem value={"3"}>3</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  id="outlined-basic8"
                  fullWidth
                  label="Doctor Name"
                  value={formData.doctor_name}
                  placeholder="Full Name of Doctor"
                  onChange={(e) => handleChange(e, "doctor_name")}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  id="outlined-basic8"
                  fullWidth
                  label="Doctor Email"
                  value={formData.doctor_email}
                  placeholder="Enter Doctor Email Id"
                  onChange={(e) => handleChange(e, "doctor_email")}
                />
              </Grid>
              <Grid item xs={12}>
                <Stack direction="row">
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#c2185b",
                      "&:hover": {
                        backgroundColor: "#ff4081",
                      },
                    }}
                    onClick={() => {
                      pushData();
                    }}
                  >
                    Change Details
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default Profile;
