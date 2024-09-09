import { Button } from "./common";

const Subscribe = () => {
  return (
    <div
      data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay='300'
          
      className="about--us flex flex-col justify-items-center items-center text-center w-[66%] mx-auto pb-[90px]"
      id="about"
    >
      <h2 className="font-[300] text-[30px] tracking-wide m-2">
        Subsribe
      </h2>
      <span className="text-[16px] text-white w-full">
        Subscribe to our newsletter to receive news on update
      </span>
      <span className="text-[16px]  w-full">
        <input
          type="text"
          placeholder="Your Email Address"
          className="text-[14px]  outline-none border-0 bg-transparent text-center h-[40px] mt-12"
        />
      </span>
      <hr className="w-[66%] h-[3px] mx-auto py-[23px] opacity-75" />

      <Button
        bgColor="bg-white"
        hoverBgColor={"hover:bg-black"}
        hoverTextColor={"hover:text-white"}
        textColor={"text-black"}
        id="subscribe-btn"
        name="email"
        
      >
        Subscribe
      </Button>
    </div>
  );
}

export default Subscribe