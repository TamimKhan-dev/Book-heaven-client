import React from "react";
import { Link } from "react-router";

const AllBooksRow = ({ index, book }) => {
  console.log(book)
  return (
    <tr>
      <td className="hidden sm:block">{index + 1}</td>
      <td>
        <div className="flex items-center sm:gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12 hidden sm:block">
              <img src={book.coverImage} alt={book.title} />
            </div>
          </div>
          <div>
            <p className="font-bold">{book.title}</p>
            <p className="text-sm opacity-50">{book.author}</p>
          </div>
        </div>
      </td>
      <td className="font-semibold">{book.genre}</td>
      <td className="font-semibold">{book.price}$</td>
      <td className="font-semibold hidden sm:block pt-7 text-base">
        {book.rating}
      </td>
      <td className="space-x-2">
        <Link to={`/book-details/${book._id}`}
          className="btn btn-sm btn-outline btn-info hover:bg-blue-500 hover:text-white"
        >
          View Details
        </Link>
      </td>
    </tr>
  );
};

export default AllBooksRow;
