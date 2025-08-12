import React, { useState, useMemo } from 'react';
import { course } from '../data/course';
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Navigation, Autoplay } from 'swiper/modules';
import LazyImage from './LazyImage';

const categoryOrder = ["Civil", "Electrical", "Mechanical", "CS & IT", "Other"];

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState('Civil');

  // Filter courses by selected category
  const filteredCourses = useMemo(
    () => course.filter((item) => item.category === selectedCategory),
    [selectedCategory]
  );

  const buttonBase = `px-5 py-2 text-sm font-medium rounded-full border transition`;
  const activeButton = 'bg-amber-500 text-white';
  const inactiveButton = 'bg-white text-blue-900 border-blue-300 hover:bg-blue-100';

  return (
    <>
      <section className="pt-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-3xl font-bold text-blue-900 mb-2">
            Industry-Ready Programs
          </h2>
          <p className="text-amber-500 text-base max-w-xxl mx-auto mb-8">
            Explore our specialized programs designed to meet engineering and technology standards across Civil, Mechanical, Electrical, and Software industries.
          </p>

          {/* Category Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categoryOrder.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`${buttonBase} ${selectedCategory === category ? activeButton : inactiveButton}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Slider */}
          <div className="mb-10">
            <Swiper
              modules={[Navigation, Autoplay]}
              navigation
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              spaceBetween={24}
              loop={filteredCourses.length > 4}
              breakpoints={{
                320: { slidesPerView: 'auto' },
                640: { slidesPerView: 1.5 },
                768: { slidesPerView: 2.2 },
                1024: { slidesPerView: 3 },
                1280: { slidesPerView: 4 },
              }}
              className="relative"
            >
              {filteredCourses.map((item) => (
                <SwiperSlide key={item.slug} className="flex justify-center">
                  <Link
                    to={`/courses/${item.slug}`}
                    className="flex flex-col rounded-xl border border-gray-300 shadow-md bg-white"
                    style={{ width: '300px', height: '380px', margin: '0 auto' }}
                    onMouseEnter={(e) =>
                      e.target.closest('.swiper').swiper.autoplay.stop()
                    }
                    onMouseLeave={(e) =>
                      e.target.closest('.swiper').swiper.autoplay.start()
                    }
                  >
                    {/* Full cover image */}
                    <LazyImage
                      src={item.image}
                      alt={item.name}
                      className="w-full h-48 object-cover rounded-t-xl"
                    />

                    <div
                      className="flex flex-col flex-1 p-6"
                      style={{ height: 'calc(100% - 192px)', overflow: 'hidden' }}
                    >
                      <h3
                        className="text-lg font-semibold text-blue-900 mb-2 truncate"
                        title={item.name}
                      >
                        {item.name}
                      </h3>
                      <p
                        className="text-sm text-red-800 mb-2"
                        style={{
                          overflow: 'hidden',
                          display: '-webkit-box',
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: 'vertical',
                        }}
                      >
                        Expert Mentor | Project-Based Assessments | Placement Support
                      </p>
                      <div className="mt-auto pt-4">
                        <button className="w-full bg-blue-900 text-white p-2 rounded-md">
                          Explore More
                        </button>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default Courses;
