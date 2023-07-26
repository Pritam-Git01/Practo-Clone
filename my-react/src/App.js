import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/molecules/Navbar/navbar";
import Footer from "./components/molecules/Footer/footer";
import Home from "./components/pages/Home/Home";
import Consultation from "./components/pages/Consulation/consultation";
import Appointment from "./components/pages/Appointment/Appointment";
import Appointment2 from "./components/pages/Appointment/CardAppintment";

function App() {
  return (
    <Router>
    
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/consulting' element={<Appointment/>}/>
        <Route path="/consulting-2" element={<Appointment2/>} />
        <Route path="/consultation" element={<Consultation />} />
      </Routes>
   
    </Router>
  );
}

export default App;
