import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
// import { useTranslation } from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'; // Custom CSS

function Home() {

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
        {/* Rocket image positioned to the side */}
        <div className="rocket-image" style={{ position: 'absolute', right: '10%', height: '60%', bottom: '0' }}>
          <img src="/images/rocket.png" alt="Rocket" style={{ height: '100%', objectFit: 'contain' }} />
        </div>
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
              <Button variant="outline-light" className="mt-3">Learn More</Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Portfolio/Testimonials */}
      <section className="py-5" id="portfolio">
        <Container>
          <h2 className="text-center mb-3">Check us out</h2>
          <p className="text-center mb-5">
            Testimonials and success stories show our consistent growth, engagement, and results across multiple marketing channels.
          </p>
          <Row className="justify-content-center">
            <Col md={8}>
              <div className="video-container mb-4">
                <div className="ratio ratio-16x9">
                  <div className="bg-secondary d-flex align-items-center justify-content-center">
                    <i className="bi bi-play-circle fs-1"></i>
                  </div>
                </div>
                <p className="text-center mt-2">Client Success Story</p>
              </div>
              <div className="video-container mb-4">
                <div className="ratio ratio-16x9">
                  <div className="bg-secondary d-flex align-items-center justify-content-center">
                    <i className="bi bi-play-circle fs-1"></i>
                  </div>
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
          <p className="text-center mb-5">We charge by the project</p>
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead>
                <tr className="bg-dark text-white">
                  <th>Service</th>
                  <th>STANDARD</th>
                  <th>PRO</th>
                  <th>ENTERPRISE</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Sales Page</td>
                  <td>$1,000+</td>
                  <td>$2,000+</td>
                  <td>Custom Price</td>
                </tr>
                <tr>
                  <td>Email Sequence</td>
                  <td>$800+</td>
                  <td>$1,500+</td>
                  <td>Custom Price</td>
                </tr>
                <tr>
                  <td>Website Content</td>
                  <td>$500+</td>
                  <td>$1,200+</td>
                  <td>Custom Price</td>
                </tr>
                <tr>
                  <td>Social Media Kit</td>
                  <td>$400+</td>
                  <td>$800+</td>
                  <td>Custom Price</td>
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
          <Button variant="primary" size="lg" className="px-4 py-2">Talk to an Expert</Button>
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