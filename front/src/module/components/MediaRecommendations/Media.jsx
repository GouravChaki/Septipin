import React, { useEffect, useState } from "react";
import { Grid, Typography, Avatar } from "@mui/material";
import ReactPlayer from "react-player/lazy";
import { useAuth } from "../../common/hooks/useAuth";
import { HashLoader } from "react-spinners";
import styled from "styled-components";
const backendUrl = "http://localhost:3000";
import axios from "axios";
import { showToastMessage } from "../../../utils";

const CenteredSpinner = styled.div`
  display: flex;
  margin: auto;
  z-index: 2000;
`;
const Media = () => {
  const [selectedVideo, setSelectedVideo] = useState(0);
  const { Profile } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [videoList, setVideoList] = useState(false);
  const [profile, setProfile] = useState();
  const handleVideoClick = (index) => {
    setSelectedVideo(index);
  };
  const fetchData = async (trimester, type, gestational_age, bmi) => {
    setIsLoading(true);
    const apiEndpoint = `${backendUrl}/videos`;
    const res = await axios.post(apiEndpoint, {
      trimester,
      type,
      gestational_age,
      bmi,
    });
    if (res.data.success) {
      showToastMessage("success", "Profile Successfully Added", 3000, 4);
      console.log(res.data.data.items);
      setVideoList(res.data.data.items);
    } else {
      showToastMessage("error", "Please Try Again!", 3000, 4);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    const profileFetch = async () => {
      const res = await Profile();
      console.log(res.data)
      setProfile(res.data);
    };
    profileFetch();
  }, []);
  // useEffect(() => {
  //   fetchData(0, "music", 0, 0);
  // }, [profile]);
  const gradientBackground =
    "linear-gradient(204deg, #ec6798 -0.76%, #fcedda 44.59%, #c2185b 141%)";

  return (
    <>
      {isLoading ? (
        <CenteredSpinner>
          <HashLoader color="#c2185b" size={90} />
        </CenteredSpinner>
      ) : (
        <Grid
          container
          spacing={10}
          sx={{ pl: 2, pr: 2, mt: 1, background: gradientBackground }}
        >
          <Grid
            item
            xs={3}
            lg={1}
            md={1}
            sx={{ marginTop: "auto", marginBottom: "auto" }}
          >
            <div style={{ marginBottom: "1rem", cursor: "pointer" }} onClick={()=>{fetchData(0, "music", 0, 0);}}>
              <Avatar
                sx={{
                  bgcolor: "#ff3366",
                  marginRight: "0.5rem",
                  cursor: "pointer",
                }}
              >
                M
              </Avatar>
              <Typography variant="h5" gutterBottom>
                Music
              </Typography>
            </div>
            <div style={{ marginBottom: "1rem", cursor: "pointer" }} onClick={()=>{fetchData(profile.patient.trimester, "yoga", profile.patient.gestational_age, profile.patient.bmi);}}>
              <Avatar
                sx={{
                  bgcolor: "#33cc33",
                  marginRight: "0.5rem",
                }}
              >
                Y
              </Avatar>
              <Typography variant="h5" gutterBottom>
                Yoga
              </Typography>
            </div>
            <div style={{ marginBottom: "1rem", cursor: "pointer" }} onClick={()=>{fetchData(profile.patient.trimester, "selfHelp", profile.patient.gestational_age, profile.patient.bmi);}}>
              <Avatar
                sx={{
                  bgcolor: "#3399ff",
                  marginRight: "0.5rem",
                  cursor: "pointer",
                }}
              >
                S
              </Avatar>
              <Typography variant="h5" gutterBottom>
                Self Help
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} lg={7} md={5} sx={{ height: "30rem" }}>
            <Typography variant="h5" gutterBottom>
              {videoList[selectedVideo]?.snippet.title}
            </Typography>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${videoList[selectedVideo]?.id.videoId}`}
              width="100%"
              height="100%"
            />
          </Grid>
          <Grid item xs={12} lg={4} md={6}>
            <Grid
              container
              spacing={2}
              sx={{
                height: "32rem",
                overflowY: "scroll",
                display: "flex",
                flexDirection: "row",
                gap: 2,
              }}
            >
              {videoList &&
                videoList.map((data, index) => (
                  <Grid
                    key={data.id.videoId}
                    onClick={() => {
                      setSelectedVideo(index);
                    }}
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      cursor: "pointer",
                    }}
                  >
                    {index !== selectedVideo && (
                      <>
                        <Grid
                          item
                          xs={12}
                          sm={6}
                          onClick={() => handleVideoClick(index)}
                          sx={{
                            transition: "transform 0.3s",
                            "&:hover": { transform: "scale(1.05)" },
                          }}
                        >
                          <ReactPlayer
                            className="react-player"
                            url={`https://www.youtube.com/watch?v=${data.id.videoId}`}
                            width="100%"
                            height="100%"
                          />
                        </Grid>
                        <Grid item xs={12} sm={6} sx={{ ml: 1 }}>
                          <Typography variant="body1" gutterBottom>
                            {data.snippet.description}
                          </Typography>
                        </Grid>
                      </>
                    )}
                  </Grid>
                ))}
            </Grid>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default Media;
