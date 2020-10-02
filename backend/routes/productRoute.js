import express from "express"
import Product from "../models/productModel"
import { getToken } from "../util"

const router = express.Router();

router.get("/", async(req, res) => {
    const products = await Product.find({});
    res.send(products)
})

router.post ("/", async ( req, res) => {
    const product = new Product({
        name: req.body.name,
        price: req.body.price,
        email: req.body.email,
        description: req.body.description,
        image: req.body.image,
        brand: req.body.brand,
        countInStock: req.body.countInStock,
        rating: req.body.rating,
        numReviews: req.body.numReviews,
    })
    const newProduct = await product.save();
    if(newProduct){
    return res.status(201).send({message:"New product in", data: newProduct })
    }
    return res.status(500).send({message: "Error in Creating Product"})
})

export default router