import React from 'react';

function PaymentPending() {
  return (
    <div className="payment-pending-page">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-5/6 lg:w-2/3 text-center">
            <div className="image-container mb-4">
              <div className="image-wrapper">
                <img 
                  src="/images/bjjchamp-nz.png" 
                  alt="BJJ Championship" 
                  className="img-fluid rounded"
                />
              </div>
            </div>
            
            <h1 className="display-4 fw-bold mb-3">Aguardando Pagamento</h1>
            <p className="lead mb-5">Em breve você terá acesso! Oss...</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentPending;