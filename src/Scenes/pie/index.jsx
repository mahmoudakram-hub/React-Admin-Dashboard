/** @format */

import { Box } from "@mui/material";
import PieChart from "../../Components/PieChart";
import { useState } from "react";

const Pie = () => {
  const [minWidth, setMinWidth] = useState(600);

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
      <PieChart />
    </Box>
  );
};

export default Pie;
