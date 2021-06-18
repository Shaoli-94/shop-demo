import { useState, createContext } from "react";

export const ContextAPI = createContext();

function ContextProvider(props) {

  
    const [products]=useState([
        {
          name: 'AA Battery',
          cost: '$2.99',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkhBffI02qyHMaMN2agKn_pWo0tza8i1wBjagPMpPGfGdEo94iSqW-F02_u0JPUxxXXKZclE4&usqp=CAc'
        },
        {
          name: 'Blanket',
          cost: '$19.99',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsiRXz2r2E7Ph6PaNvjnBsaTi3i8Bq5oq98XR17w7SdV3Rgk_iFuiBQTATmQzYAPnuv1rSkf4&usqp=CAc'
        },
        
      ])

      const PAGE_PRODUCT='products';
      const PAGE_CART='cart';
  
      const [cart, setCart]=useState([]);
      const [page,setPage]=useState(PAGE_PRODUCT);
  
  
      const addToCart=(product)=>{
     
      setCart([...cart,{ ...product }]);
      };
  
      const removeFromCart=(productToBeRemoved)=>{
     
      setCart(
       cart.filter((product)=>product!==productToBeRemoved)
       );
      };

      const navigateTo=(nextPage)=>{
        setPage(nextPage);
        };
  
    const value = { cart, addToCart, removeFromCart, page, PAGE_PRODUCT, PAGE_CART, navigateTo, products };
    return (
        <ContextAPI.Provider value={value}>
            {props.children}
        </ContextAPI.Provider>
    )
}

export default ContextProvider;