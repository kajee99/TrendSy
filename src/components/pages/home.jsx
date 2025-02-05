import React  from 'react';

const HomePage = () => {
  return (
    <div className="font-sans bg-gray-100">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-96" style={{ backgroundImage: "url('/images/hero.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <h1 className="text-4xl font-bold">Discover the Latest Trends</h1>
          <a href="/shop" className="mt-4 px-6 py-2 bg-red-500 rounded-lg text-white">Shop Now</a>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-8 px-4 text-center">
        <h2 className="text-2xl font-semibold mb-6">Browse By Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <img src="/images/men-category.jpg" alt="Men" className="w-full h-40 object-cover rounded-lg" />
            <h3 className="mt-4 text-lg font-medium">Men</h3>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <img src="/images/women-category.jpg" alt="Women" className="w-full h-40 object-cover rounded-lg" />
            <h3 className="mt-4 text-lg font-medium">Women</h3>
          </div>
          {/* Add more categories as needed */}
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-8 px-4">
        <h2 className="text-2xl font-semibold text-center mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Example Product Card */}
          <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <img src="/images/product1.jpg" alt="Product 1" className="w-full h-56 object-cover rounded-lg" />
            <h3 className="mt-4 text-lg font-medium">Stylish T-Shirt</h3>
            <p className="text-sm text-gray-600">$29.99</p>
            <button className="mt-2 w-full bg-red-500 py-2 rounded-lg text-white hover:bg-red-600">Add to Cart</button>
          </div>
          {/* Repeat Product Cards */}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 Trendy Clothing. All Rights Reserved.</p>
          <div className="mt-4">
            <a href="#" className="text-gray-400 mx-2">Privacy Policy</a>
            <a href="#" className="text-gray-400 mx-2">Terms & Conditions</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
