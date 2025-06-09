import React from "react";
import ProductCard from "./ProductCard";
import { useAppContext } from "../context/AppContext";

const BestSeller = () => {
  const { products } = useAppContext();

  console.log(products);
  return (
    <div className="mt-16">
      <h2 className="text-2xl font-medium md:text-3xl mb-8">Best Sellers</h2>
      <div className="grid sm:grid-cols-3 grid-cols-2 gap-3 lg:grid-cols-5  md:gap-6 md:grid-cols-4  mt-6">
        {products
          .filter((product) => product.inStock)
          .slice(0, 5)
          .map((item, index) => (
            <ProductCard product={item} key={index} />
          ))}
      </div>
    </div>
  );
};

export default BestSeller;
