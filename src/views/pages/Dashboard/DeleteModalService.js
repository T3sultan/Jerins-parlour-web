import React from "react";
import { toast } from "react-toastify";
import { Icon } from "@iconify/react";

const DeleteModalService = ({ refetch, serviceDelete, setServiceDelete }) => {
  const { name, email } = serviceDelete;

  const handleDelete = () => {
    fetch(`http://localhost:5000/parlourManage/${email}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then(res => res.json())
      .then(data => {
        if (data.deletedCount) {
          toast.success(`Service :${name} is deleted`);
          setServiceDelete(null);
          refetch();
        }
      });
  };

  return (
    <div>
      <input
        type="checkbox"
        id="delete-confirm-modal"
        className="modal-toggle"
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-red-400">
            Are you sure you want to delete <br />{" "}
            <span className="text-green-500">${name}</span>
          </h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div className="modal-action">
            <button
              onClick={() => handleDelete()}
              className="btn btn-xs btn-error"
            >
              delete
            </button>

            <label htmlFor="delete-confirm-modal" className="btn btn-xs">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModalService;
