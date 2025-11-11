import React from "react";

const RecentBookCards = ({ book }) => {
  const { image, title, author_name, price, rating, genre } = book;
  return (
    <div className="bg-white flex flex-col justify-around p-4 max-w-[257px] w-fit rounded-md">
      <div className="px-8 mb-3">
        <img src={image} alt="" className="w-40 h-60" />
      </div>
      <div className="border-b pb-2 border-gray-200">
        <h3 className="text-xl font-semibold h-12 mb-1">{title}</h3>
        <p className="text-gray-500 pb-1">{author_name}</p>
        <p className="text-sm bg-[#1c5d71] font-semibold rounded-2xl px-1.5  w-fit text-white">
          {genre}
        </p>
      </div>
      <div>
        <div className="flex justify-between text-gray-400">
          <span>Rating</span>
          <span>Price</span>
        </div>
        <div className="flex justify-between text-xl font-bold text-[#1c5d71]">
          <p>{rating}</p>
          <p>${price}</p>
        </div>
      </div>
    </div>
  );
};

export default RecentBookCards;
