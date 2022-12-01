import { Routes, Route } from "react-router-dom";
import Booking from "./pages/booking/Booking";
import Home from "./pages/home/Home";
import Prices from "./pages/servise/Prices";
import Team from "./pages/team/Team";

function App() {
  return (
    <div>
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
