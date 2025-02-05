import React, { useState } from 'react';
import Popup from '../Popup/Popup';

import img from "../../assets/pictures/IMG_1458.png" ;
import img1 from "../../assets/pictures/IMG_14592.png" ;
import img2 from "../../assets/pictures/IMG_1470.png" ;
import img3 from "../../assets/pictures/IMG_1477-2.png" ;


const bestSellingProducts = [
  {
    id: 1,
    name: 'Trendy Jacket',
    image: img,
    price: 'Rs 4499',
  },
  {
    id: 2,
    name: 'Comfortable Jeans',
    image: img1,
    price: 'Rs 3400',
  },
  {
    id: 3,
    name: 'Stylish T-shirt',
    image: img2,
    price: 'Rs 2200',
  },
  {
    id: 4,
    name: 'Petch Jeans',
    image: img3,
    price: 'Rs 3550',
  },
];

const BestSellingPage = () => {
    const [orderPopup, setOrderPopup] = useState(false); 
    
         const handleOrderPopup = () => {
          setOrderPopup(true);
        };
  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-4xl font-bold text-center mb-8">Best Selling Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {bestSellingProducts.map((product) => (
          <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h2>
              <p className="text-lg font-medium text-gray-700 mb-4">{product.price}</p>
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
};

export default BestSellingPage;
