"use client"
import React, { useState } from 'react'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '_/components/ui/form'
import { Input } from '_/components/ui/input';
import {  useForm } from 'react-hook-form'
import { Button } from '_/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { schema } from './register.schema';
import { RegisterFormType } from './register.type';
import { handelRegister } from './register.actions';
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


export default function RegisterFrom() {

      const router =  useRouter()
  
    let [btnLogain, setBtnLogain] =useState(false)
    let RHFobj =useForm(
      {
        resolver : zodResolver(schema)
      }
    );
    let {control , handleSubmit} = RHFobj;

    async function mySubmit( data : RegisterFormType  ) 
    {
      setBtnLogain(true);
      const resOutput = await handelRegister(data);
      if(resOutput === true){
        successMessage( "congratulations created sucessfuly");
          // toast.success( "congratulations created sucessfuly", {position : "top-center" , duration:3000 , icon : <GrStatusGood color='green' size={25}/> ,style:{textAlign:"center" , color :"green" , fontSize :"  font-size: 1.875rem"} } )
          router.push("/login")
        }
      else
      {
        errorMessage("resOutput");
        // toast.error( resOutput, {position : "top-center" , duration:3000 , icon : <MdOutlineSmsFailed color='red' size={25}/> ,style:{textAlign:"center" , color :"red" , fontSize :"  font-size: 1.875rem"}   } )
      }
      setBtnLogain(false);

    }

  return (
        <Form {...RHFobj}>



      <form onSubmit={handleSubmit(mySubmit)}>

  

    <FormField
    disabled={btnLogain}
    control={control}
    name="name"
    render={({field}) => (
      <FormItem>
        <FormLabel >
          username : 
        </FormLabel>
        <FormControl>
          { /* Your form field */}
          <Input {...field} />
        </FormControl>
        <FormDescription />
        <FormMessage />
      </FormItem>
    )}
  />

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
          <Input {...field} type='password' />
        </FormControl>
        <FormDescription />
        <FormMessage />
      </FormItem>
    )}
  />


    <FormField
    disabled={btnLogain}
    control={control}
    name="rePassword"
    render={({field}) => (
      <FormItem>
        <FormLabel >
          Comfirm Password : 
        </FormLabel>
        <FormControl>
          { /* Your form field */}
          <Input {...field} type='password' />
        </FormControl>
        <FormDescription />
        <FormMessage />
      </FormItem>
    )}
  />


    <FormField
    disabled={btnLogain}
    control={control}
    name="phone"
    render={({field}) => (
      <FormItem>
        <FormLabel >
         User Phone : 
        </FormLabel>
        <FormControl>
          { /* Your form field */}
          <Input {...field} type='tel' />
        </FormControl>
        <FormDescription />
        <FormMessage />
      </FormItem>
    )}
  />

  <Button disabled={btnLogain} className=' dark:text-white hover:bg-black dark:hover:border dark:hover:border-white bg-green-500 mt-3 cursor-pointer'>
    {btnLogain? 
    
    <ClipLoader size={20} color="white" />
    :
    <p>Register</p>
    }
  </Button>

      </form>



</Form>
  )
}
