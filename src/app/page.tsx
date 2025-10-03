import ProductCard from "./_Component/ProductCard/ProductCard";
import { GetAllProducts } from "./_services/GetAllproducts.serves";
import HomeSlider from "./_Component/HomeSlider/HomeSlider";
import { lazy, Suspense } from "react";
import { ClipLoader } from "react-spinners";

const CategarysImages =  lazy(()=>{
  return import("./_Component/CategarysImages/CategarysImages")
})


export default async function Home() {
  const  allProducts = await GetAllProducts();

  
  
  return (
    <>

    <HomeSlider/>

     <Suspense  fallback={<div className=" py-4 text-center">
      <ClipLoader color="green" size={30} />
     </div>}>

      <div className=" hidden lg:block">
      <CategarysImages />

      </div>
     </Suspense>

    <div className="text-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 p-10 ">
        {
          allProducts?.map((product)=>{
            return <ProductCard key={product.id} product={product} />

          })
        }
    </div>
    </>
  );
}
