/** @format */

import { Box, useTheme } from "@mui/material";
import GeographyChart from "../../Components/GeographyChart";
import { tokens } from "../../theme";

const Geography = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box height="75vh" border={`2px solid ${colors.greenAccent[300]}`}>
      <GeographyChart />
    </Box>
  );
};
export default Geography;
