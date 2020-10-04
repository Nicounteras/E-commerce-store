import React ,{ useEffect } from "react"
import data from "../data"
import {useSelector, useDispatch} from "react-redux"
import {Link} from "react-router-dom"
import { detailsProduct, listProducts } from "../actions/productActions"
import { singin } from "../actions/userActions"


function ProductsScreen (props){
  const [modalVisible, setModalVisitor] = useState(false)
  const [id, setId] = useState("")
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [image, setImage] = useState("")
  const [brand, setBrand] = useState("")
  const [category, setCategory] = useState("")
  const [countInStock, setCountInStock] = useState("")
  const [description, setDescription] = useState("")
  const productList = useSelector(state => state.productList);
  const {loading, products, error} = productList
  const productSave = useSelector(state=> state.productSave)
  const productDelete = useSelector(state => state.productDelete);
  const { loading:loadingSave , success: successSave, error: errorSave } = productSave
  const dispatch = useDispatch()

  useEffect(() => {
    if(successSave) {
      setModalVisitor(false)
    }
   dispatch(listProducts())
    return () => {
      //
    }
  }, [succesSave, successDelete])

  const openModal = (product) => {
    setModalVisitor(true)
    setId(product._id)
    setName(product.name)
    setPrice(product.price)
    setImage(product.image)
    setBrand(product.brand)
    setCategory(product.category)
    setDescription(product.description)
    setCountInStock(product.countInStock)
  }

  const SubmitHandler = (e) => {
    e.preventDefault()
    dispatch(saveProduct({
      _id:id,
      name, price, image, brand, description,
      category, countInStock}))
  }
const deleteHandler = (product) => {
  dispatch(deleteProduct(product._id))
}
  return <div className="content content-margined">
    <div className="product-header">
      <h3>Products</h3>
      <button className="button primary" onClick={() => openModal({})}>Create product</button>
    </div>
   {
     modalVisible && 
     <div className="form">
     <form onSubmit={SubmitHandler}>
       <ul className="form-container">
         <li>
           <h2>Create product</h2>
         </li>
         <li>
           {loadingSave && <div>Loading .....</div>}
           {errorSave && <div>Error</div>}
         </li>
         <li>
           <label for="Name">
             Name
           </label>
           <input type="text" name="name" value={name} id="name" onChange={(e) => setName(e.target.value)}/>
         </li>
         <li>
           <label for="Price">
             Price
           </label>
           <input type="text" name="Price" value={price} id="Price" onChange={(e) => setPrice(e.target.value)}/>
         </li>
         <li>
           <label for="Image">
             Image
           </label>
           <input type="text" name="Image" value={image} id="Image" onChange={(e) => setImage(e.target.value)}/>
         </li>
         <li>
           <label for="Brand">
             Brand
           </label>
           <input type="text" name="Brand" value={brand} id="Brand" onChange={(e) => setBrand(e.target.value)}/>
         </li>
         <li>
           <label for="Category">
             Category
           </label>
           <input type="text" name="Category" value={category} id="Category" onChange={(e) => setCategory(e.target.value)}/>
         </li>
         <li>
           <label for="Description">
             Description
           </label>
           <textarea type="text" name="Description" value={description} id="Description" onChange={(e) => setDescription(e.target.value)}/>
         </li>
         <li>
           <label for="Stock">
             Stock
           </label>
           <input type="text" name="Stock" value={countInStock} id="Stock" onChange={(e) => setCountInStock(e.target.value)}/>
         </li>
         <li>
           <button type="submit" className="button primary">
             {id ? "Update": "Create"}
           </button>
           <button type="submit" onClick={() => setModalVisitor(false)} className="button secondary">
             Back
           </button>
         </li>
       </ul>
     </form>
   </div>
   }
    <div className="product-list">
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            products.map(product => (<tr key={product._id}>
              <td>{product._id}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.category}</td>
              <td>{product.brand}</td>
              <td>
                <button className="button" onClick={() => openModal(product)}>Edit</button>
                { }
                <button className="button" onClick={() => deleteHandler(product)}>Delete</button>
              </td>
            </tr>))
          }
        </tbody>
      </table>
    </div>
  </div>
  

}
export default ProductsScreen