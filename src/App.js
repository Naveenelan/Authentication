import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/signup"; // Corrected component name
import User from "./components/user"; // Corrected component name
import Admin from "./components/admin"; // Corrected component name
import "./App.css";
  function App() {
    useEffect(() => {
      document.title = 'authentication';
    }, []);
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/signup" element={<Signup />} /> {/* Corrected component name */}
          <Route path="/user" element={<User />} /> {/* Corrected component name */}
          <Route path="/admin" element={<Admin />} /> {/* Corrected component name */}
          {/* <Route path="*" element={<div>Page Not Found hii</div>} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
