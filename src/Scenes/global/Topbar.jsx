/** @format */
import { Box, IconButton, InputBase, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import Header from "../../Components/Header";
/**
 * A navigation bar at the top of the page, with a search bar,
 * notification, user, and dark mode toggle icons.
 *
 * @returns {JSX.Element} The top bar component.
 */
const Topbar = () => {
  const theme = useTheme();
  const mode = theme.palette.mode;
  const colors = tokens(mode);
  const { toggelColorMode } = useContext(ColorModeContext);
  function handleToggelMode() {
    toggelColorMode();
  }

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          py: 2,
          alignItems: "center",
          px: 2,
        }}
      >
        <Box
          display="flex"
          backgroundColor={colors.primary[400]}
          borderRadius="3px"
        >
          <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
          <SearchIcon sx={{ p: 1, fontSize: "40px" }} />
        </Box>
        <Box display="flex" gap="10px">
          <IconButton>
            <NotificationsActiveIcon />
          </IconButton>
          <IconButton>
            <PersonIcon />
          </IconButton>
          <IconButton onClick={handleToggelMode}>
            {mode === "light" ? <DarkModeIcon /> : <LightModeOutlinedIcon />}
          </IconButton>
        </Box>
      </Box>
      <Header />
    </>
  );
};

export default Topbar;

