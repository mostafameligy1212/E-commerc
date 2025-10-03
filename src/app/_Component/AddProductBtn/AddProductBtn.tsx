"use client"
import { addToCart, addToWishList } from '_/app/cart/cartActions';
import { errorMessage, successMessage } from '_/app/MessagesTost/Messages';
import { Button } from '_/components/ui/button'
import React, { useContext, useState } from 'react'
import { ClipLoader } from 'react-spinners';
import { CartContext } from '../MySessionProvider/CartContext';

export default function AddProductBtn({id}:{id : string}) {
 
  const {updateCartCount} =useContext(CartContext)
  let [pending , isPending] = useState(false);
   async function handelAddToCart(){
        isPending(true);

        const isAddedSussfuly = await addToCart(id);
        if(isAddedSussfuly){
          successMessage("producted added sussfuly");
          updateCartCount(isAddedSussfuly);
        // .success("producted added sussfuly" , {position :"top-center"})
          
        }
        else{
          errorMessage("Erorr occurd while adding");

        }
        isPending(false);
    }


 
    return (
    <div className=''>
          <Button disabled={pending} onClick={handelAddToCart} className="dark:text-white my-2 w-[80%] bg-green-500 cursor-pointer hover:!bg-green-500">
             {pending ? 
    <ClipLoader size={20} color="white" />
             
            :
            <> add to cart +</>
            }
             
             
          </Button>
                
      

    </div>
  )
}
