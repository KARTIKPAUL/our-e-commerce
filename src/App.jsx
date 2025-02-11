// App.jsx
import { BrowserRouter } from 'react-router-dom';

import './App.css'; // Ensure you have the right path to your CSS
import Carousel from './Components/Carousel';
import { Categories } from './Components/Categories';
import { Fotter } from './Components/Fotter'; // Your footer component
import Gallery from './Components/Gallery';
import Navbar from './Components/Navbar'; // Your navbar component
import Reliability from './Components/Reliability';
import { Reviews } from './Components/Reviews';
import { TopSelling } from './Components/TopSelling';

import AppRoutes from './AppRoutes';

function App() {
  return (
    <div className="app-container">
             <Navbar />
      <BrowserRouter>
 
        <Carousel />
        <Categories />
        <TopSelling />
        <Gallery />
        <Reviews />
        <Reliability />
        <AppRoutes />
        
      </BrowserRouter>
      <Fotter />
    </div>
  );
}

export default App;
