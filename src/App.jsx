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
      </Routes>
      <Fotter />
    </BrowserRouter>
  );
}

export default App;
