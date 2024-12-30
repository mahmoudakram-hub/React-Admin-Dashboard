/** @format */

import { Box } from "@mui/material";
import BarChart from "../../Components/BarChart";
import { useState } from "react";

const Bar = () => {
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
      <BarChart />;
    </Box>
  );
};
export default Bar;
