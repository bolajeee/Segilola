/* eslint-disable no-unused-vars */
import express from 'express'
import dotenv from 'dotenv'
import { connectDb } from './config/db.js'
import Product from './models/products.model.js'

dotenv.config()

const app = express()

app.use(express.json())

app.post("/api/products", async (req, res) => {
    const product = req.body

    if (!product.name || !product.price || !product.image || !product.description) {
        return  res.status(400).json({success: false, message: "Please fill all fields"})
    }

    const newProduct = new Product(product)

    try {
        await newProduct.save()
        res.status(201).json({ success: true, data: newProduct , message : 'Product created successfully'})
    } catch (error) {
        res.status(500).json({success:false, message: 'Internal server error'})
    }
})

app.listen('5000', () => {
    connectDb()
    console.log("hello world")
})