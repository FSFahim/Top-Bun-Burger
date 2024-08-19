import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import MenuComponent from "./Menu";

const BodyComponent = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<MenuComponent />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default BodyComponent;
