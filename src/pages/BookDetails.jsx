import React, { use, useEffect, useState } from "react";
import { useParams } from "react-router";
import { IoIosStar } from "react-icons/io";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { AuthContext } from "../provider/AuthContext";
import { SendHorizontal } from "lucide-react";
import Swal from "sweetalert2";

const BookDetails = () => {
  const { id } = useParams();
  const [books, setBooks] = useState([]);
  const { theme, user } = use(AuthContext);
  useEffect(() => {
    axios
      .get("https://book-heaven-api-server-eight.vercel.app/all-books")
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => {
        console.error("Error fetching books:", err);
      });
  }, []);
  const singleBook = books.find((book) => book._id === id);
  if (!singleBook) {
    return (
      <span className="loading loading-bars loading-xl relative left-1/2 my-10 top-3 lg:top-20"></span>
    );
  }
  const { coverImage, title, author, genre, rating, price, summary, comments } =
    singleBook;
  const notify = () => toast.success("Successful your request is processing!");

  const handleComments = (e) => {
    e.preventDefault();
    const comment = e.target.comment.value;

    const newComment = {
      userImage: user.photoURL,
      comment,
    };
    axios
      .post(`https://book-heaven-api-server-eight.vercel.app/add-comment/${id}`, newComment)
      .then(() => {
        setBooks((prevBooks) => {
          if (!prevBooks) return prevBooks;

          return prevBooks.map((book) =>
            book._id === id
              ? { ...book, comments: [ newComment, ...(book.comments || [])] }
              : book
          );
        });

        Swal.fire({
          title: "Commented Successfully!",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });
      });
  };

  return (
    <div className="min-h-[50vh] flex flex-col justify-center items-center mb-12">
      <div
        className={`${
          theme === "dark" ? "bg-black" : "bg-white"
        } max-w-[700px] mx-4 rounded-lg my-10 py-4 px-6 shadow-[0px_4px_6px_0px_rgba(0,_0,_0,_0.1)]`}
      >
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

      <div
        className={`p-2 ${
          theme === "dark" ? "bg-black text-white" : "bg-white"
        } min-w-[340px] sm:min-w-[600px] md:w-[700px]  min-h-[500px] rounded-lg shadow-[0px_4px_6px_0px_rgba(0,_0,_0,_0.1)]`}
      >
        <h3 className="text-xl font-semibold pb-3 border-b-2 border-gray-300 mb-3">
          Comments{" "}
        </h3>
        <div>
          <div className="mb-4">
            <form
              onSubmit={handleComments}
              className="flex justify-between items-center gap-3"
            >
              <textarea
                name="comment"
                placeholder="Write something on this book..."
                className="textarea textarea-md resize-none w-full"
              ></textarea>
              <button className="bg-blue-500 cursor-pointer text-white p-2 rounded-full">
                <SendHorizontal />
              </button>
            </form>
          </div>

          <div className="space-y-3 max-h-[450px] overflow-auto">
            {comments.map(({ userImage, comment }, i) => (
              <div
                key={i}
                className="w-full gap-4 flex items-center p-3 bg-gray-200 rounded-lg"
              >
                <img
                  src={userImage}
                  alt=""
                  className="w-18 h-18 rounded-full"
                />
                <p className="text-xl font-semibold">{comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default BookDetails;
