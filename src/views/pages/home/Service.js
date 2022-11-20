import React from "react";

const Service = ({ service, setTreatment }) => {
  const { name, image, price, description } = service;

  return (
    <div
      // onClick={() => setTreatment(service)}
      // htmlFor="booking-modal"
      className="card cursor-pointer bg-white border-gray-200 transition transform duration-500 hover:shadow-lg hover:scale-100 rounded relative"
    >
      <figure className="px-10 pt-10">
        <img src={image} alt="Shoes" className="rounded-xl w-20" />
      </figure>
      <div className="card-body items-center text-center -mt-3">
        <h2 className="card-title font-bold">{name}</h2>
        <p className="text-red-300 font-bold"> ${price}</p>
        <p className="text-sm text-gray-400">{description}</p>
      </div>
      <div className="card-actions justify-center">
        {/* <button className=""></button> */}
        <label
          onClick={() => setTreatment(service)}
          // disabled={slots.length === 0}
          htmlFor="booking-modal"
          className="btn btn-sm btn-secondary
             text-white uppercase  bg-gradient-to-r
              from-indigo-500 via-purple-500 to-pink-500"
        >
          Book Appointment
        </label>
      </div>
    </div>
  );
};

export default Service;
