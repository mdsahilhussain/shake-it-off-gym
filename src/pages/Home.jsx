import React, { useState } from "react";
// *===== Linked Material UI =========================
import { Box } from "@mui/material";

// *===== import components =========================
import { SearchExercises, HeroBanner, Exercises, Calculator } from "../components";
const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");

  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Calculator/>
      {/* <Exercises
        setExercises={setExercises}
        exercises={exercises}
        bodyPart={bodyPart}
      /> */}
    </Box>
  );
};

export default Home;
