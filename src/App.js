import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BettyWhite from "./pages/BettyWhite";
import Counter from "./pages/Counter";
import InputDuplication from "./pages/InputDuplication";
import DiceRoller from "./pages/DiceRoller";
import Form from "./pages/Form";
import ToggleSwitch from "./pages/ToggleSwitch";
import Fruits from "./pages/Fruits";
import Developers from "./pages/Developers";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bettywhite" element={<BettyWhite />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/inputduplication" element={<InputDuplication />} />
          <Route path="/dice" element={<DiceRoller />} />
          <Route path="/form" element={<Form />} />
          <Route path="/toggle" element={<ToggleSwitch />} />
          <Route path="/fruits" element={<Fruits />} />
          <Route path="/developers" element={<Developers />} />



        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
