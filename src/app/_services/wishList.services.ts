'use server'
import { getUserToken } from "_/utils/utils";
import { WishResponsType } from "../_interfaces/Cart.types";



export async function getUserWishList(): Promise<WishResponsType> {
  const token = await getUserToken();
    
  const res = await fetch("https://ecommerce.routemisr.com/api/v1/wishlist", {
    headers: {
      token: token as string,
    }, 
    cache: "no-store"
  });
  
  const final = await res.json();
  console.log("wishList res", final);

  const { count, data } = final;

  return { 
    numOfItems: count, 
    products: data   
  };
}

