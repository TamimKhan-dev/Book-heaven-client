import React from "react";
import featureImg1 from "../../assets/free-delivery_small.png";
import featureImg2 from "../../assets/best-price_small.png";
import featureImg3 from "../../assets/return_small.png";
import featureImg4 from "../../assets/shield_small.png";


const FeatureHighlight = () => {
  return (
    <div className="mb-20 grid grid-cols-1 place-items-center gap-5 md:grid-cols-2 xl:flex xl:justify-between">
      <div className="px-7 py-3 bg-white w-fit flex items-center gap-4 rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
        <img src={featureImg1} alt="" className="w-16 h-16" />
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold mb-1">Free shipping</h3>
          <p className="text-md font-semibold">Order over $100</p>
        </div>
      </div>
      <div className="px-7 py-3 bg-white w-fit flex items-center gap-4 rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
        <img src={featureImg2} alt="" className="w-16 h-16" />
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold mb-1">Best Price</h3>
          <p className="text-md font-semibold">Guaranteed Low Cost</p>
        </div>
      </div>
      <div className="px-7 py-3 bg-white w-fit flex items-center gap-4 rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
        <img src={featureImg3} alt="" className="w-16 h-16" />
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold mb-1">Easy Return</h3>
          <p className="text-md font-semibold">Within 30 Days returns</p>
        </div>
      </div>
      <div className="px-7 py-3 bg-white w-fit flex items-center gap-4 rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
        <img src={featureImg4} alt="" className="w-16 h-16" />
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold mb-1">Secure Payment</h3>
          <p className="text-md font-semibold">100% Secure Payment</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureHighlight;
