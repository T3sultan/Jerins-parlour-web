import React from "react";
import { Icon } from "@iconify/react";

const Service = ({ service, setTreatment }) => {
  const { name, image, price, description } = service;

  return (
    <div className="card cursor-pointer bg-white border-gray-200 transition transform duration-500 hover:shadow-lg hover:scale-100 rounded relative">
      <figure className="px-10 pt-10">
        <img src={image} alt="Shoes" className="rounded-xl w-20" />
      </figure>
      <div className="card-body items-center text-center -mt-3">
        <h2 className="card-title font-bold">{name}</h2>
        <p className="text-red-300 font-bold"> ${price}</p>
        <p className="text-sm text-gray-400">{description}</p>
      </div>
      <div className="card-actions justify-center -mt-8 ">
        <label
          onClick={() => setTreatment(service)}
          htmlFor="booking-modal"
          className="btn-sm rounded cursor-pointer
             text-black  border-none "
        >
          <Icon
            width="22px"
            icon="material-symbols:shopping-cart-outline-rounded"
          />
        </label>
      </div>
    </div>
  );
};

export default Service;
