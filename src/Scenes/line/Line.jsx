/** @format */

import { Box } from "@mui/material";
import LineChart from "../../components/LineChart";
import { useState } from "react";
const Line = () => {
  const [minWidth, setMinWidth] = useState(900);

  return (
    <Box
      height="75vh"
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
      <LineChart />
    </Box>
  );
};

export default Line;
