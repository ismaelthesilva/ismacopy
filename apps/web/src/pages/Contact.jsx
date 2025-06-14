// apps/web/src/pages/Contact.jsx
import React from 'react';

export default function Contact() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="mb-6">
        Get in touch with us using the form below or contact information.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Contact Form</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block mb-1">Name</label>
              <input type="text" id="name" className="w-full border p-2 rounded" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-1">Email</label>
              <input type="email" id="email" className="w-full border p-2 rounded" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block mb-1">Message</label>
              <textarea id="message" rows="4" className="w-full border p-2 rounded"></textarea>
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
              Send Message
            </button>
          </form>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Our Information</h2>
          <div className="space-y-4">
            <p><strong>Email:</strong> contact@example.com</p>
            <p><strong>Phone:</strong> +1 (555) 123-4567</p>
            <p><strong>Address:</strong> 123 Main St, Anytown, USA</p>
          </div>
        </div>
      </div>
    </div>
  );
}