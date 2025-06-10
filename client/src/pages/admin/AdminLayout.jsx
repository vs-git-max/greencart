import React from "react";
import { useAppContext } from "../../context/AppContext";
import data from "../../assets/assets";
import { Link, NavLink, Outlet } from "react-router-dom";

const AdminLayout = () => {
  const { setIsAdmin } = useAppContext();

  const sidebarLinks = [
    { name: "Add Product", path: "/admin", icon: data.assets.add_icon },
    {
      name: "Products List",
      path: "/admin/product-list",
      icon: data.assets.product_list_icon,
    },
    { name: "Orders", path: "/admin/orders", icon: data.assets.order_icon },
  ];

  const logout = async () => {
    setIsAdmin(false);
  };
  return (
    <>
      <div className="flex items-center justify-between px-4 md:px-8 border-b border-gray-300 py-3 bg-white ">
        <Link to="/">
          <img src={data.assets.logo} alt="" />
        </Link>
        <div className="flex items-center gap-5 text-gray-500">
          <p>Hi! Admin</p>
          <button
            className="border rounded-full text-sm px-4 py-1"
            onClick={logout}
          >
            Logout
          </button>
        </div>
      </div>
      <div className="flex">
        <div className="md:w-64 w-16 border-r h-[550px] text-base border-gray-300 pt-4 flex flex-col transition-all duration-300">
          {sidebarLinks.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              end={item.path === "/admin"}
              className={({ isActive }) => `flex items-center py-3 px-4 gap-3 
                                ${
                                  isActive
                                    ? "border-r-4 md:border-r-[6px] bg-primary/10 border-primary text-primary"
                                    : "hover:bg-gray-100/90"
                                }`}
            >
              <img src={item.icon} alt="icon" />
              <p className="md:block hidden text-center">{item.name}</p>
            </NavLink>
          ))}
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default AdminLayout;
