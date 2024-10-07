import { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { changeQuantity } from "../stores/features/cartSlice";
import { useProductStore } from "../stores/product";

const CartItem = (props) => {
  const { productId, quantity } = props.data;
  const dispatch = useDispatch();
  const { fetchProducts, products } = useProductStore();

  // Fetch products on component mount
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  useEffect(() => {
    console.log("Fetched products:", products);
    console.log("Current productId in CartItem:", productId);
  }, [products, productId]);

  const detail = products.find((product) => product._id === productId);

  console.log("Product Detail in CartItem:", detail);

  // Handle when no product is found (undefined detail)
  if (!detail) {
    return <div>Loading product details...</div>;
  }

  const handleMinusQuantity = () => {
    if (quantity > 1) {
      dispatch(
        changeQuantity({
          productId,
          quantity: quantity - 1,
        })
      );
    }
  };

  const handlePlusQuantity = () => {
    dispatch(
      changeQuantity({
        productId,
        quantity: quantity + 1,
      })
    );
  };

 
  return (
    <div className="flex justify-between items-center bg-slate-600 text-white p-2 border-b-2 border-slate-700 gap-5 rounded-md" >
      <img
        src={detail?.image || "placeholder.jpg"}
        alt={detail?.name || "Product"}
        className="w-12"
      />
      <h3>{detail?.name || "Unnamed Product"}</h3>
      <p>{(detail?.price || 0) * quantity}</p>
      <div className="w-20 flex justify-between">
        <button
          className="bg-gray-200 rounded-full w-6 h-6 text-cyan-600"
          onClick={handleMinusQuantity}
        >
          -
        </button>
        <span className="px-2">{quantity}</span>
        <button
          className="bg-gray-200 rounded-full w-6 h-6 text-cyan-600"
          onClick={handlePlusQuantity}
        >
          +
        </button>
      </div>
    </div>
  );
}



CartItem.propTypes = {
  data: PropTypes.shape({
    productId: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
};

export default CartItem;
