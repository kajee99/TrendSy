import React, {useState} from 'react';
import Popup from '../Popup/Popup';
import img from "../../assets/pictures/IMG_1413.png" ;
import img1 from "../../assets/pictures/IMG_1415.png" ;
import img2 from "../../assets/pictures/IMG_1414.png" ;
import img3 from "../../assets/pictures/IMG_1416.png" ;


const kidsWearData = [
  {
    id: 1,
    title: 'Baby Girl frock',
    //description: 'A cute and comfortable frock for your little one.',
    rating: '4.0',
    price: 'Rs 999',
    imageUrl: img, // Replace with actual image URL
  },
  {
    id: 2,
    title: 'Boys Jeans and T-Shirt',
    //description: 'Perfect and comfortable jens t-shirt for everyday wear.',
    rating: '4.5',
    price: 'Rs 4500',
    imageUrl: img1, // Replace with actual image URL
  },
  {
    id: 3,
    title: 'Girls frock',
    //description: 'Stylish and durable home made frock for girls.',
    rating: '4.3',
    price: 'Rs 750',
    imageUrl: img2, // Replace with actual imag e URL
  },
  {
    id: 4,
    title: 'Boys Shorts',
    //description: 'Comfortable shirts for active boys.',
    rating: '4.8',
    price: 'Rs 600',
    imageUrl: img3, // Replace with actual image URL
  },
];

const KidsWear = () => {
  const [orderPopup, setOrderPopup] = useState(false); 
  // State to control popup visibility
    const handleOrderPopup = () => {
      setOrderPopup(true);
    };
    return (
      <div className="container mx-auto p-4 text-center">
        <h1 className="text-3xl font-semibold text-center mb-10 text-gray-800">KidsWear</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {kidsWearData.map((product) => (
            <div key={product.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src={product.imageUrl}
                alt={product.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h2 className="text-xl font-semibold text-gray-900 mb-2">{product.title}</h2>
              <p className="text-lg font-semibold text-gray-800 mb-4">{product.description}</p>
              
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

export default KidsWear;
