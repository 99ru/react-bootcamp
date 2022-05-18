
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import BettyWhite from "./pages/BettyWhite";
import Counter from "./pages/Counter";
import InputDuplication from "./pages/InputDuplication";
import DiceRoller from "./pages/DiceRoller";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bettywhite" element={<BettyWhite />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/form" element={<InputDuplication />} />
          <Route path="/dice" element={<DiceRoller />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
};

export default App;
