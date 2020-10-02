import React ,{ useEffect } from "react"
import data from "../data"
import {useSelector, useDispatch} from "react-redux"
import {Link} from "react-router-dom"
import { detailsProduct } from "../actions/productActions"
import { singin } from "../actions/userActions"


function ProductsScreen (props){

  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const productSave = useSelector(state=> state.productSave)
  const { loading, userInfo, error } = userSignin
  const dispatch = useDispatch()

  useEffect(() => {
   if(userInfo){
     props.history.push("/")
   }
    return () => {
      //
    }
  }, [userInfo])
  const SubmitHandler = (e) => {
    e.preventDefault()
    dispatch(singin(email, password))
  }

  return <div className="form">
    <form onSubmit={SubmitHandler}>
      <ul className="form-container">
        <li>
          <h2>Sign In</h2>
        </li>
        <li>
          {loading && <div>Loading .....</div>}
          {error && <div>Error</div>}
        </li>
        <li>
          <label for="email">
            Email
          </label>
          <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}/>
        </li>
        <li>
          <label for="password">
            Password
          </label>
          <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)}/>
        </li>
        <li>
          <button type="submit" className="button primary">
            Sign In
          </button>
        </li>
        <li>
          <Link to="/register" className="button secondary text-center">
          Create your Amazona account
          </Link>
        </li>
      </ul>
    </form>
  </div>
}
export default SigninScreen