import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import GDPRConsent from './components/GDPRButton';
import TermsConditions from './components/Term';
import PrivacyPolicy from './components/PrivacyPolicy';
import Foodplante from './pages/Foodplante';
import Commercial from './pages/Commercial';
import Restaurantcleaning from "./pages/Restaurantcleaning"
import Postconstructioncleaningpage from "./pages/Postconstructioncleaningpage"
import Deepsteamcleaning from "./pages/Deepsteamcleaning"
import Floor from './pages/Floor';
import Powerwashing from './pages/Powerwashing';
import Market from './pages/MArket';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Foodplante" element={<Foodplante />} />
        <Route path="/commercial-cleaning" element={<Commercial />} />
        <Route path="/Restaurantcleaning" element={<Restaurantcleaning />} />
        <Route path='/strip-and-wax' element={<Floor />} />
        <Route path='/power-washing' element={<Powerwashing />} />
        <Route path="/Postconstructioncleaning" element={<Postconstructioncleaningpage />} />
        <Route path="/Deepsteamcleaning" element={<Deepsteamcleaning />} />
        <Route path="/market" element={<Market />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
      <GDPRConsent />
    </Router>
  );
}

export default App;
