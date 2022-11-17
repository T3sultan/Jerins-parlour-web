import React from "react";
import Button from "../../components/common/Button";

const Review = () => {
  return (
    <div className="bookingContainer min-h-full p-8 ">
      <div>
        <input
          type="text"
          placeholder="Your Name"
          className="input input-md w-1/2"
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Company's name Description"
          className="input input-md w-1/2 mt-4"
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Description"
          className="input  input-lg w-1/2 mt-4"
        />
      </div>
      <div className="mt-4 ">
        <Button title={"Submit"} />
      </div>
    </div>
  );
};

export default Review;
