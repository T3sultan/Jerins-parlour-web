import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./views/components/common/Header/NavBar";
import Login from "./views/pages/auth/Login/Login";
import Signup from "./views/pages/auth/Signup/Signup";
import Contact from "./views/pages/contact/Contact";
import Home from "./views/pages/home/Home";
import OurPortfolio from "./views/pages/OurPortolio/OurPortfolio";
import OurTeam from "./views/pages/OurTeam/OurTeam";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/portfolio" element={<OurPortfolio />}></Route>
        <Route path="/team" element={<OurTeam />}></Route>
        <Route path="/contact" element={<Contact />}></Route>

        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
    </div>
  );
}

export default App;
