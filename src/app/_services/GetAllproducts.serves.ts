import { ProductType } from "../_interfaces/products";

 export async function GetAllProducts() : Promise<ProductType[]|null>
  {
    try {
          const data = await fetch("https://ecommerce.routemisr.com/api/v1/products" , {cache :"force-cache"});
    const reslut =  await data.json();
    console.log("reslut" , reslut.data);
    
    return reslut.data;
    } catch (error) {
      console.log("error" , error);
      return null
    }
  }