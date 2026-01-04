import React from 'react';
import categoryImg1 from '../../assets/h8_cate1.jpg';
import categoryImg2 from '../../assets/h8_cate2.jpg';
import categoryImg3 from '../../assets/h8_cate3.jpg';
import categoryImg4 from '../../assets/h8_cate4.jpg';
import categoryImg5 from '../../assets/h8_cate5.jpg';
import categoryImg6 from '../../assets/h8_cate6.jpg';

const BookCategories = () => {
  const categories = [
    {
      id: 1,
      title: "Fiction & Fantasy",
      products: "2 products",
      bgColor: "bg-yellow-200",
      bgImage: categoryImg1
    },
    {
      id: 2,
      title: "History",
      products: "1 products",
      bgColor: "bg-cyan-200",
      bgImage: categoryImg2
    },
    {
      id: 3,
      title: "Mystery, Thriller",
      products: "6 products",
      bgColor: "bg-lime-200",
      bgImage: categoryImg3
    },
    {
      id: 4,
      title: "Romance",
      products: "1 products",
      bgColor: "bg-orange-200",
      bgImage: categoryImg4
    },
    {
      id: 5,
      title: "Teen & Young Adult",
      products: "8 products",
      bgColor: "bg-pink-200",
      bgImage: categoryImg5
    },
    {
      id: 6,
      title: "Religion",
      products: "8 products",
      bgColor: "bg-gray-200",
      bgImage: categoryImg6
    }
  ];

  return (
    <div className="min-h-screen">
      <div className="">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8">
          Book Categories
        </h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className={`${category.bgColor} rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer`}
              style={category.bgImage ? {
                backgroundImage: `url(${category.bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              } : {}}
            >
              <div className="h-64 sm:h-72 lg:h-80 flex flex-col justify-end p-6 sm:p-8 bg-linear-to-t from-black/20 to-transparent">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 inline-block">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-1">
                    {category.title}
                  </h2>
                  <p className="text-sm sm:text-base text-gray-600">
                    {category.products}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookCategories;