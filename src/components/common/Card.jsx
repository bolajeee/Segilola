/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaHeart, FaEye } from "react-icons/fa";

const Card = ({ image, title, discount, onAddToCart, onLike, onReadMore }) => {
  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    setLiked(!liked);
    onLike();
  };

  return (
    <div className="card group relative bg-[#555252] shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 w-[250px] md:w-[280px]">
      {discount && (
        <div className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold px-2 py-1 z-10">
          {discount}
        </div>
      )}

      <div className="card-image relative">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover transition-all duration-300 ease-in hover:scale-105 hover:opacity-75"
        />
      </div>

      <div className="card-content p-4 text-center">
        <h2 className="text-xl font-semibold text-white">{title}</h2>
      </div>

      <div className="card-actions flex justify-around items-center p-4 bg-black absolute bottom-0 left-0 right-0 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:bg-black">
        <button
          onClick={handleLikeClick}
          className={`p-2 transition-colors duration-300 flex justify-center ${
            liked ? "text-red-500" : "text-white"
          } `}
        >
          <FaHeart />
        </button>
        <button
          onClick={onAddToCart}
          className="p-2 text-white transition-colors duration-300 flex justify-center w-48 border-x"
        >
          Add to Cart
        </button>
        <button
          onClick={onReadMore}
          className="p-2 text-white transition-colors duration-300 flex justify-center"
        >
          <FaEye />
        </button>
      </div>
    </div>
  );
};

export default Card;
