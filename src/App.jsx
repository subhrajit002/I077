import LandingPage from "./pages/LandingPage";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactPage from "./pages/Contact";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import CustomerSuccessPage from "./pages/Customer";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/customer_success" element={<CustomerSuccessPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>

  );
}
export default App;
