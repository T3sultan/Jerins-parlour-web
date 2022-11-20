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
      patient: user.email,
      patientName: user.displayName,
      phone: event.target.phone.value,
    };
    fetch("http://localhost:5000/booking", {
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
          <h3 className=" font-bold text-lg text-secondary grid  justify-center">
            {name}
          </h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-3 mt-3 justify-items-center"
          >
            <input
              disabled
              type="text"
              //   value={format(date, "PP")}
              placeholder="Type here"
              className="input input-bordered input-md w-full max-w-xs"
            />
            <select
              name="slot"
              className="select select-bordered w-full max-w-xs"
            >
              {/* {slots.map((slot, index) => (
                <option key={index} value={slot}>
                  {slot}
                </option>
              ))} */}
            </select>
            <input
              type="text"
              name="name"
              disabled
              value={user?.displayName || ""}
              placeholder="Your Name"
              className="input input-bordered input-md w-full max-w-xs"
            />
            <input
              type="email"
              name="email"
              disabled
              value={user?.email || ""}
              placeholder="Email Address"
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
