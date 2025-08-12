import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Quote } from "lucide-react";
import himanshu from '../assets/images/testimonials/himanshu.webp'
import saksham from '../assets/images/testimonials/saksham.webp'
import nitin from '../assets/images/testimonials/nitin.webp'
import saloni from '../assets/images/testimonials/saloni.webp'
import shikha from '../assets/images/testimonials/shikha.webp'
import anshika from '../assets/images/testimonials/anshika.webp'


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
  <div className="border-1 border-blue-900 rounded-xl p-6 h-full flex flex-col justify-between transition ">
    <div className="flex items-start gap-6">
      {/* Image */}
      <LazyImage
        src={image}
        alt={`Photo of ${name}`}
        className="w-20 h-20 rounded-full object-fill border-4 border-white shadow ring-2 ring-blue-900 shrink-0"
        loading="lazy"
        onError={(e) => (e.target.src = "/fallback.jpg")}
      />

      {/* Content */}
      <div className="flex flex-col justify-between h-full">
        <Quote className="text-amber-500 w-5 h-5 mb-2" />
        <p className="text-gray-700 text-sm italic mb-4 leading-relaxed">
          “{message}”
        </p>
        <div>
          <h4 className="font-semibold text-gray-900">{name}</h4>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  </div>
);


const TestimonialSection = () => {
  return (
    <section className="py-10 px-4">
      {/* Section Heading */}
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold text-blue-900">Voices of Success</h2>
        <p className="text-amber-500 text-sm mt-2">Hear from Our Community</p>
      </div>

      {/* Slider Container */}
      <div className="max-w-6xl mx-auto">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
          className="h-full"
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="h-full">
              <div className="h-full">
                <TestimonialCard {...testimonial} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialSection;
