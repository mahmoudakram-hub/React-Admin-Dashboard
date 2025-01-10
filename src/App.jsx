/** @format */

import { Route, Routes } from "react-router-dom";
import Topbar from "./Scenes/global/Topbar";
import { ColorModeContext, useMode } from "./theme";
import { ThemeProvider, CssBaseline, Container } from "@mui/material";
import SidebarComponent from "./Scenes/global/SidebarComponent";
import Dashboard from "./Scenes/dashboard";
import Teams from "./Scenes/teams";
import Invoices from "./Scenes/invoices";
import Contacts from "./Scenes/contacts";
import Bar from "./Scenes/bar/Bar";
import Form from "./Scenes/form";
import Faq from "./Scenes/faq";
import Calendar from "./Scenes/calendar";
import Pie from "./Scenes/pie";
import Line from "./Scenes/line/Line";
import Geography from "./Scenes/geography";
import PreLoader from "./Scenes/preLoader/PreLoader";

function App() {
  const { theme, colorMode } = useMode();
  console.log(theme);
  return (
    <>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="app">
            <SidebarComponent />
            <main className="content">
              <Topbar />

              <Routes>
                <Route path="/">
                  <Route index element={<PreLoader />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/teams" element={<Teams />} />
                  <Route path="/invoices" element={<Invoices />} />
                  <Route path="/contacts" element={<Contacts />} />
                  <Route path="/calendar" element={<Calendar />} />
                  <Route path="/bar" element={<Bar />} />
                  <Route path="/form" element={<Form />} />
                  <Route path="/line" element={<Line />} />
                  <Route path="/pie" element={<Pie />} />
                  <Route path="/faq" element={<Faq />} />
                  <Route path="/geography" element={<Geography />} />
                </Route>
              </Routes>
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
}

export default App;

