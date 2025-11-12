import React from "react";
import { useParams } from "react-router";
import bookData from "../data/books.json";
import { IoIosStar } from "react-icons/io";
import toast, { Toaster } from "react-hot-toast";

const BookDetails = () => {
  const { id } = useParams();
  const singleBook = bookData.find((book) => book.id === id);
  const { image, title, author_name, genre, rating, price, } = singleBook;
  const notify = () =>  toast.success('Successfully your request is processing!')
    
  return (
    <div className="min-h-[50vh] flex justify-center items-center">
      <div className="bg-white max-w-[700px] mx-4 rounded-lg my-10 py-4 px-6 shadow-[0px_4px_6px_0px_rgba(0,_0,_0,_0.1)]">
        <div className="md:flex gap-5">
            {/* image */}
          <div className="self-start">
            <img src={image} alt={title} className="max-w-3xs mx-auto rounded-lg" />
          </div>
          {/* content */}
          <div className="mt-6 md:mt-0 space-y-4 mb-3">
            <h4 className="text-xl font-bold">{title}</h4>
            <div>
              <p className="font-semibold">Author: {author_name}</p>
              <p className="font-semibold">Genre: {genre}</p>
            </div>
            <div>
              <p className="flex items-center font-semibold">
                Rating:{" "}
                <span className="flex ml-1">
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                </span>{" "}
                {rating}
              </p>
              <p className="font-semibold">Price: {price}$</p>

              <button onClick={notify} className="btn bg-blue-500 mt-3 text-white rounded-3xl hover:bg-blue-600">Add to Cart</button>
            </div>
          
            <h5 className="text-xl font-bold">Book Description</h5>
            <p className="text-md text-gray-500 font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga animi aliquid, nulla, itaque modi similique sit assumenda recusandae maiores dolorum enim impedit suscipit velit ullam qui fugit delectus ex veritatis.
            Delectus iusto odit qui accusantium reiciendis nostrum excepturi facilis quisquam. Repudiandae aliquam fugiat sed dolores temporibus vel.</p>
          </div>
        </div>
        </div>
          {/* description */}
          <div>
      </div>
      <Toaster position="top-center" reverseOrder={false}/>
    </div>
  );
};

export default BookDetails;
