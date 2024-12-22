/** @format */

import { Box, Typography, useTheme } from "@mui/material";
import { GridToolbar, DataGrid } from "@mui/x-data-grid";
import { mockDataInvoices } from "../../Data/mockData";
import { tokens } from "../../theme";
import { lazy, Suspense, useMemo } from "react";

const Invoices = () => {
  const theme = useTheme();
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
        field: "date",
        headerName: "Date",
        flex: 1,
      },
      {
        field: "cost",
        headerName: "Cost",
        renderCell: (params) => (
          <Typography
            color={colors.greenAccent[500]}
            fontSize={"17px !important"}
            fontWeight={600}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            height={"100%"}
          >
            ${params.row.cost}
          </Typography>
        ),
        flex: 1,
      },
    ],
    []
  );
  return (
    <Box
      m={"20px"}
      height={"75vh"}
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
        "& .MuiCheckbox-root": {
          color: `${colors.greenAccent[400]} !important}`,
        },
      }}
    >
      <Suspense fallback={<div>Loading...</div>}>
        <LazyDataGrid
          rows={mockDataInvoices}
          columns={columns}
          slots={{ toolbar: GridToolbar }}
          pageSize={10}
          rowsPerPageOptions={[10, 25, 50]}
          checkboxSelection
        />
      </Suspense>
    </Box>
  );
};
export default Invoices;
