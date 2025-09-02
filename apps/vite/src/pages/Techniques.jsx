import React from 'react';
import './styles.css'; // Optional custom CSS (can reuse Home.css if preferred)

const Techniques = () => {
  return (
    <>
      {/* Reusing the Navbar from Home.js (optional, if this is a standalone page) */}
      {/* If Techniques is routed separately, you might include it via a layout component */}
      
      {/* Main Content */}
      <div className="techniques-section text-white flex items-center min-h-screen">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-center">
            <div className="w-full">
              <h1 className="text-5xl md:text-6xl font-bold mb-3 animate__animated animate__fadeIn">
                Techniques
              </h1>
              <p className="text-xl mb-4 animate__animated animate__fadeIn animate__delay-1s">
                Explore techniques and master new moves!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer (optional, matching Home.js) */}
      <footer className="bg-gray-900 text-white text-center py-3">
        <div className="container mx-auto px-4">
          <p className="mb-0">© 2025 BJJ Champ. Roll with us soon!</p>
        </div>
      </footer>
    </>
  );
};

export default Techniques;