import './App.css';
import {Box} from '@mui/material';
import Home from './components/Home.js'
import UploadVideo from './components/UploadVideo.js'
import LoginPage from './components/LoginPage.js'
import Reports from './components/Reports.js'
import SignUpPage from './components/SignUpPage.js'
import AdminLogin from './components/Login/AdminLogin.js'
import DoctorLogin from './components/Login/DoctorLogin.js'
import PatientLogin from './components/Login/PatientLogin.js'
import Doctor from './components/MainPages/Doctor.js'
import Patient from './components/MainPages/Patient.js'
import Admin from './components/MainPages/Admin.js'

import {BrowserRouter as Router,  Route, Routes,} from 'react-router-dom';
 

function App() {
  return (
    <div >
       <Router>
 
      
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/upload" element={<UploadVideo />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signUpPage" element={<SignUpPage/>} />
          <Route path="/adminLogin" element={<AdminLogin />} />
          <Route path="/doctorLogin" element={<DoctorLogin />} />
          <Route path="/patientLogin" element={<PatientLogin />} />
          <Route path="/admin" element={<Admin/>} />
          <Route path="/doctor" element={<Doctor />} />
          <Route path="/patient" element={<Patient />} />
        </Routes>
 
    </Router>
    </div>
  );
}

export default App;
