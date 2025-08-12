import React from 'react';
import ContactForm from '../components/ContactForm';
import { Phone } from "lucide-react";
import courseImage from '../assets/images/courseImage.jpg'
import { Helmet } from 'react-helmet';
const Contact = () => {
  return (
    <>
     <Helmet>
                <title>Contact | CaddCraft Technologies</title>
                <meta name="description" content="CaddCraft the best company in Himachal Pradesh" />
                <meta name="keywords" content="autocad , digital marketing , Web devlopment" />
          </Helmet>
      {/* Gradient Hero Section */}
      <section className="w-full h-[400px]  flex flex-col items-center justify-center text-center px-4 bg-cover bg-center" style={{ backgroundImage: `url(${courseImage})` }}>
        <h2 className="text-4xl font-bold text-white mb-4">
          Feel free to reach out
        </h2>
        <p className="text-lg text-gray-200 max-w-xl">
          Whether you have questions, feedback, or need assistance, our team is ready to help.
        </p>
      </section>

      <main className="px-4 py-12 max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-900 mb-2">Contact Us</h1>
          <p className="text-lg text-amber-500">
            We're here to help and answer any questions you might have.
          </p>
        </section>

        {/* Form + Map */}
        <section className="flex flex-col md:flex-row gap-8">
          {/* Contact Form */}
          <div className="md:w-1/2 w-full">
            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
              <ContactForm />
            </div>
          </div>

          {/* Google Map */}
          <div className="md:w-1/2 w-full">
            <div className="rounded-lg overflow-hidden shadow-md h-full min-h-[300px]">
              <iframe
                title="CAD Desk Kangra Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3379.468276218236!2d76.27552917491765!3d32.110653573949186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391b4f85ca572b25%3A0xd4997df8032caaa!2sCad%20desk%20kangra!5e0!3m2!1sen!2sin!4v1752754643880!5m2!1sen!2sin"
                className="w-full h-[450px] border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>
      </main>

      {/* Contact Query Section */}
      <section className="mb-12 px-6 py-8 text-center">
        <h2 className="text-3xl font-semibold text-blue-900 mb-2">
          Have any queries?
        </h2>
        <p className="text-lg text-blue-900 mb-4">
          We’re here to assist you. Reach out to us anytime.
        </p>
        <a
          href="tel:+919876543210"
          className="inline-flex items-center justify-center space-x-2 px-5 py-3 bg-amber-500 text-zinc-50 font-medium rounded-md hover:bg-amber-400 transition"
        >
          <Phone className="w-5 h-5" />
          <span>+91 62309-66621</span>
        </a>
      </section>
    </>
  );
};

export default Contact;
