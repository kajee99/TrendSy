import React, { useState } from 'react';
import Popup from '../Popup/Popup';
import img from "../../assets/pictures/IMG_14592.png" ;
import img1 from "../../assets/pictures/IMG_1458.png" ;
import img2 from "../../assets/pictures/IMG_14602.png" ;
import img3 from "../../assets/pictures/IMG_1430.png" ;

// Sample data for men's wear products
const mensWearProducts = [
  {
    id: 1,
    name: 'Slim Fit Jeans',
    imageUrl: img,
    //definition: 'def',
    price: '$49.99',
    rating: 4.5,
  },
  {
    id: 2,
    name: 'Leather Jacket',
    imageUrl: img1,
    //definition: 'def',
    price: '$199.99',
    rating: 4.8,
  },
  {
    id: 3,
    name: 'Casual Polo Shirt',
    imageUrl: img2,
    //definition: 'def',
    price: '$29.99',
    rating: 4.2,
  },
  {
    id: 4,
    name: 'cotton fibric shirt',
    imageUrl: img3,
    //definition: 'def',
    price: '$89.99',
    rating: 4.7,
  },
  // Add more products as needed
];

const MensWearPage = () => {
  const [orderPopup, setOrderPopup] = useState(false); 

     const handleOrderPopup = () => {
      setOrderPopup(true);
    };
    return (
      <div className="container mx-auto p-4 text-center">
        <h1 className="text-3xl font-semibold text-center mb-10 text-gray-800">MensWear</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {mensWearProducts.map((product) => (
            <div key={product.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h2 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h2>
              <p className="text-lg font-semibold text-gray-800 mb-4">{product.definition}</p>
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

export default MensWearPage;
