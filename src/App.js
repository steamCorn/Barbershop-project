import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Booking from "./pages/booking/Booking";
import Home from "./pages/homePage/Home";
import Prices from "./pages/price/Prices";
import Team from "./pages/team/Team";

import "./main.css";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prices" element={<Prices />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </div>
  );
}

export default App;
