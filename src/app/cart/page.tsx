import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '_/components/ui/table'
import React from 'react'
import { Button } from '_/components/ui/button'
import { CartResponsType, itemType } from '../_interfaces/Cart.types'
import RemoveItemBtn from './RemoveItemBtn'
import ChangeCountBtn from './ChangeCountBtn'
import { getUsercart } from '../_services/Cart.servises'
import Link from 'next/link'




export default async  function CartPage() 
 {
 
  
async function HandelGetUserCart(): Promise<CartResponsType>
{
 const res =  await getUsercart()
 return res ;
}

const {products , totalCartPrice} = await HandelGetUserCart();

  return (
    <div className=''>
<div className="flex justify-around items-center  w-full pt-5   ">

    <div className="text-center text-xl md:text-2xl font-bold ">
    <h2>Total price : <span className='text-green-500'>{totalCartPrice}</span> </h2>
    {/* <h2>count of cart iteams : <span className='text-green-500'>{numOfCartItems}</span></h2> */}
  </div>
    <div className=" flex justify-between ">
      <Link href={"/cart/payment"}>
      <Button className='bg-green-500 cursor-pointer mx-5'>pay</Button>
      
      </Link>
      <Button className='bg-black cursor-pointer'>clear all</Button>
    </div>
</div>


    <div className="md:w-3/4 mx-auto">
      <Table>
  <TableCaption>A list of your recent invoices.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-1/2">Product</TableHead>
      <TableHead>Price</TableHead>
      <TableHead>Count</TableHead>
      <TableHead className="text-right">Actions</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
      {products.map((item : itemType)=>{

        return    <TableRow key={item._id} className=''>
      <TableCell className="font-medium">
        <h3>{item.product.title}</h3>
        <div className=" w-1/4 ">
        <img src={item.product.imageCover}  alt={item.product.title} className=' w-full block'/>

        </div>
      </TableCell>

      <TableCell className='text-xl'>{item.price}</TableCell>
      <TableCell className='text-xl'>{item.count}</TableCell>
      <TableCell className="text-right">
        <div className="text-center">

        <div className="flex gap-5 items-center mx-auto  justify-center">

          <ChangeCountBtn id={item.product.id} newCount ={item.count - 1} />
          <ChangeCountBtn isIncrement={true} id={item.product.id} newCount ={item.count + 1}/>
          {/* <Button className='cursor-pointer bg-green-500'>+</Button> */}
          {/* <Input className='p-0 ' value={item.count}/> */}
          {/* <Button className='cursor-pointer bg-red-500'>-</Button> */}
  
        </div>
        <RemoveItemBtn id={item.product.id}/>
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
