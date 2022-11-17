import React, { useEffect, useState } from "react";
import "../Dashboard/Dashboard.css";
import BookingLists from "./BookingLists";

const BookingList = () => {
  const [booking, setBooking] = useState([]);
  useEffect(() => {
    fetch("/services.json")
      .then(res => res.json())
      .then(data => setBooking(data.slice(0, 2)));
  }, []);
  return (
    <div className="bookingContainer p-10">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3">
        {booking.map(book => (
          <BookingLists key={book._id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default BookingList;
