import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import clientsFeedback from '../data/clientsFeedback.json'
import "swiper/css";


const ClientFeedback = () => {

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
          {clientsFeedback.map((client, i) => (
            <SwiperSlide key={i} className="py-3 px-3">
              <div
                style={{ backgroundColor: bgColors[i % bgColors.length] }}
                className="shadow-[0px_4px_6px_0px_rgba(0,_0,_0,_0.1)] rounded-xl h-[300px] p-6 flex flex-col items-center text-center"
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
