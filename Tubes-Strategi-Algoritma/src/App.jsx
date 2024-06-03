import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import "./App.css";
import Landing from "./Pages/Landing";
import InputWaktu from "./Pages/InputWaktu";
import InputJarak from "./Pages/InputJarak";
import InputTempuh from "./Pages/InputTempuh";
import ShowData from "./Pages/ShowData";
import Result from "./Pages/Result";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/inputwaktu" element={<InputWaktu />} />
        <Route path="/inputjarak" element={<InputJarak />} />
        <Route path="/inputtempuh" element={<InputTempuh />} />
        <Route path="/showdata" element={<ShowData />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </Router>
  );
}

export default App;
