import React from "react";
import { Facebook,Instagram,Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-gray-50 py-10 px-4 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* College Info */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Cadd Craft Technologies</h2>
          <p className="text-sm text-zinc-50">
            Providing quality services in Himachal Pradesh since 2014.Committed to excellence in everything we do.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:underline">About Us</Link></li>
            <li><a href="#courses" className="hover:underline">Courses</a></li>
           <li><Link to="/services" className="hover:underline">Services</Link></li>
           <li><Link to="/contact" className="hover:underline">Contact</Link></li>
</ul>

        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2"><MapPin size={16} /> Bus Stand Kangra, Himachal Pradesh</li>
            <li className="flex items-center gap-2"><Phone size={16} /> +91-6230199399</li>
            <li className="flex items-center gap-2"><Mail size={16} /> caddcrafttechnologies@gmail.com</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/caddeskkangra?rdid=Sjvg1EbvnjGgjvwT&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F174GMbHYie%2F#" target="_blank" rel="noopener noreferrer"><Facebook className="hover:text-green-600" /></a>
            <a href="https://www.instagram.com/caddcrafttechnologies108?igsh=MWE0bDJueTA1dW9qMA==" target="_blank" rel="noopener noreferrer"><Instagram className="hover:text-green-600" /></a>
            {/* Add more if needed */}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-10 text-center text-sm text-zinc-50">
        © {new Date().getFullYear()} Cadd Craft Technologies. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
