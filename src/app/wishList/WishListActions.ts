"use server";

import { getUserToken } from "_/utils/utils";
import { revalidatePath, revalidateTag } from "next/cache";



export async function removeItemFromWishList(id:string) {

    const token = await getUserToken()
    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}`,
        {
            method :"Delete",
            headers :{
                token: token as string
            }
        }
    )
    const final = await res.json();

    // console.log("remove res" , final);
    if(final.status == "success"){
        revalidatePath('/wishList')
        return true;
    }
    else{
        return false;
    }
}

export async function addToWishList(productId : string){
    
 const token = await getUserToken()

 if(token){
     const res =  await fetch("https://ecommerce.routemisr.com/api/v1/cart",{
         method :"post",
         body : JSON.stringify({productId}),
         headers :{
             "Content-Type" : "application/json",
             token : token as string
         }
     });
     const finalRes=  await res.json();
     console.log("finalRes" , finalRes);
     if(finalRes.status === "success")
     {
        // revalidatePath("/cart")
        // revalidateTag("getUserCart")
        // return finalRes.numOfCartItems;
        return true;
     }
     else{
        return false;
     }
     
}

}


