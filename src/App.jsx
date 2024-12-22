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
// import Bar from "./Scenes/bar";
// import Form from "./Scenes/form";
// import Line from "./Scenes/line";
// import Pie from "./Scenes/pio";
// import Faq from "./Scenes/faq";
// import Geography from "./Scenes/geography";
// import Calendar from "./Scenes/calendar";
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
                <Route path="/" element={<Dashboard />} />
                <Route path="/teams" element={<Teams />} />
                <Route path="/invoices" element={<Invoices />} />
                <Route path="/contacts" element={<Contacts />} />
                {/* <Route path="/bar" element={<Bar />} /> */}
                {/* <Route path="/form" element={<Form />} /> */}
                {/* <Route path="/line" element={<Line />} /> */}
                {/* <Route path="/pio" element={<Pie />} /> */}
                {/* <Route path="/faq" element={<Faq />} /> */}
                {/* <Route path="/geography" element={<Geography />} /> */}
                {/* <Route path="/geography" element={<Calendar />} /> */}
              </Routes>
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
}

export default App;

