import React from "react";
import logoImg from "../assets/book-logo.png";
import { FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="flex flex-col items-center px-10 py-7 bg-gray-300">
        <div className="flex flex-col lg:flex-row lg:justify-around w-full pb-10 border-b-2 border-gray-400">
          <div className="flex flex-col gap-10 mb-5">
            <div className="flex gap-2 items-center">
              <img className="w-10 h-10" src={logoImg} alt="" />
              <h4 className="text-xl font-medium">The Book Heaven</h4>
            </div>

            <div className="">
              <h3 className="text-xl font-bold">Social Links</h3>
              <div className="flex gap-2 mt-2">
                <FaSquareXTwitter style={{ fontSize: "30px" }} />
                <FaLinkedin style={{ fontSize: "30px" }} />
                <FaFacebookSquare style={{ fontSize: "30px" }} />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-40">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Services</h3>
              <ul className="text-md font-normal text-gray-600">
                <li>Help Center</li>
                <li>Returns</li>
                <li>Product Recalls</li>
                <li>Contact Us</li>
                <li>Store Pickup</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Explore</h3>
              <ul className="text-md font-normal text-gray-600">
                <li>About us</li>
                <li>Sitemap</li>
                <li>Bookmarks</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Categories</h3>
              <ul className="text-md font-normal text-gray-600">
                <li>Action</li>
                <li>Comedy</li>
                <li>Drama</li>
                <li>Horror</li>
                <li>Kids</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="pt-8">
          <p>Copyright © 2025 - All right reserved</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
