import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Button from "../../components/common/Button";

const Review = () => {
  const [user] = useAuthState(auth);

  const handleSubmit = data => {
    fetch(`https://backend-theta-smoky.vercel.app/addReview`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then(data => console.log(data));
  };

  return (
    <div className="bookingContainer min-h-full p-8 ">
      <form onSubmit={handleSubmit}>
        <div>
          <input
            value={user?.name}
            type="text"
            placeholder="Your Name"
            className="input input-md w-1/2"
          />
        </div>
        <div>
          <input
            value={user?.companyName}
            type="text"
            placeholder="Company's name Description"
            className="input input-md w-1/2 mt-4"
          />
        </div>
        <div>
          <input
            value={user?.description}
            type="text"
            placeholder="Description"
            className="input  input-lg w-1/2 mt-4"
          />
        </div>
        <div className="mt-4 ">
          <Button title={"Submit"} />
        </div>
      </form>
    </div>
  );
};

export default Review;
