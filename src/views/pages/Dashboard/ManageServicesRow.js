import React from "react";
import { Icon } from "@iconify/react";
import { toast } from "react-toastify";

const ManageServicesRow = ({ service, index, refetch, setServiceDelete }) => {
  const { name, image, price, description, email } = service;

  return (
    <tr>
      <th>{index + 1}</th>
      <td className="text-green-800 font-bold">{name}</td>
      <td>
        <div className="avatar">
          <div className="w-12 rounded-lg ">
            <img src={image} alt={name} />
          </div>
        </div>
      </td>
      <td className=" font-bold ">${price}</td>
      <td className="text-gray-400">{description.slice(0, 50)}</td>

      <td>
        <label
          onClick={() => setServiceDelete(service)}
          htmlFor="delete-confirm-modal"
        >
          <Icon
            style={{ cursor: "pointer" }}
            width="30px"
            icon="ic:round-delete"
            color="yellow"
          />
        </label>
      </td>
    </tr>
  );
};

export default ManageServicesRow;
