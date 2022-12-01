import React from "react";
import { Stack, Typography } from "@mui/material";
import calculater1 from "../assets/icons/calculater1.png";
import calculater2 from "../assets/icons/calculater2.png";
import calculater3 from "../assets/icons/calculater3.png";
import calculater4 from "../assets/icons/calculater4.png";
import calculater5 from "../assets/icons/calculater5.png";
import calculater6 from "../assets/icons/calculater6.png";
const imgArray = [
  calculater1,
  calculater2,
  calculater3,
  calculater4,
  calculater5,
  calculater6,
];

function CalculatorCard({ index, name }) {
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      position="relative"
      sx={{
        background: "#050706",
        borderBottomLeftRadius: "20px",
        width: "270px",
        height: "282px",
      }}
    >
      <img
        src={imgArray[index]}
        alt="dumbbell"
        style={{ width: "80px", height: "80px" }}
      />
    <p>{index}</p>
      <Typography
        fontSize="1.3rem"
        fontWeight="bold"
        fontFamily="Alegreya"
        color="#C0EA6A"
        textTransform="capitalize"
        align="center"
        lineHeight="1"
      >
        {name}
      </Typography>
      <Stack style={{marginTop:"2rem"}} >
        <a
          href="#exercises"
          style={{
            textDecoration: "none",
            width: "150px",
            textAlign: "center",
            background: "#C0EA6A",
            padding: "7px",
            fontSize: "18px",
            textTransform: "none",
            color: "#050706",
            cursor: "pointer",
            borderRadius: "4px",
          }}
        >
          Calculate
        </a>
      </Stack>
    </Stack>
  );
}

export default CalculatorCard;
