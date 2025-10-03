'use server'
import { getUserToken } from "_/utils/utils";
import { CartResponsType } from "../_interfaces/Cart.types";


export async function getUsercart():Promise<CartResponsType>
 {

 const token =  await getUserToken()
    
    const res = await fetch("https://ecommerce.routemisr.com/api/v1/cart" ,{
        headers:{
          token: token as string,
        }, 
        cache :"force-cache" ,
        next :{tags :['getUserCart']}
      },
      
     )
  
     const final = await res.json();

    //  console.log("finalfinal22" , final);
    const { numOfCartItems  , data:{products , totalCartPrice} , cartId } = final

     return {numOfCartItems, products , totalCartPrice , cartId }
     
  
}