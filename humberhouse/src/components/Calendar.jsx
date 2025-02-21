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

  const handleDateClick = () => {
    minBookingDate.setDate(today.getDate() + 7);
      console.log ("Date Clicked");
      return;

  };


  
  return (
    
    <div className="Calendar">

      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={bookings}
        dateClick={handleDateClick}
        headerToolbar={headerToolbarOptions}
        height="auto"  // Ensures full height
        contentHeight={700} // Adjust as needed

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

    </div>
  );
};

export default Calendar;
