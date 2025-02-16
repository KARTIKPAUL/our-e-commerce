import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'; 
import Carousel from './Components/Carousel';
import { Categories } from './Components/Categories';
import { Fotter } from './Components/Fotter';
import Gallery from './Components/Gallery';
import Navbar from './Components/Navbar';
import Reliability from './Components/Reliability';
import { Reviews } from './Components/Reviews';
import { TopSelling } from './Components/TopSelling';
import About from './Pages/About';
import Features from './Pages/Features';
import Works from './Pages/Works';
import Career from './Pages/Career';
import CustomerSupport from './Pages/CustomerSupport';
import DeliveryDetails from './Pages/DeliveryDetails';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import TermsAndCondition from './Pages/TermsAndCondition';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Carousel />
              <Categories />
              <TopSelling />
              <Gallery />
              <Reviews />
              <Reliability />
            </>
          }
        />

        {/* About Page */}
        <Route path="/about" element={<About />} />
        <Route path='/features' element={<Features />} />
        <Route path="/works" element={<Works />} />
        <Route path="/career" element={<Career />} />
        <Route path="/customersupport" element={<CustomerSupport />} />
        <Route path="/DeliveryDetails" element={<DeliveryDetails />} />
        <Route path="/TermsAndCondition" element={<TermsAndCondition />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
      </Routes>
      <Fotter />
    </BrowserRouter>
  );
}

export default App;
