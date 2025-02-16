import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../services/firebase";


const useWindowWidth = () => {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
      const handleResize = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
    return width;
  };

const Calendar = () => {
  const [bookings, setBookings] = useState([]);
  const [bookingRange, setBookingRange] = useState({ start: "", end: "" });
  const [isMobile, setIsMobile] = useState(window.innerWidth < 550);
  const navigate = useNavigate();
  
    const width = useWindowWidth();
    const headerToolbarOptions =
      width < 650
        ? {
            left: "prev,next",
            center: "title",
            right: "", // Remove extra buttons if needed for smaller screens
          }
        : {
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,dayGridWeek,dayGridDay",
          };

  // Update isMobile on window resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 550);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Fetch existing bookings from Firestore
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "Booking"));
        const events = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          title: "Booked",
          start: doc.data().startDate,
          end: doc.data().endDate,
          display: "background",
        }));
        setBookings(events);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };
    fetchBookings();
  }, []);

  // DateClick handler with inline validation (for desktop interactions)
  const handleDateClick = (info) => {
    const clickedDate = info.dateStr;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const minBookingDate = new Date(today);
    minBookingDate.setDate(today.getDate() + 7);
    const clicked = new Date(clickedDate);

    if (clicked < today) {
      alert("❌ You cannot book past dates!");
      return;
    }
    if (clicked < minBookingDate) {
      alert("❌ You must book at least a week in advance!");
      return;
    }

    if (!bookingRange.start) {
      setBookingRange({ start: clickedDate, end: "" });
    } else {
      const startDate = new Date(bookingRange.start);
      if (clicked < startDate) {
        alert("❌ The end date cannot be before the start date!");
        return;
      }
      // Check if the range overlaps with an existing booking
      let overlap = false;
      for (const event of bookings) {
        const eventStart = new Date(event.start);
        const eventEnd = new Date(event.end);
        if (startDate < eventEnd && clicked > eventStart) {
          overlap = true;
          break;
        }
      }
      if (overlap) {
        alert("❌ The selected range overlaps with an existing booking. Please select another range.");
        return;
      }
      setBookingRange({ ...bookingRange, end: clickedDate });
    }
  };

  // For manual input fields, simply update state without immediate validation
  const handleManualDateChange = (e, isStart) => {
    const newDate = e.target.value;
    setBookingRange((prev) => ({ ...prev, [isStart ? "start" : "end"]: newDate }));
  };

  // Validate the complete booking range when the user clicks "Proceed to Booking"
  const validateBookingRange = () => {
    if (!bookingRange.start || !bookingRange.end) {
      alert("❌ Please select both start and end dates.");
      return false;
    }
    const start = new Date(bookingRange.start);
    const end = new Date(bookingRange.end);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const minBookingDate = new Date(today);
    minBookingDate.setDate(today.getDate() + 7);

    if (start < today) {
      alert("❌ You cannot book past dates!");
      return false;
    }
    if (start < minBookingDate) {
      alert("❌ You must book at least a week in advance!");
      return false;
    }
    if (end < start) {
      alert("❌ The end date cannot be before the start date!");
      return false;
    }
    for (const event of bookings) {
      const eventStart = new Date(event.start);
      const eventEnd = new Date(event.end);
      if (start < eventEnd && end > eventStart) {
        alert("❌ The selected range overlaps with an existing booking.");
        return false;
      }
    }
    return true;
  };

  const confirmBooking = () => {
    if (!validateBookingRange()) {
      return;
    }
    navigate("/bookForm", { state: { startDate: bookingRange.start, endDate: bookingRange.end } });
  };



  const resetSelection = () => setBookingRange({ start: "", end: "" });

  return (
    
    <div className="Calendar">

      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={bookings}
        dateClick={handleDateClick}
        headerToolbar={headerToolbarOptions}

      />
            <div className="Legend"> 
            <div className="LegBox">
            <h3>Booked =</h3>
            <div className="ColorSquare" id="BookedSquare"></div>
            </div>
            <div className="LegBox">
            <h3>Available =</h3>
            <div className="ColorSquare" id="AvailableSquare"></div>
            </div>
            </div>

      {/* Manual date inputs for mobile devices */}
      {isMobile && (
        <div className="manual-date-inputs" style={{ marginTop: "1rem" }}>
          <div className="date-input">
            <label>Start Date:&nbsp;</label>
            <input
              type="date"
              value={bookingRange.start || ""}
              onChange={(e) => handleManualDateChange(e, true)}
            />
          </div>
          <div className="date-input">
            <label>End Date:&nbsp;</label>
            <input
              type="date"
              value={bookingRange.end || ""}
              onChange={(e) => handleManualDateChange(e, false)}
            />
          </div>
        </div>
      )}

      {bookingRange.start && (
        <div className="booking-controls" style={{ marginTop: "1rem" }}>
          <p>
            <span id="Selected">Selected: </span>
            {bookingRange.start} {bookingRange.end ? `→ ${bookingRange.end}` : ""}
          </p>
          <button onClick={confirmBooking}>Proceed to Booking</button>
          <button onClick={resetSelection} id="red">Reset Selection</button>
        </div>
      )}
    </div>
  );
};

export default Calendar;
