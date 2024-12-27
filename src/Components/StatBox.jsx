/** @format */

import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import ProgressCircle from "./ProgressCircle";

const StatBox = ({ title, subTitle, icon, prgress, increase }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box width="100%" m="0 30px">
      <Box display="flex" justifyContent="space-between">
        {icon}
        <Typography variant="h4" fontWeight="bold" sx={colors.grey[100]}>
          {title}
        </Typography>
      </Box>
      <Box>
        <ProgressCircle progress={prgress} />
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h5" fontWeight="bold" sx={colors.greenAccent[500]}>
          {subTitle}
        </Typography>
        <Typography
          variant="h5"
          fontWeight="bold"
          fontStyle="italic"
          sx={colors.greenAccent[600]}
        >
          {increase}
        </Typography>
      </Box>
    </Box>
  );
};

export default StatBox;
