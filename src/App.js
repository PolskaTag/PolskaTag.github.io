import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Work from "./components/Work";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <div className="content">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
