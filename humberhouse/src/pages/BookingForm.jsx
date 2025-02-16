import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../services/firebase";

const BookingForm = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Destructure startDate and endDate from the navigation state
  const { startDate, endDate } = location.state || {};

  // Local state to manage user details
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    phone: "",
    email: ""
  });

  // If the booking dates are not provided, alert and navigate back
  useEffect(() => {
    if (!startDate || !endDate) {
      alert("❌ Booking dates are missing. Please select them again.");
      navigate("/");
    }
  }, [startDate, endDate, navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validates that the user is at least 21 years old
  const validateAge = (dob) => {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age >= 21;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateAge(formData.dob)) {
      alert("❌ You must be at least 21 years old to book.");
      return;
    }

    // At this point, startDate and endDate should be defined from the location state
    try {
      await addDoc(collection(db, "Booking"), {
        ...formData,
        startDate,
        endDate
      });

      alert("✅ Booking confirmed!");
      navigate("/");
    } catch (error) {
      console.error("❌ Error saving booking:", error);
      alert("❌ Failed to save booking.");
    }
  };

  return (
    <div className="booking-form">
      <h2>Confirm Your Booking</h2>
      <p>
        📅 Booking: {startDate} → {endDate}
      </p>

      <form onSubmit={handleSubmit}>
        <label>First Name:</label>
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />

        <label>Last Name:</label>
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />

        <label>Date of Birth:</label>
        <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />

        <label>Phone Number:</label>
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />

        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />

        <button type="submit">Confirm Booking</button>
      </form>
    </div>
  );
};

export default BookingForm;
