import React from 'react';

const headerStyle: React.CSSProperties = {
  background: 'linear-gradient(90deg, #4f8cff, #38e8ff)',
  color: 'white',
  padding: '2rem 0',
  textAlign: 'center',
  animation: 'gradientMove 5s infinite alternate',
};

export default function RealEstatePage() {
  return (
    <div>
      {/* Header */}
      <header style={headerStyle}>
        <h1 style={{ fontSize: '2.5rem', margin: 0 }}>Dream Homes Realty</h1>
        <p style={{ fontSize: '1.2rem', marginTop: '0.5rem' }}>
          Find your perfect home with us!
        </p>
      </header>

      {/* Featured Properties */}
      <section className="mt-10 max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-6">
          Featured Properties
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Property 1 */}
          <div className="border rounded-lg shadow-md overflow-hidden">
            <img
              src="https://source.unsplash.com/400x250/?land"
              className="w-full h-48 object-cover"
              alt="Land for Sale"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold">Land for Sale</h3>
              <p className="text-sm text-gray-700">
                2 acres near highway. Good for house or shop.
              </p>
              <p className="text-green-600 font-bold mt-2">₹25 Lakhs</p>
            </div>
          </div>

          {/* Property 2 */}
          <div className="border rounded-lg shadow-md overflow-hidden">
            <img
              src="https://source.unsplash.com/400x250/?commercial"
              className="w-full h-48 object-cover"
              alt="Commercial Building"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold">Commercial Building</h3>
              <p className="text-sm text-gray-700">
                3-floor building in city center.
              </p>
              <p className="text-green-600 font-bold mt-2">₹1.5 Crore</p>
            </div>
          </div>

          {/* Property 3 */}
          <div className="border rounded-lg shadow-md overflow-hidden">
            <img
              src="https://source.unsplash.com/400x250/?investment"
              className="w-full h-48 object-cover"
              alt="Investment Plot"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold">Investment Plot</h3>
              <p className="text-sm text-gray-700">
                Plot near SEZ. Fast land appreciation.
              </p>
              <p className="text-green-600 font-bold mt-2">₹12 Lakhs</p>
            </div>
          </div>

          {/* Property 4 – EV-Ready */}
          <div className="border rounded-lg shadow-md overflow-hidden">
            <img
              src="https://source.unsplash.com/400x250/?electric,vehicle,home"
              className="w-full h-48 object-cover"
              alt="EV-Ready Residential Plot"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold">EV-Ready Residential Plot</h3>
              <p className="text-sm text-gray-700">
                2400 sqft in smart township with pre-installed EV charging points and solar options.
              </p>
              <p className="text-green-600 font-bold mt-2">₹18 Lakhs</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}