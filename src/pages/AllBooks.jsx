import React, { useEffect, useState } from "react";
import AllBooksRow from "../components/AllBooksRow";
import axios from "axios";

const AllBooks = () => {
  const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/all-books')
          .then(res => {
            setBooks(res.data);
          })
          .catch(err => {
            console.error("Error fetching books:", err);
          })
    }, [])

  return (
    <div className="p-6 mb-8">
      <h2 className="text-center text-4xl font-bold mb-4">All Books</h2>
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
              <AllBooksRow
                key={book.id}
                index={index}
                book={book}
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

export default AllBooks;
