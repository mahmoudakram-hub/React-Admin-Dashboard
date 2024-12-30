/** @format */

import { Box, Typography, useTheme } from "@mui/material";
import { Title } from "@mui/icons-material";
import { tokens } from "../theme";
import { useLocation } from "react-router-dom";

const Header = ({ title, subTitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const location = useLocation();

  return (
    <Box display="flex" justifyContent="space-between" p={2} mb={2}>
      <Box>
        <Typography
          variant="h1"
          color={colors.grey[100]}
          fontWeight="bold"
          mb={0.5}
        >
          {location.state?.title || "Dashboard"}
        </Typography>
        <Typography variant="h5" color={colors.greenAccent[400]}>
          {location.state?.subTitle || "Welcome to your dashboard"}
        </Typography>
      </Box>
    </Box>
  );
};
export default Header;
