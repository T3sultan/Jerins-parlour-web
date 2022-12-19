import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../../components/common/Loading";
import Servicess from "../Dashboard/Servicess";
import Modal from "./Modal";

const Mores = () => {
  const [treatment, setTreatment] = useState(null);

  const {
    data: services,
    isLoading,
    refetch,
  } = useQuery(["parlour"], () =>
    fetch("https://backend-theta-smoky.vercel.app/parlour").then(res =>
      res.json()
    )
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
          <Servicess
            setTreatment={setTreatment}
            key={service._id}
            service={service}
          ></Servicess>
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
