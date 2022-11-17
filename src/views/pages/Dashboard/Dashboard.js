import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../../firebase.init";
import { Icon } from "@iconify/react";
import CustomLink from "../../../hooks/CustomLink";

const Dashboard = () => {
  const [user] = useAuthState(auth);

  return (
    <div className="drawer drawer-mobile">
      <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">
        {/* <!-- Page content here --> */}
        <div className="flex justify-between">
          <h2 className="text-xl font-bold  text-red-400 ">Dashboard</h2>
          <p className="mr-12 font-bold ">{user?.displayName} </p>
        </div>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <CustomLink className="flex items-center gap-1" to="/dashboard">
              <Icon
                width="22px"
                icon="material-symbols:shopping-cart-outline-rounded"
              />

              <h3 className="font-bold ">Book</h3>
            </CustomLink>
          </li>
          <li>
            <CustomLink
              className="flex items-center gap-1"
              to="/dashboard/bookList"
            >
              <Icon width="22px" icon="tabler:brand-booking" />

              <h3 className="font-bold ">Book List</h3>
            </CustomLink>
          </li>
          <li>
            <CustomLink
              className="flex items-center gap-1"
              to="/dashboard/review"
            >
              <Icon width="22px" icon="icon-park:mail-review" />

              <h3 className="font-bold ">Review</h3>
            </CustomLink>
          </li>
          <li>
            <CustomLink
              className="flex items-center gap-1"
              to="/dashboard/order"
            >
              <Icon width="22px" icon="fluent-mdl2:activate-orders" />

              <h3 className="font-bold ">Order List</h3>
            </CustomLink>
          </li>
          <li>
            <CustomLink
              className="flex items-center gap-1"
              to="/dashboard/addService"
            >
              <Icon width="22px" icon="material-symbols:add" />

              <h3 className="font-bold ">Add Service</h3>
            </CustomLink>
          </li>
          <li>
            <CustomLink
              className="flex items-center gap-1"
              to="/dashboard/makeAdmin"
            >
              <Icon width="22px" icon="clarity:administrator-line" />

              <h3 className="font-bold ">Make Admin</h3>
            </CustomLink>
          </li>
          <li>
            <CustomLink
              className="flex items-center gap-1"
              to="/dashboard/manageService"
            >
              <Icon width="22px" icon="arcticons:activity-manager" />

              <h3 className="font-bold ">Manage Services</h3>
            </CustomLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
