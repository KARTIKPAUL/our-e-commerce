import './App.css'; // Ensure you have the right path to your CSS
import Carousel from './Components/Carousel';
import { Categories } from './Components/Categories';
import { Fotter } from './Components/Fotter'; // Your footer component
import Gallery from './Components/Gallery';
import Navbar from './Components/Navbar'; // Your navbar component
import Reliability from './Components/Reliability';
import { Reviews } from './Components/Reviews';
import { TopSelling } from './Components/TopSelling';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Carousel />
      <Categories />
      <TopSelling />
      <Gallery />
      <Reviews />
      <Reliability />
      <Fotter />
    </div>
  );
}

export default App;
