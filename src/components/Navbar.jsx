import { IoLogIn } from "react-icons/io5";
import { FaHome, FaCartArrowDown, FaBars, FaTimes } from "react-icons/fa";
import "../App.css";
import { MainLogo } from "../assets/images";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const [navbarTransparent, setNavbarTransparent] = useState(true);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const carts = useSelector((store) => store.cart.items);
  useEffect(() => {
    let total = 0;
    carts.forEach((item) => (total += item.quantity));
    setTotalQuantity(total);
  }, [carts]);

  const navLinks = [
    { name: "Home", href: "#", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Contact", href: "#footer", id: "contact" },
  ];

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
        <img src={MainLogo} alt="Main Logo of Your Brand" />
      </div>

      {/* Icons Section */}
      <div className="header-icons flex gap-3 text-xl order-1 md:order-2">
        <div className="home--icon opacity-60 hover:opacity-100 cursor-pointer hover:scale-110">
          <a href="/">
            <FaHome />
          </a>
        </div>
        <div className="login--icon opacity-60 hover:opacity-100 cursor-pointer hover:scale-110">
          <a href="/login">
            <IoLogIn />
          </a>
        </div>
        <div className="cart--icon relative opacity-60 hover:opacity-100 cursor-pointer hover:scale-110">
          <Link to={"/CartTab"}>
            <FaCartArrowDown />
            <span className="absolute top-2/3 right-1/2 bg-red-500 text-white text-sm w-5 h-5 rounded-full justify-center items-center text-center">
              {totalQuantity}
            </span>
          </Link>
        </div>
      </div>

      {/* Hamburger Icon for Mobile */}
      <div
        className="md:hidden flex items-center text-2xl cursor-pointer order-2 md:order-1"
        onClick={toggleMenu}
        aria-expanded={isOpen}
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
        {navLinks.map((link) => (
          <div
            key={link.id}
            className={`nav--${link.id} hover:scale-110 hover:text-white ${
              activeLink === link.id
                ? "text-white border-b-2"
                : "text-[#555252] border-none"
            } transition-all duration-300 ease-in-out`}
            onClick={() => handleClick(link.id)}
          >
            <a
              href={link.href}
              className="text-white hover:text-gray-200 block w-full py-2 px-4"
            >
              {link.name}
            </a>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
