"use server"
import { getUserToken } from "_/utils/utils"
import { revalidatePath } from "next/cache"

export type ShippingAddressType = {
    details:string,
    phone:string,
    city:string,

}


export async function CreatCashOrder(cartId :string, shippingAddress : ShippingAddressType) {
    
   const token  = await getUserToken()

   const res = await  fetch(`https://ecommerce.routemisr.com/api/v1/orders/${cartId}`,{
        method:"post",
        body:JSON.stringify({
            shippingAddress
        }),
        headers :{
            "Content-Type" :"application/json",
            token : token as string
        }
    })

    const final = await res.json();
    // console.log("cash orders" , final);
    if(final.status === "success"){
        revalidatePath("/cart");
        return true
    }
    else{
        return false;
    }
    

}

export async function CreatCheckOutSession(cartId :string, shippingAddress : ShippingAddressType) {
    
   const token  = await getUserToken()

   const res = await  fetch(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:3000`,{
        method:"post",
        body:JSON.stringify({
            shippingAddress
        }),
        headers :{
            "Content-Type" :"application/json",
            token : token as string
        }
    })

    const final = await res.json();
    console.log("cash orders online" , final);
    if(final.status === "success"){
        revalidatePath("/cart");
        return final.session.url;
    }
    else{
        return false;
    }
}