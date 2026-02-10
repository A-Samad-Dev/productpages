import React from "react";

const Review = ({ product }) => {
  const review1 = product?.reviews?.[0];
  const review2 = product?.reviews?.[1] || product?.reviews?.[0];
  const review3 = product?.reviews?.[2] || product?.reviews?.[0];

  if (!review1) return <p>No reviews yet</p>;

  return (
    <div>
      <div>
        <h1 className="text-xl py-3 text-blue-500 underline w-50"> Review 1:</h1>
        <p className="block">
          Comment: {review1?.comment} <br />
          <span>Date: {review1?.date}</span>
          <br />
          <span>User: {review1?.reviewerName}</span>
          <br />
          <span>User-Email: {review1?.reviewerEmail}</span>
          <br />
        </p>
      </div>

      <div>
        <h1 className="text-xl py-3 text-red-500 underline w-50"> Review 2:</h1>
        <p>
          Comment: {review2?.comment} <br />
          <span>Date: {review2?.date}</span>
          <br />
          <span>User: {review2?.reviewerName}</span>
          <br />
          <span>User-Email: {review2?.reviewerEmail}</span>
          <br />
        </p>
      </div>

      <div>
        <h1 className="text-xl py-3 text-green-500 underline w-50"> Review 3:</h1>
        <p>
          Comment: {review3?.comment}
          <br />
          <span>Date: {review3?.date}</span>
          <br />
          <span>User: {review3?.reviewerName}</span>
          <br />
          <span>User-Email: {review3?.reviewerEmail}</span>
          <br />
        </p>
      </div>
    </div>
  );
};

export default Review;
