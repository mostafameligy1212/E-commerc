"use client"
import { Button } from '_/components/ui/button'
import React, { useContext, useState } from 'react'
import { changeCount } from './cartActions'
import { errorMessage, successMessage } from '../MessagesTost/Messages';
import { CartContext } from '../_Component/MySessionProvider/CartContext';
import { ClipLoader } from 'react-spinners';

export default function ChangeCountBtn({ isIncrement = false , id , newCount } :{isIncrement? :boolean ; id :string ; newCount : number}) {
 
   let [Loading , setLoaging] = useState(false);
 const {updateCartCount} = useContext(CartContext);

    async function handelCahngeCount(){
        setLoaging(true);
   const output =  await changeCount(id , newCount)
   if(output ==null)
   {
    errorMessage("Error try again")
   }
   else
   {
    successMessage(`Product count is : ${newCount}`)
    updateCartCount(output);
   }
   setLoaging(false)


  }
    return (
    <>
        <Button onClick={handelCahngeCount} disabled={newCount == 0 || Loading} className={`cursor-pointer ${isIncrement ? "bg-green-500":"bg-red-500"} `}>
            {
    
                Loading ? <ClipLoader size={10} color="white" />: isIncrement? "+":"-"
            }
        </Button>
      
    </>
  )
}
