import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import PFConsultant from './pages/PFConsultant';
import ESIConsultant from './pages/ESIConsultant';
import GSTFiling from './pages/GSTFiling';
import IncomeTax from './pages/IncomeTax';
import PFWithdrawal from './pages/PFWithdrawal';
import CompanyFormation from './pages/CompanyFormation';
import Licensing from './pages/Licensing';
import ESSLogin from './pages/ESSLogin';
import EmployerLogin from './pages/EmployerLogin';
import MainNavbar from './components/MainNavbar';
import CarouselSection from './components/CarouselSection';
import Home from './pages/HomePage';


function App() {
  return (
    <Router>
      <Header />
      <MainNavbar/>
      <br/>
      <br/>
      <CarouselSection/>
      <br/>
      <br/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pf-consultant" element={<PFConsultant />} />
        <Route path="/esi-consultant" element={<ESIConsultant />} />
        <Route path="/gst-filing" element={<GSTFiling />} />
        <Route path="/income-tax" element={<IncomeTax />} />
        <Route path="/pf-withdrawal" element={<PFWithdrawal />} />
        <Route path="/company-formation" element={<CompanyFormation />} />
        <Route path="/licensing" element={<Licensing />} />
        <Route path="/ess-login" element={<ESSLogin />} />
        <Route path="/employer-login" element={<EmployerLogin />} />
      </Routes>
    </Router>
  );
}

export default App;
