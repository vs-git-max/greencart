import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import data from "../assets/assets";
import { useAppContext } from "../context/AppContext";
import toast from "react-hot-toast";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const {
    axios,
    user,
    setUser,
    setUserLogin,
    navigate,
    getCartCount,
    setSearchQuery,
    searchQuery,
  } = useAppContext();
  console.log(user);

  const logout = async () => {
    try {
      const { data } = await axios.get("api/v1/auth/logout");
      if (data?.success) {
        toast.success(data?.message);
        setUser(null);
        navigate("/");
        console.log(data);
      } else {
        toast.error(data?.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (searchQuery.length > 0) {
      navigate("/products");
    }
  }, [searchQuery]);

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">
      <NavLink to="/">
        <img className="h-9" src={data.assets.logo} alt="dummyLogoColored" />
      </NavLink>

      {/* Desktop Menu */}
      <div className="hidden sm:flex items-center gap-8">
        <Link to={"/"}>Home</Link>
        <Link to={"/products"}>All Product</Link>
        <Link to={"/contact"}>Contacts</Link>

        <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
          <input
            className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"
            type="text"
            placeholder="Search products"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <img src={data.assets.search_icon} alt="search" className="size-4" />
        </div>

        <div className="relative cursor-pointer">
          <img
            onClick={() => navigate("/cart")}
            src={data.assets.nav_cart_icon}
            alt="cart"
            className="size-4"
          />
          <button className="absolute -top-2 -right-3 text-xs text-white bg-primary w-[18px] h-[18px] rounded-full">
            {getCartCount()}
          </button>
        </div>

        <button
          className="cursor-pointer px-8 py-2 bg-primary hover:bg-primary-dull transition text-white rounded-full"
          onClick={() => {
            if (!user) {
              setOpen(false);
              setUserLogin(true);
            } else {
              logout();
            }
          }}
        >
          {!user ? "Login" : "Logout"}
        </button>
      </div>

      <div className="flex items-center  gap-6 sm:hidden">
        {" "}
        <div className="relative cursor-pointer">
          <img src={data.assets.nav_cart_icon} alt="cart" className="size-4" />
          <button className="absolute -top-2 -right-3 text-xs text-white bg-primary w-[18px] h-[18px] rounded-full">
            {getCartCount()}
          </button>
        </div>
        <button
          onClick={() => (open ? setOpen(false) : setOpen(true))}
          aria-label="Menu"
          className="sm:hidden"
        >
          <img
            src={data.assets.menu_icon}
            onClick={() => setOpen(!open)}
            alt="menu"
            className="cursor-pointer"
          />
        </button>
        {/* Menu Icon SVG */}
      </div>
      {/* Mobile Menu */}
      <div
        className={`${
          open ? "flex" : "hidden"
        } absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-5 px-5 text-sm md:hidden`}
      >
        <Link onClick={() => setOpen(false)} to={"/"} className="block">
          Home
        </Link>
        <Link onClick={() => setOpen(false)} to={"/products"} className="block">
          All Product
        </Link>
        {user && (
          <Link
            onClick={() => setOpen(false)}
            to={"/contact"}
            className="block"
          >
            My Order
          </Link>
        )}

        <Link onClick={() => setOpen(false)} to={"/contact"} className="block">
          Contacts
        </Link>
        <button
          className="cursor-pointer px-6 py-2 mt-2 bg-primary hover:bg-primary-dull transition text-white rounded-full text-sm"
          onClick={() => {
            setOpen(false);
            user ? setUserLogin(true) : logout();
          }}
        >
          {user ? "Login" : "Logout"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
