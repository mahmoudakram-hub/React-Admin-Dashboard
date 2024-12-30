/** @format */

import { Box, useTheme } from "@mui/material";
import GeographyChart from "../../Components/GeographyChart";
import { tokens } from "../../theme";
import { useState } from "react";

const Geography = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [minWidth, setMinWidth] = useState(900);

  return (
    <Box
      height="75vh"
      border={`2px solid ${colors.greenAccent[300]}`}
      sx={{
        "&": {
          maxWidth: "100%",
          overflowX: "scroll",
        },
        "& > div": {
          minWidth,
        },
      }}
    >
      <GeographyChart />
    </Box>
  );
};
export default Geography;
