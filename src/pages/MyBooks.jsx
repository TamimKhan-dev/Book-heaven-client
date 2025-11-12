import React, { useState } from "react";
import MyBooksRow from "../components/MyBooksRow";


const MyBooks = () => {

  const [books, setBooks] = useState([
    {
      _id: "1",
      title: "Atomic Habits",
      author: "James Clear",
      category: "Self-help",
      price: 350,
      rating: 4.7,
      image: "https://covers.openlibrary.org/b/id/10958382-L.jpg",
    },
    {
      _id: "2",
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      category: "Fantasy",
      price: 420,
      rating: 4.7,
      image: "https://covers.openlibrary.org/b/id/8101342-L.jpg",
    }
  ]);


  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Delete this book?");
    if (!confirmDelete) return;
    setBooks(books.filter((book) => book._id !== id));
  };


  const handleUpdate = (id) => {
    alert(`Update book with id: ${id}`);
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
            <th>Rating</th>
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
              <td colSpan="5" className="text-center text-2xl font-semibold py-10">
                No books added yet 😕
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default MyBooks;
