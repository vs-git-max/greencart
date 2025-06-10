import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import { useAppContext } from "./context/AppContext";
import Login from "./components/Login";
import AllProducts from "./pages/AllProducts";
import ProductCategory from "./pages/ProductCategory";
import ProductDetails from "./pages/ProductDetails";
import CartPage from "./pages/CartPage";
import AddAddress from "./pages/AddAddress";
import Orders from "./pages/Orders";

const App = () => {
  const isAdmin = useLocation().pathname.includes("admin");
  const { userLogin } = useAppContext();

  return (
    <>
      {!isAdmin && <Navbar />}
      {userLogin && <Login />}

      <Toaster />
      <div className={`${isAdmin ? "" : "px-6 md:px-16 lg:px-24 xl:px-32"}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/products/:category" element={<ProductCategory />} />
          <Route path="/products/:category/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/add-address" element={<AddAddress />} />
          <Route path="/my-orders" element={<Orders />} />
        </Routes>
        {!isAdmin && <Footer />}
      </div>
    </>
  );
};

export default App;
