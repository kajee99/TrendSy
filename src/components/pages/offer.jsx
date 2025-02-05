import React, { useState } from 'react';
import Popup from '../Popup/Popup';

import img from "../../assets/pictures/IMG_1471.png" ;
import img1 from "../../assets/pictures/IMG_1472.png" ;
import img2 from "../../assets/pictures/IMG_1473-2.png" ;

const offers = [
  {
    id: 1,
    title: "50% Off on clouths",
    description: "Get 50% off on selected electronics items, limited time offer.",
    imgUrl: img,
  },
  {
    id: 2,
    title: "Buy 1 Get 1 Free",
    description: "Buy 1 item from our clothing range and get another one for free.",
    imgUrl: img1,
  },
  {
    id: 3,
    title: "Free Shipping on Orders over Rs5000",
    description: "Enjoy free shipping on all orders over $50, no code required.",
    imgUrl: img2,
  },
  
];

function OffersPage() {
  const [orderPopup, setOrderPopup] = useState(false); // State to control popup visibility
    
      // Function to show popup
      const handleOrderPopup = () => {
        setOrderPopup(true);
      };
  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-3xl font-semibold text-center mb-6">Exclusive Offers</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {offers.map(offer => (
          <div key={offer.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={offer.imgUrl} alt={offer.title} className="w-full h-60 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">{offer.title}</h2>
              <p className="text-gray-600 mt-2">{offer.description}</p>
            </div>
            <div className="p-4 bg-gray-100">
            <button
              onClick={handleOrderPopup}
              className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full"
            >
              Order Now
            </button>
            </div>
          </div>
        ))}
      </div>
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </div>
  );
}

export default OffersPage;
