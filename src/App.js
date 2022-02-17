import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Work from "./components/Work";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <div>
      <p>This is working</p>
      <Navbar />
      <Home />
      <About />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
