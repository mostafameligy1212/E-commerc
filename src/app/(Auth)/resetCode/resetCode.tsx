"use client"
import React, { useState } from 'react'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '_/components/ui/form'
import { Input } from '_/components/ui/input';
import {  useForm } from 'react-hook-form'
import { Button } from '_/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { schema } from './resetCode.schema';
import { resetCodeType } from './resetCode.type';
import { handelresetCode } from './resetCode.actions';
import { ClipLoader } from 'react-spinners';
import { useRouter } from 'next/navigation';
import { errorMessage, successMessage } from '_/app/MessagesTost/Messages';

/*
{
    "name": "Ahmed Abd Al-Muti",
    "email":"ahmedmuttii4012@gmail.com",
    "password":"Ahmed@123",
    "rePassword":"Ahmed@123",
    "phone":"01010700701"
}
*/


export default function ResetCodeFrom() {

    const router =  useRouter()

    let [btnLogain, setBtnLogain] =useState(false)
    let RHFobj =useForm(
      {
        resolver : zodResolver(schema)
      }
    );
    let {control , handleSubmit} =RHFobj;

    async function mySubmit( data : resetCodeType  ) 
    {
      setBtnLogain(true);

     const res = await handelresetCode(data)
      setBtnLogain(false);

      // const resOutput = await handelLogin(data);
      if(res){
          successMessage("right code");
        // toast.success( "welcome 💚", {position : "top-center" , duration:3000 , icon : <GrStatusGood color='green' size={25}/> ,style:{textAlign:"center" , color :"green" , fontSize :"  font-size: 1.875rem"} } )
          // router.push("/");
          window.location.href = "/restPassword"
        }
      else
      {
        errorMessage("wrong code");
      
      }
      
      
    }

  return (
        <Form {...RHFobj}>



      <form onSubmit={handleSubmit(mySubmit)}>

  



          <FormField
    disabled={btnLogain}
    control={control}
    name="code"
    render={({field}) => (
      <FormItem>
        <FormLabel >
          code : 
        </FormLabel>
        <FormControl>
          { /* Your form field */}
          <Input {...field}  type='text'/>
        </FormControl>
        <FormDescription />
        <FormMessage />
      </FormItem>
    )}
  />





   


  <Button disabled={btnLogain} className=' bg-green-500 mt-3 cursor-pointer'>
    {btnLogain? 
    
    <ClipLoader size={20} color="white" />
    :
    <p>change</p>
    }
  </Button>

      </form>



</Form>
  )
}
