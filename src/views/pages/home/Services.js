import React, { useEffect, useState } from "react";
import Service from "./Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("/services.json")
      .then(res => res.json())
      .then(data => setServices(data));
  }, []);
  return (
    <div className="my-12 px-12">
      <h1 className="text-gray-800 font-bold text-3xl text-center ">
        Our Awesome <span className="text-red-500">Services</span>{" "}
      </h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3">
        {services.map(service => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;