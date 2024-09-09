import { Img1, Img2, Img3 } from "../assets/images";
import { CartItem, Footer, Navbar } from "../components";
import { Button } from "../components/common";

const CartPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center mt-28">
        <h2 className="cartpage--title flex justify-center py-6 w-full bg-gray-800 gap-5 tracking-wider font-medium text-sm sm:text-lg">
          <a
            href="./"
            className="hover:scale-105 transition-transform duration-200"
          >
            Home
          </a>
          /
          <a
            href="#"
            className="hover:scale-105 transition-transform duration-200"
          >
            My Cart
          </a>
        </h2>
      </div>

      <h1 className="flex justify-center my-10 text-3xl font-bold mb-4">
        Cart
      </h1>

      <CartItem image={Img1} />
      <CartItem image={Img3} />
      <CartItem image={Img2} />
      <CartItem image={Img1} />

      <div className="flex justify-center pt-12 pb-[90px]">
        <Button
          bgColor="bg-white"
          hoverBgColor="hover:bg-black"
          hoverTextColor="hover:text-white"
          textColor="text-black"
          id="checkout-btn"
          hoverColor="purple-800"
          className="font-bold  py-2 px-4 rounded mt-4 transition-colors duration-200 "
        >
          Checkout
        </Button>
      </div>

      <Footer />
      </>
  );
};

export default CartPage;
