import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useService from "../../../hooks/useService";
import Button from "../../components/common/Button";
import Service from "./Service";

const Services = ({ date, setDate }) => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/parlour")
      .then(res => res.json())
      .then(data => setServices(data.slice(0, 3)));
  }, []);

  return (
    <div className="my-12 px-12">
      <h1 className="text-gray-800 font-bold text-3xl text-center ">
        Our Awesome <span className="text-red-500">Services</span>{" "}
      </h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3">
        {services.map(service => (
          <Service date={date} key={service._id} service={service}></Service>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <Link to="/portfolio">
          <Button title={"Explore more"} />
        </Link>
      </div>
    </div>
  );
};

export default Services;
