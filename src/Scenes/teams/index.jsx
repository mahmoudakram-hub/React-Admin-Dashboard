/** @format */

import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { mockDataTeam } from "../../Data/mockData";
import { tokens } from "../../theme";
import { alignBox } from "@nivo/core";
import {
  AdminPanelSettings,
  AdminPanelSettingsOutlined,
  LockOpenOutlined,
  SecurityOutlined,
} from "@mui/icons-material";
import { lazy, Profiler, Suspense, useMemo, useState } from "react";
import { useActionState } from "react";

const onRenderCallback = (
  id, // Component name
  phase, // "mount" or "update"
  actualDuration, // Time spent rendering
  baseDuration, // Estimated time to render without memoization
  startTime, // When React started rendering
  commitTime, // When React committed changes
  interactions // Set of interactions
) => {
  console.log({ id, phase, actualDuration, baseDuration });
};

const Teams = () => {
  const theme = useTheme();
  const [minWidth, setMinWidth] = useState(600);
  const colors = useMemo(
    () => tokens(theme.palette.mode),
    [theme.palette.mode]
  );
  const LazyDataGrid = lazy(() =>
    import("@mui/x-data-grid").then((module) => ({ default: module.DataGrid }))
  );
  const columns = useMemo(
    () => [
      { field: "id", headerName: "ID" },
      {
        field: "name",
        headerName: "Name",
        flex: 1,
        cellClassName: "name-column",
      },
      {
        field: "age",
        headerName: "Age",
        type: "number",
        flex: 0.5,
        headerAlign: "left",
        alignBox: "left",
      },
      {
        field: "phone",
        headerName: "Phone",
        flex: 1,
      },
      {
        field: "email",
        headerName: "Email",
        flex: 1,
      },
      {
        field: "access",
        headerName: "Access Level",
        flex: 1,
        renderCell: ({ row: { access } }) => {
          return (
            <Box
              width="60%"
              m="0 auto"
              p="5px"
              display="flex"
              justifyContent="center"
              backgroundColor={
                access === "admin"
                  ? colors.greenAccent[600]
                  : colors.greenAccent[700]
              }
              borderRadius="4px"
            >
              {access === "admin" && <AdminPanelSettingsOutlined />}
              {access === "manager" && <SecurityOutlined />}
              {access === "user" && <LockOpenOutlined />}
              <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
                {access}
              </Typography>
            </Box>
          );
        },
      },
    ],
    []
  );
  return (
    <Box
      m={"20px"}
      sx={{
        "& .MuiDataGrid-root": {
          border: "none !important",
          color: `${colors.greenAccent[200]} !important`,
          fontSize: "15px !important",
        },
        "& .MuiDataGrid-cell": {
          borderBottom: "none",
        },
        "& .name-column": {
          color: colors.greenAccent["300"],
        },
        "& .MuiDataGrid-columnHeaders": {
          backgroundColor: colors.blueAccent[700],
        },
        "& .MuiDataGrid-virtualScroller": {
          backgroundColor: colors.primary[400],
        },
        "& .MuiDataGrid-footerContainer": {
          borderTop: "none",
          backgroundColor: colors.blueAccent[700],
        },
        "& .MuiDataGrid-row--borderBottom": {
          backgroundColor: "transparent !important",
        },
      }}
    >
      <Suspense fallback={<div>Loading...</div>}>
        <LazyDataGrid rows={mockDataTeam} columns={columns} />
      </Suspense>
    </Box>
  );
};
export default Teams;
