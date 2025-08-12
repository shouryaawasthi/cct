import React from 'react';
import { PhoneCall } from 'lucide-react';

export default function FranchiseInviteSection() {
  return (
    <section className="bg-blue-900 text-white py-16 px-6 md:px-12 text-center">
      <div className="max-w-4xl mx-auto space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold">
          Grow With Us — <span className="text-amber-500">Own a Cadcraft Franchise</span>
        </h2>
        <p className="text-lg md:text-xl">
          We're expanding! Partner with Cadcraft Technologies to open your own CAD training center backed by expert support and proven systems.
        </p>
        <div className="flex justify-center">
          <a
            href="tel:+916230199399" 
            className="inline-flex items-center gap-2 bg-amber-500 font-semibold px-6 py-3 rounded-md hover:bg-amber-600 transition"
          >
            <PhoneCall size={18} />
            Call Us Now
          </a>
        </div>
      </div>
    </section>
  );
}
