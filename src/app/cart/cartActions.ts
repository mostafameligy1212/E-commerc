"use server";

import { getUserToken } from "_/utils/utils";
import { revalidatePath, revalidateTag } from "next/cache";

export async function addToCart(productId : string){
// export async function addToCart(){
    
 const token =    await getUserToken()

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
        revalidateTag("getUserCart")
        return finalRes.numOfCartItems;
     }
     else{
        return false;
     }
     
}

}


export async function removeItemFromCart(id:string) {

    const token = await getUserToken()
    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
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
        revalidatePath('/cart')
        return final.numOfCartItems;
    }
    else{
        return null;
    }
}


export async function changeCount(id:string , count :number ) {

    const token = await getUserToken()
    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
        {
            method :"put",
            headers :{
                token: token as string,
                "Content-Type" :"application/json",
                
            },
            body:JSON.stringify({count })
        }
    )
    const final = await res.json();

    console.log("change final res" , final);
    if(final.status == "success"){
        revalidatePath('/cart')
        return final.numOfCartItems;
    }
    else{
        return null;
    }
}


export async function addToWishList(productId : string){
    
 const token = await getUserToken()
//  console.log("my token" , token);
 

 if(token){
     const res =  await fetch("https://ecommerce.routemisr.com/api/v1/wishlist",{
         method :"post",
         body : JSON.stringify({productId}),
         headers :{
             "Content-Type" : "application/json",
             token : token as string
         }
     });
     const finalRes=  await res.json();
     console.log("finalRes wishList" , finalRes);
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