import React from "react";

const FAQ = () => {
  return (
    <div className="mb-18">
      <h3 className="text-3xl lg:text-4xl font-bold mb-8">
        Frequently asked questions
      </h3>
      <div className="space-y-3">

        <div
          tabIndex={0}
          className="collapse collapse-arrow bg-base-100 border-base-300 border"
        >
          <div className="collapse-title font-semibold">
            1. What is Book Heaven?
          </div>
          <div className="collapse-content text-sm">
            Book Heaven is an online book platform where readers can explore a wide range of books in a clean and organized interface. Users can view detailed book information, check ratings, and discover books that match their interests easily.
          </div>
        </div>

        <div
          tabIndex={0}
          className="collapse collapse-arrow bg-base-100 border-base-300 border"
        >
          <div className="collapse-title font-semibold">
            2. Do I need an account to browse books?
          </div>
          <div className="collapse-content text-sm">
            No, you can browse and explore books without creating an account. However, to leave comments or interact with certain features, you may need to sign in.
          </div>
        </div>

        <div
          tabIndex={0}
          className="collapse collapse-arrow bg-base-100 border-base-300 border"
        >
          <div className="collapse-title font-semibold">
            3. Can I leave comments or reviews on books?
          </div>
          <div className="collapse-content text-sm">
            Yes! Book Heaven allows users to share their thoughts through comments on individual book pages. Comments are displayed instantly so readers can engage and share opinions.
          </div>
        </div>

        <div
          tabIndex={0}
          className="collapse collapse-arrow bg-base-100 border-base-300 border"
        >
          <div className="collapse-title font-semibold">
            4. How does the rating filter work?
          </div>
          <div className="collapse-content text-sm">
            The rating filter helps you find books based on their ratings. You can easily sort or filter books to discover top-rated or highly recommended titles without manual searching.
          </div>
        </div>

        <div
          tabIndex={0}
          className="collapse collapse-arrow bg-base-100 border-base-300 border"
        >
          <div className="collapse-title font-semibold">
            5. Is Book Heaven mobile-friendly?
          </div>
          <div className="collapse-content text-sm">
            Absolutely. Book Heaven is fully responsive and works smoothly on mobile phones, tablets, and desktop devices, ensuring a consistent experience across all screen sizes.
          </div>
        </div>

      </div>
    </div>
  );
};

export default FAQ;
