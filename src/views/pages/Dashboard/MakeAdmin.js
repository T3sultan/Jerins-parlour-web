import React from "react";
import { useQuery } from "react-query";
import Loading from "../../components/common/Loading";
import UserTable from "./UserTable";

const MakeAdmin = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch(`http://localhost:5000/user`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then(res => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className=" min-h-full  bookingContainer  ">
      {/* <h2>make admin : {users.length}</h2> */}
      <div>
        <table className="table w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Email</th>
              <th>Title </th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <UserTable
                index={index}
                key={user._id}
                user={user}
                refetch={refetch}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MakeAdmin;
