import React from "react";
import { assets } from "../../assets/assets";
import {
  LayoutDashboardIcon,
  ListCollapseIcon,
  ListIcon,
  PlusSquareIcon,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const AdminSideBar = () => {
  const user = {
    firstName: "Admin",
    lastName: "User",
    imageUrl: assets.profile,
  };

  const adminNavLinks = [
    { name: "Dashboard", path: "/admin", icon: LayoutDashboardIcon },
    { name: "Add Shows", path: "/admin/add-shows", icon: PlusSquareIcon },
    { name: "List Shows", path: "/admin/list-shows", icon: ListIcon },
    {
      name: "List Bookings",
      path: "/admin/list-bookings",
      icon: ListCollapseIcon,
    },
  ];

  return (
    <div className="h-[calc(100vh-64px)] md:flex flex-col items-center pt-8 max-w-[13rem] md:max-w-[15rem] w-full border-r border-gray-300/20 text-sm">
      <img
        src={user.imageUrl}
        className="h-9 md:h-14 w-9 md:w-14 rounded-full mx-auto"
        alt="sidebar"
      />
      <p className="mt-2 text-base md:block hidden">
        {user.firstName} {user.lastName}
      </p>

      <div className="w-full">
        {adminNavLinks.map((link, index) => (
          <NavLink key={index} to={link.path} end>
            {({ isActive }) => (
              <div
                className={`relative flex items-center gap-2 w-full py-2.5 md:pl-6 ${
                  isActive ? "bg-primary/15 text-primary" : "text-gray-400"
                }`}
              >
                <link.icon className="w-5 h-5" />
                <p className="md:block hidden">{link.name}</p>

                {/* indicator on the right */}
                <span
                  className={`w-1.5 h-10 rounded-l absolute right-0 top-1/2 -translate-y-1/2 ${
                    isActive ? "bg-primary" : "bg-transparent"
                  }`}
                />
              </div>
            )}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default AdminSideBar;
