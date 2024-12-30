/** @format */

import {
  Box,
  Button,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import StatBox from "../../Components/StatBox";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import LineChart from "../../components/LineChart";
import GeographyChart from "../../components/GeographyChart";
import BarChart from "../../components/BarChart";
import ProgressCircle from "../../Components/ProgressCircle";
import { NavLink } from "react-router-dom";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

const Dashboard = () => {
  const isMobile = useMediaQuery("(max-width:1000px)");

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  console.log("work");
  return (
    <Box m="20px">
      <Button
        sx={{
          backgroundColor: colors.greenAccent[700],
          color: colors.grey[100],
          fontSize: "14px",
          fontWeight: "bold",
          padding: "10px 20px",
        }}
      >
        <DownloadOutlinedIcon sx={{ mr: "10px" }} />
        Download Reports
      </Button>

      <Box
        display={"grid"}
        gridTemplateColumns={"repeat(12, 1fr)"}
        gridAutoRows={`140px`}
        mt="20px"
        gap="20px"
      >
        <Box
          gridColumn={isMobile ? "span 12" : "span 3"}
          backgroundColor={colors.primary[400]}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          borderRadius={"4px"}
        >
          <StatBox
            title="12,361"
            subTitle="Emails Sent"
            progress="0.75"
            increase="+14%"
            icon={
              <EmailIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn={isMobile ? "span 12" : "span 3"}
          backgroundColor={colors.primary[400]}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          borderRadius={"4px"}
        >
          <StatBox
            title="431,225"
            subTitle="Sales Obtained"
            progress="0.5"
            increase="+21%"
            icon={
              <PointOfSaleIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn={isMobile ? "span 12" : "span 3"}
          backgroundColor={colors.primary[400]}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          borderRadius={"4px"}
        >
          <StatBox
            title="32,441"
            subTitle="New Clients"
            progress="0.30"
            increase="+5%"
            icon={
              <PersonAddIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn={isMobile ? "span 12" : "span 3"}
          backgroundColor={colors.primary[400]}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          borderRadius={"4px"}
        >
          <StatBox
            title="1,325,134"
            subTitle="Traffic Inbound"
            progress="0.80"
            increase="+43%"
            icon={
              <TrafficIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        <Box
          gridColumn={isMobile ? "span 12" : "span 8"}
          gridRow="span 3"
          backgroundColor={colors.primary[400]}
          padding={"30px"}
          borderRadius={"4px"}
        >
          <Box
            display="flex"
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Box>
              <Typography variant="h3" fontWeight={"600"}>
                Revenue Generated
              </Typography>
              <Typography variant="h2" color={colors.greenAccent[500]}>
                $59,342.32
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box mt="20px" height="250px" padding={"0"}>
            <LineChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn={isMobile ? "span 12" : "span 4"}
          gridRow="span 3"
          backgroundColor={colors.primary[400]}
          padding={"30px"}
          borderRadius={"4px"}
          overflow={"auto"}
        >
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            borderBottom={`2px solid ${colors.primary[800]}`}
            padding={"15px"}
            backgroundColor={colors.primary[500]}
            borderRadius={"4px"}
          >
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              color={colors.grey[100]}
            >
              <Typography variant="h5" sx={{ fontWeight: "600" }}>
                Recent Transactions
              </Typography>
            </Box>
          </Box>

          {mockTransactions.map((transaction, index) => (
            <Box
              key={index}
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              padding={"15px"}
              borderBottom={`2px solid ${colors.primary[800]}`}
            >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  sx={{ fontWeight: "600" }}
                >
                  {transaction.user}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {transaction.txId}
                </Typography>
              </Box>
              <Box color={colors.grey[100]}>{transaction.date}</Box>
              <Box
                backgroundColor={colors.greenAccent[500]}
                padding={"5px 10px"}
                borderRadius={"4px"}
                color={colors.primary[400]}
              >
                {transaction.date}
              </Box>
            </Box>
          ))}
        </Box>
        {/* Row 3  */}

        <Box
          gridColumn={isMobile ? "span 12" : "span 4"}
          gridRow={"span 2"}
          backgroundColor={colors.primary[400]}
          padding={"30px"}
        >
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Typography variant="h5" sx={{ fontWeight: "600" }}>
              Compaign
            </Typography>
            <NavLink
              state={{
                title: "Compaign",
                subTitle: "Welcome to Compaign",
              }}
              to="/pie"
              style={{ textDecoration: "none", color: colors.greenAccent[500] }}
            >
              <ArrowCircleRightIcon />
            </NavLink>
          </Box>
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            mt={"25px"}
          >
            <ProgressCircle size="125" />
            <Typography
              variant="h5"
              color={colors.greenAccent[500]}
              mt={"10px"}
            >
              $48,352 revenue generated
            </Typography>
            <Typography>Includes extra misc expenditures and costs</Typography>
          </Box>
        </Box>
        <Box
          gridColumn={isMobile ? "span 12" : "span 4"}
          gridRow={"span 2"}
          backgroundColor={colors.primary[400]}
          padding={"30px"}
        >
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Typography variant="h5" sx={{ fontWeight: "600" }}>
              Sales Quantity
            </Typography>
            <NavLink
              state={{
                title: "Sales Quantity",
                subTitle: "Welcome to Sales Quantity",
              }}
              to="/bar"
              style={{ textDecoration: "none", color: colors.greenAccent[500] }}
            >
              <ArrowCircleRightIcon />
            </NavLink>
          </Box>
          <Box mt={"25px"} height={"250px"}>
            <BarChart />
          </Box>
        </Box>
        <Box
          gridColumn={isMobile ? "span 12" : "span 4"}
          gridRow={"span 2"}
          backgroundColor={colors.primary[400]}
          padding={"30px"}
        >
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Typography variant="h5" sx={{ fontWeight: "600" }}>
              Geography Based Traffic
            </Typography>
            <NavLink
              state={{
                title: "Geography Based Traffic",
                subTitle: "Welcome to Geography Based Traffic",
              }}
              to="/geography"
              style={{ textDecoration: "none", color: colors.greenAccent[500] }}
            >
              <ArrowCircleRightIcon />
            </NavLink>
          </Box>
          <Box mt={"0px"} height={"250px"} padding="20px">
            <GeographyChart />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;

