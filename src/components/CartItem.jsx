import { useState } from "react";
import { Button } from "./common";

const CartItem = (image) => {
  const [number, setNumber] = useState(0);

  const handleClickAdd = () => {
    setNumber((prevNumber) => prevNumber + 1);
    {console.log("add")}
  };

  const handleClickRemove = () => {
    if (number > 0) {
 setNumber((prevNumber) => prevNumber - 1);
    {
      console.log("minus");
    }

    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center p-8 ">
        {/* Cart items container */}
        <div className="w-full md:w-3/4 lg:w-1/2 xl:w-1/3 mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between p-8 space-y-4 md:space-y-0 md:space-x-4">
            <div className="flex items-center">
              <img
                src={image}
                alt="Product"
                className="w-16 h-16 object-cover rounded-lg transition-transform duration-200 transform hover:scale-110"
              />
              <span className="ml-4 text-lg font-medium">Product 1</span>
            </div>
            <div className="text-center md:text-left text-sm">
              This is a description of Product 1
            </div>
            <div className="flex items-center space-x-2">
              <Button
                bgColor="bg-white"
                hoverBgColor="hover:bg-black"
                hoverTextColor="hover:text-white"
                textColor="text-black"
                id="remove-btn"
                hoverColor="purple-800"
                className="font-bold py-2 px-4 rounded transition-colors duration-200"
                onClick={handleClickRemove}
              >
                -
              </Button>
              <span className="text-lg font-bold">{number}</span>
              <Button
                bgColor="bg-white"
                hoverBgColor="hover:bg-black"
                hoverTextColor="hover:text-white"
                textColor="text-black"
                id="add-btn"
                hoverColor="purple-800"
                className="font-bold py-2 px-4 rounded transition-colors duration-200"
                onClick={handleClickAdd}
              >
                +
              </Button>
            </div>
          </div>
        </div>

        <hr width={"55px"}
        />
      </div>
    </>
  );
};

export default CartItem;
