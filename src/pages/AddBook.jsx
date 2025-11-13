import React, { use, useState } from 'react';
import { BookOpen, Star } from 'lucide-react';
import { AuthContext } from '../provider/AuthContext';
import Swal from 'sweetalert2';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

export default function AddBookForm() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [rating, setRating] = useState(0);
  const [coverImage, setCoverImage] = useState('');
  const [summary, setSummary] = useState('');
  const [price, setPrice] = useState('');
  const [hoveredStar, setHoveredStar] = useState(0);
  const { user, loading } = use(AuthContext);

if (loading) {
  return <p>Loading...</p>;
}

if (!user) {
  return <p>Please log in to add a book.</p>;
}
  const availableGenres = ['Science Fiction', 'Adventure', 'Fantasy', 'Mystery', 'Romance', 'Thriller'];

  const handleSubmit = () => {
    if (!title || !author || !genre || rating === 0 || !coverImage || !summary || !price) {
      toast.error('Please fill in all required fields');
      return;
    }
    
    const bookData = {
      title,
      author,
      genre,
      rating,
      coverImage,
      summary,
      price: parseFloat(price),
      userEmail: user.email
    };
    
    axios.post('http://localhost:5000/add-book', bookData)
      .then(res => {
        if (res.data.insertedId) {
          Swal.fire({
            title: "Book Added Successfully!",
            icon: "success",
            timer: 1500,
            showConfirmButton: false,
          });
        }
      })
      .catch(error => {
        console.error(error);
      })

  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-200 to-gray-300 flex items-center justify-center p-4 sm:p-6">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl overflow-hidden">

        <div className="bg-white border-b border-gray-200 px-4 sm:px-8 py-4 sm:py-6">
          <div className="flex items-center justify-center gap-2 sm:gap-3">
            <BookOpen className="w-6 h-6 sm:w-7 sm:h-7 text-gray-700" />
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Add New Book</h1>
          </div>
        </div>

        <div className="px-4 sm:px-8 py-4 sm:py-6 space-y-6 sm:space-y-8">

          <div>
            <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">Core Book Information</h2>
            
            <div className="space-y-3 sm:space-y-4">

              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <label className="sm:w-24 text-gray-700 font-medium">
                  Title
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Book Title"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>


              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <label className="sm:w-24 text-gray-700 font-medium">
                  Author
                </label>
                <input
                  type="text"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  placeholder="Author name"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>


              <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4">
                <label className="sm:w-24 text-gray-700 font-medium sm:pt-2">
                  Genre
                </label>
                <div className="flex-1">
                  <div className="flex flex-wrap gap-2">
                    {availableGenres.map((genreOption) => (
                      <button
                        key={genreOption}
                        type="button"
                        onClick={() => setGenre(genreOption)}
                        className={`px-3 sm:px-4 py-2 rounded-lg font-medium transition-all text-sm sm:text-base ${
                          genre === genreOption
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                      >
                        {genreOption}
                        {genre === genreOption && (
                          <span className="ml-2">✓</span>
                        )}
                      </button>
                    ))}
                  </div>
                  {!genre && (
                    <p className="text-xs text-gray-500 mt-2">Please select one genre</p>
                  )}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <div className="sm:w-24 text-gray-700 font-medium">
                  Rating
                </div>
                <div className="flex-1">
                  <div className="flex gap-1 mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHoveredStar(star)}
                        onMouseLeave={() => setHoveredStar(0)}
                        className="focus:outline-none transition-transform hover:scale-110"
                      >
                        <Star
                          className={`w-6 h-6 sm:w-8 sm:h-8 ${
                            star <= (hoveredStar || rating)
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'fill-none text-yellow-400'
                          }`}
                          strokeWidth={2}
                        />
                      </button>
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">Your Rating: {rating}/5 Stars</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <label className="sm:w-24 text-gray-700 font-medium">
                  Price
                </label>
                <input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="price"
                  min="0"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:text-blue-500"
                />
              </div>
            </div>
          </div>


          <div>
            <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">Media and Content</h2>
            
            <div className="space-y-3 sm:space-y-4">

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Cover Image URL
                </label>
                <input
                  type="text"
                  value={coverImage}
                  onChange={(e) => setCoverImage(e.target.value)}
                  placeholder="Paste image link here..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>


              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Summary
                </label>
                <textarea
                  value={summary}
                  onChange={(e) => setSummary(e.target.value)}
                  placeholder="Write a brief synopsis..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>


          <div>
            <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">Your Account Information (Read-only)</h2>
            
            <div className="space-y-3 sm:space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <label className="sm:w-32 text-gray-700 font-medium">User Name</label>
                <input
                  type="text"
                  value={user.displayName}
                  readOnly
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-600 cursor-not-allowed"
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <label className="sm:w-32 text-gray-700 font-medium">User Email</label>
                <input
                  type="email"
                  value={user.email}
                  readOnly
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-600 cursor-not-allowed"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-center pt-2 sm:pt-4">
            <button
              onClick={handleSubmit}
              className="w-full sm:w-auto px-8 py-3 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 transition-colors"
            >
              Add Book
            </button>
          </div>
        </div>
      </div>
      <Toaster position="top-center" reverseOrder={false}/>
    </div>
  );
}