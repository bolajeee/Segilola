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
import { useDisclosure } from "@chakra-ui/react";

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
  const { isOpen, onOpen } = useDisclosure();

  return (
    <div className="header">
      <Hero />
      <About />
      <Collection />
      <Banner />
      <Subscribe />
      <Footer />
      <CartTab isOpen={isOpen} onOpen={onOpen} />
    </div>
  );
};

export default Home;
