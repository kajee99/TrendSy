import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Routes and Route
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import AOS from "aos";
import "aos/dist/aos.css";
import TopProducts from "./components/TopProducts/TopProducts";
import Banner from "./components/Banner/Banner";
import Subscribe from "./components/Subscribe/Subscribe";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";
import KidsWearPage from "./components/pages/kidswear"; // Ensure this path is correct
import TopRatedPage from "./components/pages/topRated";
import MensWearPage from "./components/pages/mensWear";
import WomensWear from "./components/pages/womenswear";
import Offer from "./components/pages/offer";
import Bestsell from "./components/pages/bestsell";
import Home from "./components/pages/home";
//import HomePages from "./components/pages/home";


// If HomePage doesn't exist, remove it or create a simple component:
const HomePage = () => <div></div>; // Simple placeholder if you don't have a HomePage component

const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <Router> {/* Wrap your app with BrowserRouter */}
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
        {/* Navbar is outside Routes since it should be always visible */}
        <Navbar handleOrderPopup={handleOrderPopup} />
        
        {/* Define the routes */}
        <Routes>
          <Route path="/" element={<HomePage />} /> 
          <Route path="/kids-wear" element={<KidsWearPage />} />
          <Route path="/topRated" element={<TopRatedPage />} />
          <Route path="/mens-wear" element={<MensWearPage/>} />
          <Route path="/womenswear" element={<WomensWear />} />
          <Route path="/offer" element={<Offer />} />
          <Route path="/bestsell" element={<Bestsell/>} />
          <Route path="/" element={<HomePage />} />

          {/* Add more routes here */}

        </Routes>

        {/* Other components are always visible */}
        <Hero handleOrderPopup={handleOrderPopup} />
        <Products />
        <TopProducts handleOrderPopup={handleOrderPopup} />
        <Banner />
        <Subscribe />
        <Products />
        <Testimonials />
        <Footer />
        <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
      </div>
    </Router>
  );
};

export default App;
