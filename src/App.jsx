import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import WebDevelopment from './pages/webDevlopemntser';
import Logodesignservices from './pages/Logodesignservices';
import ResumeServices from './pages/ResumeServices';
import Dataentry from './pages/Dataentry';
import HomePage from './pages/Home';
import FloatingWhatsapp from './components/FloatingWhatsapp';
import AllServices from './pages/AllServices';
import Contact from './pages/Contact';
import AllPlans from './pages/AllPlans';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path="/services/web-development" element={<WebDevelopment />} />
        <Route path="/services/logo-design" element={<Logodesignservices />} />
        <Route path="/services/resume-writing" element={<ResumeServices />} />
        <Route path="/services/data-entry" element={<Dataentry />} />
        <Route path="/services" element={<AllServices />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Plans" element={<AllPlans />} />
      </Routes>

      <FloatingWhatsapp/>
      <Footer/>
    </Router>
  );
}

export default App;
