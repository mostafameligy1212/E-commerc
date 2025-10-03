'use client'
import { Button } from '_/components/ui/button'
import React, { useContext, useState } from 'react'
import { removeItemFromCart } from './cartActions'
import { errorMessage, successMessage } from '../MessagesTost/Messages'
import { CartContext } from '../_Component/MySessionProvider/CartContext'
import { ClipLoader } from 'react-spinners'

export default function RemoveItemBtn({id}:{id : string}) {

    const [loading , setLoading] = useState(false);

   const {updateCartCount} = useContext(CartContext);

    async function handelRemoveItem()
    {
        setLoading(true);
      const output =  await  removeItemFromCart(id)
      if(output == null)
      {
        errorMessage("sorry try again");
      }
      else{
        successMessage("product remove sucessfully")
        updateCartCount(output);
      }
        setLoading(false);

    }

  return (
    <>
        <Button onClick={handelRemoveItem}  className=' dark:text-white dark:border dark:border-white bg-black mx-auto mt-3 cursor-pointer'>
        {
            loading ? 
            <ClipLoader size={20} color="white" />

            :
            <span>remove</span>
        }
        </Button>
      
    </>
  )
}
