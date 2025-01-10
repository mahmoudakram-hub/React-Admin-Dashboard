/** @format */

import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import lottiAnimation from "../../assets/PreLoader.2.json";
import LoaderAnimation from "../../assets/Loader.json";
const PreLoader = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();
  console.log(navigate);
  function navigateToDashboard() {
    navigate("/dashboard");
  }
  return (
    <Box
      position={"fixed"}
      top={0}
      left={0}
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.primary[400],
        zIndex: 1000,
        flexDirection: "column",
        overflow: "hidden",
        padding: "10px 0 ",
      }}
    >
      <Lottie
        animationData={LoaderAnimation}
        loop={true}
        style={{
          height: "15vh",
        }}
      />
      <Lottie
        animationData={lottiAnimation}
        onComplete={navigateToDashboard}
        loop={false}
        style={{
          height: "60vh",
        }}
      />
    </Box>
  );
};

export default PreLoader;
