import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async"; // Import HelmetProvider

import Home from "./pages/Home";
import Tour from "./pages/Tour";
import BookDates from "./pages/Book";
import BookForm from "./pages/BookingForm";
import Login from "./pages/Login";
import Admin from "./pages/Admin";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tour" element={<Tour />} />
          <Route path="/bookDates" element={<BookDates />} />
          <Route path="/bookForm" element={<BookForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
        <Footer />
      </Router>
    </HelmetProvider>
  );
}

export default App;
