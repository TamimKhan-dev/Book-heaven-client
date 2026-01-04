import React from "react";
import discountBanner from "../../assets/h6_banner3.jpg";
import { MdKeyboardArrowRight } from "react-icons/md";
import { toast } from "react-hot-toast";

const Discount = () => {
  const handleClick = () => {
    toast("Your request has Recorded!", {
      icon: "🎉",
    });
  };
  return (
    <div
      className="p-4 bg-gray-200 mb-29 min-h-59 rounded-lg flex lg:justify-end bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${discountBanner})` }}
    >
      <div className="w-full lg:w-1/2 text-white p-6 flex flex-col md:flex-row gap-5 justify-between items-center md:justify-around">
        <div className="text-center">
          <h6 className="font-semibold text-lg">our bigest sale</h6>
          <h3 className="text-lg sm:text-2xl font-bold">Only $5.99 a month</h3>
          <p className="font-semibold text-lg">For the first 5 months</p>
        </div>
        <div className="text-center">
          <h5 className="text-xl mb-3 font-semibold">Online Book's store!</h5>
          <button
            onClick={handleClick}
            className="bg-white px-3 py-2 sm:px-8 sm:py-3 rounded-4xl cursor-pointer text-black font-semibold flex items-center whitespace-nowrap"
          >
            Shop Now <MdKeyboardArrowRight size="23" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Discount;
