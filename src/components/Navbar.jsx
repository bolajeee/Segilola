import { IoLogIn } from "react-icons/io5";
import { FaHome, FaCartArrowDown, FaBars, FaTimes } from "react-icons/fa";
import "../App.css";
import { MainLogo } from "../assets/images";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const [navbarTransparent, setNavbarTransparent] = useState(true);

  const handleClick = (link) => {
    setActiveLink(link);
    setIsOpen(false); // Close the menu after clicking a link
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the menu open/close
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setNavbarTransparent(false);
    } else {
      setNavbarTransparent(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 w-full h-[5rem] z-50 flex justify-between items-center px-8 bg-black ${
        navbarTransparent ? "bg-opacity-90" : "bg-opacity-40"
      } text-white transition-all duration-300 ease-in-out`}
    >
      <div className="header--logo w-10">
        <img src={MainLogo} alt="main-logo" />
      </div>

      {/* Icons Section */}
      <div className="header-icons flex gap-3 text-xl order-1 md:order-2">
        <div className="home--icon opacity-60 hover:opacity-100 cursor-pointer hover:scale-110">
          <a href="/">
            <FaHome />
          </a>
        </div>
        <div className="login--icon opacity-60 hover:opacity-100 cursor-pointer hover:scale-110">
          <a href="./LoginPage">
            <IoLogIn />
          </a>
        </div>
        <div className="cart--icon opacity-60 hover:opacity-100 cursor-pointer hover:scale-110">
          <a href="./CartPage">
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
        className={`nav--pages flex flex-col md:flex-row text-[15px] font-[500] gap-6 md:gap-10 fixed md:static top-16 right-0 pl-4 pr-10 py-5 max-w-md md:w-auto bg-black ${
          navbarTransparent ? "bg-opacity-70" : "bg-opacity-95"
        } md:bg-transparent transition-all duration-300 ease-in-out ${
          isOpen ? "block" : "hidden md:flex"
        }`}
      >
        <div
          className={`nav--home hover:scale-110 hover:text-white ${
            activeLink === "home" ? "text-white" : "text-[#555252]"
          }`}
          onClick={() => handleClick("home")}
        >
          <a
            href="#"
            className="text-white hover:text-gray-200 block w-full py-2 px-4"
          >
            Home
          </a>
        </div>

        <div
          className={`nav--about hover:scale-110 hover:text-white ${
            activeLink === "about" ? "text-white" : "text-[#555252]"
          }`}
          onClick={() => handleClick("about")}
        >
          <a
            href="#about"
            className="text-white hover:text-gray-200 block w-full py-2 px-4"
          >
            About
          </a>
        </div>

        <div
          className={`nav--cart hover:scale-110 hover:text-white ${
            activeLink === "nav--cart" ? "text-white" : "text-[#555252]"
          }`}
          onClick={() => handleClick("cart")}
        >
          <a
            href="./CartPage"
            className="text-white hover:text-gray-200 block w-full py-2 px-4"
          >
            Cart
          </a>
        </div>

        <div
          className={`nav--contact hover:scale-110 hover:text-white ${
            activeLink === "contact" ? "text-white" : "text-[#555252]"
          }`}
          onClick={() => handleClick("contact")}
        >
          <a
            href="#footer"
            className="text-white hover:text-gray-200 block w-full py-2 px-4"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
