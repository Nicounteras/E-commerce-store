import React ,{ useEffect } from "react"
import {useSelector, useDispatch} from "react-redux"
import {Link} from "react-router-dom"
import { savePayment } from "../actions/productActions"
import CheckoutSteps from "../components/CheckoutSteps"

function PaymentScreen (props){
const [paymentMethod, setPaymentMethod] = useState("")
  const Register = useSelector(state => state.Register)
  const dispatch = useDispatch()
  const redirect = props.location.search?props.location.search.split("=")[1]: "/"
  
  
  const SubmitHandler = (e) => {
    e.preventDefault()
    dispatch(saveShipping(address, city, postalCode, country))
    props.history.push("placeorder")
  }

  return <div>
    <CheckoutSteps step1 step2 step3 >

    </CheckoutSteps>
    <div className="form">
    <form onSubmit={SubmitHandler}>
      <ul className="form-container">
        <li>
          <h2>Payment</h2>
        </li>
        <li>
         <input type="radio" name="paymentMethod" id="paymentMethod" value="paypal" onChange={(e) => setPaymentMethod(e.target.value)}/>
        <label htmlFor="paymentMethod">
            Paypal
            </label> 
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
export default PaymentScreen