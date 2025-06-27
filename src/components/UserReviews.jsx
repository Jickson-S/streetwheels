import React from "react";

const reviews = [
  {
    id: 1,
    name: "Priya Sharma",
    comment: "The self-drive car was in excellent condition. Great experience!",
    rating: 5,
  },
  {
    id: 2,
    name: "Rahul Kumar",
    comment: "Booking was easy and the driver was punctual and professional.",
    rating: 4,
  },
  {
    id: 3,
    name: "Anjali Mehta",
    comment: "Highly recommend Street Wheels! Affordable and smooth service.",
    rating: 5,
  },
];

const UserReviews = () => {
  return (
    <section id="reviews" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">What Our Customers Say</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300"
            >
              <p className="text-gray-600 mb-4">“{review.comment}”</p>
              <p className="font-semibold text-gray-800">{review.name}</p>
              <p className="text-yellow-500">{"⭐".repeat(review.rating)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserReviews;
