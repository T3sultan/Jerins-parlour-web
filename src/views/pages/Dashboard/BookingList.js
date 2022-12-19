import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import "../Dashboard/Dashboard.css";

const BookingList = () => {
  const [user] = useAuthState(auth);
  const [booking, setBooking] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      fetch(
        `https://backend-theta-smoky.vercel.app/booking?patient=${user.email}`,
        {
          method: "GET",
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      )
        .then(res => {
          console.log("res", res);
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem("accessToken");
            navigate("/");
          }
          return res.json();
        })
        .then(data => {
          setBooking(data);
        });
    }
  }, [user]);

  return (
    <div className="bookingContainer min-h-full p-10">
      <h3>{booking.length}</h3>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3">
        {booking.map(book => (
          <div
            key={book._id}
            className="card cursor-pointer bg-white border-gray-200 transition transform duration-500 hover:shadow-lg hover:scale-100 rounded relative"
          >
            <div className="flex justify-between items-center pt-6">
              <img
                src={book.image}
                alt="Shoes"
                className="rounded-xl w-20 ml-8"
              />
              {/* <button className="w-20 mr-12 h-8 rounded bg-red-200 ">
                {book.section}
              </button> */}
              {book.price && !book.paid && (
                <Link to={`/dashboard/payment/${book._id}`}>
                  <button className="w-20 mr-8 h-8 rounded bg-red-200">
                    Pending
                  </button>{" "}
                </Link>
              )}
              {book.price && book.paid && (
                <div>
                  <p>
                    {" "}
                    <span className="btn btn-xs btn-cyan">Done</span>
                  </p>
                  <p>
                    Transaction id:{" "}
                    <span className="btn btn-xs btn-cyan">
                      {book.transactionId}
                    </span>{" "}
                  </p>
                </div>
              )}
            </div>
            <div className="card-body grid justify-items-start  -mt-3">
              <h2 className="card-title font-bold  ">{book.name}</h2>
              <p className="text-sm text-gray-400">{book.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingList;
