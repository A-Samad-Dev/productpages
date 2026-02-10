import React from "react";

const StudentCard = ({ item, tag }) => {
  return (
    <div className="w-100 p-4! rounded-md shadow-lg bg-white flex flex-col gap-4! mt-10! object-contain px-15!">
      <div className="w-full relative  ">
        <img
          src="https://images.pexels.com/photos/27523299/pexels-photo-27523299.jpeg"
          alt=""
          className="w-40 h-40 rounded-full"
        />
        <span className="inline-flex text-center">Name:{item.name}</span> <br />
        <span className="inline-flex text-center">Age:{item.age}</span>
        <br />
        <span className="inline-flex text-center">Gender: {item.gender}</span>
        <br />
        <span className="inline-flex text-center">Email: {item.email}</span>
        <br />
        <span className="p-2! absolute -top-3 -right-12 bg-green-300 rounded-xl animate-pulse ">student</span>
      </div>
    </div>
  );
};

export default StudentCard;
