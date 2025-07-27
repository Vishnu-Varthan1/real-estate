import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="text-center py-16 px-4">
      <h1 className="text-4xl font-bold text-blue-700">Welcome to Vishnu Real Estate</h1>
      <p className="mt-4 text-lg text-gray-600">
        We help you buy, sell, and invest in land and commercial properties.
      </p>
      <a
        href="/contact"
        className="mt-8 inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
      >
        Contact Us
      </a>
    </div>
  );
};

export default Home;
