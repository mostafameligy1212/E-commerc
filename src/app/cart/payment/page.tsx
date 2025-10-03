"use client"
import { Button } from '_/components/ui/button'
import { Input } from '_/components/ui/input'
import { Label } from '_/components/ui/label'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { CreatCashOrder, CreatCheckOutSession } from './order.action'
import { getUsercart } from '_/app/_services/Cart.servises'
import { ClipLoader } from 'react-spinners'
import { errorMessage, successMessage } from '_/app/MessagesTost/Messages'
import { CartContext } from '_/app/_Component/MySessionProvider/CartContext'

export default function payment() {

  const {updateCartCount}=  useContext(CartContext);

  const cityInput =  useRef<HTMLInputElement>(null);
  const phoneInput =  useRef<HTMLInputElement>(null);
  const detailsInput =  useRef<HTMLInputElement>(null);

  const[loading , setLoading] =useState(false);
  const[loadind2 , setLoading2] =useState(false);

  const [cartId , setCartId]= useState<null | string>("");

  async function handelGettingUserCart(){
   const res = await getUsercart();
  //  const final  
  setCartId(res.cartId)

  }

  useEffect(()=>{
   
    handelGettingUserCart();

  },[])

   async function MakeCashOrder()
  {
    setLoading(true);
    const address = {
      details :detailsInput.current?.value || "",
      phone :phoneInput.current?.value || "",
      city :detailsInput.current?.value || "",
    }
    const isSuccessed = await CreatCashOrder(cartId  || "", address )
    setLoading(false);
    if(isSuccessed){
      successMessage("success payment");
      updateCartCount(0);
          window.location.href = "/cart"

    }
    else{
      errorMessage("somthing wrong");
    }

  }

   async function makeOnlineOrder(){
    setLoading2(true);

      const address = {
      details :detailsInput.current?.value || "",
      phone :phoneInput.current?.value || "",
      city :detailsInput.current?.value || "",
    }
    const res =await CreatCheckOutSession(cartId || "" , address )
    if(res == false)
    {
      errorMessage("somthing erorr")
    }
    else{
      window.open(res , "_self")
      
    }
    setLoading2(false);

  }
  return (
    <div className=" min-h-[80vh] flex justify-center items-center ">
    <div className='md:w-3/4 lg:w-1/2 mx-auto border p-5  rounded-2xl border-green-500'>
        <h1 className=' text-center text-green-500 text-4xl font-bold py-4'>Payment</h1>
      
        <div className="py-2">
            <Label className='pb-1'>city</Label>
            <Input type='text' ref={cityInput}/>
        </div>
        
        
        <div className="py-2">
            <Label className='pb-1'>phone</Label>
            <Input ref={phoneInput} type='tel'/>
        </div>
               
        
        <div className="py-2">
            <Label className='pb-1'>Details</Label>
            <Input ref={detailsInput} type='text'/>
        </div>

        <Button disabled={loading} onClick={MakeCashOrder} className='cursor-pointer mt-2 bg-green-500'>
          {
            loading ?
             <ClipLoader size={20} color="white" />
            :
            <>cash payment</>
          }
          </Button>

          <Button onClick={makeOnlineOrder} disabled={loadind2} className=' mx-3 cursor-pointer mt-2 bg-green-500'>
          {
            loadind2 ?
             <ClipLoader size={20} color="white" />
            :
            <>online payment</>
          }
          </Button>
    </div>

    </div>
  )
}
