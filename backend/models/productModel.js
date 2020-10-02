import mongosose from "mongoose"

const productSchema = new mongosose.Schema({
    name: { type: String , requiered: true},
    countInStock: { type: Number ,default:0, requiered: true},
    image: { type: String, requiered: true},
    category: { type: String, requiered: true},
    brand: { type: String, requiered: true},
    price: { type: Number, default:0, requiered: true},
    numReviews: { type: Number, default:0, requiered: true},
    rating: { type: Number, default:0, requiered: true},
    description: { type: String , requiered: true},
})

const productModel = mongoose.model("User", productSchema)

export default productModel