import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Components/homePage";
import ViewDetails from "./Components/ViewDetails";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/user/:id" element={<ViewDetails />} />
        </Routes>
        <ToastContainer/>
      </div>
    </Router>
  );
}

export default App;
