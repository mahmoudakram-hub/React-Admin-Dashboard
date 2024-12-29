/** @format */

import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import ProgressCircle from "./ProgressCircle";

const StatBox = ({ title, subTitle, icon, prgress, increase }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  console.log(subTitle);
  return (
    <Box
      width="100%"
      m="0 30px"
      display="flex"
      flexDirection="row"
      gap="30px"
      justifyContent={"space-between"}
      padding={"10px 20px"}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        flexDirection="column"
        gap="10px"
      >
        {icon}
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{ color: colors.grey[100] }}
        >
          {title}
        </Typography>
        <Typography
          variant="h5"
          fontWeight="bold"
          sx={{ color: colors.greenAccent[300] }}
        >
          {subTitle}
        </Typography>
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        flexDirection={"column"}
        gap="10px"
      >
        <ProgressCircle progress={prgress} />
        <Typography
          variant="h5"
          fontWeight="bold"
          fontStyle="italic"
          sx={{ color: colors.greenAccent[600] }}
        >
          {increase}
        </Typography>
      </Box>
    </Box>
  );
};

export default StatBox;
