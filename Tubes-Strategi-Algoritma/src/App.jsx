import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Landing from "./Pages/Landing";
import InputWaktu from "./Pages/InputWaktu";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="inputwaktu" element={<InputWaktu />} />
      </Routes>
    </Router>
  );
}

export default App;
