import { MainLogo } from "../assets/images";
import { Button } from "./common";

const Footer = () => {
  return (
    <footer className="footer bg-black pt-8">
      <div className="container mx-auto p-2">
        <div className="flex flex-wrap justify-between mb-8">
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
            <a href="#">
              <img src={MainLogo} alt={"altLogo"} className="w-20 h-20 mb-4" />
            </a>
            <p className="text-white text-[12px]">
              © 2024 <a href="">_bolajeee.</a> <br />
              All Rights <br />
              Reserved.
            </p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
            <h5 className="uppercase text-white mb-4">About Us</h5>
            <ul className="list-none mb-0 text-[14px]">
              <li className="mb-2">
                <a href="#" className="text-white hover:text-gray-600">
                  About us
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white hover:text-gray-600">
                  Store location
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-600">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
            <h5 className="uppercase text-white mb-4">Follow Us</h5>
            <ul className="list-none mb-0 text-[14px]">
              <li className="mb-2">
                <a href="#" className="text-white hover:text-gray-600">
                  Facebook
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white hover:text-gray-600">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-600">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
            <h5 className="uppercase text-white mb-4">Subscribe</h5>
            <p className="text-white mb-4 text-[12px]">
              Get E-mail updates about our latest shop and special offers.
            </p>
            <input
              type="text"
              placeholder="Enter your email here..."
              className="outline-none border-b-2 border-white bg-transparent text-white py-2 px-4 mb-4 w-full  text-[12px] placeholder-white text-left"
            />
            <Button
              bgColor="transparent"
              hoverBgColor="hover:bg-white"
              hoverTextColor="hover:text-black"
              textColor="text-white"
              className="uppercase w-full border-b-2 border-white hover:border-transparent transition duration-300 text-left"
            >
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
