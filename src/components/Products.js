import React, {useContext} from 'react';
import { ContextAPI } from '../ContextAPI';

export default function Products(){
   
  const { products, addToCart }=useContext(ContextAPI); 
   return (
   <>

    <h1>Products</h1>
    <div className="products">
    {products.map((product, idx)=>(
      <div className="product" key={idx}>
        <h3>{product.name}</h3>
        <h4>{product.cost}</h4>
        <img src={product.image} />
        <button onClick={()=>addToCart(product)}>add to cart</button>
        </div>
    ))}
   </div>
    </>
   )

}