import React from 'react';
import AboutUs from '../components/AboutUs';
import courseImage from '../assets/images/courseImage.jpg'
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <>
     <Helmet>
            <title>About | CaddCraft Technologies</title>
            <meta name="description" content="CaddCraft the best company in Himachal Pradesh" />
            <meta name="keywords" content="autocad , digital marketing , Web devlopment" />
      </Helmet>
    <section className="flex items-center  justify-center min-h-[400px] px-4 bg-cover bg-center" style={{ backgroundImage: `url(${courseImage})` }}>
  <div className="text-center text-white max-w-3xl">
    <h1 className="text-3xl md:text-5xl font-bold mb-4">
      Welcome to Cad Craft Technologies
    </h1>
   
  </div>
</section>

      <AboutUs
        heading="About Cadd Craft Technologies"
        tagline="Committed to excellence in everything we do."
        description={`Established in 2013, Cadd Craft Technologies has grown into a trusted name in software training and technical services, catering to students and professionals across Civil, Electrical, Mechanical, and Computer Science disciplines. With a strong foundation in education and innovation, we are committed to equipping individuals with the skills needed to thrive in today’s competitive industries.

Our core focus lies in providing hands-on training in industry-standard software tools, enabling learners to gain practical knowledge that directly applies to real-world projects. Over the years, we have also expanded our offerings to include specialized services such as 2D and 3D house and building planning, as well as end-to-end support for mechanical and electrical project development.

In addition to our technical expertise, Cadd Craft Technology delivers comprehensive digital solutions. We offer custom web development and strategic digital marketing services, including search engine optimization (SEO), Facebook marketing, and Instagram advertising, to help businesses grow their online presence effectively.

Driven by a passion for excellence and a commitment to quality, Cadd Craft Technology continues to support both individual learners and businesses with innovative solutions that bridge the gap between education and industry.`}
        services={[
          "House Planning (2D & 3D)",
          "Digital Marketing Services",
          "Custom Web Development",
          "Electriccal Projects",
          "24/7 Online Support",
        ]}
        courses={[
          "Civil Engineering Programme",
          "Mechanical Engineering Programme",
          "Electrical Engineering Programme",
          "Data Science with Python",
          "Digital Marketing Masterclass",
        ]}
      />
    </>
  );
};

export default About;
