import React, { useMemo } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {BookOpen, Users, CheckCircle, Laptop } from 'lucide-react';
import {
  FaChalkboardTeacher,
  FaTools,
  FaBookOpen as FaBookOpenSolid,
  FaClock,
  FaBriefcase
} from 'react-icons/fa';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import CountUp from 'react-countup';
import { InView } from 'react-intersection-observer';
import whyUs from '../assets/images/whycad.webp';
import AboutUs from '../components/AboutUs';
import ContactForm from '../components/ContactForm';
import TestimonialSection from '../components/Testimonials';
import LazyImage from '../components/LazyImage';
import Faq from '../components/Faq.jsx';
import Courses from '../components/Courses.jsx';
import FranchiseInviteSection from '../components/FranchiseInviteSection.jsx';
import { Helmet } from "react-helmet-async";

const Home = () => {
  const counters = [
    { label: 'Projects', value: 18 },
    { label: 'Clients', value: 50 },
    { label: 'Awards', value: 15 },
    { label: 'Students', value: 20000 },
  ];

  const statsData = [
    { Icon: BookOpen, number: '42+', label: 'Courses' },
    { Icon: Users, number: '90k+', label: 'Learners' },
    { Icon: CheckCircle, number: '100k+', label: 'Doubts Solved' },
    { Icon: Laptop, number: '10k+', label: 'Student Projects' },
  ];

  const features = useMemo(() => [
    {
      icon: <FaChalkboardTeacher className="text-amber-500 text-5xl mt-1" />,
      title: 'Expert Mentorship',
      description: 'Learn from seasoned professionals who guide you with real-world knowledge and personalized support.',
    },
    {
      icon: <FaTools className="text-amber-500 text-5xl mt-1" />,
      title: 'Real-World Projects',
      description: 'Apply theory through hands-on assignments that reflect real industry challenges and tools.',
    },
    {
      icon: <FaBookOpenSolid className="text-amber-500 text-5xl mt-1" />,
      title: 'Comprehensive Content',
      description: 'Get access to in-depth learning materials, curated to help you master every essential skill step-by-step.',
    },
    {
      icon: <FaClock className="text-amber-500 text-5xl mt-1" />,
      title: 'Flexible Scheduling',
      description: 'Learn at your pace, on your time — with flexible batches and recorded sessions available.',
    },
    {
      icon: <FaBriefcase className="text-amber-500 text-5xl mt-1" />,
      title: 'Career Acceleration',
      description: 'Unlock internship and job opportunities through our placement support and network.',
    },
  ], []);

  return (
    <>
    <Helmet>
        <title>CaddCraft Technologies-Get a job ready training</title>
        <meta name="description" content="CaddCraft the best company in Himachal Pradesh" />
        <meta name="keywords" content="autocad , digital marketing , Web devlopment , react , revit" />
      </Helmet>
      {/* Hero Section */}
      
      <section  className="px-6 md:py-10 bg-amber-100">
      <div  className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-0 md:gap-20">
          <div data-aos="fade-up" className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 leading-tight">
              Launch Your Tech Career with Confidence
            </h1>
            <p className="mt-4 text-gray-600 text-lg">
             Learn in-demand skills across Civil, Electrical, Mechanical, and IT fields — with programs built for real jobs and real growth.
            </p>
            <div className="mt-6 mb-5 flex justify-center md:justify-start gap-4">
              <a href="#courses" className="px-6 py-3 bg-amber-500 text-white rounded-md">
                Explore Courses
              </a>
             
            </div>
          </div>

          <div data-aos="fade-up" className="w-full md:w-1/2">

            <DotLottieReact
              src="https://lottie.host/2295d976-bbf4-4bbc-be28-00b57ccf123d/QUSGxzseRS.lottie"
              loop
              autoplay
              className="w-full h-80 md:h-100 mx-auto md:mx-0"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <div data-aos="fade-up" className="max-w-7xl mt-5 mx-auto px-4 py-6 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-y-4 gap-x-10">
        {statsData.map(({ Icon, number, label }, i) => (
          <div key={i} className="ms-4 flex items-center space-x-4 sm:flex-col sm:items-center sm:space-x-0 sm:space-y-2">
            <Icon className="w-8 h-8 sm:w-12 sm:h-12 text-amber-500" />
            <div className="text-blue-900 text-left sm:text-center">
              <h3 className="text-xl sm:text-3xl font-bold text-amber-500 leading-none">{number}</h3>
              <p className="text-sm sm:text-base">{label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* About & Contact */}
    
      <div className="flex flex-col md:flex-row items-center max-w-screen-2xl mx-auto">
  {/* About Us Section */}
  <div data-aos="fade-up" className="flex-2 text-gray-900 hidden md:block">
    <AboutUs
      heading="About Us"
      tagline="Committed to excellence in everything we do."
      description={`Cad Craft Technologies, established in 2013, is a leading training and service provider dedicated to empowering students and professionals in the fields of Civil, Electrical, Mechanical, and Computer Science. With over a decade of experience, we specialize in delivering high-quality software training and a wide range of technical and digital services.

Our training programs cover industry-relevant tools and technologies, ensuring our students gain hands-on experience in software applications used across engineering and IT sectors.

At Cad Craft Technology, we blend technical expertise with a commitment to quality, helping individuals and businesses bring their ideas to life. Whether you're looking to upskill, start a project, or grow your online presence, we’re here to support your success.`}
    />
  </div>

  {/* Contact Form Section */}
  <div data-aos="fade-up" className="flex-1 p-6 w-full">
    <ContactForm />
  </div>
</div>

  

      {/* Courses */}
      <div data-aos="fade-up" id="courses">
        <Courses />
      </div>
      

      {/* Experience Stats */}
      <section data-aos="fade-up" className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-12">
    <div className="w-full md:w-2/2 ps-7">
      <h2 className="text-3xl sm:text-4xl font-semibold text-gray-600 leading-tight mb-4">
        <span className="text-8xl font-bold text-blue-900">14</span> Years of Trust & Excellence
      </h2>
      <p className="text-base sm:text-lg text-gray-600">
        Delivering reliable, innovative, and client-focused solutions across diverse industries worldwide. Your success is our commitment.
      </p>
    </div>
    <div className="w-full md:w-1/2 grid grid-cols-2 gap-6">
      {counters.map((stat, idx) => (
        <InView triggerOnce={true} key={idx}>
          {({ inView, ref }) => (
            <div ref={ref} className="flex flex-col items-center text-center">
              <h3 className="text-4xl font-bold text-amber-500">
                {inView ? <CountUp end={stat.value} duration={2} /> : '0'}+
              </h3>
              <p className="mt-2 text-sm sm:text-base text-gray-700 font-medium">{stat.label}</p>
            </div>
          )}
        </InView>
      ))}
    </div>
  </div>
</section>

      {/* Why Us */}
      <section data-aos="fade-up" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-10">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Why Learn with Caddcraft Technologies?</h2>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  {feature.icon}
                  <div>
                    <h4 className="text-xl font-semibold text-blue-800">{feature.title}</h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2">
            <LazyImage src={whyUs} alt="Why Choose Caddcraft" className="w-full" />
          </div>
        </div>
      </section>
      {/* franchise training */}
      <div data-aos="fade-up">
      <FranchiseInviteSection />
      </div>
       {/* Testimonials */}
    <div data-aos="fade-up"> 
      <TestimonialSection />
      </div>

      {/* FAQ */}
      <div data-aos="fade-up">
      <Faq />
      </div>
    </>
  );
};

export default Home;
