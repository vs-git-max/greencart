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
import Orders from "./pages/admin/Orders";
import AdminLogin from "./components/Admin/AdminLogin";
import AdminLayout from "./pages/admin/AdminLayout";
import AddProduct from "./pages/admin/AddProduct";
import ProductList from "./pages/admin/ProductList";

const App = () => {
  const isAdminPath = useLocation().pathname.includes("admin");
  const { userLogin, isAdmin } = useAppContext();

  return (
    <div className="text-default min-h-screen text-gray-700 bg-white">
      {!isAdminPath && <Navbar />}
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
          <Route
            path="/admin"
            element={isAdmin ? <AdminLayout /> : <AdminLogin />}
          >
            <Route index element={isAdmin ? <AddProduct /> : null} />
            <Route path="product-list" element={<ProductList />} />
            <Route path="orders" element={<Orders />} />
          </Route>
        </Routes>
        {!isAdminPath && <Footer />}
      </div>
    </div>
  );
};

export default App;
