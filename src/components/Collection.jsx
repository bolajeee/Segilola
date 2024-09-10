import { FaStar } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { Img2, Img3 } from "../assets/images";
import { addToCart } from "../stores/features/cartSlice";

const productData = [
  {
    id: 1,
    img: Img3,
    rating: 5.0,
    description: "Lorem ipsum dolor sit amet haller.",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    rating: 5.0,
    description: "Consectetur adipiscing elit sitt.",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    rating: 5.0,
    description: "Sed do eiusmod tempor incididunt.",
    aosDelay: "400",
  },
];

const Collection = () => {
  const cart = useSelector((store) => store.cart.items);
  console.log(cart);
  const dispatch = useDispatch();

  const handleAddToCart = (id) => {
    dispatch(
      addToCart({
        productId: id,
        quantity: 1,
      })
    );
  };

  return (
    <div className="mt-14 mb-12">
      <div className="container mx-auto">
        {/* Top Section */}
        <div
          data-aos="fade-up"
          className="Top--Products flex flex-col justify-center items-center text-center w-[66%] mx-auto py-[40px]"
        >
          <p className="text-sm text-white">Top Selling</p>
          <h1 className="text-3xl font-bold mt-2 mb-6">Products</h1>
          <hr className="w-[70px] h-[3px] mx-auto py-[23px]" />
          <p className="text-[16px] text-gray-400 w-[66%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            quidem ullam possimus hic temporibus vel provident, ducimus corrupti
            non tempora accusantium esse fugiat labore iure eius ex libero? At,
            repudiandae.
          </p>
        </div>

        {/* Products Section */}
        <div
          data-aos="zoom-in"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 place-items-center"
        >
          {productData.map((data) => (
            <div
              data-aos="fade-up"
              data-aos-delay={data.aosDelay}
              key={data.id}
              className="rounded-xl bg-white dark:bg-gray-800 hover:text-white relative shadow-lg group max-w-[300px] mt-24 mx-auto"
            >
              {/* <Link to={slug}></Link> */}
              <div className="h-[240px] flex justify-center items-center overflow-hidden">
                <img
                  src={data.img}
                  alt="img"
                  className="max-w-[240px] max-h-[240px] transform group-hover:scale-105 duration-300 drop-shadow-md"
                />
              </div>

              <div className="p-4 text-center mt-6">
                {/* Rating */}
                <div className="w-full flex justify-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                </div>

                {/* Title */}
                <h1 className="text-xl font-bold mb-2">
                  {data.title || "Product Title"}
                </h1>

                {/* Description */}
                <p className="text-gray-500 group-hover:text-white max-w-[200px] duration-300 text-sm line-clamp-2">
                  {data.description}
                </p>

                {/* Order Button */}
                <button
                  className="bg-transparent hover:bg-white hover:text-black text-white py-1 px-4 rounded-full mt-4 border border-white duration-300"
                  onClick={() => handleAddToCart(data.id)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
