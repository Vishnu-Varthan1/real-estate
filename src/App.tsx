import React from 'react';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <main style={{ padding: '2rem' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Contact Us</h2>
        {/* Inquiry Form */}
        <div className="w-full max-w-xl mt-10 bg-white border border-gray-200 rounded-xl p-6 shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-center text-green-700">Send Inquiry</h2>
          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              const name = (e.target as any).name.value;
              const phone = (e.target as any).phone.value;
              const message = (e.target as any).message.value;
              console.log("Form Submitted:", { name, phone, message });
              alert("Thank you! We'll contact you soon.");
            }}
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                required
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
              <input
                type="tel"
                name="phone"
                required
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                name="message"
                required
                rows={4}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-green-700"
            >
              Submit Inquiry
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default App;
