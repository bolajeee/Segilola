import express from 'express'
import { createNewProduct, deleteProduct, getAllProducts, updateProduct } from '../controllers/product.controller.js';

const router = express.Router()

router.post("/", createNewProduct);

router.delete("/:id", deleteProduct);

router.get("/", getAllProducts);

router.put("/:id", updateProduct);

export default router