import React from "react";
import communityImg from "../../assets/banner_box.jpg";

const JoinOurCommunity = () => {
  return (
    <div
      className="bg-neutral-300 flex items-center px-3 sm:pl-10 lg:pl-20 text-white w-full min-h-50 lg:min-h-96 rounded-3xl mb-26 bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${communityImg})` }}
    >
      <div className="space-y-4">
        <h2 className="text-2xl lg:text-4xl font-semibold lg:font-bold">Join Our Community</h2>
        <p className="max-w-100 lg:max-w-150 text-sm lg:text-lg font-medium">
          Enter your email address to receive regular updates, as well as news
          on upcoming events and specific offers.
        </p>
        <div className="h-12 lg:h-15 flex items-center">
          <input
            type="text"
            placeholder="You email address"
            className="bg-white text-gray-700 px-6 h-full lg:w-97 w-50 outline-none rounded-l-full"
          />
          <button className="bg-[#2b7fff] h-full px-4 lg:px-9 rounded-full -ml-7 lg:-ml-8 font-semibold cursor-pointer">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default JoinOurCommunity;
