import React from "react";
import { Box, Stack, Typography } from "@mui/material";

import HeroBannerImage from "../assets/images/banner.png";

const HeroBanner = () => (
  <Box
    sx={{ mt: { lg: "212px", xs: "70px" }, ml: { sm: "50px" } }}
    position="relative"
    p="20px"
  >
    <Typography color="#C0EA6A" fontWeight="600" fontSize="26px">
      Sheke It, Off Gym
    </Typography>
    <Typography
      color="#F8F6E7"
      fontWeight={700}
      sx={{ fontSize: { lg: "44px", xs: "40px" } }}
      mb="23px"
      mt="30px"
    >
      Sweat, Smile <br />
      And Repeat
    </Typography>
    <Typography
      color="#F8F6E7"
      fontSize="22px"
      fontFamily="Alegreya"
      lineHeight="35px"
    >
      Check out the most effective exercises personalized to you <br />
    </Typography>
    <Stack>
      <a
        href="#exercises"
        style={{
          marginTop: "45px",
          textDecoration: "none",
          width: "200px",
          textAlign: "center",
          background: "#C0EA6A",
          padding: "14px",
          fontSize: "22px",
          textTransform: "none",
          color: "#050706",
          borderRadius: "4px",
        }}
      >
        Explore Exercises
      </a>
    </Stack>
    <Typography
      fontWeight={800}
      textTransform="uppercase"
      color="#C0EA6A"
      sx={{
        opacity: "0.1",
        display: { lg: "block", xs: "none" },
        fontSize: "200px",
        marginLeft:"-20px"
      }}
    >
      Exercise
    </Typography>
    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
  </Box>
);

export default HeroBanner;
