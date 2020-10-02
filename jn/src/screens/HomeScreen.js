import React, {useState, useEffect} from "react"
import axios from "axios"
import {Link} from "react-router-dom"
import {useSelector, useDispatch} from 'react-redux'

function HomeScreen(props) {

    const productList = useSelector
    const { products, loading, error } = productList;
    const dispatch = useDispatch()

    useEffect(() => {
            dispatch(listProducts())
        return () => {
            //
        }
    }, [])

    return 
    loading ? <div>LOADING.....</div> :
    error ? <div>{error}</div> :
    <ul className="products">
        {
          products.map(product => 
            <li key={product._id}>
            <div className="product">
            <Link to={"/product/" + product._id}> <img className="product-image" src={product.image} alt="Shirt 1"/></Link>
                <div className="product-name">
                    <Link to={"/product/" + product._id}>{product.name}</Link>
                </div>
                <div className="product-brand">{product.brand}</div>
                <div className="product-price">${product.price}</div>
                <div className="product-rating">{product.rating} stars ({product.numberReviews} reviews)</div>
            </div>
        </li>)
        }
    
      </ul>

}
export default HomeScreen