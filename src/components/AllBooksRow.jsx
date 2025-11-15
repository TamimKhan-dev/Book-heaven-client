import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../provider/AuthContext";

const AllBooksRow = ({ index, book }) => {
  const {user} = use(AuthContext);

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
        <Link to={user ? `/book-details/${book._id}` : '/login'}
          state={user ? null : `/book-details/${book._id}` }
          className="btn btn-sm btn-outline btn-info hover:bg-blue-500 hover:text-white"
        >
          View Details
        </Link>
      </td>
    </tr>
  );
};

export default AllBooksRow;
