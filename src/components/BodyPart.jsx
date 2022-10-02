import React from "react";
import { Stack, Typography } from "@mui/material";
import all from "../assets/icons/all.png";
import back from "../assets/icons/back.png";
import cardio from "../assets/icons/cardio.png";
import chest from "../assets/icons/chest.png";
import lowerarms from "../assets/icons/lower-arms.png";
import lowerlegs from "../assets/icons/lower-legs.png";
import neck from "../assets/icons/neck.png";
import shoulders from "../assets/icons/shoulders.png";
import upperarms from "../assets/icons/upper-arms.png";
import upperlegs from "../assets/icons/upper-legs.png";
import waist from "../assets/icons/waist.png";
import zIndex from "@mui/material/styles/zIndex";

const imgArray = [
  all,
  back,
  cardio,
  chest,
  lowerarms,
  lowerlegs,
  neck,
  shoulders,
  upperarms,
  upperlegs,
  waist,
];

const BodyPart = ({ item, setBodyPart, bodyPart, index }) => (
  <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={
      bodyPart === item
        ? {
            borderTop: "4px solid #C0EA6A",
            background: "#42554F",
            borderBottomLeftRadius: "20px",
            width: "270px",
            height: "282px",
            cursor: "pointer",
            gap: "47px",
          }
        : {
            background: "#42554F",
            borderBottomLeftRadius: "20px",
            width: "270px",
            height: "282px",
            cursor: "pointer",
            gap: "47px",
          }
    }
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
    }}
  >
    <img
      src={imgArray[index]}
      alt="dumbbell"
      style={{ width: "100px", height: "100px" }}
    />
    <Typography
      fontSize="24px"
      fontWeight="bold"
      fontFamily="Alegreya"
      color="#F8F6E7"
      textTransform="capitalize"
    >
      {item}
    </Typography>
  </Stack>
);

export default BodyPart;
