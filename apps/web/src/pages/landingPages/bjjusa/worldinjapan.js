import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const LandingPage = () => {
  return (
    <div className="container text-center mt-5">
      {/* Hero Section */}
      <div className="row justify-content-center align-items-center">
        <div className="col-md-6">
          <img
            src="/bjj40-images/bjjchamp-nz.png"
            alt="Champion"
            className="img-fluid mb-3"
          />
          <h1 className="fw-bold">
            Increase Your Strength and Energy: Your Guide to BJJ after 40!
          </h1>
          <p className="mt-2 text-muted">
            Discover the strategies that will transform your performance on the mat!
          </p>
          <h5 className="text-primary fw-semibold">
            2024 National Champion - New Zealand
          </h5>
        </div>
      </div>

      {/* Video Section */}
      <div className="mt-5">
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/N04Ak_ivtdI"
            allow="autoplay; fullscreen"
            allowTransparency="true"
            frameBorder="0"
            title="Journey to the Top"
            className="w-100"
          ></iframe>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="mt-4">
        <a
          href="https://pay.hotmart.com/V98116126T?checkoutMode=10"
          className="btn btn-danger btn-lg fw-bold shadow-sm me-3"
        >
          Buy Full Power Over 40
        </a>
        <a
          href="https://givealittle.co.nz/cause/help-me-represent-nz-at-the-bjj-world-champs"
          className="btn btn-success btn-lg fw-bold shadow-sm"
        >
          Donate on Givealittle
        </a>
      </div>

      {/* Testimonial Section */}
      <div className="mt-5 row justify-content-center align-items-center">
        <div className="col-md-8 text-center">
          <h2 className="fw-bold">My Journey to the Top</h2>
          <img
            src="/bjj40-images/bjjmentoria.png"
            alt="My BJJ Journey"
            className="img-fluid rounded shadow-lg my-4"
          />
          <p className="mt-3 text-muted">
          Hey everyone! My name is Ismael Silva—I’m a Brazilian Jiu-Jitsu practitioner, competitor, and your training partner at The Combat Center. 
          December 8th, 2024, was a special day for me—a lifelong dream came true. From the cheers of football to the frustrations on the mats, it’s been two years of hard training, setbacks, and lessons learned. The secret? 
          Never giving up. Learning from defeats, recognizing that others were better than me, and realizing that this journey was about overcoming myself—to become a better person and a more efficient competitor. 
          On that day, I finally stood on top of the podium and became the National BJJ Champion of New Zealand. I couldn’t have done it without God and the support of my Masters, Dr. Jackie (Doctor in Brazil and PT at CityFitness), friends, and teammates.
          Now, I have the opportunity to represent New Zealand and our gym at the BJJ World Championship in Japan this September! Vin has graciously allowed me to share my story here and ask for your support to help make this dream a reality.
          </p>
        </div>
      </div>

      {/* CTA Button (Repeating) */}
      <div className="mt-5">
        <a
          href="https://pay.hotmart.com/V98116126T?checkoutMode=10"
          className="btn btn-danger btn-lg fw-bold shadow-sm me-3"
        >
          Buy Full Power Over 40
        </a>
        <a
          href="https://givealittle.co.nz/cause/help-me-represent-nz-at-the-bjj-world-champs"
          className="btn btn-success btn-lg fw-bold shadow-sm"
        >
          Donate on Givealittle
        </a>
      </div>

      {/* Footer */}
      <footer className="bg-white text-center py-4 mt-5 border-top">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 d-flex flex-column align-items-center">
              <img src="/bjj40-images/7dayswarranty.png" alt="7 Days Guarantee" className="img-fluid mb-3" style={{ maxWidth: "120px" }} />
              <p className="text-muted text-center">
                Try it risk-free! If you're not satisfied within 7 days, we'll refund your money – no questions asked!
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;