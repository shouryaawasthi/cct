import React from "react";

// Reusable List Section component
const InfoSection = ({ title, items }) => {
  if (!items.length) return null;

  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold text-blue-800 mb-2 border-l-4 border-blue-500 pl-3">
        {title}
      </h2>
      <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2">
        {items.map((item, index) => (
          <li key={index} className="transition-all hover:text-blue-600">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

const AboutUs = ({ heading, tagline, description, services = [], courses = [] }) => {
  return (
    <>
    
    <section className="py-10 px-6 max-w-7xl mx-auto text-justify">
      <header className="mb-8">
        <h1 className="text-3xl font-extrabold text-blue-900">{heading}</h1>
        <div className="h-0.5 w-12 bg-blue-900 mt-2 rounded"></div>
        <p className="text-lg text-amber-600 mt-4 font-medium">{tagline}</p>
        <p className="text-base text-gray-700 mt-3 leading-relaxed">{description}</p>
      </header>
    <div className="flex justify-evenly flex-col sm:flex-row ">
      <InfoSection title="Services We Provide" items={services} />
      <InfoSection title="Courses We Offer" items={courses} />
    </div>
    </section>
   </>
  );
};

export default AboutUs;
