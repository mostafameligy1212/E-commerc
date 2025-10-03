"use client"
import React, { useState } from 'react'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '_/components/ui/form'
import { Input } from '_/components/ui/input';
import {  useForm } from 'react-hook-form'
import { Button } from '_/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { schema } from './Login.schema';
import { LoginFormType } from './Login.type';
import { ClipLoader } from 'react-spinners';
import { useRouter } from 'next/navigation';
import {signIn} from "next-auth/react"
import { errorMessage, successMessage } from '_/app/MessagesTost/Messages';
import Link from 'next/link';

/*
{
    "name": "Ahmed Abd Al-Muti",
    "email":"ahmedmuttii4012@gmail.com",
    "password":"Ahmed@123",
    "rePassword":"Ahmed@123",
    "phone":"01010700701"
}
*/


export default function LoginFrom() {

    const router =  useRouter()

    let [btnLogain, setBtnLogain] =useState(false)
    let RHFobj =useForm(
      {
        resolver : zodResolver(schema)
      }
    );
    let {control , handleSubmit} =RHFobj;

    async function mySubmit( data : LoginFormType  ) 
    {
      setBtnLogain(true);

     const res = await signIn("credentials" , {...data , redirect : false } )
      setBtnLogain(false);

     
      // const resOutput = await handelLogin(data);
      if(res?.ok){
          successMessage("welcome 💚");
        // toast.success( "welcome 💚", {position : "top-center" , duration:3000 , icon : <GrStatusGood color='green' size={25}/> ,style:{textAlign:"center" , color :"green" , fontSize :"  font-size: 1.875rem"} } )
          // router.push("/");
          window.location.href = "/"
        }
      else
      {
        errorMessage("Email or password is not correct ");
        // toast.error( "Email or password is not correct ", {position : "top-center" , duration:3000 , icon : <MdOutlineSmsFailed color='red' size={25}/> ,style:{textAlign:"center" , color :"red" , fontSize :"  font-size: 1.875rem"}   } )
      
      }
      
      
      // setBtnLogain(false);
    }

  return (
        <Form {...RHFobj}>



      <form className='' onSubmit={handleSubmit(mySubmit)}>

  



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


    <FormField
    disabled={btnLogain}
    control={control}
    name="password"
    render={({field}) => (
      <FormItem>
        <FormLabel >
          password : 
        </FormLabel>
        <FormControl>
          { /* Your form field */}
          <Input  className='' {...field} type='password' />
        </FormControl>
        <FormDescription />
        <FormMessage />
      </FormItem>
    )}
  />


   


  <Button disabled={btnLogain} className=' bg-green-500 mt-3 cursor-pointer dark:text-white hover:bg-black dark:hover:border dark:hover:border-white '>
    {btnLogain? 
    
    <ClipLoader size={20} color="white" />
    :
    <p>Login</p>
    }
  </Button>

      </form>

    <div className=" pt-5">
    <Link className='   text-green-500 underline  ' href="/ForgetPassword">ForgetPassword</Link>
 
    </div>
</Form>
  )
}
