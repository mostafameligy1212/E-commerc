import { ProductType } from "../_interfaces/products";

 export async function getSpacificProduct (id : string) : Promise<ProductType | null> 
    {
        try {
            const reslut = await fetch(`https://ecommerce.routemisr.com/api/v1/products/${id}`);
            const data = await reslut.json();
            return data.data;
        } catch (error) {
            console.log(`error` ,error );
            return null
        }
 }