/* eslint-disable react/prop-types */
import React from "react";
import {
  
  Hero,
  About,
  Collection,
  Subscribe,
  Footer,
  Banner,
  CartTab,
} from "../components";
import AOS from "aos";
import "aos/dist/aos.css";


const Home = ({isOpen , onClose}) => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);


  return (
    <div className="header">
      <Hero />
      <About />
      <Collection />
      <Banner />
      <Subscribe />
      <Footer />
      <CartTab isOpen={isOpen} onClose={onClose} />
    </div>
  );
};

export default Home;
