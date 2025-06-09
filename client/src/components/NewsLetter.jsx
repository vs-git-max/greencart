import React from "react";

const NewsLetter = () => {
  return (
    <div className="text-center space-y-2 flex items-center justify-center flex-col pb-14 mt-8">
      <h1 className="md:text-4xl text-2xl font-semibold">Never Miss A Deal</h1>
      <p className="md:text-lg text-gray-500/70 pb-8">
        Subscribe to get the latest offers, new arrivals and exclusive
        discounts.
      </p>
      <form className="flex items-center justify-between max-w-2xl w-full md:h-13 h-12">
        <input
          type="text"
          className="border border-gray-300 rounded-md h-full border-r-0 outline-none w-full rounded-r-none px-3 text-gray"
          placeholder="Enter your email."
          required
        />
        <button
          className="md:px-12 px-8 h-full text-white bg-primary hover:bg-primary-dull transition-all cursor-pointer"
          type="submit"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsLetter;
