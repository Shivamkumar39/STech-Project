import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import WebDevelopment from './pages/webDevlopemntser';
import Logodesignservices from './pages/Logodesignservices';
import ResumeServices from './pages/ResumeServices';
import Dataentry from './pages/Dataentry';
import HomePage from './pages/Home';
import FloatingWhatsapp from './components/FloatingWhatsapp';


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
      </Routes>

      <FloatingWhatsapp/>
    </Router>
  );
}

export default App;
