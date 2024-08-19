import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import MenuComponent from "./Menu";

const BodyComponent = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/menu" element={<MenuComponent />} />
      </Routes>
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
      <Routes>
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default BodyComponent;
