import { Routes, Route } from "react-router-dom";

import Circuits from "../pages/Circuits";
import Seasons from "../pages/Seasons";
import Team from "../pages/Team";
import Drivers from "../pages/Drivers";
import Home from "../pages/Home";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Circuits" element={<Circuits />} />
      <Route path="/Seasons" element={<Seasons />} />
      <Route path="/Team" element={<Team />} />
      <Route path="/Drivers" element={<Drivers />} />
      <Route path="*" element={<h1>Página não encontrada</h1>} />
    </Routes>
  );
};

export default AppRoutes;
