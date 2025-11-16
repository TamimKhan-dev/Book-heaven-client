import React, { use, useEffect, useState } from "react";
import AllBooksRow from "../components/AllBooksRow";
import axios from "axios";
import { AuthContext } from "../provider/AuthContext";

const AllBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const { theme } = use(AuthContext);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://book-heaven-api-server-eight.vercel.app/all-books")
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => {
        console.error("Error fetching books:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleSort = () => {
    setLoading(true)
      
     axios.get('https://book-heaven-api-server-eight.vercel.app/all-books-sorted')
       .then(res => {
        setBooks(res.data);
       })
       .catch(err => console.log(err.message))
       .finally(() => setLoading(false));
  }

  return (
    <div className="p-6 mb-8 relative">
      <h2 className="text-center text-4xl font-bold mb-4">All Books</h2>
      <div className="dropdown dropdown-bottom dropdown-end absolute right-5 top-5">
        <div tabIndex={0} role="button" className={`btn m-1 text-white ${theme === 'dark' ? '' : 'bg-blue-500'}`}>
          Sort By
        </div>
        <ul
          tabIndex="-1"
          className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
        >
          <li onClick={handleSort}>
            <a>Sort by Rating</a>
          </li>
        </ul>
      </div>
      {loading ? (
        <span className="loading loading-bars loading-xl absolute left-1/2 top-44"></span>
      ) : (
        <table
          className={`table -translate-x-5.5 sm:translate-x-0 ${theme === "dark" ? "bg-black" : "bg-white"}`}
        >
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
                <AllBooksRow key={book._id} index={index} book={book} />
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
        </table>
      )}
    </div>
  );
};

export default AllBooks;
