import React ,{ useEffect } from "react"
import {useSelector, useDispatch} from "react-redux"
import {Link} from "react-router-dom"
import { register } from "../actions/userActions"


function RegisterScreen (props){
const [name,setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rePassword, setRePassword] = useState("")
  const Register = useSelector(state => state.Register)
  const { loading, userInfo, error } = Register
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
    dispatch(register(name, email, password))
  }

  return <div className="form">
    <form onSubmit={SubmitHandler}>
      <ul className="form-container">
        <li>
          <h2>Create you Amazona account</h2>
        </li>
        <li>
          {loading && <div>Loading .....</div>}
          {error && <div>Error</div>}
        </li>
        <li>
          <label htmlFor="name">
            Name
          </label>
          <input type="name" name="name" id="name" onChange={(e) => setName(e.target.value)}/>
        </li>
        <li>
          <label htmlFor="email">
            Email
          </label>
          <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}/>
        </li>
        <li>
          <label htmlFor="password">
            Password
          </label>
          <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)}/>
        </li>
        <li>
          <label htmlFor="rePassword">
            Re-Enter Password
          </label>
          <input type="rePassword" id="rePassword" name="rePassword" onChange={(e) => setRePassword(e.target.value)}/>
        </li>
        <li>
          <button type="submit" className="button primary">
            Register
          </button>
        </li>
        <li>
          <Link to="/register" className="button secondary text-center">
          Sign In
          </Link>
        </li>
      </ul>
    </form>
  </div>
}
export default RegisterScreen