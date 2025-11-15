import React, { use, useEffect, useState } from "react";
import MyBooksRow from "../components/MyBooksRow";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import axios from "axios";
import { AuthContext } from "../provider/AuthContext";

const mySwal = withReactContent(Swal);

const MyBooks = () => {
  const { user, theme } = use(AuthContext);
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    if (user?.email) {
      axios
        .get(`https://book-heaven-api-server-eight.vercel.app/myBooks/${user.email}`)
        .then((res) => {
          setBooks(res.data);
        })
        .catch((err) => {
          console.log("Error while fetching data:", err);
        })
        .finally(() => {
          setLoading(false);
        })
    }
  }, [user]);

  const handleUpdate = (book) => {
    let updated = { ...book };

    mySwal
      .fire({
        title: "Update Book",
        showCancelButton: true,
        color: `${theme === 'dark' ? '#fff' : ''}`,
        confirmButtonText: "Update",
        cancelButtonText: "Cancel",
        confirmButtonColor: "#3B82F6",
        background: `${theme === 'dark' ? '#000' : ''}`,
        html: (
          <div className="flex flex-col gap-3 text-left pt-5 border-t-2 border-gray-300">
            <div className="flex gap-3">
              <div className="flex flex-col w-1/2">
                <label className={`text-sm font-semibold mb-1 ${theme === 'dark' ? 'text-white' : ''}`}>Book Name</label>
                <input
                  name="bookName"
                  className={`input input-bordered w-full ${theme === 'dark' ? 'text-white' : ''}`}
                  placeholder="Book Name"
                  defaultValue={book.title}
                  onChange={(e) => (updated.title = e.target.value)}
                />
              </div>

              <div className="flex flex-col w-1/2">
                <label className={`text-sm font-semibold mb-1 ${theme === 'dark' ? 'text-white' : ''}`}>
                  Author Name
                </label>
                <input
                  className={`input input-bordered w-full ${theme === 'dark' ? 'text-white' : ''}`}
                  placeholder="Author"
                  defaultValue={book.author}
                  onChange={(e) => (updated.author = e.target.value)}
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label className={`text-sm font-semibold mb-1 ${theme === 'dark' ? 'text-white' : ''}`}>Image URL</label>
              <input
                className={`input input-bordered w-full ${theme === 'dark' ? 'text-white' : ''}`}
                placeholder="Image URL"
                defaultValue={book.coverImage}
                onChange={(e) => (updated.coverImage = e.target.value)}
              />
            </div>

            <div className="flex flex-col">
              <label className={`text-sm font-semibold mb-1 ${theme === 'dark' ? 'text-white' : ''}`}>Genre</label>
              <input
                className={`input input-bordered w-full ${theme === 'dark' ? 'text-white' : ''}`}
                placeholder="Genre"
                defaultValue={book.genre}
                onChange={(e) => (updated.genre = e.target.value)}
              />
            </div>

            <div className="flex flex-col">
              <label className={`text-sm font-semibold mb-1 ${theme === 'dark' ? 'text-white' : ''}`}>Price</label>
              <input
                className={`input input-bordered w-full ${theme === 'dark' ? 'text-white' : ''}`}
                placeholder="Price"
                type="number"
                defaultValue={book.price}
                onChange={(e) => (updated.price = Number(e.target.value))}
              />
            </div>

            <div className="flex flex-col">
              <label className={`text-sm font-semibold mb-1 ${theme === 'dark' ? 'text-white' : ''}`}>Rating (1–5)</label>
              <input
                className={`input input-bordered w-full ${theme === 'dark' ? 'text-white' : ''}`}
                placeholder="Rating (1–5)"
                type="number"
                min="1"
                max="5"
                step="0.1"
                defaultValue={book.rating}
                onChange={(e) => (updated.rating = Number(e.target.value))}
              />
            </div>

            <div className="flex flex-col">
                <label className={`block ${theme === 'dark' ? 'text-white' : 'text-gray-700'} font-medium mb-2`}>
                  Summary
                </label>
                <textarea
                  defaultValue={book.summary}
                  onChange={(e) => (updated.summary = e.target.value)}
                  placeholder="Write a brief synopsis..."
                  className={`w-full text-sm px-4 py-2 border border-gray-300 rounded-lg h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 ${theme === 'dark' ? 'text-white' : ''}`}
                />
            </div>
          </div>
        ),
        preConfirm: () => updated,
      })
      .then((result) => {
        if (result.isConfirmed) {
          axios
            .put(`https://book-heaven-api-server-eight.vercel.app/update-book/${book._id}`, result.value)
            .then(() => {
              Swal.fire({
                icon: "success",
                title: "Book updated successfully!",
                timer: 1200,
                showConfirmButton: false,
              });

              const newList = books.map((b) =>
                b._id === book._id ? { ...b, ...result.value } : b
              );
              setBooks(newList);
            })
            .catch((err) => {
              console.log(err.message);
              Swal.fire({
                icon: "error",
                title: "Failed to update book!",
                text: err.message,
              });
            });
        }
      });
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This book will be deleted permanently!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`https://book-heaven-api-server-eight.vercel.app/delete-book/${id}`)
          .then(res => {
            if (res.data.deletedCount === 1) {
              setBooks((prev) => prev.filter((b) => b._id !== id));
              Swal.fire("Deleted!", "The book has been removed.", "success");
            }
            else {
              Swal.fire("Error", res.data.message, "error");
            }
          })
          .catch(err => {
            console.error(err);
            Swal.fire("Error", "Failed to delete book!", "error");
          })
      }
    });
  };
  return (
    <div className="relative p-6 mb-10">
      <h2 className="text-center text-4xl font-bold mb-4">My Books</h2>
      {loading ? <span className="loading loading-bars loading-xl absolute left-1/2 top-30"></span> : <table className={`table ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
        <thead>
          <tr>
            <th className="hidden sm:block">SL</th>
            <th>Book Info</th>
            <th>Genre</th>
            <th>Price</th>
            <th className="hidden sm:block">Rating</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {books.length > 0 ? (
            books.map((book, index) => (
              <MyBooksRow
                key={book._id}
                index={index}
                book={book}
                onUpdate={handleUpdate}
                onDelete={handleDelete}
              />
            ))
          ) : (
            <tr>
              <td
                colSpan="5"
                className="text-center md:translate-x-32 lg:translate-x-50 text-2xl font-semibold py-10"
              >
                No books added yet! 😕
              </td>
            </tr>
          )}
        </tbody>
      </table>}
    </div>
  );
};

export default MyBooks;
