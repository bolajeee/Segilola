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

const Home = () => {
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
