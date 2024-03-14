import { Avatar, Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import myPic from "../assets/me.jpeg";
import resume from "../assets/CV_FullStack_MuhammadWajdan.pdf";
export default function HeroSection() {
  return (
    <Box mt={"125px"}>
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: { xs: "column-reverse", sm: "row" },
        }}
      >
        <Box>
          <Typography
            textAlign={{
              xs: "center",
              sm: "left",
            }}
            fontSize={30}
            fontFamily={"monospace"}
            fontWeight={800}
          >
            Hi, I'm Wajdan
          </Typography>
          <Typography
            textAlign={{
              xs: "center",
              sm: "left",
            }}
            fontSize={20}
            fontFamily={"monospace"}
            fontWeight={800}
            mb={2}
          >
            Full Stack Developer
          </Typography>

          <Typography
            fontFamily={"monospace"}
            width={"90%"}
            textAlign={{
              xs: "justify",
              sm: "left",
            }}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
            quasi quos explicabo nihil fugit officia tenetur omnis labore ut
          </Typography>
          <Box
            sx={{
              mt: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
              gap: "10px",
              width: {
                xs: "100%",
                sm: "fit-content",
              },
            }}
          >
            <a href={resume} download={"CV_FullStack_MuhammadWajdan.pdf"}>
              <Button variant="outlined">Download Resume</Button>
            </a>
          </Box>
        </Box>
        <Box>
          <Avatar
            alt="Remy Sharp"
            src={myPic}
            sx={{
              width: {
                xs: 175,
                sm: 250,
              },
              height: {
                xs: 175,
                sm: 250,
              },
              border: "4px solid #1976D2",
              mb: { xs: 2, sm: 0 },
            }}
          />
        </Box>
      </Container>
    </Box>
  );
}
