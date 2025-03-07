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
import Account from './Pages/Account';
import ManageOrders from './Pages/ManageOrders';
import ShippingAndReturns from './Pages/ShippingAndReturns';
import Payments from './Pages/Payments';
import MensPage from './Pages/MensPage';
import WomensPage from './Pages/WomensPage';
import KidsPage from './Pages/KidsPage';
import NewArrivals from './Pages/NewArrivals';
import OnSale from './Pages/OnSale';
import Brands from './Pages/Brands';
import OverSized from './Pages/OverSized';
import WindCheater from './Pages/WindCheater';
import CargoPants from './Pages/CargoPants';
import Socks from './Pages/Socks';
import Shorts from './Pages/Shorts';
import RelaxedTshirts from './Pages/RelaxedTshirts';
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


        <Route path="/about" element={<About />} />
        <Route path='/features' element={<Features />} />
        <Route path="/works" element={<Works />} />
        <Route path="/career" element={<Career />} />
        <Route path='/features' element={<Features />} />
        <Route path="/works" element={<Works />} />
        <Route path="/career" element={<Career />} />
        <Route path="/customersupport" element={<CustomerSupport />} />
        <Route path="/deliveryDetails" element={<DeliveryDetails />} />
        <Route path="/termsAndCondition" element={<TermsAndCondition />} />
        <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/account" element={<Account />} />
        <Route path="/manageOrders" element={<ManageOrders />} />
        <Route path="/shippingAndReturns" element={<ShippingAndReturns />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/mensPage" element={<MensPage />} />
        <Route path="/womensPage" element={<WomensPage />} />
        <Route path="/kidsPage" element={<KidsPage />} />
        <Route path="/NewArrivals" element={<NewArrivals />} />
        <Route path="/OnSale" element={<OnSale />} />
        <Route path="/Brands" element={<Brands />} />
        <Route path="/oversized" element={<OverSized />} />
        <Route path="/wind-cheater" element={<WindCheater />} />
        <Route path="/cargo-pants" element={<CargoPants />} />
        <Route path="/socks" element={<Socks />} />
        <Route path="/shorts" element={<Shorts />} />
        <Route path="/relaxed-tshirts" element={<RelaxedTshirts />} />
        
      </Routes>
      <Fotter />
    </BrowserRouter>
  );
}

export default App;
