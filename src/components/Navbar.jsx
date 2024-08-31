import { IoLogIn } from "react-icons/io5";
import { FaHome, FaCartArrowDown, FaBars, FaTimes } from "react-icons/fa"; 
import '../App.css'
import { MainLogo } from "../assets/images";
import { useState } from "react";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [isOpen, setIsOpen] = useState(false); // State to manage the mobile menu toggle

  const handleClick = (link) => {
    setActiveLink(link);
    setIsOpen(false); // Close the menu after clicking a link
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the menu open/close
  };

  return (
   <nav
  id="navbar"
  className="flex justify-between items-center px-8 w-full h-[5rem] bg-black text-white"
>
  <div className="header--logo w-20">
    <img src={MainLogo} alt="main-logo" />
  </div>

  {/* Icons Section */}
  <div className="header-icons flex gap-3 text-xl order-1 md:order-2">
    <div className="home--icon opacity-45 hover:opacity-100 cursor-pointer hover:scale-105">
      <a href="/">
        <FaHome />
      </a>
    </div>
    <div className="login--icon opacity-45 hover:opacity-100 cursor-pointer hover:scale-105">
      <a href="/Login">
        <IoLogIn />
      </a>
    </div>
    <div className="cart--icon opacity-45 hover:opacity-100 cursor-pointer hover:scale-105">
      <a href="./pages/Cart">
        <FaCartArrowDown />
      </a>
    </div>
  </div>

  {/* Hamburger Icon for Mobile */}
  <div
    className="md:hidden flex items-center text-2xl cursor-pointer order-2 md:order-1"
    onClick={toggleMenu}
  >
    {isOpen ? <FaTimes /> : <FaBars />}
  </div>

  {/* Navigation Links */}
  <div
    className={`nav--pages flex flex-col md:flex-row text-[15px] font-[500] gap-6 md:gap-10 text-[#555252] fixed md:static top-16 right-0 pl-4 pr-10 py-5 max-w-md md:w-auto bg-black md:bg-transparent transition-all duration-300 ease-in-out ${
      isOpen ? "block" : "hidden md:flex"
    }`}
  >
    <div
      className={`nav--home hover:scale-110 hover:text-white ${
        activeLink === "home" ? "text-white" : "text-[#555252]"
      }`}
      onClick={() => {
        handleClick("home");
        setIsOpen(false); // Close the menu after clicking a link
      }}
    >
      <a href="#" className="text-white hover:text-gray-200 block w-full py-2 px-4">
        Home
      </a>
    </div>

    <div
      className={`nav--about hover:scale-110 hover:text-white ${
        activeLink === "about" ? "text-white" : "text-[#555252]"
      }`}
      onClick={() => {
        handleClick("about");
        setIsOpen(false); // Close the menu after clicking a link
      }}
    >
      <a href="#about" className="text-white hover:text-gray-200 block w-full py-2 px-4">
        About Us
      </a>
    </div>

    <div
      className={`nav--cart hover:scale-110 hover:text-white ${
        activeLink === "cart" ? "text-white" : "text-[#555252]"
      }`}
      onClick={() => {
        handleClick("cart");
        setIsOpen(false); // Close the menu after clicking a link
      }}
    >
      <a href="./pages/Cart" className="text-white hover:text-gray-200 block w-full py-2 px-4">
        Cart
      </a>
    </div>

    <div
      className={`nav--contact hover:scale-110 hover:text-white ${
        activeLink === "contact" ? "text-white" : "text-[#555252]"
      }`}
      onClick={() => {
        handleClick("contact");
        setIsOpen(false); // Close the menu after clicking a link
      }}
    >
      <a href="#footer" className="text-white hover:text-gray-200 block w-full py-2 px-4">
        Contact Us
      </a>
    </div>
  </div>
</nav>
  );
};

export default Navbar;
