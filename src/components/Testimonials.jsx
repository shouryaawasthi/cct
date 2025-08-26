import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Quote } from "lucide-react";
import himanshu from "../assets/images/testimonials/himanshu.webp";
import saksham from "../assets/images/testimonials/saksham.webp";
import nitin from "../assets/images/testimonials/nitin.webp";
import saloni from "../assets/images/testimonials/saloni.webp";
import shikha from "../assets/images/testimonials/shikha.webp";
import anshika from "../assets/images/testimonials/anshika.webp";

import "swiper/css";
import "swiper/css/pagination";
import LazyImage from "./LazyImage";

const testimonials = [
  {
    name: "Shikha",
    role: "Student",
    message:
      "The training sessions were engaging and practical. I learned industry-relevant skills that boosted my confidence in real projects.",
    image: shikha,
  },
  {
    name: "Himanshu",
    role: "Student",
    message:
      "From the first day, I felt supported by experienced trainers. The environment here motivates you to learn and grow every day.",
    image: himanshu,
  },
  {
    name: "Saksham",
    role: "Student",
    message:
      "I gained both technical skills and problem-solving abilities. The hands-on approach made learning more effective and enjoyable.",
    image: saksham,
  },
  {
    name: "Nitin",
    role: "Student",
    message:
      "The practical exposure I received here prepared me well for my career. Every class was well-structured and interactive.",
    image: nitin,
  },
  {
    name: "Saloni",
    role: "Student",
    message:
      "I appreciated the personalized attention from trainers. They ensured I understood each concept before moving forward.",
    image: saloni,
  },
  {
    name: "Anshika",
    role: "Student",
    message:
      "This training transformed the way I approach challenges. I now feel ready to take on professional projects with confidence.",
    image: anshika,
  },
];

const TestimonialCard = ({ name, role, message, image }) => (
  <div className="border border-blue-900 rounded-xl p-6 flex flex-col justify-between bg-white shadow-lg transition h-[280px] ">
    {/* Top Section */}
    <div className="flex items-start gap-4 mb-2 flex-grow">
      {/* Image */}
      <LazyImage
        src={image}
        alt={`Photo of ${name}`}
        className="w-16 h-20 rounded-full object-cover border-4 border-white shadow ring-2 ring-blue-900 shrink-0"
        loading="lazy"
      />

      {/* Quote + Message */}
      <div className="flex flex-col">
        <Quote className="text-amber-500 w-5 h-5 mb-2" />
        <p className="text-gray-700 text-sm italic leading-relaxed">
          “{message}”
        </p>
      </div>
    </div>

    {/* Bottom Section */}
    <div className="text-center">
      <h4 className="font-semibold text-gray-900">{name}</h4>
      <p className="text-sm text-gray-500">{role}</p>
    </div>
  </div>
);

const TestimonialSection = () => {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-12">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
          Voices of Success
        </h2>
        <p className="text-amber-500 text-sm md:text-base mt-2">
          Hear from Our Community
        </p>
      </div>

      {/* Slider */}
      <div className="max-w-6xl mx-auto">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          spaceBetween={24}
          slidesPerView={1}
          className="h-full"
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="flex h-full">
              <TestimonialCard {...testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialSection;
