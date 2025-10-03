"use client"
import React, { useState } from 'react'
import { addToCart, addToWishList } from './../../../app/cart/cartActions';
import { errorMessage, successMessage } from '../../../app/MessagesTost/Messages';
import { ClipLoader } from 'react-spinners';
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { removeItemFromWishList } from "./../../wishList/WishListActions"

export default function BtnWishListA_R({id}:{id : string}) {
  let [pending2 , isPending2] = useState(false);
  let[added , setAdded] = useState(false)

 
           async function handelAddToWishList(){
        isPending2(true);
        const isAddedSussfuly = await addToWishList(id);
        if(isAddedSussfuly){
          successMessage("producted added sussfuly(wish List)");
     
          
        }
        else{
          errorMessage("Erorr occurd while adding (wish List)");

        }
        isPending2(false);
    }

    async function handelRemoveToWishList(){

        const reslut = await removeItemFromWishList(id);
                if(reslut){
          successMessage("producted Removed sussfuly(wish List)");
        }
        else{
          errorMessage("Erorr occurd while Removeing (wish List)");
        }

    }
 
    return (
    <>
                            <span  className="  cursor-pointer">
             {pending2 ? 
                <ClipLoader size={30} color="green" />
             
            :
                added ? 
                <FaHeart onClick={()=>{handelRemoveToWishList();setAdded(false) }}  color='red' size={30} />
                :
                <FaRegHeart onClick={()=>{handelAddToWishList() ; setAdded(true)}} size={30}/>
            }
             
             
          </span>
    </>
  )
}
