import React from "react";
import people1 from "../../../assets/Ellipse 90.png";
import people2 from "../../../assets/Ellipse 91.png";
import people3 from "../../../assets/Ellipse 92.png";
import People from "./People";

const Testimonials = () => {
  const peoples = [
    {
      _id: 1,
      name: "Nash Patrik",
      image: people1,
      position: "CEO,Comilla",
      description:
        "A parlour (or parlor) is a reception room or public space. In medieval Christian Europe, the outer parlour was the room where the monks or nuns conducted business with those outside the monastery and the inner parlour was used for necessary conversation between resident members.",
    },
    {
      _id: 2,
      name: "Hira",
      image: people2,
      position: "CEO,Dhaka",
      description:
        "A parlour (or parlor) is a reception room or public space. In medieval Christian Europe, the outer parlour was the room where the monks or nuns conducted business with those outside the monastery and the inner parlour was used for necessary conversation between resident members.",
    },
    {
      _id: 3,
      name: "Anwar",
      image: people3,
      position: "CEO,Khulna",
      description:
        "A parlour (or parlor) is a reception room or public space. In medieval Christian Europe, the outer parlour was the room where the monks or nuns conducted business with those outside the monastery and the inner parlour was used for necessary conversation between resident members.",
    },
  ];

  return (
    <section className="my-20 px-10">
      <h1 className="text-center font-bold py-10 text-3xl">Testimonials</h1>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {peoples.map(people => (
          <People key={people._id} people={people} />
        ))}
      </div>
      <div className="flex justify-center gap-1 py-6">
        <div className="badge badge-xs"></div>
        <div className="badge border-gray-400 bg-gray-400 badge-xs"></div>
        <div className="badge border-gray-400 bg-gray-400 badge-xs"></div>
      </div>
    </section>
  );
};

export default Testimonials;
