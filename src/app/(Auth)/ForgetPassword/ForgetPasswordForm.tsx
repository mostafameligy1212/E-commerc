"use client"
import React, { useState } from 'react'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '_/components/ui/form'
import { Input } from '_/components/ui/input';
import {  useForm } from 'react-hook-form'
import { Button } from '_/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { schema } from './ForgetPassword.schema';
import { ForgetPasswordType } from './ForgetPassword.type';
import { handelForgetPassword } from './ForgetPassword.actions';
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


export default function ForgetPasswordFrom() {

    const router =  useRouter()

    let [btnLogain, setBtnLogain] =useState(false)
    let RHFobj =useForm(
      {
        resolver : zodResolver(schema)
      }
    );
    let {control , handleSubmit} =RHFobj;

    async function mySubmit( data : ForgetPasswordType  ) 
    {
      console.log("12345")
      setBtnLogain(true);

     const res = await handelForgetPassword(data)
      setBtnLogain(false);

      // const resOutput = await handelLogin(data);
      if(res){
          successMessage("messgae sended in your email");
        // toast.success( "welcome 💚", {position : "top-center" , duration:3000 , icon : <GrStatusGood color='green' size={25}/> ,style:{textAlign:"center" , color :"green" , fontSize :"  font-size: 1.875rem"} } )
          // router.push("/");
          window.location.href = "/resetCode"
        }
      else
      {
        errorMessage("somthing Error ");
        // toast.error( "Email or password is not correct ", {position : "top-center" , duration:3000 , icon : <MdOutlineSmsFailed color='red' size={25}/> ,style:{textAlign:"center" , color :"red" , fontSize :"  font-size: 1.875rem"}   } )
      
      }
      
      
      // setBtnLogain(false);
    }

  return (
        <Form {...RHFobj}>



      <form onSubmit={handleSubmit(mySubmit)}>

  



          <FormField
    disabled={btnLogain}
    control={control}
    name="email"
    render={({field}) => (
      <FormItem>
        <FormLabel >
          Email : 
        </FormLabel>
        <FormControl>
          { /* Your form field */}
          <Input {...field}  type='email'/>
        </FormControl>
        <FormDescription />
        <FormMessage />
      </FormItem>
    )}
  />

    <Button disabled={btnLogain} className='  bg-green-500 mt-3 cursor-pointer dark:text-white hover:bg-black dark:hover:border dark:hover:border-white '>
    {btnLogain? 
    
    <ClipLoader size={20} color="white" />
    :
    <p>send code</p>
    }
  </Button>


    {/* <FormField
    disabled={btnLogain}
    control={control}
    name="password"
    render={({field}) => (
      <FormItem>
        <FormLabel >
          password : 
        </FormLabel>
        <FormControl>
          <Input {...field} type='password' />
        </FormControl>
        <FormDescription />
        <FormMessage />
      </FormItem>
    )}
  /> */}


   




      </form>


</Form>
  )
}
