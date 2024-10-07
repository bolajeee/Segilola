import { useSelector, useDispatch } from "react-redux";
// import { productData } from "../ProductData"; 
import { addToCart } from "../stores/features/cartSlice";
import { Link } from "react-router-dom";
import { useProductStore } from "../stores/product";
import { useEffect } from "react";


const Collection = () => {
  const cart = useSelector((store) => store.cart.items);
  const { fetchProducts, products } = useProductStore();

  useEffect(() => {
    fetchProducts()
  }, []);
  
  console.log(products)
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
          {products.map((data) => (
            <div
              data-aos="fade-up"
              data-aos-delay={data.aosDelay}
              key={data._id}
              className="rounded-xl bg-white dark:bg-gray-800 hover:text-white relative shadow-lg group max-w-[300px] mt-24 mx-auto"
            >
               <Link to={data.slug}> <div className="h-[240px] flex justify-center items-center overflow-hidden">
                <img
                  src={data.image}
                  alt="img"
                  className="max-w-[240px] max-h-[240px] transform group-hover:scale-105 duration-300 drop-shadow-md"
                />
              </div></Link>

              <div className="p-4 text-center mt-6">
            

                {/* Title */}
                <h1 className="text-xl font-bold mb-2">
                  {data.name || "Product Title"}
                </h1>

                {/* Description */}
                <p className="text-gray-500 group-hover:text-white max-w-[200px] duration-300 text-sm line-clamp-2">
                  {data.description}
                </p>

                {/* Order Button */}
                <button
                  className="bg-transparent hover:bg-white hover:text-black text-white py-1 px-4 rounded-full mt-4 border border-white duration-300"
                  onClick={() => handleAddToCart(data._id)}
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
