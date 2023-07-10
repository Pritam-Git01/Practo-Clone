
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from './components/molecules/Navbar/navbar';
import Footer from "./components/molecules/Footer/footer"
import Home from './components/pages/Home/Home';
import Consultation from './components/pages/Consulation/consultation';



function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/consultation" element={<Consultation/>}/>
      </Routes>
      <Footer/>
    </Router>
   
    
  )
 
}

export default App;
