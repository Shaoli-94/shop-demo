import React, {useContext} from 'react';
import Products from './Products';
import Cart from './Cart';
import { ContextAPI } from '../ContextAPI';


export default function MyShop(){

   const {cart, page, PAGE_PRODUCT, PAGE_CART, navigateTo } = useContext(ContextAPI);


    return(
        <div>
        <header>
        <button onClick={()=>navigateTo(PAGE_PRODUCT)}>view products</button>
        <button onClick={()=>navigateTo(PAGE_CART)}>go to cart({cart.length})</button>
      </header> 
     
      {page===PAGE_PRODUCT&& (
      <Products/>
      )}
      {page===PAGE_CART&& <Cart/>}
        
        </div>
    )
}