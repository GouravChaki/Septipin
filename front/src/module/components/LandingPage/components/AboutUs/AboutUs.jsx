import React from "react";
import { Container, Grid, Typography, Link } from "@mui/material";
import { GitHub, Twitter, LinkedIn, Mail, Person } from "@mui/icons-material";

const styles = {
  container: {
    backgroundColor: "#FBBEBE",
    color: "#AB2D2D",
    padding: "40px 0",
  },
  memberContainer: {
    textAlign: "center",
    marginBottom: "10px",
  },
  memberImage: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "10px",
  },
  socialIcons: {
    display: "flex",
    gap: "1rem",
    justifyContent: "center",
    "& > *": {
      margin: "0 10px",
      fontSize: "30px",
    },
  },
};

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Gourav Chaki",
      photo:
        "https://a.storyblok.com/f/191576/1200x800/215e59568f/round_profil_picture_after_.webp",
      email: "gouravchaki123@gmail.com",
      linkedIn: "https://www.linkedin.com/in/gourav-chaki-54155b238/",
    },
    {
      name: "Yash Kumar",
      photo:
        "https://a.storyblok.com/f/191576/1200x800/215e59568f/round_profil_picture_after_.webp",
      email: "yashkumar20038@gmail.com",
      linkedIn: "https://www.linkedin.com/in/yash-kumar-6031b7227/",
    },
    {
      name: "Gargee Bhowmick",
      photo:
        "https://a.storyblok.com/f/191576/1200x800/215e59568f/round_profil_picture_after_.webp",
      email: "gargee.bhowmick09@gmail.com",
      linkedIn: "https://www.linkedin.com/in/gargee-bhowmick-b96102154/",
    },
  ];

  return (
    <div style={styles.container}>
      <Container>
        <Typography variant="h4" align="center" gutterBottom>
          Meet Our Team
        </Typography>
        <Grid container spacing={3} sx={{ mt: 1 }}>
          {teamMembers.map((member, index) => (
            <Grid
              key={index}
              item
              xs={12}
              sm={4}
              style={styles.memberContainer}
            >
              <img
                src={member.photo}
                alt={member.name}
                style={styles.memberImage}
              />
              <Typography variant="h6" gutterBottom>
                {member.name}
              </Typography>
              <div style={styles.socialIcons}>
                <Link
                  href={`mailto:${member.email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  color="inherit"
                >
                  <Mail />
                </Link>
                <Link
                  href={member.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  color="inherit"
                >
                  <LinkedIn />
                </Link>
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default AboutUs;
