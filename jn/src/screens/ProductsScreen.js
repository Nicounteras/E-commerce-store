import React ,{ useEffect } from "react"
import data from "../data"
import {useSelector, useDispatch} from "react-redux"
import {Link} from "react-router-dom"
import { detailsProduct } from "../actions/productActions"
import { singin } from "../actions/userActions"


function ProductsScreen (props){

  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [image, setImage] = useState("")
  const [brand, setBrand] = useState("")
  const [numReviews, setNumReviews] = useState("")
  const [category, setCategory] = useState("")
  const [countInStock, setCountInStock] = useState("")
  const [description, setDescription] = useState("")
  const [rating, setRating] = useState("")
  const productSave = useSelector(state=> state.productSave)
  const { loading:loadingSave , success: successSave, error: errorSave } = productSave
  const dispatch = useDispatch()

  useEffect(() => {
   
    return () => {
      //
    }
  }, [userInfo])
  const SubmitHandler = (e) => {
    e.preventDefault()
    dispatch(saveProduct(name, price, image, brand ,description, rating, category, countInStock, numReviews))
  }

  return <div className="form">
    <form onSubmit={SubmitHandler}>
      <ul className="form-container">
        <li>
          <h2>Create product</h2>
        </li>
        <li>
          {loading && <div>Loading .....</div>}
          {error && <div>Error</div>}
        </li>
        <li>
          <label for="Name">
            Name
          </label>
          <input type="text" name="name" id="name" onChange={(e) => setName(e.target.value)}/>
        </li>
        <li>
          <label for="Price">
            Price
          </label>
          <input type="text" name="Price" id="Price" onChange={(e) => setPrice(e.target.value)}/>
        </li>
        <li>
          <label for="Image">
            Image
          </label>
          <input type="text" name="Image" id="Image" onChange={(e) => setImage(e.target.value)}/>
        </li>
        <li>
          <label for="Brand">
            Brand
          </label>
          <input type="text" name="Brand" id="Brand" onChange={(e) => setBrand(e.target.value)}/>
        </li>
        <li>
          <label for="Category">
            Category
          </label>
          <input type="text" name="Category" id="Category" onChange={(e) => setCategory(e.target.value)}/>
        </li>
        <li>
          <label for="Rating">
            Rating
          </label>
          <input type="text" name="Rating" id="Rating" onChange={(e) => setRating(e.target.value)}/>
        </li>
        <li>
          <label for="numReviews">
             Num Reviews
          </label>
          <input type="number" name="numReviews" id="numReviews" onChange={(e) => setNumReviews(e.target.value)}/>
        </li>
        <li>
          <label for="Description">
            Description
          </label>
          <textarea type="text" name="Description" id="Description" onChange={(e) => setDescription(e.target.value)}/>
        </li>
        <li>
          <label for="Stock">
            Stock
          </label>
          <input type="text" name="Stock" id="Stock" onChange={(e) => setCountInStock(e.target.value)}/>
        </li>
        <li>
          <button type="submit" className="button primary">
            Create
          </button>
        </li>
      </ul>
    </form>
  </div>
}
export default SigninScreen