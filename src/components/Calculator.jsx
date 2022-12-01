import React from "react";
import { Typography } from "@mui/material";

import { CalculatorCard } from "../components";
import fitnessImg from '../assets/images/25_June_28 2.svg';

const calculatorList = [
  { 
    name: "Body Mass Index",
  },
  {
    name: "Burned Calorie From Activity",
  },
  {
    name: "Macros Amounts",
  },
  {
    name: "Body Fat Percentage",
  },
  {
    name: "Daily calory requirements",
  },
  {
    name: "Ideal weight",
  },
];

function Calculator() {
  return (
    <section className="calculator___container">
      <div className="calculator___container--card">
        <div className="calculator___container--gird">
          {calculatorList.map((item, index) => {
            return <CalculatorCard name={item.name} index={index} />;
          })}
        </div>
      </div>
      <div className="calculator___container--card___image">
        <Typography
          color="#F8F6E7"
          fontWeight={700}
          sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        >
          Fitness <br /> Calculator
        </Typography>
        <img src={fitnessImg} alt="fitness_image" />
      </div>
    </section>
  );
}

export default Calculator;
