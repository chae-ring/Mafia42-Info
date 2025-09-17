import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Rewards from "./pages/Rewards";
import Collection from "./pages/Collection";
import Info from "./pages/Info";
import Calculator from "./pages/Calculator";
import Community from "./pages/Community";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rewards" element={<Rewards />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/info" element={<Info />} />
        <Route path="/community" element={<Community />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
}
export default App;
