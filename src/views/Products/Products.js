import React from 'react'
import './Products.css'
import ProductCard from '../../components/ProductCard/ProductCard'

function Products(){
    return (
     <>
<h1>Products</h1>
<div className='products-container'>
    <ProductCard  title='Product 1' price={100} />
    <ProductCard title='Product 2' price={140} />
    <ProductCard title='Product 3' price={120} />
    <ProductCard title='Product 4' price={90} />
</div>
     </>
    )
}
export default Products