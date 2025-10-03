"use server";

import { ForgetPasswordType } from "./ForgetPassword.type";


export async function handelForgetPassword(data:ForgetPasswordType) 
{
        const res = await fetch("https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords" ,{
          method :"post",
          body : JSON.stringify(data.email),
          headers :{
            "Content-Type" : "application/json"
          }
        })
        const FinalRes = await res.json();
        console.log("email forget" , FinalRes);
        if(FinalRes.statusMsg === 'fail'){
            return false;
        }
        else
        {
          return true;
        }
}