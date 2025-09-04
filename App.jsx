import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RSVPPage from "./pages/RSVPPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rsvp/:eventId" element={<RSVPPage />} />
      </Routes>
    </Router>
  );
}

export default App;
