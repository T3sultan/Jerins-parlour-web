import React from "react";
import { toast } from "react-toastify";
import { Icon } from "@iconify/react";

const UserTable = ({ user, refetch, index }) => {
  const { email, role } = user;

  const makeAdminUser = () => {
    const url = `https://backend-theta-smoky.vercel.app/user/admin/${email}`;
    fetch(url, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then(res => {
        if (res.status === 403) {
          toast.error("Failed to make an admin");
        }
        return res.json();
      })
      .then(data => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success(`Successfully make an admin`);
        }
      });
  };

  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div className=" flex items-center gap-1">
          {role === "admin" && (
            <div className="rating">
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star bg-green-500"
              />
            </div>
          )}
          <p className="text-green-800"> {email}</p>
        </div>
      </td>
      <td>
        {role !== "admin" && (
          <Icon
            style={{ cursor: "pointer" }}
            onClick={makeAdminUser}
            width="30px"
            icon="subway:admin-1"
            color="red"
          />
        )}
        {role == "admin" && (
          <Icon
            style={{ cursor: "pointer" }}
            width="30px"
            icon="clarity:administrator-solid"
            color="green"
          />
        )}
      </td>
      <td>
        <Icon
          style={{ cursor: "pointer" }}
          width="30px"
          icon="ic:round-delete"
          color="orange"
        />
      </td>
    </tr>
  );
};

export default UserTable;
