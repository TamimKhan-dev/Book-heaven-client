import React, { useState } from 'react';
import { BookOpen, Star } from 'lucide-react';

function AddBook() {
  const [bookName, setBookName] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [genres, setGenres] = useState([]);
  const [rating, setRating] = useState(0);
  const [coverUrl, setCoverUrl] = useState('');
  const [description, setDescription] = useState('');
  const [hoveredStar, setHoveredStar] = useState(0);

  const availableGenres = ['Science Fiction', 'Adventure', 'Fantasy', 'Mystery', 'Romance', 'Thriller'];

  const toggleGenre = (genre) => {
    if (genres.includes(genre)) {
      setGenres(genres.filter(g => g !== genre));
    } else {
      setGenres([...genres, genre]);
    }
  };

  const handleSubmit = () => {
    const bookData = {
      bookName,
      authorName,
      genres,
      rating,
      coverUrl,
      description,
      userName: 'tamim khan',
      userEmail: 'tamimKhan@gmail.com'
    };
    console.log('Book Data:', bookData);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-200 to-gray-300 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl overflow-hidden">

        <div className="bg-white border-b border-gray-200 px-8 py-6">
          <div className="flex items-center justify-center gap-3">
            <BookOpen className="w-7 h-7 text-gray-700" />
            <h1 className="text-3xl font-bold text-gray-800">Add New Book</h1>
          </div>
        </div>

        <div className="px-8 py-6 space-y-8">

          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-4">Core Book Information</h2>
            
            <div className="space-y-4">

              <div className="flex items-center gap-4">
                <label className="w-24 text-gray-700 font-medium">Title</label>
                <input
                  type="text"
                  value={bookName}
                  onChange={(e) => setBookName(e.target.value)}
                  placeholder="Book name"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>


              <div className="flex items-center gap-4">
                <label className="w-24 text-gray-700 font-medium">Author</label>
                <input
                  type="text"
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                  placeholder="author name"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <div className="flex items-start gap-4">
                <label className="w-24 text-gray-700 font-medium pt-2">Genre</label>
                <div className="flex-1 flex flex-wrap gap-2">
                  {availableGenres.map((genre) => (
                    <button
                      key={genre}
                      onClick={() => toggleGenre(genre)}
                      className={`px-4 py-2 rounded-lg font-medium transition-all cursor-pointer ${
                        genres.includes(genre)
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      {genre}
                      {genres.includes(genre) && (
                        <span className="ml-2">✓</span>
                      )}
                    </button>
                  ))}
                </div>
              </div>


              <div className="flex items-center gap-4">
                <div className="w-24"></div>
                <div className="flex-1">
                  <div className="flex gap-1 mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHoveredStar(star)}
                        onMouseLeave={() => setHoveredStar(0)}
                        className="focus:outline-none transition-transform hover:scale-110"
                      >
                        <Star
                          className={`w-8 h-8 ${
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
            </div>
          </div>


          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-4">Media and Content</h2>
            
            <div className="grid grid-cols-3 gap-6">
              <div className="col-span-3 space-y-4">
                {/* Cover Image URL */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Cover Image URL</label>
                  <input
                    type="text"
                    value={coverUrl}
                    onChange={(e) => setCoverUrl(e.target.value)}
                    placeholder="Paste image link here..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>


                <div>
                  <label className="block text-gray-700 font-medium mb-2">Summary</label>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Write a brief synopsis..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg h-32 resize-none focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
              </div>
            </div>
          </div>


          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-4">Your Account Information (Read-only)</h2>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <label className="w-32 text-gray-700 font-medium">User Name</label>
                <input
                  type="text"
                  value="Paul Atreides"
                  readOnly
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-600 cursor-not-allowed"
                />
              </div>

              <div className="flex items-center gap-4">
                <label className="w-32 text-gray-700 font-medium">User Email</label>
                <input
                  type="email"
                  value="paul.atreides@arrakis.com"
                  readOnly
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-600 cursor-not-allowed"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-4 pt-4">
            <button
              onClick={handleSubmit}
              className="px-8 py-3 cursor-pointer bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 transition-colors"
            >
              Add Book
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddBook;