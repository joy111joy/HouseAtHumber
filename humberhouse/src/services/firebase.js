// Import the Firebase modules needed
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNmASVsu0O3juPWT5AkI2CGqqVIg0jEGQ",
  authDomain: "humberhouse-72eab.firebaseapp.com",
  projectId: "humberhouse-72eab",
  storageBucket: "humberhouse-72eab.appspot.com", // ✅ Fixed storage bucket URL
  messagingSenderId: "420782568918",
  appId: "1:420782568918:web:1da2c0fb2e6d382cfe6077",
  measurementId: "G-QXCY35JY58",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);

// Test fetching data from Firestore
async function testFetch() {
  try {
    console.log("🔥 Fetching bookings from Firestore...");
    const snapshot = await getDocs(collection(db, "Booking"));
    
    if (snapshot.empty) {
      console.warn("⚠️ No bookings found in Firestore.");
    } else {
      console.log("✅ Bookings fetched successfully:", snapshot.docs.map(doc => doc.data()));
    }
  } catch (error) {
    console.error("❌ Firestore Fetch Error:", error.message);
  }
}

// Run the test fetch
testFetch();
