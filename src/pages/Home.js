import React, { useState } from 'react';
import { Container, Row, Col, Button, Card, Modal } from 'react-bootstrap';
// import { useTranslation } from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'; // Custom CSS

function Home() {
  // Add state for the learn more modal
  const [showLearnMore, setShowLearnMore] = useState(false);

  return (
    <>
      {/* Hero Section with Background Image */}
      <div 
        className="hero-section text-white d-flex align-items-center min-vh-100 text-center"
        style={{ 
          backgroundImage: "url('/images/space-bg.jpg')", 
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          position: 'relative'
        }}
      >
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={7}>
              <h1 className="display-4 fw-bold mb-3 animate__animated animate__fadeIn">
                Turning Words into Money
              </h1>
              <p className="lead mb-4 animate__animated animate__fadeIn animate__delay-1s">
                Elevate Your Brand with Compelling Copywriting Services
              </p>
              <Button
                variant="primary"
                size="lg"
                className="mt-3 animate__animated animate__pulse animate__infinite"
                href="#contact"
              >
                Get Started
              </Button>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Services Section */}
      <section className="py-5 bg-light" id="services">
        <Container>
          <h2 className="text-center mb-5">Services</h2>
          <p className="text-center mb-5">This text briefly introduces visitors to your main services</p>
          <Row>
            <Col md={3} className="mb-4">
              <Card className="h-100 text-center border-0 shadow-sm">
                <Card.Body>
                  <div className="service-icon mb-3">
                    <i className="bi bi-file-earmark-text fs-1"></i>
                  </div>
                  <Card.Title>Copywriting</Card.Title>
                  <Card.Text>Highly persuasive sales copies</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} className="mb-4">
              <Card className="h-100 text-center border-0 shadow-sm">
                <Card.Body>
                  <div className="service-icon mb-3">
                    <i className="bi bi-graph-up fs-1"></i>
                  </div>
                  <Card.Title>Landing Pages</Card.Title>
                  <Card.Text>High-converting landing pages</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} className="mb-4">
              <Card className="h-100 text-center border-0 shadow-sm">
                <Card.Body>
                  <div className="service-icon mb-3">
                    <i className="bi bi-bar-chart-line fs-1"></i>
                  </div>
                  <Card.Title>SEO</Card.Title>
                  <Card.Text>Increased visibility through marketing</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} className="mb-4">
              <Card className="h-100 text-center border-0 shadow-sm">
                <Card.Body>
                  <div className="service-icon mb-3">
                    <i className="bi bi-chat-dots fs-1"></i>
                  </div>
                  <Card.Title>Social</Card.Title>
                  <Card.Text>Winning social media profiles</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* About Us Section */}
      <section className="py-5 bg-dark text-white" id="about">
        <Container>
          <Row className="align-items-center">
            <Col md={5} className="mb-4 mb-md-0">
              <div className="about-icon p-4 rounded-circle bg-primary d-inline-block">
                <i className="bi bi-search fs-1"></i>
              </div>
            </Col>
            <Col md={7}>
              <h2 className="mb-4">About Us</h2>
              <p>
                Unlike the many copywriting firms with compelling promises but few results, we're devoted to bringing you real business outcomes you can bank on. Our methods are proven across industries, ensuring you hit your marketing goals.
              </p>
              <Button 
                variant="outline-light" 
                className="mt-3"
                onClick={() => setShowLearnMore(true)}
              >
                Learn More
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
      
      {/* Learn More Modal */}
      <Modal 
        show={showLearnMore} 
        onHide={() => setShowLearnMore(false)} 
        size="lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <h4 className="mb-0">Turning Words into Money</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5 className="mb-3">Elevate Your Brand with Copywriting Services</h5>
          
          <p>Unleash the power of our comprehensive service offerings:</p>
          
          <ol className="service-list mt-4">
            <li className="mb-3">
              <strong>Creative Video:</strong> Captivate your audience with a brief, compelling video designed to pique interest, featuring a strategic script enriched with hooks, CTAs, and an emotional connection that addresses their problems.
            </li>
            
            <li className="mb-3">
              <strong>Landing Page:</strong> Your potential clients will seamlessly transition to a meticulously crafted landing page, a crucial step housing a captivating VSL and an audited persuasive sales page.
            </li>
            
            <li className="mb-3">
              <strong>VSL (Video Sales Letter):</strong> Engage your leads with a longer, persuasive video that masterfully convinces them to make the desired purchase.
            </li>
            
            <li className="mb-3">
              <strong>Checkout Experience:</strong> Enjoy a sophisticated and secure checkout process that may include enticing upsells, downfalls, and order bumps to maximize your sales potential.
            </li>
            
            <li className="mb-3">
              <strong>Support & Post-Sales Assistance:</strong> We go the extra mile by setting up your domain, email, and connecting your social media platforms to your page for a holistic online presence.
            </li>
          </ol>
          
          <div className="text-center mt-4">
            <p className="fw-bold">Ready to elevate your brand? Click the button and connect with us now!</p>
            <Button 
              variant="primary" 
              href="#contact"
              onClick={() => setShowLearnMore(false)}
            >
              Get Started
            </Button>
          </div>
        </Modal.Body>
      </Modal>

      {/* Portfolio/Testimonials */}
      <section className="py-5" id="portfolio">
        <Container>
          <h2 className="text-center mb-3">Check us out</h2>
          <p className="text-center mb-5">
            Testimonials and success stories show our consistent growth, engagement, and results across multiple marketing channels.
          </p>
          <Row className="justify-content-center">
            <Col md={8}>
              {/* First Video - YouTube Embed */}
              <div className="video-container mb-4">
                <div className="ratio ratio-16x9">
                  <iframe 
                    src="https://www.youtube.com/embed/qddv8G4rvpc?si=sizwome_mums56pw" 
                    title="Video Ad1 for Facebook Ads"
                    allowFullScreen
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  ></iframe>
                </div>
                <p className="text-center mt-2">Client Success Story</p>
              </div>
              
              {/* Second Video - YouTube Embed */}
              <div className="video-container mb-4">
                <div className="ratio ratio-16x9">
                  <iframe 
                    src="https://www.youtube.com/embed/5jZxh8OxePI?si=0CQBAx0GDcexS5xf" 
                    title="Video Ad2 for Facebook Ads"
                    allowFullScreen
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  ></iframe>
                </div>
                <p className="text-center mt-2">How We Work</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

     {/* Pricing Section */} 
      <section className="py-5 bg-light" id="pricing">
        <Container>
          <h2 className="text-center mb-2">Prices</h2>
          <p className="text-center mb-5">We make it happen!</p>
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead>
                <tr className="bg-dark text-white">
                  <th>Service</th>
                  <th>STANDARD</th>
                  <th>PRO</th>
                  <th>ULTIMATE</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Creative</td>
                  <td>1 (up to 30s)</td>
                  <td>3 (up to 60s)</td>
                  <td>3 (up to 120s)</td>
                </tr>
                <tr>
                  <td>Landing Page</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>VSL</td>
                  <td>1 (you do the Copy)</td>
                  <td>1 (up to 10 min.)</td>
                  <td>1 (up to 20 min.)</td>
                </tr>
                <tr>
                  <td>Domain & Email set up</td>
                  <td>Yes</td>
                  <td>Yes</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>Checkout</td>
                  <td>Yes</td>
                  <td>Yes</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>Upsell, Downsell, OrderBump</td>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>Sales Platform</td>
                  <td>Yes</td>
                  <td>Yes</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>Facebook & Google Ads</td>
                  <td>Let's talk!</td>
                  <td>Let's talk!</td>
                  <td>Let's talk!</td>
                </tr>
                <tr>
                  <td>Your Investment</td>
                  <td>Let's talk!</td>
                  <td>Let's talk!</td>
                  <td>Let's talk!</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-5 text-center" id="contact">
        <Container>
          <h2 className="mb-4">Make the Internet part of your profit</h2>
          <p className="mb-4">
            After 10 years of scaling successful copywriting campaigns, we've learned that clarity, strategy, and perfect words drive exceptional results. Let's talk about how we can help your business.
          </p>
          <Button 
            variant="primary" 
            size="lg" 
            className="px-4 py-2" 
            href="mailto:hi@ismaelsilva.com"
          >
            Talk to the Expert
          </Button>
        </Container>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        <Container>
          <p className="mb-0">© {new Date().getFullYear()} Your Copywriting Business. All Rights Reserved.</p>
        </Container>
      </footer>
    </>
  );
}

export default Home;