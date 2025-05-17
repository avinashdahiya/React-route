import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Contact from "./pages/Contact";
import './index.css'; 

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
  
    <div className="bg-gray-50 min-h-screen font-sans">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services/:serviceId" element={<ServiceDetail />} />
      </Routes>
    </div>
  );
}

export default App;
