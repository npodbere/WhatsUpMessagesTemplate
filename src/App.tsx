import { BrowserRouter, Route, Routes } from "react-router-dom";

import CreateCampaignPage from "./components/CreateCampaignPage";
import SideBar from "./components/sidebar/SideBar";
import Header from "./components/Header";

// main body reducer: {
//  components: [
//  {header state}
//  {body state}
//  {footer state}
//  {buttons state}
// ]
// }

// SideBar ->  {
// Header component
// Body message component -> Tips component
// Footer text component
// Buttons components
// }
// Message Review -> {
// Message example -> {
// }
// }
// Side menu
// Sliders

function App() {
  return (
    <BrowserRouter>
      <div className="main-container">
        <SideBar />
        <Routes>
          <Route
            path="/"
            element={
              <div style={{ width: "100%" }}>
                <Header title="Main page is still under construction" />
              </div>
            }
          />
          <Route
            path="/account"
            element={
              <div style={{ width: "100%" }}>
                <Header title="Account page is still under construction" />
              </div>
            }
          />
          <Route
            path="/dashboard"
            element={
              <div style={{ width: "100%" }}>
                <Header title="Dashboard page is still under construction" />
              </div>
            }
          />
          <Route
            path="/message"
            element={
              <div style={{ width: "100%" }}>
                <Header title="Message page is still under construction" />
              </div>
            }
          />
          <Route path="/campaign" element={<CreateCampaignPage />} />
          <Route
            path="*"
            element={
              <div style={{ width: "100%" }}>
                <Header title="Oops... Something went wrong" />
              </div>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
