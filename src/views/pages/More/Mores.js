import React, { useState } from "react";
import { useQuery } from "react-query";
import useService from "../../../hooks/useService";
import Loading from "../../components/common/Loading";
import Service from "../home/Service";
import Modal from "./Modal";

const Mores = () => {
  const [treatment, setTreatment] = useState(null);
  // const [services] = useService();

  const {
    data: services,
    isLoading,
    refetch,
  } = useQuery(["parlour"], () =>
    fetch("http://localhost:5000/parlour").then(res => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="my-2 px-12">
      <h1 className="text-gray-800 uppercase font-bold text-3xl text-center ">
        Our All <span className="text-red-500">Services</span>{" "}
      </h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-4">
        {services.map(service => (
          <Service
            setTreatment={setTreatment}
            key={service._id}
            service={service}
          ></Service>
        ))}
      </div>
      {treatment && (
        <Modal
          refetch={refetch}
          setTreatment={setTreatment}
          treatment={treatment}
        />
      )}
    </div>
  );
};

export default Mores;
