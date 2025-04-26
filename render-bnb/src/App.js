import logo from './logo.svg';
import './App.css';
import GuestPage from './components/DeNt/GuestPage/GuestPage';
import { ProfEditPage } from './components/DeNt/ProfEditPage/ProjEditPage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { VeriPage1 } from './components/DeNt/VeriPage1/VeriPage1';
import { VeriPage2 } from './components/DeNt/VeriPage2/VeriPage2';
import { PayPage } from './components/DeNt/PayPage/PayPage';
import MainPage from './components/Eli/Main/MainPage'
import ByePage from './components/Eli/Bye/ByePage'
import { VeriPage3 } from './components/DeNt/VeriPage3/VeriPage3';
import AdminPanel from './components/Eli/adminpanel/AdminPanel';
import AuthPages from './components/DeNt/AuthPages/AuthPages';

import { Router, Route, useNavigate, Routes } from 'react-router-dom';

function App() {
  return (

    <Routes>
        <Route path = "/" element={<MainPage />} />
        <Route path = "/authpage" element={<AuthPages />} />
        <Route path = "/byepage" element={<ByePage />} />
        <Route path='/guestpage' element={<GuestPage />} />
        <Route path='/veripage1' element={<VeriPage1 />} />
        <Route path='/veripage2' element={<VeriPage2 />} />
        <Route path='/paypage' element={<PayPage />} />
        <Route path='/profeditpage' element={<ProfEditPage />} />
        <Route path='/veripage3' element={<VeriPage3 />} />
      </Routes>
  );
}

export default App;
