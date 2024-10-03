import { HeroImg } from "../assets/images";

import { Button } from "./common";

const Hero = () => {
  return (
    <div
      className="h-[100vh] flex flex-col items-center justify-center relative"
      id="hero"
    >
      <div className="hero--text flex flex-col items-center text-center z-10 p-6">
        <h2
          data-aos="zoom-out"
          data-aos-duration="400"
          data-aos-once="true"
          className="text-[22px]"
        >
          Vogue by
        </h2>
        <h1
          data-aos="zoom-out"
          data-aos-duration="500"
          data-aos-once="true"
          className="hero--title text-[45px] tracking-[8px]"
        >
          SÈGÍLÒLA
        </h1>
        <div
          data-aos="zoom-out"
          data-aos-duration="600"
          data-aos-delay="100"
          className="block text-[20px]"
        >
          <span className="">Modest & Conscious</span>
        </div>
      </div>

      <div className="hero--img w-full h-full absolute inset-0 z-0">
        <img
          className="object-cover w-full h-full"
          src={HeroImg}
          alt="hero-img"
        />
      </div>
      <div
        data-aos="zoom-out"
        data-aos-duration="500"
        data-aos-delay='300'
        
      >
        <Button
          bgColor="bg-white"
          hoverBgColor={"hover:bg-black"}
          hoverTextColor={"hover:text-white"}
          textColor={"text-black"}
          id="hero-btn"
          hoverColor="purple-800"
        >
          Shop Now
        </Button>
      </div>
    </div>
  );
};

export default Hero;
