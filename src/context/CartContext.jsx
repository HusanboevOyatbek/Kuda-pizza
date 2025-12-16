import { createContext, useEffect, useState } from "react";

export const CartContext = createContext(null);

const CartProvider = ({ children }) => {

      const [cart, setCart] = useState(() => {
        const saved = localStorage.getItem("cart");
        return saved ? JSON.parse(saved) : []
      });

      useEffect(() => {
        localStorage.setItem("cart" , JSON.stringify(cart))
      }, [cart])


    function addToCart(el) {
        console.log(el);
        setCart((prevCart) => [...prevCart, { ...el, qty: 1 }])

    }



    function increase(el) {
        setCart((prevCart) =>
            prevCart.map((items) => {
                if (items.id === el.id) {
                    return { ...items, qty: (items.qty || 0) + 1 };
                } else {
                    return items;
                }
            }))
        ;
    }

   

    function decrease(el) {
        setCart((prevCart) => {
            return prevCart.filter((items) => items.qty > 1).map((it) => {
                if (el.id === it.id) {
                    return { ...it, qty: it.qty - 1 };
                } else {
                    return it
                }
            })
        })
    }
    return(
    <CartContext.Provider value={{cart , setCart , addToCart , increase , decrease}}>{children} </CartContext.Provider>
    )
    
}
export default CartProvider