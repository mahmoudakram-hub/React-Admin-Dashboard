/** @format */

import { Box, useTheme } from "@mui/material";
import { tokens } from "../theme";

const ProgressCircle = ({ progress = 0.75, size = 40 }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const angel = progress * 360;
  return (
    <Box
      sx={{
        backgroundColor: `radial-gradient(${colors.primary[400]} 55% transparent 56%) , 
        conic-gradien(transparent 0deg ${angel}deg , ${colors.blueAccent[500]}) ${angel}deg  360deg
        ${colors.greenAccent[500]}`,
        borderRadius: "50%",
        width: `${size}px`,
        height: `${size}px`,
      }}
    />
  );
};

export default ProgressCircle;
