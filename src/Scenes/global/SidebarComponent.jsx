/** @format */
import { Box, useTheme, IconButton, Typography } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import { tokens } from "../../theme";
import React, { useState } from "react";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import profileImage from "../../assets/profileImage.jpeg";

const Item = ({ icon, title, to }) => {
  return (
    <MenuItem icon={icon} component={<NavLink to={to} />}>
      {title}
    </MenuItem>
  );
};

// const allItems = [
//   <Item icon={<HomeOutlinedIcon />} title="Dashboard" to="/" />,
//   <Item icon={<PeopleOutlinedIcon />} title="Team" to="/team" />,
//   <Item icon={<ContactsOutlinedIcon />} title="Contacts" to="/contacts" />,
//   <Item icon={<ReceiptOutlinedIcon />} title="Invoices" to="/invoices" />,
//   <Item icon={<PersonOutlinedIcon />} title="Profile" to="/profile" />,
//   <Item icon={<CalendarTodayOutlinedIcon />} title="Calendar" to="/calendar" />,
//   <Item icon={<HelpOutlineOutlinedIcon />} title="FAQ" to="/faq" />,
//   <Item icon={<BarChartOutlinedIcon />} title="Bar" to="/bar" />,
//   <Item icon={<PieChartOutlineOutlinedIcon />} title="Pie" to="/pie" />,
//   <Item icon={<TimelineOutlinedIcon />} title="Line" to="/line" />,
//   <Item icon={<MapOutlinedIcon />} title="Geography" to="/geography" />,
// ];
const allItems = [
  {
    label: null,
    components: [<Item icon={<HomeOutlinedIcon />} title="Dashboard" to="/" />],
  },
  {
    label: "Data",
    components: [
      <Item icon={<PeopleOutlinedIcon />} title="Team" to="/team" />,
      <Item icon={<ContactsOutlinedIcon />} title="Contacts" to="/contacts" />,
      <Item icon={<ReceiptOutlinedIcon />} title="Invoices" to="/invoices" />,
    ],
  },
  {
    label: "Pages",
    components: [
      <Item icon={<PersonOutlinedIcon />} title="Profile" to="/profile" />,
      <Item
        icon={<CalendarTodayOutlinedIcon />}
        title="Calendar"
        to="/calendar"
      />,
      <Item icon={<HelpOutlineOutlinedIcon />} title="FAQ" to="/faq" />,
    ],
  },
  {
    label: "Charts",
    components: [
      <Item icon={<BarChartOutlinedIcon />} title="Bar" to="/bar" />,
      <Item icon={<PieChartOutlineOutlinedIcon />} title="Pie" to="/pie" />,
      <Item icon={<TimelineOutlinedIcon />} title="Line" to="/line" />,
      <Item icon={<MapOutlinedIcon />} title="Geography" to="/geography" />,
    ],
  },
];

const SidebarComponent = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);

  function handelCollapse() {
    setIsCollapsed((prev) => !prev);
  }
  return (
    <Box
      sx={{
        "& .ps-sidebar-root": {
          backgroundColor: `${colors.primary[400]} !important`,
          borderRight: "none !important",
          height: "100%",
        },
        "& .ps-sidebar-container": {
          backgroundColor: `transparent !important`,
        },
      }}
    >
      <Sidebar collapsed={isCollapsed} rootStyles={{ width: "260px" }}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          padding={"10px 20px"}
        >
          {!isCollapsed && (
            <Typography
              variant="h3"
              color={colors.grey[100]}
              textAlign="center"
            >
              Admin
            </Typography>
          )}
          <IconButton onClick={() => handelCollapse()}>
            <MenuOutlinedIcon />
          </IconButton>
        </Box>
        {!isCollapsed && (
          <Box mb="25px">
            <Box display="flex" justifyContent="center" alignItems="center">
              <Box
                component="img"
                alt="profile user"
                src={profileImage}
                height="100px"
                width="100px"
                borderRadius="50%"
                sx={{ objectFit: "cover" }}
              ></Box>
            </Box>
            <Box textAlign="center">
              <Typography
                variant="h3"
                color={colors.grey[200]}
                fontwaght="bold"
                sx={{ m: "10px 0 0 0" }}
              >
                Mahmoud
              </Typography>
              <Typography
                variant="p"
                color={colors.greenAccent[200]}
                fontwaght="bold"
                sx={{ m: "10px 0 0 0" }}
              >
                FrontEnd Developer
              </Typography>
            </Box>
          </Box>
        )}
        <Menu
          iconShape="square"
          menuItemStyles={{
            button: {
              "&": {
                fontSize: "16px",
                marginLeft: !isCollapsed ? "10px" : undefined,
              },
              ["&.active"]: {
                // backgroundColor: colors.primary[600],
                // color: "white",
                color: colors.blueAccent[300],
              },
              ["&:hover"]: {
                backgroundColor: colors.primary[500],
              },
            },
          }}
        >
          {allItems.map((item, index) => (
            <Box key={index}>
              {item.label && (
                <Typography variant="h5" sx={{ m: "15px 0 5px 20px" }}>
                  {item.label}
                </Typography>
              )}
              {item.components.map((component, index) =>
                React.cloneElement(component, { key: index })
              )}
            </Box>
          ))}
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default SidebarComponent;

