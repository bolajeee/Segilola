import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { productData } from "../ProductData";
import { useDispatch } from "react-redux";
import { changeQuantity } from "../stores/features/cartSlice";

const CartItem = ({ data }) => {
  const { productId, quantity } = data;
  const [detail, setDetail] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    const findDetail = productData.find((product) => product.id === productId);
    setDetail(findDetail || {});
  }, [productId]);

  const handleMinusQuantity = () => {
    if (quantity > 1) {
      dispatch(
        changeQuantity({
          productId: productId,
          quantity: quantity - 1,
        })
      );
    }
  };

  const handlePlusQuantity = () => {
    dispatch(
      changeQuantity({
        productId: productId,
        quantity: quantity + 1,
      })
    );
  };

  return (
    <div className="flex justify-between items-center bg-slate-600 text-white p-2 border-b-2 border-slate-700 gap-5 rounded-md">
      <img
        src={detail?.img || "/default-image.jpg"}
        alt={detail?.name || "Product Image"}
        className="w-12"
      />
      <h3>{detail?.name || "Unknown Product"}</h3>
      <p>${!isNaN(detail?.price) ? detail.price * quantity : "N/A"}</p>{" "}
      <div className="w-20 flex justify-between">
        <button
          className="bg-gray-200 rounded-full w-6 h-6 text-cyan-600"
          onClick={handleMinusQuantity}
        >
          -
        </button>
        <span>{quantity}</span>
        <button
          className="bg-gray-200 rounded-full w-6 h-6 text-cyan-600"
          onClick={handlePlusQuantity}
        >
          +
        </button>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  data: PropTypes.shape({
    productId: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
};

export default CartItem;
