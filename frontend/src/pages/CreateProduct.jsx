import { useState } from "react";
import { useProductStore } from "../stores/product.js";
import { useToast } from "@chakra-ui/react";

const CreateProduct = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    image: "",
    price: "",
    description: "",
  });

  const { createProduct } = useProductStore();
  const toast = useToast()

  const handleAddProduct = async () => {
    const { success, message } = await createProduct(newProduct);
    if (success) {
      toast({
        title: "Product created Successfully.",
        description: "We've created your product for you.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    } else (
      console.log(`${success}:`, message)
    )

    setNewProduct({
      name: "",
      image: "",
      price: "",
      description: "",
    });
  };

  return (
    <div className="container mx-auto pt-[20vh] h-[100vh]">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-8">Create New Product</h1>

        <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
          <div className="space-y-4">
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Product Name"
              name="name"
              value={newProduct.name}
              onChange={(e) =>
                setNewProduct({ ...newProduct, name: e.target.value })
              }
            />
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Price"
              name="price"
              type="number"
              value={newProduct.price}
              onChange={(e) =>
                setNewProduct({ ...newProduct, price: e.target.value })
              }
            />
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Product Image"
              name="image"
              value={newProduct.image}
              onChange={(e) =>
                setNewProduct({ ...newProduct, image: e.target.value })
              }
            />
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Product Description"
              name="description"
              value={newProduct.description}
              onChange={(e) =>
                setNewProduct({ ...newProduct, description: e.target.value })
              }
            />

            <button
              className="w-full py-2 bg-[#2D3748] text-white rounded-md hover:bg-blue-600 transition"
              onClick={handleAddProduct}
            >
              Add Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
