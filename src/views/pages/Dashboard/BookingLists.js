import React from "react";

const BookingLists = ({ book }) => {
  const { name, description, image, price, section } = book;
  return (
    <div className="card cursor-pointer bg-white border-gray-200 transition transform duration-500 hover:shadow-lg hover:scale-100 rounded relative">
      <div className="flex justify-between items-center pt-6">
        <img src={image} alt="Shoes" className="rounded-xl w-20 ml-8" />
        <button className="w-20 mr-12 h-8 rounded bg-red-200 ">
          {section}
        </button>
      </div>
      <div className="card-body grid justify-items-start  -mt-3">
        <h2 className="card-title font-bold  ">{name}</h2>
        <p className="text-sm text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default BookingLists;
