/** @format */

import { Box, useTheme } from "@mui/material";
import { GridToolbar, DataGrid } from "@mui/x-data-grid";
import { mockDataContacts } from "../../Data/mockData";
import { tokens } from "../../theme";
import { lazy, Suspense, useMemo, useState } from "react";

const Contacts = () => {
  const [minWidth, setMinWidth] = useState(900);
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
      { field: "id", headerName: "ID", flex: 0.5 },
      { field: "registerId", headerName: "Register Id", flex: 0.5 },
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
        field: "address",
        headerName: "Address",
        flex: 1,
      },
      {
        field: "city",
        headerName: "City",
        flex: 1,
      },
      {
        field: "zipCode",
        headerName: "zipCode",
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
        "&": {
          maxWidth: "100%",
          overflowX: "scroll",
        },
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
        "& .MuiDataGrid-toolbarContainer button": {
          color: `${colors.grey[100]} !important`,
          padding: "10px !important",
          fontSize: "15px !important",
        },
      }}
    >
      <Suspense fallback={<div>Loading...</div>}>
        <LazyDataGrid
          rows={mockDataContacts}
          columns={columns}
          slots={{ toolbar: GridToolbar }}
          pageSize={10}
          rowsPerPageOptions={[10, 25, 50]}
          sx={{ minWidth }}
        />
      </Suspense>
    </Box>
  );
};
export default Contacts;
