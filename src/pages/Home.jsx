import React from "react";
import {
  Navbar,
  Hero,
  About,
  Collection,
  Subscribe,
  Footer,
  Banner,
} from "../components";
import AOS from "aos";
import "aos/dist/aos.css";
import { useSelector } from "react-redux";

const Home = () => {
  const carts = useSelector((store) => store.cart.items);
  console.log(carts);
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
      <Navbar />
      <Hero />
      <About />
      <Collection />
      <Banner />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Home;
