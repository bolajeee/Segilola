import { MainLogo } from "../assets/images";
import { Button } from "./common";

const Footer = () => {
  return (
    <footer
      data-aos="zoom-in"
      data-aos-duration="500"
      data-aos-delay="400"
      className="footer bg-black pt-8 pb-4"
      id="footer"
    >
      <div className="container mx-auto p-4">
        <div className="flex flex-wrap justify-between mb-8">
          {/* Logo and Copyright Section */}
          <div
            data-aos="zoom-in"
            data-aos-duration="500"
            data-aos-delay="600"
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4"
          >
            <a href="#">
              <img src={MainLogo} alt={"altLogo"} className="w-20 h-20 mb-4" />
            </a>
            <p className="text-white text-sm">
              © 2024{" "}
              <a href="" className="hover:text-gray-400">
                _bolajeee.
              </a>{" "}
              <br />
              All Rights Reserved.
            </p>
          </div>

          {/* About Us Section */}
          <div
            data-aos="zoom-in"
            data-aos-duration="500"
            data-aos-delay="600"
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4"
          >
            <h5 className="uppercase text-white mb-4">About Us</h5>
            <ul className="list-none mb-0 text-[14px] space-y-2">
              <li>
                <a
                  href="#"
                  className="text-white hover:text-gray-400 transition duration-300"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-gray-400 transition duration-300"
                >
                  Store location
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-gray-400 transition duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Follow Us Section */}
          <div
            data-aos="zoom-in"
            data-aos-duration="500"
            data-aos-delay="600"
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4"
          >
            <h5 className="uppercase text-white mb-4">Follow Us</h5>
            <ul className="list-none mb-0 text-[14px] space-y-2">
              <li>
                <a
                  href="#"
                  className="text-white hover:text-gray-400 transition duration-300"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-gray-400 transition duration-300"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-gray-400 transition duration-300"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          {/* Subscribe Section */}
          <div
            data-aos="zoom-in"
            data-aos-duration="500"
            data-aos-delay="600"
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4"
          >
            <h5 className="uppercase text-white mb-4">Subscribe</h5>
            <p className="text-white mb-4 text-sm">
              Get E-mail updates about our latest shop and special offers.
            </p>
            <input
              type="text"
              placeholder="Enter your email here..."
              className="outline-none border-b-2 border-white bg-transparent text-white py-2 px-4 mb-4 w-full text-sm placeholder-white"
            />
            <Button
              bgColor="transparent"
              hoverBgColor="hover:bg-white"
              hoverTextColor="hover:text-black"
              textColor="text-white"
              className="uppercase w-full border-2 border-white hover:border-transparent transition duration-300 py-2 px-4"
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
