// In CartTab component
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { toggleStatusTab } from "../stores/features/cartSlice";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerFooter,
} from "@chakra-ui/react";

const CartTab = ({ isOpen, onOpen }) => {
  const carts = useSelector((store) => store.cart.items);
  const statusTab = useSelector((store) => store.cart.statusTab);
  const dispatch = useDispatch();
  const handleCloseTab = () => {
    dispatch(toggleStatusTab());
  };
  
  

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onOpen}>
      <DrawerOverlay />
      <DrawerContent
        className={`fixed top-0 right-0 bg-gray-700 shadow-2xl w-full h-full grid grid-rows-[60px_1fr_60px]
    transform
      ${statusTab === false ? " translate-x-full" : ""}
`}
      >
        <DrawerHeader className="p-5 text-white text-2xl mt-20">
          Shopping Cart
        </DrawerHeader>
        <DrawerCloseButton />
        <hr className="w-2" />

        <DrawerBody className="overflow-y-auto px-5">
          {carts.map((item, key) => (
            <CartItem key={key} data={item} />
          ))}
        </DrawerBody>

        <DrawerFooter className="grid grid-cols-2 gap-2 p-5">
          <button
            className="bg-black text-white py-2 rounded-md"
            onClick={() => {
              handleCloseTab();
              onOpen();
            }}
          >
            Close
          </button>
          <button className="bg-amber-600 text-white py-2 rounded-md">
            Check Out
          </button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>

  
  );
};

  CartTab.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onOpen: PropTypes.func.isRequired,
  };



export default CartTab;
