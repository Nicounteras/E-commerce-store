import React ,{ useEffect } from "react"
import {useSelector, useDispatch} from "react-redux"
import {Link} from "react-router-dom"
import { saveShipping } from "../actions/productActions"
import CheckoutSteps from "../components/CheckoutSteps"

function ShippingScreen (props){
const [address,setAddress] = useState("")
  const [city, setCity] = useState("")
  const [postalCode, setPostalCode] = useState("")
  const [country, setCountry] = useState("")
  const Register = useSelector(state => state.Register)
  const { loading, userInfo, error } = Register
  const dispatch = useDispatch()
  const redirect = props.location.search?props.location.search.split("=")[1]: "/"
  
  
  const SubmitHandler = (e) => {
    e.preventDefault()
    dispatch(saveShipping({address, city, postalCode, country}))
    props.history.push("payment")
  }

  return <div>
    <CheckoutSteps step1 step2 >

    </CheckoutSteps>
    <div className="form">
    <form onSubmit={SubmitHandler}>
      <ul className="form-container">
        <li>
          <h2>Shipping</h2>
        </li>
        <li>
          <label htmlFor="address">
            Address
          </label>
          <input type="text" name="address" id="address" onChange={(e) => setAddress(e.target.value)}/>
        </li>
        <li>
          <label htmlFor="city">
            City
          </label>
          <input type="text" name="city" id="city" onChange={(e) => setCity(e.target.value)}/>
        </li>
        <li>
          <label htmlFor="postalCode">
            Postal code
          </label>
          <input type="text" name="postalCode" id="postalCode" onChange={(e) => setPostalCode(e.target.value)}/>
        </li>
        <li>
          <label htmlFor="country">
            Country
          </label>
          <input type="text" name="" id="address" onChange={(e) => setCountry(e.target.value)}/>
        </li>
        <li>
          <button type="submit" className="button primary">
            Continue
          </button>
        </li>
        <li>
          <Link to={redirect === "/" ? "signin" : "signin?register" + redirect} className="button secondary text-center">
          Sign In
          </Link>
        </li>
      </ul>
    </form>
  </div>
  </div>
}
export default ShippingScreen