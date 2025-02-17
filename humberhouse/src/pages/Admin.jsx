import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../services/firebase'; 
import Calendar from '../components/Calendar';
import { signOut } from "firebase/auth";

const Book = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Logout function
  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("✅ Logged out successfully");
      navigate('/login'); // Redirect to login page after logout
    } catch (error) {
      console.error("❌ Logout failed:", error.message);
    }
  };

  // Check if user is logged in
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        navigate('/login'); // Redirect to login page if not authenticated
      } else {
        setUser(user);
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  if (!user) {
    return <p>Loading...</p>; // Prevents flashing of protected content
  }

  return (
    <div className='BookPage'>

              {/* Logout Button */}
      <button onClick={handleLogout} className="logout-btn">
        Logout
      </button>
      <div className='BookPageHead'>
        <p>
          <span className='BookDatesHead'>Book Dates </span>
          <br /> Please select the start and end date of your stay
        </p>
      </div>
      
      {/* Calendar Component */}
      <Calendar />


    </div>
  );
};

export default Book;
