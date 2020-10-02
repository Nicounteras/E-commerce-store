import React from 'react';
import data from "./data"
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import HomeScreen from "./screens/HomeScreen"
import SigninScreen from "./screens/SigninScreen"
import ProductScreen from "./screens/ProductScreen"
import CartScreen from "./screens/CartScreen"
import RegisterScreen from "./screens/RegisterScreen"

function App() {
    const userSignin = useSelector(state => state.userSignin)
    const {userInfo} = userSignin 
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open")
  }
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open")
  }
  return (
   <BrowserRouter>
    <div className="grid-container">
        <header className="header">
            <div className="brand">
                <button onClick={openMenu}>
                    &#9776;
                </button>
                <Link to="/">
                   Amazona
                </Link>
            </div>
            <div className="header-links">
                <a href="cart.html">Cart</a>
                {
                    userInfo ? <Link to="/profile">{userInfo.name}</Link> 
                    :
                    <Link to="/singin">Sign In</Link>
                }
            </div>
        </header>
        <aside className="sidebar">
            <h3>Shopping categories</h3>
            <button onClick={closeMenu} className="sidebar-close-button">
                X
            </button>
            <ul>
                <li>
                    <a href="index.html">Pants</a>
                </li>
                <li>
                    <a href="index.html">Shirts</a>
                </li>
            </ul>
        </aside>
        <main className="main">
           <div className="content">
               <Route path="/signin" component={SigninScreen}/>
               <Route path="/register" component={RegisterScreen}/>
              <Route path="/products/:id" exact component={ProductScreen}/>
              <Route path="/cart/:id?" component={CartScreen} />
              <Route path="/" exact={true} component={HomeScreen}/>
           </div>
        </main>
        <footer className="footer">All rights reserved</footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
