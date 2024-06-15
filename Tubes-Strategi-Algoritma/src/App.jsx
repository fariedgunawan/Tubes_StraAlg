import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Landing from "./Pages/Landing";
import InputWaktu from "./Pages/InputWaktu";
import InputJarak from "./Pages/InputJarak";
import InputTempuh from "./Pages/InputTempuh";
import ShowData from "./Pages/ShowData";
import Result from "./Pages/Result";

function generateRandomDate() {
  const start = new Date(2024, 0, 1); // Jan 1, 2024
  const end = new Date(); // Current date
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

function generateMockData() {
  const mockData = [];
  const timesOfDay = ["Pagi", "Sore"];
  for (let i = 0; i < 10000; i++) {
    const randomDate = generateRandomDate();
    const date = `${randomDate.getFullYear()}-${(randomDate.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${randomDate.getDate().toString().padStart(2, "0")}`;
    const time = timesOfDay[Math.floor(Math.random() * timesOfDay.length)]; // Randomly select "Pagi" or "Sore"
    const distance = Math.floor(Math.random() * 10) + 1; // Random distance between 1 and 10
    const duration = Math.floor(Math.random() * 200) + 30; // Random duration between 30 and 230 minutes
    mockData.push({ date, time, distance, duration });
  }
  return mockData;
}

function App() {
  const [data, setData] = useState(generateMockData());
  const [currentEntry, setCurrentEntry] = useState({
    date: "",
    time: "",
    distance: "",
    duration: "",
  });

  const updateEntry = (field, value) => {
    setCurrentEntry((prevEntry) => ({ ...prevEntry, [field]: value }));
  };

  const addEntry = () => {

    const distanceInt = parseInt(currentEntry.distance);
    const durationInt = parseInt(currentEntry.duration);

    
    if (
      currentEntry.date.trim() !== "" &&
      currentEntry.time.trim() !== "" &&
      !isNaN(distanceInt) &&
      !isNaN(durationInt)
    ) {
      setData((prevData) => [
        ...prevData,
        {
          ...currentEntry,
          distance: distanceInt,
          duration: durationInt,
        },
      ]);
      setCurrentEntry({ date: "", time: "", distance: "", duration: "" });
    } else {
      alert("Please fill in all fields with valid numbers.");
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing addEntry={addEntry} />} />
        <Route path="/inputwaktu" element={<InputWaktu updateEntry={updateEntry} />} />
        <Route path="/inputjarak" element={<InputJarak updateEntry={updateEntry} />} />
        <Route path="/inputtempuh" element={<InputTempuh updateEntry={updateEntry} />} />
        <Route path="/showdata" element={<ShowData data={data} />} />
        <Route path="/result" element={<Result data={data} />} />
      </Routes>
    </Router>
  );
}

export default App;
