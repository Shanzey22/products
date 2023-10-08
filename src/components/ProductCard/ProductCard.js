import React,{useState,useEffect} from 'react'
import './ProductCard.css';
function ProductCard({title,price}) {
    const[quantity,setQuantity]= useState(1);
  
    function showCountValue(){
        console.log(`Value of count is: ${quantity}`)
        }
    
       useEffect(showCountValue,[quantity])

    function increaseQuantity(){
        if(quantity<10)
        setQuantity(quantity+1)

    }

    function decreaseQuantity(){
        if(quantity>1)
        setQuantity(quantity-1)
    }
    return (
        <div className='product-card'>
            <h1>{title}</h1>
        <span>Rs.{price}</span><br/>

        <button onClick={increaseQuantity}>+</button>
        {quantity}
        <button onClick={decreaseQuantity}>-</button>
<br/><br/>
        <button>Buy Now</button>
        </div>
    )
}
export default ProductCard