import React, { useEffect, useRef, useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import bannerImg1 from "../assets/banner-1.webp";
import bannerImg2 from "../assets/banner-2.webp";
import { Link } from "react-router";
import "swiper/css";

const Banner = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

  const slides = [
    {
      image: bannerImg1,
      title: "Discover Endless Stories",
      subtitle: "Dive into a world of imagination with every turn of a page.",
    },
    {
      image: bannerImg2,
      title: "Your Next Favorite Book Awaits",
      subtitle: "Read, create, and explore stories like never before.",
    },
  ];

   useEffect(() => {
    if (swiperInstance && prevRef.current && nextRef.current) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  return (
    <div className="w-11/12 mb-32 relative rounded-b-lg bg-gray-200 mx-auto min-h-[500px] overflow-hidden">
      <Swiper
        modules={[Navigation]}
        loop={true}
        navigation={true} // ensures navigation params exist
        onBeforeInit={setSwiperInstance}
        speed={800}
        className="w-full h-[500px] md:h-[700px]"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div
              className="relative w-full h-full min-h-[500px] bg-cover bg-center flex items-center justify-center text-white"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black/40"></div>

              <div className="relative z-10 text-center px-4">
                <h1 className="text-4xl lg:text-6xl font-bold mb-3 drop-shadow-lg">
                  {slide.title}
                </h1>
                <p className="max-w-md mx-auto mb-6 text-lg lg:text-xl font-semibold text-gray-300">
                  {slide.subtitle}
                </p>

                {/* Buttons */}
                <div className="flex justify-center gap-4">
                  <Link
                    to="/all-books"
                    className="cursor-pointer box-border transition-all bg-blue-500 text-white px-6 py-2 rounded-lg border-b-[6px] border-b-transparent hover:border-b-blue-600 hover:brightness-110 active:brightness-90 font-semibold"
                  >
                    All Books
                  </Link>
                  <Link
                    to="/add-book"
                    className="px-6 py-2 cursor-pointer font-semibold bg-transparent border border-white rounded-lg hover:bg-white hover:text-black transition"
                  >
                    Create Book
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        ref={prevRef}
        className="absolute cursor-pointer left-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/20 hover:bg-white/40 rounded-full backdrop-blur-sm"
      >
        ❮
      </button>
      <button
        ref={nextRef}
        className="absolute cursor-pointer right-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/20 hover:bg-white/40 rounded-full backdrop-blur-sm"
      >
        ❯
      </button>
    </div>
  );
};

export default Banner;
