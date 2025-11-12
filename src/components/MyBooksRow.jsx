import React from "react";
import { IoIosStar } from "react-icons/io";

const MyBooksRow = ({ index, book, onUpdate, onDelete }) => {
  return (
    <tr>
      <td className="hidden sm:block">{index + 1}</td> {/* Serial Number */}
      <td>
        <div className="flex items-center sm:gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12 hidden sm:block">
              <img src={book.image} alt={book.title}/>
            </div>
          </div>
          <div>
            <p className="font-bold">{book.title}</p>
            <p className="text-sm opacity-50">{book.author}</p>
          </div>
        </div>
      </td>
      <td className="font-semibold">{book.category}</td>
      <td className="font-semibold">{book.price}$</td>
      <td className="font-semibold">{book.rating}</td>
      <td className="space-x-2">
        <button
          className="btn btn-sm btn-outline btn-info hover:bg-blue-500 hover:text-white"
          onClick={() => onUpdate(book._id)}
        >
          Update
        </button>
        <button
          className="btn btn-sm btn-outline btn-error"
          onClick={() => onDelete(book._id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default MyBooksRow;
