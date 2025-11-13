import React from "react";

const MyBooksRow = ({ index, book, onUpdate, onDelete }) => {
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
      <td className="font-semibold hidden sm:block pt-7 text-base">{book.rating}</td>
      <td className="space-x-2">
        <button
          className="btn btn-sm btn-outline btn-info hover:bg-blue-500 hover:text-white"
          onClick={() => onUpdate(book)}
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
