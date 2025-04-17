import './App.css';
import {Box} from '@mui/material';
import Home from './components/Home.js'
import UploadVideo from './components/UploadVideo.js'
import Reports from './components/Reports.js'
import {BrowserRouter as Router,  Route, Routes,} from 'react-router-dom';
 

function App() {
  return (
    <div >
       <Router>
 
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/upload" element={<UploadVideo />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/home" element={<Home />} />
          {/* <Route path="/reports" element={<Reports />} />
          <Route path="/logout" element={<Logout />} /> */}
        </Routes>
 
    </Router>
    </div>
  );
}

export default App;
