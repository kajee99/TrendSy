import React, { useState } from 'react';
import Popup from '../Popup/Popup';
import img from "../../assets/pictures/IMG_1439.png" ;
import img1 from "../../assets/pictures/IMG_1434.png" ;
import img2 from "../../assets/pictures/IMG_1465-2.png" ;
import img3 from "../../assets/pictures/IMG_1436.png" ;

// Sample data for electronics products
const electronicsProducts = [
  {
    id: 1,
    name: 'new  t-shirts for girls',
    imageUrl: img,
    price: 'Rs1999',
    rating: 4.9,
  },
  {
    id: 2,
    name: 'best cutting peaces',
    imageUrl:img1 ,
    price: 'Rs 900',
    rating: 4.7,
  },
  {
    id: 3,
    name: 'official dress kit for workers',
    imageUrl: img2,
    price: 'Rs 3500',
    rating: 4.5,
  },
  {
    id: 4,
    name: 'lenen frocks for casual wear',
    imageUrl: img3,
    price: 'Rs 1200',
    rating: 4.6,
  },

  // Add more products as needed
];

const ElectronicsPage = () => {
  const [orderPopup, setOrderPopup] = useState(false); // State to control popup visibility

  // Function to show popup
  const handleOrderPopup = () => {
    setOrderPopup(true);
  };

  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-3xl font-semibold text-center mb-10 text-gray-800">Womens wear</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {electronicsProducts.map((product) => (
          <div key={product.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h2>
            <div className="flex items-center justify-center text-yellow-500 mb-3">
              <span className="text-lg items-center">{`⭐ ${product.rating}`}</span>
            </div>
            <p className="text-lg font-semibold text-gray-800 mb-4">{product.price}</p>

            <button
              onClick={handleOrderPopup}
              className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full"
            >
              Order Now
            </button>
          </div>
        ))}
      </div>

      
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </div>
  );
};

export default ElectronicsPage;
