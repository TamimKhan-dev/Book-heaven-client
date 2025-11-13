import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { IoIosStar } from "react-icons/io";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

const BookDetails = () => {
  const { id } = useParams();
  const [books, setBooks] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/all-books")
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => {
        console.error("Error fetching books:", err);
      });
  }, []);
  const singleBook = books.find((book) => book._id === id);
  if (!singleBook) {
    return <span className="loading loading-bars loading-xl relative left-1/2 my-10 top-3 lg:top-20"></span>;
  }
  const { coverImage, title, author, genre, rating, price, summary } =
    singleBook;
  const notify = () => toast.success("Successful your request is processing!");

  return (
    <div className="min-h-[50vh] flex justify-center items-center">
      <div className="bg-white max-w-[700px] mx-4 rounded-lg my-10 py-4 px-6 shadow-[0px_4px_6px_0px_rgba(0,_0,_0,_0.1)]">
        <div className="md:flex gap-5">

          <div className="self-start">
            <img
              src={coverImage}
              alt={title}
              className="max-w-3xs mx-auto rounded-lg"
            />
          </div>

          <div className="mt-6 md:mt-0 space-y-4 mb-3">
            <h4 className="text-xl font-bold">{title}</h4>
            <div>
              <p className="font-semibold">Author: {author}</p>
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

              <button
                onClick={notify}
                className="btn bg-blue-500 mt-3 text-white rounded-3xl hover:bg-blue-600"
              >
                Add to Cart
              </button>
            </div>

            <h5 className="text-xl font-bold">Book Description</h5>
            <p className="text-md text-gray-500 font-semibold">{summary}</p>
          </div>
        </div>
      </div>

      <div></div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default BookDetails;
