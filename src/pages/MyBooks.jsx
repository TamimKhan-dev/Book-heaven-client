import React, { useState } from "react";
import MyBooksRow from "../components/MyBooksRow";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const mySwal = withReactContent(Swal);

const MyBooks = () => {
  const [books, setBooks] = useState([
    {
      _id: "1",
      title: "Atomic Habits",
      author: "James Clear",
      genre: "Self-help",
      price: 350,
      rating: 4.7,
      image: "https://covers.openlibrary.org/b/id/10958382-L.jpg",
    },
    {
      _id: "2",
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      genre: "Fantasy",
      price: 420,
      rating: 4.7,
      image: "https://covers.openlibrary.org/b/id/8101342-L.jpg",
    },
  ]);

  const handleUpdate = (book) => {
    let updated = { ...book };

    mySwal
      .fire({
        title: "Update Book",
        showCancelButton: true,
        confirmButtonText: "Update",
        cancelButtonText: "Cancel",
        confirmButtonColor: "#3B82F6",
        html: (
          <div className="flex flex-col gap-3 text-left pt-5 border-t-2 border-gray-300">
            <div className="flex gap-3">
              <div className="flex flex-col w-1/2">
                <label className="text-sm font-semibold mb-1">Book Name</label>
                <input
                  name="bookName"
                  className="input input-bordered w-full"
                  placeholder="Book Name"
                  defaultValue={book.title}
                  onChange={(e) => (updated.title = e.target.value)}
                />
              </div>

              <div className="flex flex-col w-1/2">
                <label className="text-sm font-semibold mb-1">
                  Author Name
                </label>
                <input
                  className="input input-bordered w-full"
                  placeholder="Author"
                  defaultValue={book.author}
                  onChange={(e) => (updated.author = e.target.value)}
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-1">Image URL</label>
              <input
                className="input input-bordered w-full"
                placeholder="Image URL"
                defaultValue={book.image}
                onChange={(e) => (updated.image = e.target.value)}
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-1">Genre</label>
              <input
                className="input input-bordered w-full"
                placeholder="Genre"
                defaultValue={book.genre}
                onChange={(e) => (updated.genre = e.target.value)}
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-1">Price</label>
              <input
                className="input input-bordered w-full"
                placeholder="Price"
                type="number"
                defaultValue={book.price}
                onChange={(e) => (updated.price = Number(e.target.value))}
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-1">Rating (1–5)</label>
              <input
                className="input input-bordered w-full"
                placeholder="Rating (1–5)"
                type="number"
                min="1"
                max="5"
                step="0.1"
                defaultValue={book.rating}
                onChange={(e) => (updated.rating = Number(e.target.value))}
              />
            </div>
          </div>
        ),
        preConfirm: () => updated,
      })
      .then((result) => {
        if (result.isConfirmed) {
          const newList = books.map((b) =>
            b.id === book.id ? { ...b, ...result.value } : b
          );
          setBooks(newList);

          Swal.fire({
            icon: "success",
            title: "Book updated successfully!",
            timer: 1200,
            showConfirmButton: false,
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
        setBooks((prev) => prev.filter((b) => b.id !== id));
        Swal.fire("Deleted!", "The book has been removed.", "success");
      }
    });
  };
  return (
    <div className="p-6">
      <h2 className="text-center text-4xl font-bold mb-4">My Books</h2>
      <table className="table bg-white">
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
                className="text-center text-2xl font-semibold py-10"
              >
                No books added yet! 😕
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default MyBooks;
