import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function PaymentPending() {
  return (
    <div className="payment-pending-page">
      <Container>
        <Row className="justify-content-center">
          <Col md={10} lg={8} className="text-center">
            <div className="image-container mb-4">
              <div className="image-wrapper">
                <img 
                  src="/images/bjjchamp-nz.png" 
                  alt="BJJ Championship" 
                  className="img-fluid rounded"
                />
              </div>
            </div>
            
            <h1 className="display-4 fw-bold mb-3">Compra Concluída!</h1>
            <p className="lead mb-5">Obrigado e vamos juntos nesta jornada! Oss...</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default PaymentPending;