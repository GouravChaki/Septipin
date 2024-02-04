import React, { useState } from "react";
import { Grid, Typography } from "@mui/material";
import ReactPlayer from "react-player/lazy";

const Media = () => {
  const [selectedVideo, setSelectedVideo] = useState(0);

  const handleVideoClick = (index) => {
    setSelectedVideo(index);
  };

  const videoList = [
    "https://www.youtube.com/watch?v=oUFJJNQGwhk",
    "https://www.youtube.com/watch?v=jNgP6d9HraI",
    "https://www.youtube.com/watch?v=oUFJJNQGwhk",
    "https://www.youtube.com/watch?v=jNgP6d9HraI",
    "https://www.youtube.com/watch?v=oUFJJNQGwhk",
    "https://www.youtube.com/watch?v=jNgP6d9HraI",
    "https://www.youtube.com/watch?v=oUFJJNQGwhk",
    "https://www.youtube.com/watch?v=jNgP6d9HraI",
    "https://www.youtube.com/watch?v=oUFJJNQGwhk",
    "https://www.youtube.com/watch?v=jNgP6d9HraI",
    // Add more video URLs as needed
  ];

  return (
    <Grid container spacing={3} sx={{ mt: 5, pl: 10, pr: 10 }}>
      <Grid item xs={12} lg={8} md={6}>
        <Typography variant="h5" gutterBottom>
          Media
        </Typography>
        <ReactPlayer url={videoList[selectedVideo]} width="100%" height="100%" />
      </Grid>
      <Grid item xs={12} lg={4} md={6}>
        <Grid container spacing={2}>
          {videoList.map((videoUrl, index) => (
            <React.Fragment key={videoUrl} onClick={()=>{setSelectedVideo(index)}}>
              {index !== selectedVideo && (
                <Grid item xs={12} lg={6} onClick={() => handleVideoClick(index)}>
                  <ReactPlayer className="react-player" url={videoUrl} width="100%" height="100%" />
                </Grid>
              )}
              <Grid item xs={12} lg={6}>
                <Typography variant="body1" gutterBottom>
                  Video Description {index + 1}
                </Typography>
              </Grid>
            </React.Fragment>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Media;
