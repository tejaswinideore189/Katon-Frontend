// import './App.css';

// import Footer from './Footer';
import About from "./About";
import Footer from "./Footer";
import ImageCarousel from "./ImageCarousel";
import Navbar from "./Navbar";
import ContactPage from "./ContactPage";

// import SliderComponent from './SliderComponent';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TermsandConditions from "./TermsandConditions";
import Privacy from "./Privacy";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ImageCarousel />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/terms" element={<TermsandConditions />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
