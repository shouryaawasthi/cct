import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { course } from '../../data/course';
import ContactForm from '../../components/ContactForm';
import TrainingHighlights from '../../components/TrainingHighlight';
import Faq from '../../components/Faq';
import courseImage from '../../assets/images/courseImage.jpg';

const CourseDetail = () => {
  const { slug } = useParams();
  const courseDetails = course.find(item => item.slug === slug);
  const [expandedWeek, setExpandedWeek] = useState(null);

  if (!courseDetails) {
    return (
      <div className="text-center py-20">
        <h2 className="text-3xl font-semibold text-blue-900">Course Not Found</h2>
      </div>
    );
  }

  const { name, description, category, syllabus } = courseDetails;

  const toggleWeek = (index) => {
    setExpandedWeek(expandedWeek === index ? null : index);
  };

  return (
    <div className="w-full">
      {/* SEO Helmet */}
      <Helmet>
        <title>{`${name} |Industry-Ready Training in kangra`}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content={`${name}, ${category} training, ${category} courses`}
        />
      </Helmet>

      {/* Hero Section */}
      <div
        className="relative w-full h-[400px] bg-cover bg-center"
        style={{ backgroundImage: `url(${courseImage})` }}
      >
        <div className="absolute" />
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{name}</h1>
          <p className="text-lg md:text-xl max-w-2xl mb-4">{description}</p>
          <span className="inline-block bg-white text-blue-900 px-4 py-1 text-sm font-medium rounded-full">
            {category}
          </span>
        </div>
      </div>

      {/* Syllabus + Contact Section */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-semibold text-blue-900 mb-6">Course Syllabus</h2>
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Syllabus Column */}
          <div className="lg:w-2/3 w-full space-y-6">
            {syllabus.map((item, index) => (
              <div key={index} className="border-b border-blue-900 pb-4">
                <h3 className="text-xl text-amber-500 font-semibold">{item.week}</h3>
                <p className="text-lg font-medium text-gray-700">{item.topic}</p>

                <button
                  onClick={() => toggleWeek(index)}
                  className="text-blue-900 hover:underline mt-2"
                >
                  {expandedWeek === index ? '− Hide Details' : '+ Show Details'}
                </button>

                {expandedWeek === index && (
                  <div className="mt-4 p-4 bg-blue-50 rounded-lg text-gray-700 space-y-3">
                    <p>{item.detail}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact Column */}
          <div className="lg:w-1/3 w-full">
            <ContactForm />
          </div>
        </div>
      </section>

      <TrainingHighlights />
      <Faq />
    </div>
  );
};

export default CourseDetail;
