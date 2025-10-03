"use client"
import React, {  createContext, ReactNode, useState } from 'react'

export const CartContext = createContext({cartCount : 0 , updateCartCount:(x:number)=>{} , setDark:(x:boolean)=>{} , dark : false }); 

export  function CartContextProvider({children} :{children : ReactNode}) {

    const [cartCount , setCartCount] = useState(0);
    const [dark, setDark] = useState(false);

    function updateCartCount(newCount : number){
        setCartCount(newCount);
    }

  return (
    <CartContext.Provider value={{cartCount , updateCartCount , setDark  , dark }}> 
        {children}
    </CartContext.Provider>
  )
}
