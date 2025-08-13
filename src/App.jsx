import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HRsoftware from './components/products/HRsoftware';
import ContactUs from './components/ContectUs';
import AboutUs from './components/AboutUs';
import FAQ from './components/FAQ';
import Pricing from './components/Pricing';
import Login from './components/Login';
import Performance from './components/products/Performance';
import Leave from './components/products/Leave';
import Employee from './components/products/Employee';
import Attandence from './components/products/Attandence';
import EmployeeEngagement from './components/products/EmployeeEngagement';
import Task from './components/products/Task';
import Recruitment from './components/products/Recruitment';
import Anouncement from './components/products/Anouncement';
import Ticket from './components/products/Ticket';
import ReportAnalytics from './components/products/ReportAnalytics';
import GuidOfPerformance from './components/products/GuidOfPerformance';
import GuidOfPayroll from './components/products/GruidofPayroll';
import GuidofAttandence from './components/products/GuidofAttandence';
import Hcms from './components/products/Hcms';
import Partners from './components/products/Partners';
import Payroll from './components/products/Payroll';
import HowItWorksSection from './components/HowItWorksSection';

function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/how-it-works" element={<HowItWorksSection />}/>
        <Route path="/hr-software" element={<HRsoftware />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/performance" element={<Performance />} />
        <Route path="/leave" element={<Leave />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/attendence" element={<Attandence />} />
        <Route path="/employee-engagement" element={<EmployeeEngagement />} />
        <Route path="/task" element={< Task/>} />
        <Route path="/recruitment" element={< Recruitment/>} />
        <Route path="/anouncement" element={< Anouncement/>} />
        <Route path="/ticket" element={< Ticket/>} />
        <Route path="/report" element={<ReportAnalytics/>} />
        <Route path="/guidetoperformance" element={<GuidOfPerformance/>} />
        <Route path="/guidetopayroll" element={<GuidOfPayroll/>} />
        <Route path="/guidetoattandence" element={<GuidofAttandence/>} />
        <Route path="/hrms" element={<Hcms/>} />
        <Route path="/partners" element={<Partners/>} />
        <Route path="/payroll" element={<Payroll/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
