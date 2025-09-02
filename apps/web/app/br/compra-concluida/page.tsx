'use client';

import React from 'react';

function PaymentCompleted() {
  return (
    <div className="payment-completed-page">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-5/6 lg:w-2/3 text-center">
            <div className="image-container mb-4">
              <div className="image-wrapper">
                <img 
                  src="/images/bjjchamp-nz.png" 
                  alt="BJJ Championship" 
                  className="w-full rounded"
                />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-3">Compra Concluída!</h1>
            <p className="text-xl mb-5">Obrigado e vamos juntos nesta jornada! Oss...</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentCompleted;
