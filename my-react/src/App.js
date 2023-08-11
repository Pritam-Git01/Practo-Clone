import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home/Home";
import Consultation from "./components/pages/Consulation/consultation";
import Appointment from "./components/pages/Appointment/Appointment";
import Appointment2 from "./components/pages/Appointment/CardAppintment";
import Linked from "./components/pages/Linked/link";
import LogIn from "./components/pages/LogIn/login";
import Signup from "./components/pages/SignUP/signup";

import Checkout from "./components/pages/Checkout/Checkout";
import Payment from "./components/pages/Payment/payment";
import Order from "./components/pages/OrderHistory/Order";
import Records from "./components/pages/OrderHistory/UserRecords/Records";
import Appoint from "./components/pages/OrderHistory/Card/AppointHistory/Appoint";


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
        <Route path="payment" element={<Payment/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="/order-history/" element={<Order/>}>
          <Route path="records" element={<Records/>}/>
          <Route path="appointments" element={<Appoint/>}/>
          <Route path="tests" element={<Records/>}/>
          <Route path="medicines" element={<Records/>}/>
          <Route path="consults" element={<Records/>}/>
          <Route path="articles" element={<Records/>}/>
          <Route path="feedback" element={<Records/>}/>
          <Route path="payment" element={<Records/>}/>
         
          <Route/>
          </Route>
      </Routes>
    </Router>
  );
}

export default App;
