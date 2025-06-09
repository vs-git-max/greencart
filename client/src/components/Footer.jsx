import React from "react";
import data, { footerLinks } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="px-6 md:px-16 lg:px-24 xl:px-32 mt-24 bg-primary/10">
      <div className="flex m-2 md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/300 text-gray-500">
        <div>
          <img src={data.assets.logo} alt="logo" className="w-34 md:w-32" />
          <p className="max-w-[410px] mt-6 font-medium">
            Purchase form us and know what it meant to be home far away from
            home with our healthy products.
          </p>
        </div>
        <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-5">
          {footerLinks.map((link, index) => (
            <div key={index}>
              <h3 className="font-semibold text-base text-gray-900 md:mb-5 mb-2">
                {link.title}
              </h3>
              <ul className="text-sm space-y-1">
                {link.links.map((item, i) => (
                  <li key={i}>
                    <a href={item.url} className="hover:underline transition">
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <p className="text-center py-4 text-sm md:text-base text-gray-500/80">
        Copyright {new Date().getFullYear()} @GreenCart. All right reserved
      </p>
    </footer>
  );
};

export default Footer;
