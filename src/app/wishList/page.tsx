import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '_/components/ui/table'
import { getUserToken } from '_/utils/utils'
import { headers } from 'next/headers'
import React from 'react'
import { ProductType } from '../_interfaces/products'
import { Button } from '_/components/ui/button'
import { Input } from '_/components/ui/input'
import { getUsercart } from '../_services/Cart.servises'
import { itemType, WishListProductLite, WishResponsType } from '../_interfaces/Cart.types'
// import RemoveItemBtn from './RemoveItemBtn'
import { getUserWishList } from '../_services/wishList.services'
import RemoveItemBtn from './RemoveItemBtn'




export default async  function CartPage() 
 {
 
  
async function HandelGetUserWishList(): Promise<WishResponsType>
{
 const res =  await getUserWishList()
 return res ;
}

const {  products  } = await HandelGetUserWishList();

  return (
    <div className=''>
<div className="flex justify-around items-center  w-full pt-5   ">

    <div className="text-center text-xl md:text-2xl font-bold ">
    {/* <h2>Total price : <span className='text-green-500'>{}</span> </h2> */}
    {/* <h2>count of cart iteams : <span className='text-green-500'>{numOfCartItems}</span></h2> */}
  </div>

</div>


    <div className="md:w-3/4 mx-auto">
      <Table>
  <TableCaption>A list of your recent invoices.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-1/2">Product</TableHead>
      <TableHead>Price</TableHead>
      <TableHead className="text-right">Actions</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
      {products?.map((item : WishListProductLite)=>{

        return    <TableRow key={item.id} className=''>
      <TableCell className="font-medium">
        {/* <h3>{item.product.title}</h3> */}
        <div className=" w-1/4 ">
        <img src={item.imageCover||" "}  alt={item.title||" "} className=' w-full block rounded-2xl'/>

        </div>
      </TableCell>

      <TableCell className='text-xl text-green-500'>{item.price}</TableCell>
      <TableCell className="text-right">
        <div className="text-center">

        <div className="flex gap-5 items-center mx-auto  justify-center">

          {/* <ChangeCountBtn id={item.product.id} newCount ={item.count - 1} />
          <ChangeCountBtn isIncrement={true} id={item.product.id} newCount ={item.count + 1}/> */}
          {/* <Button className='cursor-pointer bg-green-500'>+</Button> */}
          {/* <Input className='p-0 ' value={item.count}/> */}
          {/* <Button className='cursor-pointer bg-red-500'>-</Button> */}
  
        </div>
        <RemoveItemBtn id={item.id}/>
        </div>
      </TableCell>
    </TableRow>
      })}
  </TableBody>
</Table>
    </div>
    {/* {products.map(products=> <h2> product </h2>)} */}

    </div>
  )
}
