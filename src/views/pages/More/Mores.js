import React, { useEffect, useState } from "react";
import useService from "../../../hooks/useService";
import Service from "../home/Service";

const Mores = () => {
  const [services] = useService();

  return (
    <div className="my-2 px-12">
      <h1 className="text-gray-800 uppercase font-bold text-3xl text-center ">
        Our All <span className="text-red-500">Services</span>{" "}
      </h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-4">
        {services.map(service => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Mores;
