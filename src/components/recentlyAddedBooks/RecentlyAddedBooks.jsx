import React, { useEffect, useState } from "react";
import RecentBookCards from "./RecentBookCards";
import axios from "axios";

const RecentlyAddedBooks = () => {
  const [latestBooks, setLatestBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    axios.get('https://book-heaven-api-server-eight.vercel.app/recent-books')
     .then(res => {
      setLatestBooks(res.data);
     })
     .catch(err => {
      console.log('Error while fetching data:', err);
     })
     .finally(() => {
      setLoading(false);
     })
  }, [])

  return (
    <div className="w-10/12 mx-auto mb-18">
      <h3 className="text-4xl lg:5xl font-bold mb-5">Recently Added Books</h3>
      <div className="relative min-h-[300px] flex rounded-lg p-3">
        { loading ? <span className="loading loading-bars loading-xl absolute left-1/2 top-30"></span> : latestBooks.length === 0 ? (
          <p className="absolute top-1/3 left-[50%] -translate-x-[50%] text-4xl lg:text-5xl font-bold">No Data Added Yet!</p>
        ) : (
          <div className="h-full grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:flex gap-8 2xl:gap-2">
            {
              latestBooks.map(book => <RecentBookCards key={book._id} book={book}/>)
            }
          </div>
        )}
      </div>
    </div>
  );
};

export default RecentlyAddedBooks;
