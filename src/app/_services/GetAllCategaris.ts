import { CategoryType } from "../_interfaces/products";

export async  function getCategarysImages():Promise<null|CategoryType[]>
{

    try {
     let res =  await fetch("https://ecommerce.routemisr.com/api/v1/categories");
     let reslut = await res.json();
     console.log(reslut.data);
     
     return reslut.data;
    } catch (error) {
        console.log("error " , error);
        return null;
    }
}