import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Tour from "./pages/Tour";
import BookDates from "./pages/Book";
import BookForm from "./pages/BookingForm";


function App() {
  return (
    <Router> {/* Use the alias Router */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tour" element={<Tour />} />
        <Route path="/bookDates" element={<BookDates />} />
        <Route path="/bookForm" element={<BookForm />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
