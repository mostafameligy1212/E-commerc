import React from 'react'
import { ProductCardPropes } from './ProductCard.type'
import { IoIosStar, IoIosStarHalf, IoIosStarOutline, IoMdStar } from 'react-icons/io'
import Link from 'next/link'
import AddProductBtn from '../AddProductBtn/AddProductBtn';
import BtnWishListA_R from "../AddProductBtn/BtnWishListA_R"

export default function ProductCard({product} : ProductCardPropes) {
  

      let starCount = product?.ratingsAverage;
    let emptyStar = 5 -  (starCount ? starCount: 0) ;
    let emptyStarCounter = emptyStar ;
    let counter = starCount;
    let arrEmptyStar =[];
    for(let i = 0  ;emptyStarCounter;i++){
      if(emptyStar<1){
        break;
      }
      emptyStar--;
      arrEmptyStar.push(emptyStar);

    }
    let arr =[];
    for(let i = 0 ;i<(counter ? counter: 0);i++ )
    {
      arr.push(starCount);
      if(starCount)
      {
        starCount--;
      }
      if(starCount && starCount<1 && starCount>0)
      {
        arr.push(starCount);
        break;
      }
      if(starCount==0)
      {
        break;
      }
    } 
  
  return (
        <div  className="border border-green-500 rounded-xl overflow-hidden p-2 bg-white dark:bg-transparent relative transition-all duration-500">
          <Link href={`/productdetails/${product.id}`}>
                  
                  <img src={product.imageCover} alt={product.title} className="w-full block rounded-2xl" />
                  <h2 className="line-clamp-1">{product.title}</h2>
                  <p className="text-green-500">{product.priceAfterDiscount ? 
                  <>
                  <span className='line-through text-red-500 px-3'>{product.price}</span>
                  <span >{product.priceAfterDiscount} EGP</span>
                  </>
                  :
                  <>
                  <span >{product.price} EGP</span>
                  </>
                  }</p>
                  <div className="flex justify-between items-center ">
                    <span className=" flex ">
                      {
                        arr.map((item)=>{

                          if(item && (item-1 < 0 )){
                              return <span>
                          <IoIosStarHalf size={20}  color='#F29B00' />

                              </span>
                          }
                          return <span>
                              <IoIosStar size={20} color='#F29B00' />

                          </span> ;
                        })
                      }
                      {
                        arrEmptyStar.map(()=>{
                          return <IoIosStarOutline size={20} color='#F29B00' />
                        })
                        
                      }
                    </span>
                    <span>{product.ratingsAverage}</span>

                  </div>

            
          </Link>

          <div className="  mt-2">
            
          <AddProductBtn id={product.id} />
          </div>
            <div className=" absolute top-3 right-3">
              <BtnWishListA_R id={product.id}/>
            </div>
        </div>
  )
}



