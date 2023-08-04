import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home/Home";
import Consultation from "./components/pages/Consulation/consultation";
import Appointment from "./components/pages/Appointment/Appointment";
import Appointment2 from "./components/pages/Appointment/CardAppintment";
import Linked from "./components/pages/Linked/link";
import LogIn from "./components/pages/LogIn/login";
import Signup from "./components/pages/SignUP/signup";
import Payment from "./components/pages/Payment/payment";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/consulting" element={<Appointment />} />
        <Route path="/consulting-2" element={<Appointment2 />} />
        <Route path="/consultation" element={<Consultation />} />
        <Route path="/link/" element={<Linked />} >
        <Route path="login" element={<LogIn />} />
        <Route path="signup" element={<Signup />} />
        </Route>
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </Router>
  );
}

export default App;
