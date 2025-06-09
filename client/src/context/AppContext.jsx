import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import data from "../assets/assets";
import toast from "react-hot-toast";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const currency = import.meta.VITE_CURRENCY;

  const navigate = useNavigate();
  const [user, setUser] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [userLogin, setUserLogin] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  //fetch all products
  const fetchProducts = async () => {
    setProducts(data.dummyProducts);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  //add products to cart
  const addToCart = (itemId) => {
    let cartData = structuredClone(cartItems);

    if (cartData[itemId]) {
      cartData[itemId] += 1;
      toast.success("Cart quantity added.");
    } else {
      cartData[itemId] = 1;
      toast.success("Added to cart");
    }
    setCartItems(cartData);
  };

  const removeFromCart = (itemId) => {
    let cartData = structuredClone(cartItems);

    if (cartData[itemId]) {
      cartData[itemId] -= 1;
      if (cartData[itemId] === 0) {
        delete cartData[itemId];
        toast.success("Item deleted from cart");
      }
    }

    toast.success("Item quantity removed from cart");
    setCartItems(cartData);
  };

  const getCartCount = () => {
    let totalCount = 0;
    for (const item in cartItems) {
      totalCount += cartItems[item];
    }
    return totalCount;
  };

  const getCartAmount = () => {
    let totalAmount = 0;
    for (const items in cartItems) {
      let itemInfo = products.find((product) => product._id === items);
      if (cartItems[items] > 0) {
        totalAmount += itemInfo.offerPrice * cartItems[items];
      }
    }
    return Math.floor(totalAmount * 100) / 100;
  };

  const value = {
    addToCart,
    currency,
    products,
    navigate,
    user,
    setUser,
    isAdmin,
    setIsAdmin,
    userLogin,
    setUserLogin,
    removeFromCart,
    cartItems,
    searchQuery,
    setSearchQuery,
    getCartAmount,
    getCartCount,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};
