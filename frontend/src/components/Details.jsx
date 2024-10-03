import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { productData } from "../ProductData";
import { useDispatch } from "react-redux";
import { addToCart } from "../stores/features/cartSlice";
import Footer from "./Footer";

const Details = () => {
  const { slug } = useParams();
  const [detail, setDetail] = useState([]);
    const updatedProductData = [...productData];
    const [quantity, setQuantity] = useState(1)
    const dispatch = useDispatch()

     const handleMinusQuantity = () => {
       setQuantity(quantity -1 < 1 ? 1 : quantity - 1);
     };

    const handlePlusQuantity = () => {
        setQuantity(quantity + 1)
    }

    const handleAddToCart = () => {
        dispatch(addToCart({
            productId: detail.id,
            quantity: quantity
        }))
    }



  useEffect(() => {
    const findDetail = updatedProductData.filter(
      (product) => product.slug === slug
    );
    if (findDetail.length > 0) {
      setDetail(findDetail[0]);
    } else {
      window.location.href = "/";
    }
  }, [slug]);

  return (
    <>
      {" "}
      <div className="flex justify-center items-center min-h-screen">
        <div className=" rounded-lg shadow-lg p-6 max-w-4xl w-full">
          <h2 className="text-2xl font-bold text-center mb-6">
            Product Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex justify-center">
              <img
                src={detail.img}
                alt={detail.slug}
                className="max-w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="flex flex-col justify-center space-y-5">
              <h1 className="text-3xl font-semibold text-white uppercase">
                {detail.name}
              </h1>
              <p className="text-2xl font-bold text-white">
                Rating: {detail.rating}
              </p>
              <p className="text-gray-400">{detail.description}</p>

              {/* Quantity control and add to cart */}
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <button
                    className="bg-gray-200 text-black h-10 w-10 font-bold text-xl rounded-md flex justify-center items-center"
                    onClick={handleMinusQuantity}
                  >
                    -
                  </button>
                  <span className="h-10 w-10 font-bold text-xl rounded-md flex justify-center items-center">
                    {quantity}
                  </span>
                  <button
                    className="bg-gray-200 text-black h-10 w-10 font-bold text-xl rounded-md flex justify-center items-center"
                    onClick={handlePlusQuantity}
                  >
                    +
                  </button>
                </div>

                              <button className="py-3 bg-black hover:bg-gray-400 px-4 text-white hover:text-black rounded-lg font-semibold shadow-md transition duration-300"
                              onClick={handleAddToCart}>
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Details;
