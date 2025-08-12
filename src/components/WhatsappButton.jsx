import React, { useState, useEffect } from "react";
import { FaWhatsapp, FaPhone, FaEnvelope } from "react-icons/fa";

const ContactFloatingButtons = () => {
  const [showMessage, setShowMessage] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowMessage(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 flex flex-col items-end gap-2">
      {/* Floating greeting message */}
      {showMessage && (
        <div className="bg-white text-blue-900 text-sm font-medium px-4 py-2 rounded-lg shadow-md animate-fade-in-up">
          💬 Chat, Call or Email us
        </div>
      )}

      {/* WhatsApp */}
      <a
        href="https://wa.me/6230199399"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-3 md:p-4 rounded-full shadow-lg transition-all duration-300"
        title="Chat on WhatsApp"
      >
        <FaWhatsapp className="text-xl md:text-2xl" />
      </a>

      {/* Call */}
      <a
        href="tel:+916230199399"
        className="bg-blue-900 hover:bg-blue-800 text-white p-3 md:p-4 rounded-full shadow-lg transition-all duration-300"
        title="Call Us"
      >
        <FaPhone className="text-xl md:text-2xl" />
      </a>

      {/* Email */}
      <a
        href="mailto:enquirycaddcrafttechnologies@gmail.com"
        className="bg-amber-500 hover:bg-amber-600 text-white p-3 md:p-4 rounded-full shadow-lg transition-all duration-300"
        title="Email Us"
      >
        <FaEnvelope className="text-xl md:text-2xl" />
      </a>
    </div>
  );
};

export default ContactFloatingButtons;
