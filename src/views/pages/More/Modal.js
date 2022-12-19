import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "./../../../firebase.init";

const Modal = ({ treatment, setTreatment, refetch }) => {
  const { _id, name, price, description, image } = treatment;
  const [user, loading, error] = useAuthState(auth);

  const handleBooking = event => {
    event.preventDefault();
    const booking = {
      treatmentId: _id,
      treatment: name,
      price,
      image,
      description,
      patient: user.email,
      patientName: user.displayName,
      phone: event.target.phone.value,
    };
    fetch("https://backend-theta-smoky.vercel.app/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then(res => res.json())
      .then(data => {
        console.log("data", data);
        if (data.success) {
          toast(`Treatment Booked,${name} `);
        } else {
          toast.error(`You Already Booked ${name}`);
        }
        refetch();
        setTreatment(null);
      });
  };

  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div className="flex text-center justify-around">
            <img className="w-1/12" src={image} alt="" />
            <h3 className=" font-bold text-lg text-secondary grid  justify-center">
              {name}
            </h3>
          </div>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-2 mt-1 justify-items-center"
          >
            <input
              disabled
              type="text"
              //   value={format(date, "PP")}
              value={user?.displayName || ""}
              placeholder="Type here"
              className="input input-bordered input-md w-full max-w-xs"
            />
            <input
              disabled
              type="text"
              value={name}
              placeholder="Type here"
              className="input input-bordered input-md w-full max-w-xs"
            />
            <input
              disabled
              type="text"
              value={user?.email || ""}
              placeholder="Type here"
              className="input input-bordered input-md w-full max-w-xs"
            />

            <input
              type="text"
              name="description"
              value={description.slice(0, 50)}
              placeholder="Your Name"
              className="input input-bordered input-md w-full max-w-xs"
            />
            <input
              type="text"
              name="price"
              value={price}
              disabled
              placeholder="Price"
              className="input input-bordered input-md w-full max-w-xs"
            />
            <input
              type="text"
              name="image"
              value={image}
              placeholder="Image"
              className="input input-bordered input-md w-full max-w-xs"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="input input-bordered input-md w-full max-w-xs"
            />
            <input
              type="submit"
              value="Submit"
              className="btn btn-secondary  w-full max-w-xs"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
