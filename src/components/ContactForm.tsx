import React, { useState } from 'react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <style>
        {`
          @keyframes fadeSlideIn {
            0% { opacity: 0; transform: translateY(10px); }
            100% { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>

      <form
        style={{
          maxWidth: 420,
          margin: '0 auto',
          background: '#fff',
          borderRadius: 12,
          boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.2rem',
        }}
        onSubmit={(e) => {
          e.preventDefault();
          setSubmitted(true);
        }}
      >
        <h3
          style={{
            textAlign: 'center',
            margin: 0,
            fontSize: '1.5rem',
            color: '#4f8cff',
          }}
        >
          Send Inquiry
        </h3>

        {submitted ? (
          <div
            style={{
              color: '#38e8ff',
              fontWeight: 600,
              textAlign: 'center',
              fontSize: '1.2rem',
              animation: 'fadeSlideIn 0.5s ease-out',
              padding: '1rem 0',
              borderTop: '1px solid #dff6ff',
            }}
          >
            ✅ Thanks, Vishnu! Your message is floating its way to our team 🚀 <br />
            You’ll hear from us very soon — check your inbox for a splash of awesomeness 💌
          </div>
        ) : (
          <>
            <input
              type="text"
              placeholder="Your Name"
              required
              style={{
                padding: '0.75rem 1rem',
                borderRadius: 6,
                border: '1px solid #e0e0e0',
                fontSize: '1rem',
                outline: 'none',
              }}
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              style={{
                padding: '0.75rem 1rem',
                borderRadius: 6,
                border: '1px solid #e0e0e0',
                fontSize: '1rem',
                outline: 'none',
              }}
            />
            <input
              type="tel"
              placeholder="Phone Number"
              style={{
                padding: '0.75rem 1rem',
                borderRadius: 6,
                border: '1px solid #e0e0e0',
                fontSize: '1rem',
                outline: 'none',
              }}
            />
            <textarea
              placeholder="Message"
              required
              style={{
                padding: '0.75rem 1rem',
                borderRadius: 6,
                border: '1px solid #e0e0e0',
                fontSize: '1rem',
                minHeight: 100,
                outline: 'none',
                resize: 'vertical',
              }}
            />
            <button
              type="submit"
              style={{
                background: 'linear-gradient(90deg, #4f8cff, #38e8ff)',
                color: 'white',
                border: 'none',
                borderRadius: 6,
                padding: '0.9rem',
                fontWeight: 700,
                fontSize: '1.1rem',
                cursor: 'pointer',
                boxShadow: '0 2px 8px rgba(79,140,255,0.08)',
              }}
            >
              Submit Inquiry
            </button>
          </>
        )}
      </form>
    </>
  );
}