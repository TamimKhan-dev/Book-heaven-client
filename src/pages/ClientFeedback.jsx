import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import demo_img_1 from '../assets/test_01.png'
import demo_img_2 from '../assets/test_02.png'
import demo_img_3 from '../assets/test_03.png'
import demo_img_4 from '../assets/test_04.png'
import "swiper/css";


const ClientFeedback = () => {
  const clientsDetails = [
    {
      name: "Alice Brown",
      city: "New York",
      feedback: "I found so many rare and interesting books here! The collection is impressive and I keep discovering new titles.",
      image: demo_img_1,
    },
    {
      name: "Michael Lee",
      city: "London",
      feedback:
        "Fast delivery and great service. I’ve found several of my favorite books here and always enjoy browsing the collection.",
      image: demo_img_2,
    },
    {
      name: "Sophia Martinez",
      city: "Los Angeles",
      feedback:
        "I love the book recommendations. Every time I visit, I find something new and exciting to read.",
      image: demo_img_3,
    },
    {
      name: "Daniel Kim",
      city: "Toronto",
      feedback: "The website is easy to navigate, and my orders always arrive quickly and in excellent condition.",
      image: demo_img_2,
    },
    {
      name: "Emma Johnson",
      city: "Sydney",
      feedback:
        "A great mix of modern novels and classics. I always enjoy discovering new stories here.",
      image: demo_img_4,
    },
  ];

  const bgColors = ["#f4fbf2", "#fef5f5", "#e9f7fa", "#f5f7fe"];

  return (
    <div className="w-10/12 mx-auto mb-18">
      <h3 className="text-3xl lg:text-4xl font-bold mb-8">Clients Feedback</h3>
      <div>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          loop={true}
          autoplay={{
            delay: 1500,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
          }}
          speed={2000}
        >
          {clientsDetails.map((client, i) => (
            <SwiperSlide key={i} className="py-3 px-2">
              <div
                style={{ backgroundColor: bgColors[i % bgColors.length] }}
                className="bg-white rounded-xl h-[300px] p-6 flex flex-col items-center text-center"
              >
                <img
                  src={client.image}
                  alt={client.name}
                  className="w-18 h-18 rounded-full object-cover mb-4"
                />
                <p className="text-gray-700 mb-3 text-lg font-semibold">"{client.feedback}"</p>
                <h3 className="font-semibold">{client.name}</h3>
                <span className="text-gray-400 text-sm">{client.city}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ClientFeedback;
