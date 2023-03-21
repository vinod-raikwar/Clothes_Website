import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Topheader from "./components/Top_header.js";
import NavigationBar from "./components/NavigationBar.js";
import Home from './pages/Home.js';
import Contact from './pages/Contact.js';
import Product from './pages/Product.js';
import Services from './pages/Services.js';
import About from './pages/About.js';
import Login from './pages/Login.js';
import Footer from "./components/Footer.js";
function App() {
  return (
    <>
      <BrowserRouter>
        <Topheader />
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/product" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
